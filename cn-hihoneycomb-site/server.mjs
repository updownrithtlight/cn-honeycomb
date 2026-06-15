import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";

const root = fileURLToPath(new URL("./dist/", import.meta.url));
const port = Number(process.env.PORT || 4321);
const host = process.env.HOST || "0.0.0.0";
const maxBodyBytes = 12 * 1024 * 1024;
const maxFileBytes = 5 * 1024 * 1024;
const maxTotalFileBytes = 8 * 1024 * 1024;
const maxFiles = 3;
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const rateLimits = new Map();

const allowedExtensions = new Set([".pdf", ".dwg", ".dxf", ".jpg", ".jpeg", ".png", ".webp", ".zip"]);
const allowedMimeTypes = new Set([
  "application/pdf",
  "application/acad",
  "application/x-acad",
  "application/autocad_dwg",
  "application/dwg",
  "application/x-dwg",
  "image/vnd.dwg",
  "application/dxf",
  "application/x-dxf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/zip",
  "application/x-zip-compressed",
  "application/octet-stream"
]);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

const securityHeaders = {
  "Content-Security-Policy":
    "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://www.googletagmanager.com https://hm.baidu.com; style-src 'self' 'unsafe-inline'; frame-src https://challenges.cloudflare.com; connect-src 'self' https://challenges.cloudflare.com https://www.google-analytics.com https://region1.google-analytics.com https://hm.baidu.com; font-src 'self' data:; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "X-Frame-Options": "DENY"
};

function sendJson(res, statusCode, payload, extraHeaders = {}) {
  res.writeHead(statusCode, {
    ...securityHeaders,
    ...extraHeaders,
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function getClientIp(req) {
  return (
    req.headers["cf-connecting-ip"] ||
    String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket.remoteAddress ||
    "unknown"
  );
}

function isRateLimited(ip) {
  const now = Date.now();
  const existing = rateLimits.get(ip);
  if (!existing || now - existing.startedAt > rateLimitWindowMs) {
    rateLimits.set(ip, { startedAt: now, count: 1 });
    return false;
  }
  existing.count += 1;
  return existing.count > rateLimitMax;
}

async function readJsonBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBodyBytes) throw Object.assign(new Error("请求内容超过大小限制。"), { statusCode: 413 });
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw Object.assign(new Error("请求格式无效。"), { statusCode: 400 });
  }
}

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function validateInquiry(input) {
  const inquiry = {
    contactName: clean(input.contactName, 80),
    company: clean(input.company, 120),
    phone: clean(input.phone, 40),
    email: clean(input.email, 160),
    purpose: clean(input.purpose, 200),
    parameters: clean(input.parameters, 500),
    quantity: clean(input.quantity, 80),
    message: clean(input.message, 3000),
    website: clean(input.website, 200),
    privacyConsent: input.privacyConsent === true,
    turnstileToken: clean(input.turnstileToken, 2048),
    attachments: Array.isArray(input.attachments) ? input.attachments : []
  };

  if (inquiry.website) return { spam: true, inquiry };
  if (inquiry.contactName.length < 2) throw Object.assign(new Error("请填写联系人。"), { statusCode: 400 });
  if (!inquiry.phone && !inquiry.email) throw Object.assign(new Error("电话和邮箱至少填写一项。"), { statusCode: 400 });
  if (inquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email)) {
    throw Object.assign(new Error("电子邮箱格式无效。"), { statusCode: 400 });
  }
  if (inquiry.purpose.length < 2) throw Object.assign(new Error("请填写产品用途。"), { statusCode: 400 });
  if (inquiry.message.length < 5) throw Object.assign(new Error("请填写需求说明。"), { statusCode: 400 });
  if (!inquiry.privacyConsent) throw Object.assign(new Error("请先同意隐私政策。"), { statusCode: 400 });
  if (inquiry.attachments.length > maxFiles) throw Object.assign(new Error(`附件最多 ${maxFiles} 个。`), { statusCode: 400 });

  let totalFileBytes = 0;
  inquiry.attachments = inquiry.attachments.map((attachment) => {
    const filename = clean(attachment.filename, 180).replace(/[\\/\0]/g, "_");
    const type = clean(attachment.type, 100).toLowerCase() || "application/octet-stream";
    const extension = extname(filename).toLowerCase();
    if (!filename || !allowedExtensions.has(extension) || !allowedMimeTypes.has(type)) {
      throw Object.assign(new Error(`不支持附件格式：${filename || "未命名文件"}`), { statusCode: 400 });
    }
    const content = clean(attachment.content, 12_000_000);
    const buffer = Buffer.from(content, "base64");
    if (!buffer.length || buffer.length > maxFileBytes) {
      throw Object.assign(new Error(`附件大小无效：${filename}`), { statusCode: 400 });
    }
    totalFileBytes += buffer.length;
    return { filename, type, content: buffer.toString("base64") };
  });
  if (totalFileBytes > maxTotalFileBytes) {
    throw Object.assign(new Error("附件总大小不能超过 8MB。"), { statusCode: 400 });
  }
  return { spam: false, inquiry };
}

async function validateTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    if (process.env.NODE_ENV === "production" && process.env.ALLOW_INQUIRY_WITHOUT_CAPTCHA !== "true") {
      throw Object.assign(new Error("询价服务尚未完成安全配置，请暂时使用电话或邮箱联系。"), { statusCode: 503 });
    }
    return;
  }
  if (!token) throw Object.assign(new Error("请完成人机验证。"), { statusCode: 400 });

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token, remoteip: ip })
  });
  const result = await response.json();
  if (!result.success) throw Object.assign(new Error("人机验证失败，请刷新后重试。"), { statusCode: 400 });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[character];
  });
}

function createInquiryId() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  return `HS-${date}-${randomBytes(4).toString("hex").toUpperCase()}`;
}

async function sendInquiryEmail(inquiry, inquiryId) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM_EMAIL;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (!apiKey || !from || !to) {
    throw Object.assign(new Error("询价邮件服务尚未配置，请暂时使用电话或邮箱联系。"), { statusCode: 503 });
  }

  const fields = [
    ["询盘编号", inquiryId],
    ["联系人", inquiry.contactName],
    ["公司", inquiry.company],
    ["电话", inquiry.phone],
    ["邮箱", inquiry.email],
    ["产品用途", inquiry.purpose],
    ["关键参数", inquiry.parameters],
    ["数量", inquiry.quantity],
    ["需求说明", inquiry.message]
  ];
  const text = fields.map(([label, value]) => `${label}：${value || "未填写"}`).join("\n");
  const html = `<h1>恒实蜂窝网站询盘</h1><table>${fields
    .map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value || "未填写")}</td></tr>`)
    .join("")}</table>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": inquiryId
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email || undefined,
      subject: `[${inquiryId}] ${inquiry.company || inquiry.contactName} - ${inquiry.purpose}`,
      text,
      html,
      attachments: inquiry.attachments.map(({ filename, content }) => ({ filename, content })),
      tags: [{ name: "source", value: "cn_hihoneycomb" }]
    })
  });
  if (!response.ok) {
    console.error("Resend delivery failed", response.status, await response.text());
    throw Object.assign(new Error("询价暂时未能送达，请通过电话或邮箱联系。"), { statusCode: 502 });
  }
}

async function handleInquiry(req, res) {
  const ip = getClientIp(req);
  const origin = req.headers.origin;
  const expectedOrigin = process.env.PUBLIC_SITE_ORIGIN || "https://cn.hihoneycomb.com";
  if (process.env.NODE_ENV === "production" && origin && origin !== expectedOrigin) {
    return sendJson(res, 403, { message: "请求来源无效。" });
  }
  if (isRateLimited(ip)) {
    return sendJson(res, 429, { message: "提交过于频繁，请稍后再试。" }, { "Retry-After": "600" });
  }

  try {
    const input = await readJsonBody(req);
    const { spam, inquiry } = validateInquiry(input);
    if (spam) return sendJson(res, 200, { inquiryId: createInquiryId() });
    await validateTurnstile(inquiry.turnstileToken, ip);
    const inquiryId = createInquiryId();
    await sendInquiryEmail(inquiry, inquiryId);
    return sendJson(res, 200, { inquiryId });
  } catch (error) {
    const statusCode = Number(error?.statusCode) || 500;
    if (statusCode >= 500) console.error(error);
    return sendJson(res, statusCode, { message: error instanceof Error ? error.message : "提交失败。" });
  }
}

async function serveStatic(req, res) {
  const requestUrl = new URL(req.url || "/", "http://localhost");
  let pathname = decodeURIComponent(requestUrl.pathname);
  if (pathname.endsWith("/")) pathname += "index.html";
  const relativePath = normalize(pathname).replace(/^([/\\])+/, "");
  const filePath = resolve(root, relativePath);
  const pathFromRoot = relative(resolve(root), filePath);
  if (pathFromRoot.startsWith("..") || pathFromRoot.includes(":")) {
    return sendJson(res, 400, { message: "无效路径。" });
  }

  let target = filePath;
  try {
    const fileStats = await stat(target);
    if (fileStats.isDirectory()) target = join(target, "index.html");
    const content = await readFile(target);
    const extension = extname(target).toLowerCase();
    const isAsset = target.includes(`${join("dist", "_astro")}`) || /\.(?:css|js|mjs|svg|png|jpe?g|webp|ico|woff2?)$/i.test(target);
    res.writeHead(200, {
      ...securityHeaders,
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
      "Cache-Control": isAsset ? "public, max-age=31536000, immutable" : "no-cache"
    });
    if (req.method === "HEAD") return res.end();
    return res.end(content);
  } catch {
    try {
      const content = await readFile(join(root, "404.html"));
      res.writeHead(404, {
        ...securityHeaders,
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache"
      });
      return res.end(req.method === "HEAD" ? undefined : content);
    } catch {
      return sendJson(res, 404, { message: "Not found" });
    }
  }
}

const server = createServer(async (req, res) => {
  if (req.headers["x-forwarded-proto"] === "https" || process.env.FORCE_HTTPS === "true") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }

  if (req.method === "GET" && req.url === "/api/health") {
    return sendJson(res, 200, { status: "ok" });
  }
  if (req.method === "POST" && req.url === "/api/inquiries") {
    return handleInquiry(req, res);
  }
  if (!["GET", "HEAD"].includes(req.method || "")) {
    return sendJson(res, 405, { message: "Method not allowed" }, { Allow: "GET, HEAD, POST" });
  }
  return serveStatic(req, res);
});

server.listen(port, host, () => {
  console.log(`cn.hihoneycomb.com server listening on http://${host}:${port}`);
});

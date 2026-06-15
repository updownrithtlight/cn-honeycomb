import { access, readdir, readFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";

const dist = resolve("dist");
const domain = "https://cn.hihoneycomb.com/";
const failures = [];
const titles = new Map();
const descriptions = new Map();

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    if (entry.isFile() && entry.name.endsWith(".html")) files.push(path);
  }
  return files;
}

function matchOne(html, expression) {
  return html.match(expression)?.[1]?.trim() ?? "";
}

function addUnique(map, value, route, label) {
  if (!value) {
    failures.push(`${route}: missing ${label}`);
    return;
  }
  const existing = map.get(value);
  if (existing) failures.push(`${route}: duplicate ${label} also used by ${existing}`);
  else map.set(value, route);
}

function routeFor(file) {
  return `/${relative(dist, file).split(sep).join("/").replace(/index\.html$/, "")}`;
}

async function checkInternalLinks(html, file, route) {
  const links = [...html.matchAll(/href=["']([^"'#?]+)[^"']*["']/gi)].map((match) => match[1]);
  for (const href of links) {
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    if (href === "/sitemap.xml" || href === "/robots.txt") continue;
    const local = href.endsWith("/") ? join(dist, href, "index.html") : join(dist, href);
    try {
      await access(local);
    } catch {
      failures.push(`${route}: broken internal link ${href}`);
    }
  }
}

const files = await walk(dist);
for (const file of files) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  const is404 = route === "/404.html";
  const title = matchOne(html, /<title>([\s\S]*?)<\/title>/i);
  const description = matchOne(html, /<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const canonical = matchOne(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;

  if (!is404) {
    addUnique(titles, title, route, "title");
    addUnique(descriptions, description, route, "description");
    if (h1Count !== 1) failures.push(`${route}: expected one h1, found ${h1Count}`);
    if (!canonical.startsWith(domain)) failures.push(`${route}: invalid canonical ${canonical || "(missing)"}`);
  }

  const images = [...html.matchAll(/<img\b([^>]*)>/gi)];
  for (const [, attributes] of images) {
    if (!/\balt=["'][^"']*["']/i.test(attributes)) failures.push(`${route}: image missing alt`);
  }

  if (/占位图|备案号预留|hshoneycomb\.cn/i.test(html)) failures.push(`${route}: contains banned placeholder or reference text`);
  await checkInternalLinks(html, file, route);
}

const sitemap = await readFile(join(dist, "sitemap.xml"), "utf8");
const sitemapCount = (sitemap.match(/<url>/g) || []).length;
const indexCount = files.filter((file) => file.endsWith(`${sep}index.html`)).length;
if (sitemapCount !== indexCount) failures.push(`sitemap: expected ${indexCount} URLs, found ${sitemapCount}`);

if (failures.length) {
  console.error(`QA failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`QA passed: ${files.length} HTML files, ${sitemapCount} sitemap URLs.`);

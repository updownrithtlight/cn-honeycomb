import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = new URL("../dist/", import.meta.url);
const domain = "https://cn.hihoneycomb.com/";

async function listHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listHtml(path));
    if (entry.isFile() && entry.name === "index.html") files.push(path);
  }
  return files;
}

const rootPath = root.pathname.startsWith("/") && /^[A-Za-z]:/.test(root.pathname.slice(1))
  ? root.pathname.slice(1)
  : root.pathname;
const pages = await listHtml(rootPath);
const urls = [];

for (const file of pages) {
  const html = await readFile(file, "utf8");
  if (/<meta\s+name=["']robots["'][^>]+noindex/i.test(html)) continue;
  const route = relative(rootPath, file).split(sep).join("/").replace(/index\.html$/, "");
  urls.push(new URL(route, domain).href);
}

urls.sort((a, b) => a.localeCompare(b));
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
  "</urlset>",
  ""
].join("\n");

await writeFile(new URL("sitemap.xml", root), xml, "utf8");
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);

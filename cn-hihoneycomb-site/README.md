# cn.hihoneycomb.com 中文站

恒实蜂窝中文独立站，目标域名：https://cn.hihoneycomb.com/

## 技术栈

- Astro 静态站
- 每个页面输出独立 HTML
- Nginx 托管静态文件

## 本地开发

```bash
npm install
npm run dev
```

默认访问：

```txt
http://localhost:4321/
```

## 构建

```bash
npm run build
```

构建产物输出到：

```txt
dist/
```

## 本地预览

```bash
npm run preview
```

## Docker 部署

构建并启动：

```bash
docker compose up -d --build
```

服务名：

```txt
cn-hihoneycomb-site
```

本地端口示例：

```txt
http://服务器IP:8088/
```

停止服务：

```bash
docker compose down
```

## Nginx 部署

如果不使用 Docker，可在服务器上执行：

```bash
npm ci
npm run build
```

然后将 `dist/` 目录内容同步到 Nginx 站点目录，例如：

```txt
/var/www/cn-hihoneycomb-site/
```

Nginx 可参考项目根目录的 `nginx.conf`。该配置包含：

- `server_name cn.hihoneycomb.com;`
- 静态文件托管
- gzip
- HTML 不长期强缓存
- CSS / JS / images 长缓存
- `/404.html` 作为 404 页面
- 不把所有页面重写到 `index.html`

非 Docker 部署时，把 `root` 改为：

```nginx
root /var/www/cn-hihoneycomb-site;
```

## DNS 解析

需要将：

```txt
cn.hihoneycomb.com
```

解析到服务器 IP。

如果使用 Cloudflare Pages、Vercel、Netlify 等静态托管平台，则在对应平台绑定 `cn.hihoneycomb.com`，并按平台要求添加 CNAME 或 A 记录。

## HTTPS 证书

服务器部署建议使用 Nginx + Certbot：

```bash
certbot --nginx -d cn.hihoneycomb.com
```

静态托管平台通常自动提供 HTTPS。也可以使用 Cloudflare 代理提供 HTTPS 和缓存能力。

## 上线后 SEO 提交

上线后检查：

- https://cn.hihoneycomb.com/robots.txt
- https://cn.hihoneycomb.com/sitemap.xml
- 每个页面 canonical 是否指向当前中文 URL
- hreflang 是否包含 `zh-CN`、`en`、`x-default`

然后将 sitemap 提交到可用的搜索引擎站长平台。

## 需要人工替换内容

- 当前占位图只用于版式搭建，后续需要替换为真实产品、工艺、车间或应用图片。
- 不要抓取英文官网或中文参考站图片。
- 联系方式、备案号、证书、检测资料、客户案例等必须以真实资料为准；没有资料时不要编造。

## 设计系统

- 主色：工业蓝 `#0B2A4A`
- 强调色：琥珀色 `#F59E0B`
- 背景：白色与浅灰 `#F5F7FA`
- 风格：工业制造、金属质感、技术可信、适合 B2B 采购和工程师阅读

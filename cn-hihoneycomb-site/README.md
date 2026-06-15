# cn.hihoneycomb.com 中文站

恒实蜂窝中文独立站，目标域名：https://cn.hihoneycomb.com/

## 技术栈

- Astro 静态页面生成
- Node.js 静态服务与询盘 API
- Resend 邮件投递（运行时配置）
- Cloudflare Turnstile 防机器人验证（运行时配置）
- Nginx 可作为 HTTPS 反向代理

## 本地开发

```bash
npm install
npm run dev
```

默认访问 `http://localhost:4321/`。

## 构建与检查

```bash
npm run build
npm run qa
npm audit
```

构建产物在 `dist/`。`npm run qa` 检查标题与描述唯一性、单一 H1、canonical、图片 alt、内部链接、sitemap 和禁止出现的占位文本。

## 生产运行

```bash
npm run build
npm start
```

`npm start` 提供静态页面、正确的 404 状态、`/api/health` 和 `/api/inquiries`。

## 环境变量

复制 `.env.example` 为本地 `.env`，由部署环境注入必要值：

- `RESEND_API_KEY`
- `INQUIRY_FROM_EMAIL`
- `INQUIRY_TO_EMAIL`
- `PUBLIC_TURNSTILE_SITE_KEY`（构建时）
- `TURNSTILE_SECRET_KEY`（运行时）

未配置邮件或生产环境未配置人机验证时，询盘接口会明确返回不可用，不会伪造提交成功。

可选统计配置：

- `PUBLIC_ANALYTICS_PROVIDER=ga4` 或 `baidu`
- `PUBLIC_ANALYTICS_ID`

统计脚本只有访客同意后才加载，事件不包含表单正文、联系方式或附件。

## Docker

```bash
docker compose up -d --build
```

服务映射到 `http://服务器IP:8088/`。容器直接运行 Node 服务；外部 Nginx 可参考 `nginx.conf` 反向代理到 `127.0.0.1:4321`。

## DNS 与 HTTPS

将 `cn.hihoneycomb.com` 解析到服务器 IP，并由 Nginx、云平台或 CDN 配置 HTTPS。Nginx + Certbot 示例：

```bash
certbot --nginx -d cn.hihoneycomb.com
```

## 上线后 SEO 提交

检查：

- https://cn.hihoneycomb.com/robots.txt
- https://cn.hihoneycomb.com/sitemap.xml
- 每页 canonical 是否指向当前中文 URL
- 首页 hreflang 是否包含真实对应的 `zh-CN`、`en`、`x-default`

然后向可用的搜索引擎站长平台提交 sitemap。

## 上线前人工事项

- 补齐真实产品、工艺、车间和应用图片；当前结构示意图不能代替实物证据。
- 不抓取英文官网或中文参考站图片。
- 证书、检测资料、客户案例必须完成证据核验，见 `docs/CLAIMS_VERIFICATION.md`。
- 完成域名 DNS、HTTPS、Turnstile、Resend 发信域名和真实收件测试。

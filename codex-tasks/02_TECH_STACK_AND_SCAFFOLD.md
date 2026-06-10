# 02 技术选型与项目基础搭建

在执行本步骤前，请先完成 `01_REFERENCE_AUDIT_AND_STYLE.md`。

## 目标

创建 `cn.hihoneycomb.com` 中文站基础项目结构，保证可本地运行、可静态构建、可部署到 Nginx。

## 先检查当前目录

检查：package.json、src、app、pages、public、astro.config、next.config、vite.config、Dockerfile、docker-compose.yml。

不要删除现有代码，不要覆盖重要配置。

## 推荐技术

优先：Astro 静态站；其次 Next.js 静态导出；环境限制时用纯 HTML + CSS + JS。

选择标准：SEO 友好、每页独立 HTML、静态输出、易部署、后续容易加产品和文章、Codex 修改成本低。

## 建议目录

如果创建独立目录，请使用：

```txt
cn-hihoneycomb-site/
├── public/
│   ├── images/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
└── README.md
```

## 预留 URL

```txt
/
/products/
/emi-shielded-honeycomb-vent/
/waveguide-honeycomb-vent/
/stainless-steel-honeycomb-core/
/copper-honeycomb-core/
/aluminum-honeycomb-core/
/airflow-straightener/
/wind-tunnel-honeycomb/
/honeycomb-seal/
/emi-shielded-glass/
/custom-metal-honeycomb/
/applications/
/about/
/contact/
/articles/
```

## 基础组件

创建或预留：Header、Footer、LanguageSwitcher、Breadcrumb、Hero、ProductCard、ApplicationCard、ParameterTable、FAQ、CTASection、ContactBlock、SEOHead。

## 输出

输出：采用的技术栈、创建的目录、创建的基础文件、本地运行命令、构建命令、下一步建议。

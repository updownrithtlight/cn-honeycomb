# 07 技术 SEO：Meta、Sitemap、Robots、Hreflang、结构化数据

在执行本步骤前，请先完成 `06_CREATE_PRODUCT_PAGES.md`。

## 目标

补齐 `cn.hihoneycomb.com` 全站技术 SEO 文件和页面 head 信息。

## 域名

中文站：
```txt
https://cn.hihoneycomb.com/
```

英文官网：
```txt
https://www.hihoneycomb.com/
```

## 每个页面必须有

唯一 title、唯一 meta description、canonical 指向自己、Open Graph、Twitter Card、hreflang、一个 H1、面包屑、JSON-LD、图片 alt。

## canonical

每个页面 canonical 指向中文站当前页面自己。例如：

```html
<link rel="canonical" href="https://cn.hihoneycomb.com/emi-shielded-honeycomb-vent/" />
```

不要 canonical 到英文站，也不要 canonical 到 hshoneycomb.cn。

## hreflang

每个页面加入：

```html
<link rel="alternate" hreflang="zh-CN" href="当前中文页面URL" />
<link rel="alternate" hreflang="en" href="对应英文页面URL或英文首页" />
<link rel="alternate" hreflang="x-default" href="https://www.hihoneycomb.com/" />
```

如果找不到对应英文页面，英文链接先指向英文首页。

## robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://cn.hihoneycomb.com/sitemap.xml
```

## sitemap.xml

包含：

```txt
https://cn.hihoneycomb.com/
https://cn.hihoneycomb.com/products/
https://cn.hihoneycomb.com/emi-shielded-honeycomb-vent/
https://cn.hihoneycomb.com/waveguide-honeycomb-vent/
https://cn.hihoneycomb.com/stainless-steel-honeycomb-core/
https://cn.hihoneycomb.com/copper-honeycomb-core/
https://cn.hihoneycomb.com/aluminum-honeycomb-core/
https://cn.hihoneycomb.com/airflow-straightener/
https://cn.hihoneycomb.com/wind-tunnel-honeycomb/
https://cn.hihoneycomb.com/honeycomb-seal/
https://cn.hihoneycomb.com/emi-shielded-glass/
https://cn.hihoneycomb.com/custom-metal-honeycomb/
https://cn.hihoneycomb.com/applications/
https://cn.hihoneycomb.com/about/
https://cn.hihoneycomb.com/contact/
https://cn.hihoneycomb.com/articles/
```

## JSON-LD

添加 Organization、BreadcrumbList，产品页添加 Product。Product 不要填虚假价格、库存、评分、评论。

Organization URL 必须是：

```txt
https://cn.hihoneycomb.com/
```

sameAs 包含英文官网：

```txt
https://www.hihoneycomb.com/
```

## 404 页面

创建中文 404 页面：页面不存在、返回首页、查看产品中心、联系我们。

## 给英文官网服务商的中文入口代码

```html
<nav class="language-switcher" aria-label="Language switcher">
  <a href="https://www.hihoneycomb.com/" hreflang="en" lang="en">English</a>
  <span>|</span>
  <a href="https://cn.hihoneycomb.com/" hreflang="zh-CN" lang="zh-CN">中文</a>
</nav>
```

## 输出

输出：robots 路径、sitemap 路径、404 路径、canonical 检查、hreflang 检查、结构化数据类型、服务商入口代码。

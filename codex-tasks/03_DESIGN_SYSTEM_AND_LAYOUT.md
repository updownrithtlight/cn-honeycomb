# 03 设计系统与全站布局

在执行本步骤前，请先完成 `02_TECH_STACK_AND_SCAFFOLD.md`。

## 目标

建立 `cn.hihoneycomb.com` 的视觉系统和全站布局，让网站像专业工业制造 B2B 中文站，而不是模板站。

## 风格关键词

工业制造、金属质感、技术可信、简洁清晰、B2B 工程产品、适合采购和工程师。

## CSS 变量建议

```css
--color-primary: #0B2A4A;
--color-primary-light: #123E68;
--color-accent: #F59E0B;
--color-text: #1F2937;
--color-muted: #6B7280;
--color-bg: #FFFFFF;
--color-bg-soft: #F5F7FA;
--color-border: #E5E7EB;
--color-metal: #9CA3AF;
```

## Header

包含：Logo/恒实蜂窝、首页、产品中心、应用领域、定制能力、关于我们、联系我们、English。

English 链接到：https://www.hihoneycomb.com/

## Footer

包含：公司名称、产品快速链接、应用领域、联系方式、英文官网链接、版权信息、备案号位置预留、sitemap 链接。

## 首页布局

Hero、核心产品、定制能力、应用领域、工艺与材料、为什么选择恒实蜂窝、询盘流程、FAQ、联系 CTA。

## 产品页布局

Breadcrumb、Hero、产品概述、典型应用、材料与工艺、可定制参数表、询价需要提供的信息、相关产品、FAQ、CTA。

## 图片策略

没有真实图片时使用占位图，alt 必须有意义，README 中提醒替换真实产品图。不要抓取参考站图片。

## 输出

输出：创建/修改的样式文件、布局组件、Header/Footer 是否完成、布局是否可复用、移动端适配说明。

# Codex 分步使用方法：cn.hihoneycomb.com 中文站

这套任务包用于让 Codex 分步完成中文站。

## 目标站点

```txt
https://cn.hihoneycomb.com/
```

## 参考站点

```txt
https://www.hihoneycomb.com/
http://hshoneycomb.cn/
```

注意：`hshoneycomb.cn` 只是参考站，不是本次目标域名。所有 SEO URL 都必须使用 `https://cn.hihoneycomb.com/`。

## 使用方式

把整个文件夹放到项目根目录：

```txt
your-project/
├── codex-tasks/
│   ├── 00_PROJECT_BRIEF.md
│   ├── 01_REFERENCE_AUDIT_AND_STYLE.md
│   ├── 02_TECH_STACK_AND_SCAFFOLD.md
│   ├── 03_DESIGN_SYSTEM_AND_LAYOUT.md
│   ├── 04_CONTENT_DATA_MODEL.md
│   ├── 05_CREATE_CORE_PAGES.md
│   ├── 06_CREATE_PRODUCT_PAGES.md
│   ├── 07_SEO_TECH_FILES.md
│   ├── 08_DEPLOYMENT.md
│   └── 09_QA_AND_DELIVERY.md
```

每次只让 Codex 执行一个任务文件。

## 第 1 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/01_REFERENCE_AUDIT_AND_STYLE.md。
本轮只执行 01_REFERENCE_AUDIT_AND_STYLE.md。
先分析英文官网和中文参考站的风格、栏目、SEO方向和必须避免的问题。
注意：目标站是 https://cn.hihoneycomb.com/，hshoneycomb.cn 只是参考站。
不要开始写完整页面代码。
```

## 第 2 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/02_TECH_STACK_AND_SCAFFOLD.md。
本轮只执行 02_TECH_STACK_AND_SCAFFOLD.md。
先检查当前项目结构，然后选择合适技术栈并搭建 cn.hihoneycomb.com 中文站基础项目。
不要创建完整业务页面。
```

## 第 3 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/03_DESIGN_SYSTEM_AND_LAYOUT.md。
本轮只执行 03_DESIGN_SYSTEM_AND_LAYOUT.md。
建立全站设计系统、Header、Footer、布局组件和基础样式。
不要写全部产品详情页。
```

## 第 4 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/04_CONTENT_DATA_MODEL.md。
本轮只执行 04_CONTENT_DATA_MODEL.md。
建立产品、应用、FAQ、SEO、导航等数据文件，文案要专业自然，不要夸大。
```

## 第 5 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/05_CREATE_CORE_PAGES.md。
本轮只执行 05_CREATE_CORE_PAGES.md。
创建首页、产品中心、应用领域、定制能力、关于我们、联系我们页面。
不要处理 Docker 和部署。
```

## 第 6 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/06_CREATE_PRODUCT_PAGES.md。
本轮只执行 06_CREATE_PRODUCT_PAGES.md。
创建主要产品详情页，每个页面包含产品概述、应用、材料、工艺、参数表、FAQ、CTA 和相关产品内链。
```

## 第 7 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/07_SEO_TECH_FILES.md。
本轮只执行 07_SEO_TECH_FILES.md。
补齐 title、description、canonical、hreflang、Open Graph、sitemap.xml、robots.txt、JSON-LD 和 404 页面。
注意：中文页面 canonical 必须指向 https://cn.hihoneycomb.com/ 自己，不要指向英文官网，也不要指向 hshoneycomb.cn。
```

## 第 8 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/08_DEPLOYMENT.md。
本轮只执行 08_DEPLOYMENT.md。
生成 Dockerfile、docker-compose.yml、nginx.conf 和 README 部署说明。
不要改业务页面文案。
```

## 第 9 次

```txt
请读取 codex-tasks/00_PROJECT_BRIEF.md 和 codex-tasks/09_QA_AND_DELIVERY.md。
本轮做最终自检、构建测试、SEO检查、死链检查和交付报告。
发现问题请修复，并说明修改了哪些文件。
```

如果 Codex 报错，把报错原文复制出来，再让 ChatGPT 帮你改下一轮提示词。

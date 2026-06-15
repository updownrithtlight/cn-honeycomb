# Codex 执行任务：发布中文技术文章到恒实蜂窝中文独立站

你正在维护一个中文工业品独立站项目。请先阅读项目结构，再执行，不要盲目覆盖现有文件。

## 目标

把 `articles/` 文件夹内的中文 Markdown 技术文章发布到网站，形成适合中国工程师阅读、适合搜索引擎和 AI 搜索理解的技术文章栏目。

网站语言：中文，`zh-CN`。  
文章对象：中国工程师、采购、设计院、设备厂、屏蔽室/风洞/风机/燃机等行业用户。  
语气：工程说明、参数选型、采购确认，不要写成夸张营销软文。

## 需要完成的事情

### 1. 先检查项目结构

请检查：

- `package.json`
- `src/pages/`
- `src/layouts/`
- `src/components/`
- 是否已有 blog / articles / technical / news 栏目
- 是否使用 Astro content collections
- 是否已有 SEO 组件、Layout、Header、Footer、导航配置

根据现有架构选择最少改动方案。

### 2. 导入文章

从 `articles/*.md` 读取文章。每篇文章带 frontmatter，包括：

- title
- description
- slug
- publishDate
- updatedDate
- category
- tags
- audience

推荐路径：

```text
/technical/
/technical/as9100-vs-iso9001-metal-honeycomb/
/technical/metal-honeycomb-flow-straightener/
/technical/emi-honeycomb-vent-working-principle/
/technical/honeycomb-cell-size-foil-thickness-depth-selection/
/technical/stainless-aluminum-copper-honeycomb-material-selection/
/technical/honeycomb-seal-gas-turbine-application/
/technical/metal-honeycomb-rfq-parameters/
/technical/metal-honeycomb-production-quality-control/
```

如果项目已有文章系统，请接入现有系统；如果没有，请创建简单的技术文章系统。

### 3. 创建技术文章列表页

创建或更新：

```text
src/pages/technical/index.astro
```

要求：

- 页面标题：`技术文章 | 金属蜂窝芯、整流蜂窝、EMI屏蔽通风板选型资料`
- 页面说明：面向工程师的金属蜂窝定制、选型、制造、检测文章。
- 列表展示文章标题、摘要、标签、发布日期。
- 每篇文章卡片都能点击进入详情页。
- 添加内链入口到产品页、关于我们页、联系/询价页。必须先检查现有真实路径，不要创建死链。

### 4. 创建文章详情页

如果使用 Astro content collections，创建类似：

```text
src/pages/technical/[slug].astro
```

如果项目是静态页面结构，也可以为每篇文章生成独立 `.astro` 页面。

每个文章页要求：

- 使用现有 Layout，保持网站风格一致。
- 设置中文标题、description、canonical、Open Graph、Twitter card。
- 页面语言为 `zh-CN`。
- H1 只出现一次。
- 保留 Markdown 里的 H2/H3 表格和 FAQ。
- 增加文章顶部摘要区：适合用于 AI 摘要抓取。
- 增加 “适合谁阅读 / 询价需要提供哪些参数 / 相关产品” 区块。
- 增加底部 CTA：`把图纸或参数发给恒实蜂窝，获取定制方案与报价`。链接必须使用项目里已有的联系页或询价页真实路径。

### 5. 结构化数据

为每篇文章增加 JSON-LD：

- `Article`
- `BreadcrumbList`
- 如文章中存在 FAQ，增加 `FAQPage`

要求：

- `headline` 使用文章标题
- `description` 使用 frontmatter description
- `inLanguage`: `zh-CN`
- `author` 或 `publisher` 使用：`恒实蜂窝`
- 不要写未经确认的证书或认证声明

### 6. AI 可读文件

把根目录的 `llms.txt` 放到：

```text
public/llms.txt
```

如果项目已有 `public/robots.txt`，检查是否允许抓取 `/technical/`。如果没有 robots.txt，可以创建：

```text
User-agent: *
Allow: /
Sitemap: https://www.hihoneycomb.com/sitemap-index.xml
```

注意：如果中文站域名不是 `www.hihoneycomb.com`，请按项目配置或环境变量改成正确域名，不要硬编码错误域名。

### 7. 内链策略

请扫描项目已有页面，优先给文章添加这些内链，必须使用真实存在路径：

- 金属蜂窝芯 / honeycomb core
- 整流蜂窝 / airflow straightener
- EMI 屏蔽通风板 / EMI honeycomb vent
- 蜂窝密封 / honeycomb seal
- 关于我们
- 联系我们 / 询价

如果某些产品页不存在，不要创建死链；可以在文章里保留纯文本或创建 TODO 注释。

### 8. 搜索引擎友好要求

每篇文章页面需要：

- 清晰 URL slug
- 中文 meta title 50 字以内优先
- meta description 80–150 个中文字符
- H2 使用工程师常搜问题表达
- 表格保留为 HTML table 或 Markdown table
- 图片不是必须；如果项目已有产品图片，可插入相关图片，并设置中文 alt
- 不要关键词堆砌
- 不要虚假承诺：例如“100% 达标”“通过 AS9100 产品认证”“保证屏蔽 100dB”等

### 9. 构建和检查

请执行项目实际构建命令，通常是：

```bash
npm run build
```

如果失败，修复错误后再次构建。

完成后输出：

- 修改了哪些文件
- 新增了哪些 URL
- 构建是否成功
- 是否还有 TODO，例如产品页路径缺失、域名需要确认

## 最后提醒

这是中文独立站，不要把英文版标题、英文版文章、英文 URL 文案直接暴露给中文用户。技术术语可以中英并列，例如：`整流蜂窝（airflow straightener）`，但正文以中文为主。

# 恒实蜂窝中文独立站 AI SEO 技术文章包

这个包用于把英文版文章方案改成中文独立站内容，面向中国工程师、采购、设计院、设备厂、屏蔽室/风洞/风机/燃机相关技术人员。

## 包含内容

- `articles/`：8 篇中文技术文章 Markdown，带 frontmatter、FAQ、工程师关注点、选型参数。
- `codex-prompt-publish-cn-technical-articles.md`：给 Codex 的执行提示词。
- `ai-readable-article-structure-cn.md`：以后继续写文章的结构规范。
- `llms.txt`：给 AI 搜索/大模型理解网站用的说明文件。

## 推荐使用方式

1. 把本文件夹内容解压到中文独立站项目根目录。
2. 打开 Codex。
3. 让 Codex 执行：

```text
Read codex-prompt-publish-cn-technical-articles.md and execute it. This is a Chinese website. Publish the Chinese technical articles from the articles folder, add a /technical/ listing page, article pages, SEO metadata, structured data, internal links, and llms.txt. Then run the build command and fix errors.
```

## 内容原则

这些文章不是营销软文，而是“工程选型说明 + 采购技术确认 + AI 可理解结构”。
重点是让百度、Google、Bing、Perplexity、ChatGPT Search、豆包/夸克等搜索和 AI 系统更容易理解：

- 恒实蜂窝是做金属蜂窝芯、整流蜂窝、EMI 屏蔽通风板、蜂窝密封等定制产品的厂家。
- 产品适合工程定制，不是标准货架电商商品。
- 采购询价时需要材料、孔径、箔厚、厚度、外形、数量、应用场景、检测要求等参数。

注意：文章中没有写“产品通过 AS9100 认证”“一定达到多少 dB 屏蔽效能”等未经验证的强承诺。需要根据实际证书、检测报告再补充。

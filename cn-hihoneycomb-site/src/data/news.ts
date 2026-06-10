export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: "企业新闻";
  excerpt: string;
  paragraphs: string[];
  sourceUrl: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "gtf-2025-shanghai",
    title: "恒实蜂窝亮相 GTF 2025 上海燃气轮机聚焦大会",
    date: "2025-09-01",
    category: "企业新闻",
    excerpt:
      "恒实蜂窝参加在上海举办的 GTF 2025，展示不锈钢、铜及高性能合金蜂窝产品，并与燃气轮机及航空动力领域的行业伙伴进行交流。",
    paragraphs: [
      "第十二届燃气轮机聚焦大会暨展览会于 2025 年 7 月 16 日至 18 日在上海举行，活动围绕燃气轮机、航空动力系统及先进材料应用展开。",
      "恒实蜂窝在展会中展示了不锈钢蜂窝、铜蜂窝和高性能合金蜂窝等产品方向。这些金属蜂窝结构可结合项目需求，用于流场整流、热防护、工业降噪及相关动力设备应用。",
      "参展期间，团队围绕耐高温、耐腐蚀和定制制造等工程需求与现场行业伙伴进行了交流。具体材料、结构和性能仍需结合图纸、工况及测试条件确认。",
      "本文根据恒实蜂窝英文官网企业新闻整理为中文摘要，未复制英文原文或站点图片。"
    ],
    sourceUrl: "https://www.hihoneycomb.com/News_details/12.html"
  }
];

export const newsBySlug = Object.fromEntries(newsItems.map((item) => [item.slug, item]));

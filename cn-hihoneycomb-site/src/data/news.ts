export type NewsImage = {
  src: string;
  alt: string;
  caption: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: "企业新闻";
  excerpt: string;
  paragraphs: string[];
  images: NewsImage[];
  sourceUrl?: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "beijing-commercial-space-2026",
    title: "恒实蜂窝参加 2026 北京国际商业航天展览会",
    date: "2026-06-11",
    category: "企业新闻",
    excerpt: "恒实蜂窝在 2026 北京国际商业航天展览会 B324 展位展示金属蜂窝芯、蜂窝密封件及屏蔽通风相关产品。",
    paragraphs: [
      "2026 北京国际商业航天展览会围绕商业航天产业链、关键材料、零部件及工程应用展开。根据恒实蜂窝现场照片，公司在 B324 展位展示了多种金属蜂窝样件，并与到场专业观众交流材料、结构和定制需求。",
      "面向商业航天及配套试验设备，金属蜂窝可用于需要兼顾通风与电磁屏蔽的设备开口，也可围绕流场整流、结构支撑和动力设备蜂窝密封等方向进行工程设计。具体材料、孔径、箔厚、厚度和连接方式需要结合图纸、工况及验证要求确认。",
      "本次展出的产品方向包括不锈钢及高温合金蜂窝芯、环形蜂窝密封件、带边框蜂窝组件等。恒实蜂窝可依据草图、样件或正式图纸开展工艺评估，不在缺少测试条件的情况下承诺屏蔽、流场或密封性能数值。"
    ],
    images: [
      { src: "/images/news/beijing-commercial-space-2026/beijing-commercial-space-2026-01.webp", alt: "2026北京国际商业航天展览会入口", caption: "2026 北京国际商业航天展览会现场。" },
      { src: "/images/news/beijing-commercial-space-2026/beijing-commercial-space-2026-02.webp", alt: "恒实蜂窝B324展位及金属蜂窝产品", caption: "恒实蜂窝 B324 展位展示金属蜂窝芯与蜂窝密封件。" },
      { src: "/images/news/beijing-commercial-space-2026/beijing-commercial-space-2026-03.webp", alt: "2026北京国际商业航天展览会展馆外景", caption: "展览会场馆外景。" }
    ]
  },
  {
    slug: "gtf-2026-shanghai",
    title: "恒实蜂窝亮相 GTF 2026 第十三届航空动力和燃气轮机聚焦展览会",
    date: "2026-05-15",
    category: "企业新闻",
    excerpt: "2026 年 5 月 12 日至 14 日，恒实蜂窝在上海参加 GTF 2026，展示蜂窝密封件、高温合金蜂窝及金属蜂窝定制能力。",
    paragraphs: [
      "GTF 2026 第十三届航空动力和燃气轮机聚焦展览会于 2026 年 5 月 12 日至 14 日在上海世博展览馆 H2 馆举行。恒实蜂窝携金属蜂窝芯、环形蜂窝密封件及相关定制样件参展。",
      "在航空动力、燃气轮机、汽轮机和压缩机等设备中，蜂窝结构可围绕级间密封、轴封及相关流体机械应用进行设计。材料选择、芯格尺寸、背板或边框连接方式以及钎焊、焊接工艺，需要结合温度、介质、转速、间隙和图纸要求评估。",
      "展会期间，恒实蜂窝围绕不锈钢、高温合金蜂窝及按图制造与行业观众进行交流。网站展示内容用于说明产品方向，最终制造和验收条件以双方确认的图纸、技术协议和检测要求为准。"
    ],
    images: [
      { src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-04.webp", alt: "GTF 2026第十三届航空动力和燃气轮机聚焦展览会入口", caption: "GTF 2026 于 2026 年 5 月 12 日至 14 日在上海世博展览馆举行。" },
      { src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-01.webp", alt: "GTF 2026展商名录中的恒实蜂窝", caption: "展商名录中的恒实蜂窝品牌信息。" },
      { src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-02.webp", alt: "恒实蜂窝GTF 2026展位", caption: "恒实蜂窝展位展示蜂窝密封和金属蜂窝产品方向。" },
      { src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-03.webp", alt: "观众在恒实蜂窝展位了解产品", caption: "现场围绕材料、结构和工程需求进行交流。" }
    ]
  },
  {
    slug: "china-emc-2024",
    title: "恒实蜂窝参加 2024 中国电磁兼容大会",
    date: "2024-07-22",
    category: "企业新闻",
    excerpt: "恒实蜂窝参加在北京国际会议中心举办的 2024 中国电磁兼容大会，展示屏蔽蜂窝通风板及金属蜂窝定制产品。",
    paragraphs: [
      "2024 中国电磁兼容大会在北京国际会议中心举行。恒实蜂窝设置产品展示与技术交流区域，向现场专业观众介绍屏蔽蜂窝通风板、蜂窝通风波导板及相关金属蜂窝组件。",
      "设备机柜、屏蔽室及测试空间常需要在通风散热和电磁屏蔽之间进行工程平衡。金属蜂窝通风组件可依据开口尺寸、材料、孔径、厚度、边框、安装方式和表面处理进行定制，实际屏蔽效能需在明确频段、安装状态和测试方法后验证。",
      "恒实蜂窝面向 EMC 测试、屏蔽机柜和工业设备客户提供按图沟通服务。询价时建议提供使用频段、通风需求、安装空间、外形尺寸、孔位、环境条件和测试要求，以便开展结构及工艺评估。"
    ],
    images: [
      { src: "/images/news/china-emc-2024/china-emc-2024-02.webp", alt: "2024中国电磁兼容大会会议现场", caption: "2024 中国电磁兼容大会会议现场。" },
      { src: "/images/news/china-emc-2024/china-emc-2024-03.webp", alt: "恒实蜂窝在中国电磁兼容大会展示产品", caption: "恒实蜂窝展示屏蔽通风与金属蜂窝相关产品。" },
      { src: "/images/news/china-emc-2024/china-emc-2024-01.webp", alt: "北京国际会议中心外景", caption: "大会举办场地北京国际会议中心。" }
    ]
  },
  {
    slug: "gtf-2025-shanghai",
    title: "恒实蜂窝亮相 GTF 2025 上海燃气轮机聚焦大会",
    date: "2025-09-01",
    category: "企业新闻",
    excerpt: "恒实蜂窝参加在上海举办的 GTF 2025，展示不锈钢、铜及高性能合金蜂窝产品，并与燃气轮机及航空动力领域的行业伙伴进行交流。",
    paragraphs: [
      "第十二届燃气轮机聚焦大会暨展览会于 2025 年 7 月 16 日至 18 日在上海举行，活动围绕燃气轮机、航空动力系统及先进材料应用展开。",
      "恒实蜂窝在展会中展示了不锈钢蜂窝、铜蜂窝和高性能合金蜂窝等产品方向。这些金属蜂窝结构可结合项目需求，用于流场整流、工业降噪及相关动力设备应用。",
      "现场展位位于 A065，展板展示了高温合金、金属蜂窝及小芯格蜂窝产品方向。具体材料、结构和性能仍需结合图纸、工况及测试条件确认。本文根据恒实蜂窝英文官网企业新闻整理为中文摘要。"
    ],
    images: [
      {
        src: "/images/news/gtf-2025-shanghai/gtf-2025-shanghai-01.webp",
        alt: "恒实蜂窝GTF 2025上海展会A065展位现场",
        caption: "2025 年 7 月 16 日，恒实蜂窝在 GTF 2025 A065 展位展示金属蜂窝及高温合金蜂窝产品。"
      }
    ],
    sourceUrl: "https://www.hihoneycomb.com/News_details/12.html"
  }
];

export const newsBySlug = Object.fromEntries(newsItems.map((item) => [item.slug, item]));

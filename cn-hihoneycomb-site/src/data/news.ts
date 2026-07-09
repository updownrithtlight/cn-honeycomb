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
    slug: "asme-turbo-expo-2026-milan",
    title: "恒实精密参加 2026 意大利米兰 ASME Turbo Expo",
    date: "2026-07-08",
    category: "企业新闻",
    excerpt:
      "对应英文站 News_details/29 的中文版本。恒实精密参加 2026 年意大利米兰 ASME Turbo Expo，重点展示面向透平机械、燃气轮机密封、气流整流、声学衬层和 EMI 屏蔽应用的定制金属蜂窝方案。",
    paragraphs: [
      "根据英文站新闻原文，恒实精密参加了 2026 年在意大利米兰举办的 ASME Turbo Expo。此次参展重点围绕定制金属蜂窝解决方案，面向透平机械、燃气轮机密封、气流整流、声学衬层和 EMI 屏蔽等应用方向。",
      "这类项目通常不是标准件采购，而是根据工作温度、介质、结构边界、装配方式和验证要求进行定制。中文站同步这条新闻，目的是让企业新闻与英文站保持一致，同时把你现有的展会现场图片挂到对应条目上。",
      "如果客户需求涉及燃气轮机蜂窝密封、流场整流或高温金属蜂窝组件，询盘时建议同时提供图纸、材料偏好、尺寸公差和测试要求，这样比单独询价更有效。"
    ],
    images: [
      {
        src: "/images/news/asme-turbo-expo-2026-milan/asme-turbo-expo-2026-milan-01.webp",
        alt: "恒实精密参加 2026 意大利米兰 ASME Turbo Expo 现场照片一",
        caption: "ASME Turbo Expo 2026 米兰展会现场照片。"
      },
      {
        src: "/images/news/asme-turbo-expo-2026-milan/asme-turbo-expo-2026-milan-02.webp",
        alt: "恒实精密参加 2026 意大利米兰 ASME Turbo Expo 现场照片二",
        caption: "围绕透平机械与蜂窝密封应用方向进行交流。"
      },
      {
        src: "/images/news/asme-turbo-expo-2026-milan/asme-turbo-expo-2026-milan-03.webp",
        alt: "恒实精密参加 2026 意大利米兰 ASME Turbo Expo 现场照片三",
        caption: "现场展示企业参展动态与金属蜂窝产品方向。"
      }
    ],
    sourceUrl: "https://www.hihoneycomb.com/News_details/29.html"
  },  {
    slug: "defense-info-2026",
    title: "恒实蜂窝亮相第14届中国·北京国防信息化装备与技术博览会",
    date: "2026-06-16",
    category: "企业新闻",
    excerpt:
      "根据现场展会照片整理，恒实蜂窝在北京国防信息化装备与技术博览会展示金属蜂窝、蜂窝密封和相关定制样件，并与到场客户沟通结构与应用需求。",
    paragraphs: [
      "第14届中国·北京国防信息化装备与技术博览会聚焦国防信息化装备、配套制造和工程应用。根据本次展会照片，恒实蜂窝在现场展示了金属蜂窝芯、蜂窝密封件及相关定制样件。",
      "这类产品可围绕屏蔽通风、气流整流、结构夹层和高温密封等方向开展工程设计，但具体材料、孔径、箔厚、厚度、边框结构和连接方式，仍需结合图纸、工况与验证要求确认。",
      "本条新闻用于同步中文站企业动态，内容依据展会照片整理，不对未验证的性能指标作延伸承诺。"
    ],
    images: [
      {
        src: "/images/news/defense-info-2026/defense-info-2026-01.webp",
        alt: "恒实蜂窝在北京国防信息化装备与技术博览会现场展示产品",
        caption: "展会现场照片，展示恒实蜂窝相关展品。"
      },
      {
        src: "/images/news/defense-info-2026/defense-info-2026-02.webp",
        alt: "恒实蜂窝展会现场产品细节",
        caption: "围绕材料、结构和应用场景与客户进行交流。"
      },
      {
        src: "/images/news/defense-info-2026/defense-info-2026-03.webp",
        alt: "恒实蜂窝展会现场样件展示",
        caption: "展位展示的蜂窝类样件与产品方向。"
      }
    ]
  },
  {
    slug: "gtf-2026-shanghai",
    title: "恒实蜂窝亮相 GTF 2026 第十三届航空动力和燃气轮机聚焦大会暨展览会",
    date: "2026-05-12",
    category: "企业新闻",
    excerpt:
      "根据现场展会照片整理，恒实蜂窝在 GTF 2026 展示蜂窝密封件、高温合金蜂窝及金属蜂窝定制能力，面向航空动力与燃气轮机配套需求开展交流。",
    paragraphs: [
      "GTF 2026 第十三届航空动力和燃气轮机聚焦大会暨展览会于 2026 年 5 月在上海举行。根据现场照片，恒实蜂窝携金属蜂窝芯、环形蜂窝密封件及相关定制样件参展。",
      "在航空动力、燃气轮机、压缩机和相关试验装备中，蜂窝结构可围绕间隙密封、气流组织与结构支撑开展设计。材料选择、格芯尺寸、背板或边框连接方式以及钎焊工艺，需要结合温度、介质、转速、间隙和图纸要求评估。",
      "中文站同步这条新闻，重点是记录参展动态和产品方向，不把展会展示直接等同于标准现货能力。"
    ],
    images: [
      {
        src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-04.webp",
        alt: "GTF 2026第十三届航空动力和燃气轮机聚焦展览会入口",
        caption: "GTF 2026 展会现场。"
      },
      {
        src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-01.webp",
        alt: "GTF 2026展商名录中的恒实蜂窝",
        caption: "展商名录中的恒实蜂窝品牌信息。"
      },
      {
        src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-02.webp",
        alt: "恒实蜂窝GTF 2026展位",
        caption: "恒实蜂窝展位展示蜂窝密封和金属蜂窝产品方向。"
      },
      {
        src: "/images/news/gtf-2026-shanghai/gtf-2026-shanghai-03.webp",
        alt: "观众在恒实蜂窝展位了解产品",
        caption: "现场围绕材料、结构和工程需求进行交流。"
      }
    ]
  },
  {
    slug: "aviation-test-2026",
    title: "恒实蜂窝参加 2026 第三届航空装备数智试验暨产业发展大会",
    date: "2026-03-26",
    category: "企业新闻",
    excerpt:
      "根据现场照片整理，恒实蜂窝参加 2026 第三届航空装备数智试验暨产业发展大会，展示面向航空装备试验与配套制造场景的金属蜂窝产品能力。",
    paragraphs: [
      "航空装备数智试验相关会议和展览，核心是把设计、制造、试验验证和配套供应链连接起来。根据本次展会照片，恒实蜂窝在现场展示了金属蜂窝和相关样件，用于与客户沟通材料、结构与加工边界。",
      "对于风洞试验、气流整流、屏蔽通风和特种结构件这类场景，蜂窝结构通常不是标准件采购，而是按安装空间、性能目标和制造工艺做定制。",
      "如果项目涉及航空装备试验配套，建议在询盘阶段明确应用位置、尺寸约束、温度环境和验证方式，这样比单独问价格更有效。"
    ],
    images: [
      {
        src: "/images/news/aviation-test-2026/aviation-test-2026-01.webp",
        alt: "恒实蜂窝参加航空装备数智试验暨产业发展大会现场照片一",
        caption: "展会现场照片，用于展示企业参会动态。"
      },
      {
        src: "/images/news/aviation-test-2026/aviation-test-2026-02.webp",
        alt: "恒实蜂窝参加航空装备数智试验暨产业发展大会现场照片二",
        caption: "围绕试验配套与定制制造需求开展交流。"
      }
    ]
  },
  {
    slug: "shanghai-commercial-space-2026",
    title: "恒实蜂窝参展 2026 上海商业航天展览会",
    date: "2026-03-16",
    category: "企业新闻",
    excerpt:
      "根据现场照片整理，恒实蜂窝在 2026 上海商业航天展览会展示金属蜂窝、蜂窝密封与相关定制样件，面向商业航天配套制造需求进行交流。",
    paragraphs: [
      "商业航天领域对材料、结构、可靠性和交付节奏的要求都比较直接。根据本次上海展会的现场照片，恒实蜂窝展示了金属蜂窝样件及相关产品方向，用于与客户沟通项目配套可行性。",
      "金属蜂窝产品可服务于屏蔽通风、流场整流、结构夹层和密封等应用，但是否适合具体项目，仍取决于实际工况、图纸和验证要求。",
      "中文站发布这条新闻，主要是同步企业参展动态，而不是把展会展示等同于标准现货目录。"
    ],
    images: [
      {
        src: "/images/news/shanghai-commercial-space-2026/shanghai-commercial-space-2026-01.webp",
        alt: "恒实蜂窝在上海商业航天展览会现场照片一",
        caption: "展会现场照片，记录企业参展动态。"
      },
      {
        src: "/images/news/shanghai-commercial-space-2026/shanghai-commercial-space-2026-02.webp",
        alt: "恒实蜂窝在上海商业航天展览会现场照片二",
        caption: "展示金属蜂窝与相关定制样件方向。"
      },
      {
        src: "/images/news/shanghai-commercial-space-2026/shanghai-commercial-space-2026-03.webp",
        alt: "恒实蜂窝在上海商业航天展览会现场照片三",
        caption: "面向商业航天配套制造场景进行交流。"
      }
    ]
  },
  {
    slug: "beijing-commercial-space-2026",
    title: "恒实蜂窝参加 2026 北京国际商业航天展览会",
    date: "2026-03-26",
    category: "企业新闻",
    excerpt:
      "根据现场展会照片整理，恒实蜂窝在 2026 北京国际商业航天展览会展示金属蜂窝芯、蜂窝密封件及屏蔽通风相关产品方向。",
    paragraphs: [
      "2026 北京国际商业航天展览会围绕商业航天产业链、关键材料、零部件及工程应用展开。根据恒实蜂窝现场照片，公司在展会现场展示了多种金属蜂窝样件，并与到场专业观众交流材料、结构和定制需求。",
      "面向商业航天及配套试验设备，金属蜂窝可用于需要兼顾通风与电磁屏蔽的设备开口，也可围绕流场整流、结构支撑和动力设备蜂窝密封等方向进行工程设计。",
      "具体材料、孔径、箔厚、厚度和连接方式，需要结合图纸、工况及验证要求确认。"
    ],
    images: [
      {
        src: "/images/news/beijing-commercial-space-2026/beijing-commercial-space-2026-01.webp",
        alt: "2026北京国际商业航天展览会入口",
        caption: "2026 北京国际商业航天展览会现场。"
      },
      {
        src: "/images/news/beijing-commercial-space-2026/beijing-commercial-space-2026-02.webp",
        alt: "恒实蜂窝北京商业航天展会现场产品展示",
        caption: "恒实蜂窝现场展示金属蜂窝样件与产品方向。"
      },
      {
        src: "/images/news/beijing-commercial-space-2026/beijing-commercial-space-2026-03.webp",
        alt: "2026北京国际商业航天展览会展馆外景",
        caption: "展览会场馆外景。"
      }
    ]
  },
  {
    slug: "factory-tour-2025",
    title: "恒实精密蜂窝制造工厂参观纪实",
    date: "2025-12-17",
    category: "企业新闻",
    excerpt:
      "这是英文站现有公司新闻的中文版本，介绍恒实精密的生产设施、制造能力、团队配置与质量管理基础。",
    paragraphs: [
      "恒实（廊坊）精密机械制造有限公司成立于 2019 年，依托十余年的蜂窝技术积累，逐步形成集研发、制造与销售于一体的专业化企业。公司现有现代化生产厂房约 5000 平方米。",
      "公司配备高精度蜂窝冲制系统、自动化钎焊与装配产线、数控加工中心和真空钎焊设备，具备从原材料选择、核心部件精密加工到总装交付的完整制造能力。",
      "核心技术团队拥有十年以上蜂窝技术研发经验，可支持按图定制、工艺评估、生产计划和质量控制等环节。本条内容整理自英文站公司新闻原文。"
    ],
    images: [
      {
        src: "/images/company/hengshi-factory-exterior-optimized.webp",
        alt: "恒实蜂窝工厂外景",
        caption: "恒实蜂窝工厂外景。"
      },
      {
        src: "/images/company/hengshi-workshop-overview-optimized.webp",
        alt: "恒实蜂窝车间概览",
        caption: "车间设备与生产区域概览。"
      },
      {
        src: "/images/company/hengshi-team-optimized.webp",
        alt: "恒实蜂窝团队与生产管理",
        caption: "团队与生产管理能力支撑定制制造项目。"
      }
    ],
    sourceUrl: "https://www.hihoneycomb.com/News_details/14.html"
  },
  {
    slug: "vacuum-brazing-2023",
    title: "真空钎焊技术如何提升金属蜂窝芯制造质量",
    date: "2023-04-27",
    category: "企业新闻",
    excerpt:
      "这是英文站现有公司新闻的中文版本，介绍真空钎焊在金属蜂窝芯制造中的作用，以及它对结构强度、一致性和定制制造能力的提升。",
    paragraphs: [
      "随着航空航天、汽车、建筑和工业设备对轻量化与高强度材料的需求增加，金属蜂窝芯成为越来越关键的结构材料。恒实精密引入真空钎焊设备，以提升蜂窝芯连接质量和制造稳定性。",
      "真空钎焊是在受控真空环境中完成金属连接的高精度工艺，能够减少氧化和污染，获得更洁净、更均匀的连接界面。相较传统焊接方式，它更适合不锈钢和镀镍类蜂窝结构的高一致性制造。",
      "英文站原文强调，真空钎焊有助于提升连接强度、耐腐蚀性、热稳定性和批量加工效率，也让蜂窝产品在国防、能源和高端工程项目中的定制制造更可控。"
    ],
    images: [
      {
        src: "/images/company/welding-production.webp",
        alt: "恒实蜂窝钎焊生产设备",
        caption: "钎焊与装配环节是蜂窝制造的重要工艺。"
      },
      {
        src: "/images/company/cnc-equipment-operation.webp",
        alt: "恒实蜂窝精密加工设备",
        caption: "精密加工与后续装配共同决定蜂窝结构质量。"
      },
      {
        src: "/images/company/product-inspection.webp",
        alt: "恒实蜂窝产品检测",
        caption: "制造一致性最终仍需通过过程控制与检测确认。"
      }
    ],
    sourceUrl: "https://www.hihoneycomb.com/News_details/9.html"
  }
];

export const newsBySlug = Object.fromEntries(newsItems.map((item) => [item.slug, item]));



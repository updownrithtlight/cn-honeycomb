import { siteInfo } from "./site";

export type SEOEntry = {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
};

export const defaultSEO: SEOEntry = {
  title: "恒实蜂窝 | 金属蜂窝定制厂家",
  description: siteInfo.description,
  keywords: [
    "金属蜂窝定制",
    "蜂窝通风波导板",
    "EMI屏蔽通风口",
    "不锈钢蜂窝芯",
    "气流整流蜂窝"
  ],
  canonical: siteInfo.domain
};

export const pageSEO: Record<string, SEOEntry> = {
  home: defaultSEO,
  products: {
    title: "产品中心 | 恒实蜂窝",
    description: "恒实蜂窝产品中心覆盖电磁屏蔽蜂窝、风洞试验蜂窝、航空航天发动机及燃气轮机相关金属蜂窝定制产品。",
    keywords: ["恒实蜂窝产品", "金属蜂窝芯", "屏蔽蜂窝通风口", "风洞蜂窝", "蜂窝汽封", "燃气轮机蜂窝密封"],
    canonical: `${siteInfo.domain}products/`
  },
  applications: {
    title: "应用领域 | 恒实蜂窝",
    description: "恒实蜂窝产品应用于 EMI屏蔽室、EMC测试室、屏蔽机柜、MRI屏蔽、风洞试验、气流整流和工业密封等场景。",
    keywords: ["EMI屏蔽室", "EMC测试室", "风洞试验", "汽轮机密封", "气流整流"],
    canonical: `${siteInfo.domain}applications/`
  },
  about: {
    title: "关于恒实 | 恒实蜂窝",
    description: "了解恒实（廊坊）精密机械制造有限公司的生产基地、质量体系、主营业务、材料工艺和金属蜂窝制造能力。",
    keywords: ["恒实蜂窝", "恒实精密机械", "金属蜂窝厂家", "AS9100金属蜂窝", "GJB9001C蜂窝"],
    canonical: `${siteInfo.domain}about/`
  },
  contact: {
    title: "联系我们 | 恒实蜂窝",
    description: "联系恒实蜂窝，提交电磁屏蔽蜂窝、风洞试验蜂窝、蜂窝汽封、气流整流蜂窝和金属蜂窝定制需求。",
    keywords: ["恒实蜂窝联系方式", "金属蜂窝询价", "蜂窝通风波导板询盘", "风洞蜂窝询价", "蜂窝汽封询价"],
    canonical: `${siteInfo.domain}contact/`
  },
  articles: {
    title: "技术资料 | 恒实蜂窝",
    description: "恒实蜂窝技术资料栏目预留产品选型、材料工艺、应用说明和金属蜂窝定制相关内容。",
    keywords: ["金属蜂窝技术资料", "蜂窝通风波导板选型", "气流整流蜂窝应用"],
    canonical: `${siteInfo.domain}articles/`
  },
  news: {
    title: "企业新闻 | 恒实蜂窝",
    description: "查看恒实蜂窝参展、制造能力和企业发展相关的可核实公司动态。",
    keywords: ["恒实蜂窝企业新闻", "恒实蜂窝参展", "金属蜂窝厂家动态"],
    canonical: `${siteInfo.domain}news/`
  }
};

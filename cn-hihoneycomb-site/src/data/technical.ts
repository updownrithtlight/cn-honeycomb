export type TechnicalArticleConfig = {
  image: string;
  imageAlt: string;
  relatedProducts: string[];
  relatedArticles: string[];
};

export const technicalArticleConfig: Record<string, TechnicalArticleConfig> = {
  "as9100-vs-iso9001-metal-honeycomb": {
    image: "/images/technical/quality-system-square.webp",
    imageAlt: "恒实蜂窝航空航天质量管理体系认证证书",
    relatedProducts: ["custom-metal-honeycomb", "honeycomb-seal"],
    relatedArticles: ["metal-honeycomb-production-quality-control", "metal-honeycomb-rfq-parameters"]
  },
  "metal-honeycomb-flow-straightener": {
    image: "/images/technical/flow-straightener-square.webp",
    imageAlt: "用于气流整理的金属蜂窝整流器",
    relatedProducts: ["airflow-straightener", "wind-tunnel-honeycomb"],
    relatedArticles: ["honeycomb-cell-size-foil-thickness-depth-selection", "metal-honeycomb-rfq-parameters"]
  },
  "emi-honeycomb-vent-working-principle": {
    image: "/images/technical/emi-honeycomb-vent-square.webp",
    imageAlt: "EMI 屏蔽蜂窝通风板产品结构",
    relatedProducts: ["emi-shielded-honeycomb-vent", "waveguide-honeycomb-vent"],
    relatedArticles: ["honeycomb-cell-size-foil-thickness-depth-selection", "stainless-aluminum-copper-honeycomb-material-selection"]
  },
  "honeycomb-cell-size-foil-thickness-depth-selection": {
    image: "/images/technical/honeycomb-core-square.webp",
    imageAlt: "金属蜂窝芯孔径、箔厚和蜂窝厚度选型参考",
    relatedProducts: ["stainless-steel-honeycomb-core", "custom-metal-honeycomb"],
    relatedArticles: ["stainless-aluminum-copper-honeycomb-material-selection", "metal-honeycomb-rfq-parameters"]
  },
  "stainless-aluminum-copper-honeycomb-material-selection": {
    image: "/images/technical/material-selection-square.webp",
    imageAlt: "铜和不锈钢等不同材料的金属蜂窝芯",
    relatedProducts: ["stainless-steel-honeycomb-core", "copper-honeycomb-core", "aluminum-honeycomb-core"],
    relatedArticles: ["honeycomb-cell-size-foil-thickness-depth-selection", "metal-honeycomb-production-quality-control"]
  },
  "honeycomb-seal-gas-turbine-application": {
    image: "/images/technical/honeycomb-seal-square.webp",
    imageAlt: "燃气轮机和旋转机械使用的蜂窝密封结构",
    relatedProducts: ["honeycomb-seal", "stainless-steel-honeycomb-core"],
    relatedArticles: ["stainless-aluminum-copper-honeycomb-material-selection", "metal-honeycomb-production-quality-control"]
  },
  "metal-honeycomb-rfq-parameters": {
    image: "/images/technical/rfq-square.webp",
    imageAlt: "按图纸定制的金属蜂窝产品",
    relatedProducts: ["custom-metal-honeycomb", "products"],
    relatedArticles: ["honeycomb-cell-size-foil-thickness-depth-selection", "metal-honeycomb-production-quality-control"]
  },
  "metal-honeycomb-production-quality-control": {
    image: "/images/technical/quality-control-square.webp",
    imageAlt: "金属蜂窝产品生产过程中的尺寸和质量检验",
    relatedProducts: ["custom-metal-honeycomb", "stainless-steel-honeycomb-core"],
    relatedArticles: ["as9100-vs-iso9001-metal-honeycomb", "metal-honeycomb-rfq-parameters"]
  }
};

export const technicalByProductSlug: Record<string, string[]> = {
  "emi-shielded-honeycomb-vent": [
    "emi-honeycomb-vent-working-principle",
    "honeycomb-cell-size-foil-thickness-depth-selection"
  ],
  "waveguide-honeycomb-vent": [
    "emi-honeycomb-vent-working-principle",
    "stainless-aluminum-copper-honeycomb-material-selection"
  ],
  "stainless-steel-honeycomb-core": [
    "honeycomb-cell-size-foil-thickness-depth-selection",
    "stainless-aluminum-copper-honeycomb-material-selection"
  ],
  "copper-honeycomb-core": [
    "stainless-aluminum-copper-honeycomb-material-selection",
    "emi-honeycomb-vent-working-principle"
  ],
  "aluminum-honeycomb-core": [
    "stainless-aluminum-copper-honeycomb-material-selection",
    "metal-honeycomb-flow-straightener"
  ],
  "airflow-straightener": [
    "metal-honeycomb-flow-straightener",
    "honeycomb-cell-size-foil-thickness-depth-selection"
  ],
  "wind-tunnel-honeycomb": [
    "metal-honeycomb-flow-straightener",
    "honeycomb-cell-size-foil-thickness-depth-selection"
  ],
  "honeycomb-seal": [
    "honeycomb-seal-gas-turbine-application",
    "stainless-aluminum-copper-honeycomb-material-selection"
  ],
  "custom-metal-honeycomb": [
    "metal-honeycomb-rfq-parameters",
    "metal-honeycomb-production-quality-control"
  ]
};

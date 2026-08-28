export type HeroSlide = {
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  href: string;
  cta: string;
};

export const heroSlides: HeroSlide[] = [
  {
    title: "EMI/RFI 屏蔽蜂窝通风板",
    description: "用于屏蔽室、EMC 测试室、屏蔽机柜和 MRI 屏蔽等场景，在满足通风散热需求的同时实现电磁屏蔽。",
    image: "/images/products/catalog/waveguide-egez5067.webp",
    imageWidth: 1672,
    imageHeight: 941,
    imageAlt: "EMI/RFI屏蔽蜂窝通风板产品图",
    href: "/emi-shielded-honeycomb-vent/",
    cta: "查看产品"
  },
  {
    title: "蜂窝通风波导板",
    description: "基于金属蜂窝波导截止结构，适用于屏蔽通风口、设备舱段、屏蔽机柜等需要兼顾通风与屏蔽的场景。",
    image: "/images/products/catalog/waveguide-gthd2721.webp",
    imageWidth: 1254,
    imageHeight: 1254,
    imageAlt: "蜂窝通风波导板产品图",
    href: "/waveguide-honeycomb-vent/",
    cta: "了解波导板"
  },
  {
    title: "不锈钢蜂窝芯",
    description: "支持 304、316L、310S 等材料定制，可根据孔径、箔厚、厚度、外形尺寸和应用场景进行生产。",
    image: "/images/products/catalog/core-cbgf7684.webp",
    imageWidth: 1254,
    imageHeight: 1254,
    imageAlt: "不锈钢蜂窝芯产品图",
    href: "/stainless-steel-honeycomb-core/",
    cta: "查看定制能力"
  },
  {
    title: "气流整流蜂窝",
    description: "用于风机、风道、流场测试和实验设备，通过蜂窝结构降低气流偏角，改善流场均匀性。",
    image: "/images/products/catalog/air-flow-eixo2102.webp",
    imageWidth: 1440,
    imageHeight: 1440,
    imageAlt: "气流整流蜂窝产品图",
    href: "/airflow-straightener/",
    cta: "查看应用"
  },
  {
    title: "风洞蜂窝",
    description: "安装于风洞稳定段，用于分割气流、抑制大尺度涡旋，为试验段提供更稳定的模拟气流环境。",
    image: "/images/products/catalog/air-flow-dyqk5468.webp",
    imageWidth: 1254,
    imageHeight: 1254,
    imageAlt: "风洞蜂窝产品图",
    href: "/wind-tunnel-honeycomb/",
    cta: "查看风洞蜂窝"
  },
  {
    title: "蜂窝密封件",
    description: "面向汽轮机、燃气轮机、压缩机等设备的蜂窝密封需求，支持高温合金、不锈钢等材料按图纸定制。",
    image: "/images/products/catalog/seal-dkcr4969.webp",
    imageWidth: 1254,
    imageHeight: 1254,
    imageAlt: "蜂窝密封件产品图",
    href: "/honeycomb-seal/",
    cta: "查看密封件"
  }
];

import { performanceNotice } from "./site";

export type FAQItem = {
  question: string;
  answer: string;
  tags?: string[];
};

export const commonFaqs: FAQItem[] = [
  {
    question: "恒实蜂窝可以按图纸定制吗？",
    answer: "可以。建议提供图纸、样品照片、材料、尺寸、孔径、厚度、边框结构、数量和应用环境。",
    tags: ["custom", "inquiry"]
  },
  {
    question: "询价时需要提供哪些信息？",
    answer: "建议提供用途、材质、孔径 / Cell Size、箔厚 / Foil Thickness、蜂窝厚度 / Depth、外形尺寸、边框结构、表面处理、图纸或草图、数量、交付地和测试要求。",
    tags: ["inquiry"]
  },
  {
    question: "能否直接给出屏蔽效能或衰减 dB？",
    answer: performanceNotice,
    tags: ["emi", "performance"]
  },
  {
    question: "是否可以使用不锈钢、铝、铜或黄铜材料？",
    answer: "可以根据产品结构和应用环境沟通 SS304、SS316、SS316L、铝、铜、黄铜、碳钢和部分镍基合金材料。",
    tags: ["materials"]
  },
  {
    question: "是否可以提供边框装配和表面处理？",
    answer: "可根据项目需求沟通切割、成型、边框装配、焊接和表面处理方式，具体以图纸和样品要求为准。",
    tags: ["process"]
  },
  {
    question: "风洞蜂窝或气流整流蜂窝的效果如何确认？",
    answer: performanceNotice,
    tags: ["airflow", "wind-tunnel", "performance"]
  }
];

export const productFaqs: Record<string, FAQItem[]> = {
  "emi-shielded-honeycomb-vent": [
    {
      question: "EMI/RFI 屏蔽蜂窝通风板适合哪些位置？",
      answer: "常用于屏蔽室、EMC 测试室、屏蔽机柜和设备通风散热位置。"
    },
    commonFaqs[2]
  ],
  "waveguide-honeycomb-vent": [
    {
      question: "蜂窝通风波导板是否可以配边框？",
      answer: "可以根据安装方式沟通边框结构、固定孔位、密封方式和表面处理。"
    },
    commonFaqs[1]
  ],
  "stainless-steel-honeycomb-core": [
    {
      question: "不锈钢蜂窝芯常用哪些材料？",
      answer: "可根据项目要求沟通 SS304、SS316、SS316L、SS310S、SS321 等不锈钢材料。"
    },
    commonFaqs[4]
  ],
  "copper-honeycomb-core": [
    {
      question: "铜蜂窝芯和黄铜蜂窝芯如何选择？",
      answer: "需结合导电性、结构强度、加工方式、表面处理和使用环境确认。"
    },
    commonFaqs[1]
  ],
  "aluminum-honeycomb-core": [
    {
      question: "铝蜂窝芯适合哪些场景？",
      answer: "常用于对重量、通风、整流或结构支撑有要求的设备和试验装置。"
    },
    commonFaqs[1]
  ],
  "airflow-straightener": [
    {
      question: "气流整流蜂窝能否用于风机出口？",
      answer: "可用于部分风机、管道和测试设备的气流整理需求，具体结构需结合流场和安装条件确认。"
    },
    commonFaqs[5]
  ],
  "wind-tunnel-honeycomb": [
    {
      question: "风洞蜂窝是否需要按设备尺寸定制？",
      answer: "通常需要结合风洞截面、蜂窝厚度、孔径、材料和安装结构定制。"
    },
    commonFaqs[5]
  ],
  "honeycomb-seal": [
    {
      question: "蜂窝密封件是否可以按图纸加工？",
      answer: "可以。建议提供图纸、材料、尺寸、公差、数量和使用工况信息。"
    },
    commonFaqs[0]
  ],
  "emi-shielded-glass": [
    {
      question: "EMI 屏蔽玻璃适合哪些应用？",
      answer: "常用于屏蔽室、屏蔽机柜、观察窗和需要可视窗口的屏蔽工程。"
    },
    commonFaqs[2]
  ],
  "custom-metal-honeycomb": [
    {
      question: "金属蜂窝定制件可以覆盖哪些方向？",
      answer: "可围绕屏蔽通风、蜂窝芯、气流整流、风洞蜂窝、密封件和特殊结构件沟通。"
    },
    commonFaqs[0]
  ]
};

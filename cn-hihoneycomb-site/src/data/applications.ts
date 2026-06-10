export type ApplicationItem = {
  slug: string;
  name: string;
  title: string;
  description: string;
  relatedProducts: string[];
};

export const applications: ApplicationItem[] = [
  {
    slug: "emi-shielding-room",
    name: "EMI屏蔽室",
    title: "EMI屏蔽室通风与屏蔽蜂窝应用",
    description: "用于屏蔽室通风口、进排风位置和设备接口，兼顾空气流通与屏蔽需求。",
    relatedProducts: ["emi-shielded-honeycomb-vent", "waveguide-honeycomb-vent", "emi-shielded-glass"]
  },
  {
    slug: "emc-test-room",
    name: "EMC测试室",
    title: "EMC测试室蜂窝通风波导板",
    description: "面向 EMC 测试环境中的屏蔽通风、观察窗口和机柜散热位置。",
    relatedProducts: ["waveguide-honeycomb-vent", "emi-shielded-honeycomb-vent", "emi-shielded-glass"]
  },
  {
    slug: "shielded-cabinet",
    name: "屏蔽机柜",
    title: "屏蔽机柜通风散热蜂窝组件",
    description: "用于屏蔽机柜、电子设备外壳和通风散热开口的蜂窝屏蔽组件。",
    relatedProducts: ["emi-shielded-honeycomb-vent", "waveguide-honeycomb-vent"]
  },
  {
    slug: "mri-shielding",
    name: "MRI屏蔽",
    title: "MRI屏蔽工程蜂窝通风与视窗应用",
    description: "用于 MRI 屏蔽空间的通风口、观察窗口和相关屏蔽结构。",
    relatedProducts: ["emi-shielded-honeycomb-vent", "emi-shielded-glass"]
  },
  {
    slug: "ventilation-cooling",
    name: "通风散热",
    title: "工业设备通风散热蜂窝组件",
    description: "用于需要通风、散热、整流或屏蔽兼顾的工业设备开口。",
    relatedProducts: ["emi-shielded-honeycomb-vent", "aluminum-honeycomb-core", "custom-metal-honeycomb"]
  },
  {
    slug: "wind-tunnel-test",
    name: "风洞试验",
    title: "风洞试验蜂窝整流器",
    description: "用于风洞入口、测试段前端或流场稳定区域，辅助改善气流均匀性。",
    relatedProducts: ["wind-tunnel-honeycomb", "airflow-straightener", "stainless-steel-honeycomb-core"]
  },
  {
    slug: "water-tunnel-test",
    name: "水洞试验",
    title: "水洞试验蜂窝整流结构",
    description: "用于水洞或流体试验装置中的流场整理与结构支撑需求。",
    relatedProducts: ["airflow-straightener", "stainless-steel-honeycomb-core", "custom-metal-honeycomb"]
  },
  {
    slug: "fan-flow-straightening",
    name: "风机整流",
    title: "风机出口气流整流蜂窝",
    description: "用于风机、管道和测试设备中需要降低旋流或改善流场稳定性的场景。",
    relatedProducts: ["airflow-straightener", "aluminum-honeycomb-core", "custom-metal-honeycomb"]
  },
  {
    slug: "flow-field-testing",
    name: "流场测试",
    title: "流场测试蜂窝整流件",
    description: "用于气流或流体测试平台中的整流、导流和流场稳定需求。",
    relatedProducts: ["airflow-straightener", "wind-tunnel-honeycomb"]
  },
  {
    slug: "steam-turbine-seal",
    name: "汽轮机密封",
    title: "汽轮机蜂窝密封件",
    description: "用于汽轮机相关密封位置，具体结构需按图纸和工况沟通。",
    relatedProducts: ["honeycomb-seal", "stainless-steel-honeycomb-core"]
  },
  {
    slug: "gas-turbine-seal",
    name: "燃气轮机密封",
    title: "燃气轮机蜂窝密封应用",
    description: "用于燃气轮机密封结构，材料与工艺需结合温度、介质和安装要求确认。",
    relatedProducts: ["honeycomb-seal", "custom-metal-honeycomb"]
  },
  {
    slug: "compressor-seal",
    name: "压缩机密封",
    title: "压缩机蜂窝密封件",
    description: "用于压缩机相关密封场景，支持按图纸沟通材料、结构和加工方式。",
    relatedProducts: ["honeycomb-seal", "stainless-steel-honeycomb-core"]
  },
  {
    slug: "industrial-noise-reduction",
    name: "工业降噪",
    title: "工业降噪与气流整理蜂窝结构",
    description: "用于部分工业设备通风、整流和降噪相关结构，具体方案需结合设备环境确认。",
    relatedProducts: ["airflow-straightener", "custom-metal-honeycomb"]
  }
];

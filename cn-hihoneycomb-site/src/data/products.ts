import { inquiryFields, performanceNotice } from "./site";
import { productFaqs, type FAQItem } from "./faqs";
import { companyProfile } from "./company";

export type ProductParameter = {
  label: string;
  value: string;
};

export type ProductItem = {
  slug: string;
  name: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  applications: string[];
  materials: string[];
  processes: string[];
  parameters: ProductParameter[];
  inquiryInfo: string[];
  faq: FAQItem[];
  related: string[];
};

const commonProcesses = companyProfile.processCapabilities;
const stainlessMaterials = ["SUS304", "SUS316L", "SS304", "SS316", "SS316L", "SS310S", "SS321"];
const shieldMaterials = ["SUS304", "SUS316L", "SPCC", "铝", "铜", "黄铜"];
const highTemperatureMaterials = ["GH3536 / Hastelloy X", "Haynes 214", "Inconel", "Hastelloy", "Monel", "高温合金"];
const commonParameters: ProductParameter[] = [
  { label: "用途", value: "按应用场景确认屏蔽、通风、整流、密封或结构需求。" },
  { label: "孔径 / Cell Size", value: "根据图纸、样品或项目要求沟通。" },
  { label: "箔厚 / Foil Thickness", value: `常见箔厚包括 ${companyProfile.foilThickness.join("、")}，具体根据材料、结构强度和加工方式确认。` },
  { label: "蜂窝厚度 / Depth", value: "根据安装空间、性能目标和结构要求确认。" },
  { label: "外形尺寸", value: "支持按图纸、草图或样品沟通。" },
  { label: "性能说明", value: performanceNotice }
];

const windTunnelParameters: ProductParameter[] = [
  ...commonParameters,
  { label: "风洞拼焊能力", value: "最大拼焊长度可达 3200mm，俯仰角、偏航角可控制在 ±0.1°以内，具体以图纸和工艺评估为准。" }
];

const sealParameters: ProductParameter[] = [
  ...commonParameters,
  { label: "芯格尺寸", value: "航空航天发动机及燃气轮机相关蜂窝芯格尺寸可围绕 0.8-6mm 需求沟通。" }
];

export const products: ProductItem[] = [
  {
    slug: "emi-shielded-honeycomb-vent",
    name: "EMI/RFI 屏蔽蜂窝通风板",
    title: "EMI屏蔽蜂窝通风板｜RFI屏蔽通风窗定制 | 恒实蜂窝",
    h1: "EMI/RFI 屏蔽蜂窝通风板",
    description: "用于屏蔽室、EMC测试室、屏蔽机柜和设备通风散热位置，兼顾通风与电磁屏蔽需求。",
    keywords: ["EMI屏蔽蜂窝通风板", "RFI屏蔽通风口", "屏蔽蜂窝通风口", "屏蔽室通风板"],
    applications: ["EMI屏蔽室", "EMC测试室", "屏蔽机柜", "MRI屏蔽", "通风散热"],
    materials: shieldMaterials,
    processes: ["拼焊", "电阻点焊", "真空钎焊", "高速数控冲压成型", "边框装配", "氩弧焊", "表面处理"],
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["emi-shielded-honeycomb-vent"],
    related: ["waveguide-honeycomb-vent", "emi-shielded-glass", "custom-metal-honeycomb"]
  },
  {
    slug: "waveguide-honeycomb-vent",
    name: "蜂窝通风波导板",
    title: "蜂窝通风波导板｜屏蔽通风口定制 | 恒实蜂窝",
    h1: "蜂窝通风波导板",
    description: "面向屏蔽通风口、波导窗、屏蔽机柜和工程屏蔽空间的金属蜂窝通风组件。",
    keywords: ["蜂窝通风波导板", "EMI屏蔽通风口", "屏蔽蜂窝通风口", "通风波导窗"],
    applications: ["EMI屏蔽室", "EMC测试室", "屏蔽机柜", "MRI屏蔽"],
    materials: shieldMaterials,
    processes: ["拼焊", "电阻点焊", "真空钎焊", "高速数控冲压成型", "边框装配", "氩弧焊", "按图纸定制"],
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["waveguide-honeycomb-vent"],
    related: ["emi-shielded-honeycomb-vent", "emi-shielded-glass", "custom-metal-honeycomb"]
  },
  {
    slug: "stainless-steel-honeycomb-core",
    name: "不锈钢蜂窝芯",
    title: "不锈钢蜂窝芯｜304/316金属蜂窝芯定制 | 恒实蜂窝",
    h1: "不锈钢蜂窝芯",
    description: "可结合 SS304、SS316、SS316L 等材料和焊接工艺，用于整流、支撑、密封或特殊结构件。",
    keywords: ["不锈钢蜂窝芯", "SS304蜂窝芯", "SS316蜂窝芯", "金属蜂窝芯"],
    applications: ["风洞试验", "水洞试验", "流场测试", "汽轮机密封", "压缩机密封"],
    materials: stainlessMaterials,
    processes: commonProcesses,
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["stainless-steel-honeycomb-core"],
    related: ["airflow-straightener", "wind-tunnel-honeycomb", "honeycomb-seal"]
  },
  {
    slug: "copper-honeycomb-core",
    name: "铜蜂窝芯 / 黄铜蜂窝芯",
    title: "铜蜂窝芯｜黄铜蜂窝芯定制 | 恒实蜂窝",
    h1: "铜蜂窝芯 / 黄铜蜂窝芯",
    description: "用于对导电性、结构形式或特定材料有要求的蜂窝芯和定制金属蜂窝组件。",
    keywords: ["铜蜂窝芯", "黄铜蜂窝芯", "铜金属蜂窝", "黄铜蜂窝"],
    applications: ["EMI屏蔽室", "屏蔽机柜", "通风散热", "金属蜂窝定制"],
    materials: ["铜", "黄铜"],
    processes: ["点焊", "激光焊", "成型", "切割", "表面处理", "按图纸定制"],
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["copper-honeycomb-core"],
    related: ["emi-shielded-honeycomb-vent", "waveguide-honeycomb-vent", "custom-metal-honeycomb"]
  },
  {
    slug: "aluminum-honeycomb-core",
    name: "铝蜂窝芯",
    title: "铝蜂窝芯｜铝合金蜂窝芯定制 | 恒实蜂窝",
    h1: "铝蜂窝芯",
    description: "适用于对重量、通风、整流或结构支撑有要求的设备和试验装置。",
    keywords: ["铝蜂窝芯", "铝金属蜂窝", "铝蜂窝定制", "轻量化蜂窝芯"],
    applications: ["通风散热", "风机整流", "流场测试", "工业降噪"],
    materials: ["铝"],
    processes: ["成型", "切割", "边框装配", "表面处理", "按图纸定制"],
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["aluminum-honeycomb-core"],
    related: ["airflow-straightener", "wind-tunnel-honeycomb", "custom-metal-honeycomb"]
  },
  {
    slug: "airflow-straightener",
    name: "气流整流蜂窝",
    title: "气流整流蜂窝｜蜂窝整流器定制 | 恒实蜂窝",
    h1: "气流整流蜂窝",
    description: "用于风机、管道、测试设备、风洞或流场测试中的气流整理与流场稳定需求。",
    keywords: ["气流整流蜂窝", "风机整流蜂窝", "气流整流器", "流场测试蜂窝"],
    applications: ["风机整流", "流场测试", "风洞试验", "水洞试验", "工业降噪"],
    materials: [...stainlessMaterials, "铝", "碳钢"],
    processes: commonProcesses,
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["airflow-straightener"],
    related: ["wind-tunnel-honeycomb", "aluminum-honeycomb-core", "stainless-steel-honeycomb-core"]
  },
  {
    slug: "wind-tunnel-honeycomb",
    name: "风洞蜂窝",
    title: "风洞蜂窝｜风洞流场整流蜂窝定制 | 恒实蜂窝",
    h1: "风洞蜂窝",
    description: "用于风洞试验、水洞试验和流场测试装置中的蜂窝整流结构，支持按设备截面定制。",
    keywords: ["风洞蜂窝", "风洞蜂窝整流器", "风洞整流蜂窝", "水洞蜂窝"],
    applications: ["风洞试验", "水洞试验", "流场测试", "航空航天实验"],
    materials: [...stainlessMaterials, "铝", "碳钢"],
    processes: commonProcesses,
    parameters: windTunnelParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["wind-tunnel-honeycomb"],
    related: ["airflow-straightener", "stainless-steel-honeycomb-core", "aluminum-honeycomb-core"]
  },
  {
    slug: "honeycomb-seal",
    name: "蜂窝密封件",
    title: "蜂窝密封件｜汽轮机与燃气轮机密封定制 | 恒实蜂窝",
    h1: "蜂窝密封件",
    description: "面向汽轮机、燃气轮机、压缩机等设备密封应用，材料、结构和工艺需结合图纸与工况确认。",
    keywords: ["蜂窝密封件", "汽轮机蜂窝密封", "燃气轮机蜂窝密封", "压缩机蜂窝密封"],
    applications: ["汽轮机密封", "燃气轮机密封", "压缩机密封"],
    materials: [...stainlessMaterials, ...highTemperatureMaterials],
    processes: ["拼焊", "激光焊", "真空钎焊", "线切割", "按图纸定制"],
    parameters: sealParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["honeycomb-seal"],
    related: ["stainless-steel-honeycomb-core", "custom-metal-honeycomb"]
  },
  {
    slug: "emi-shielded-glass",
    name: "EMI 屏蔽玻璃 / 屏蔽视窗",
    title: "EMI屏蔽玻璃｜屏蔽视窗与显示窗口定制 | 恒实蜂窝",
    h1: "EMI 屏蔽玻璃 / 屏蔽视窗",
    description: "用于屏蔽室、屏蔽机柜和工程空间中需要观察窗口与屏蔽需求并存的位置。",
    keywords: ["EMI屏蔽玻璃", "屏蔽视窗", "屏蔽玻璃", "EMI屏蔽视窗"],
    applications: ["EMI屏蔽室", "EMC测试室", "屏蔽机柜", "MRI屏蔽"],
    materials: ["屏蔽玻璃", "金属网", "导电材料", "边框材料"],
    processes: ["边框装配", "表面处理", "按图纸定制"],
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["emi-shielded-glass"],
    related: ["emi-shielded-honeycomb-vent", "waveguide-honeycomb-vent"]
  },
  {
    slug: "custom-metal-honeycomb",
    name: "金属蜂窝定制件",
    title: "金属蜂窝定制件 | 按图纸定制 | 恒实蜂窝",
    h1: "金属蜂窝定制件",
    description: "围绕屏蔽通风、蜂窝芯、气流整流、风洞蜂窝、密封件和特殊结构件提供定制沟通。",
    keywords: ["金属蜂窝定制", "金属蜂窝定制件", "按图纸定制蜂窝", "工业金属蜂窝"],
    applications: ["通风散热", "流场测试", "工业降噪", "汽轮机密封", "燃气轮机密封"],
    materials: [...stainlessMaterials, "SPCC", "碳钢", "铝", "铜", "黄铜", ...highTemperatureMaterials],
    processes: commonProcesses,
    parameters: commonParameters,
    inquiryInfo: inquiryFields,
    faq: productFaqs["custom-metal-honeycomb"],
    related: ["stainless-steel-honeycomb-core", "airflow-straightener", "honeycomb-seal"]
  }
];

export const productSeries = products.map((product) => ({
  title: product.name,
  href: `/${product.slug}/`,
  description: product.description
}));

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));

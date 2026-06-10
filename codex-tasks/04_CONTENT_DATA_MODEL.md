# 04 内容数据模型与中文文案库

在执行本步骤前，请先完成 `03_DESIGN_SYSTEM_AND_LAYOUT.md`。

## 目标

建立可维护的数据结构，把产品、应用、FAQ、SEO 信息集中管理。

## 建议数据文件

```txt
src/data/site.ts
src/data/products.ts
src/data/applications.ts
src/data/faqs.ts
src/data/navigation.ts
src/data/seo.ts
```

如果不是 TypeScript 项目，可用 JS 或 JSON。

## site 数据

包含：
- siteName: 恒实蜂窝
- companyName: 恒实（廊坊）精密机械制造有限公司
- brandEnglish: Hengshi Honeycomb
- domain: https://cn.hihoneycomb.com/
- englishSite: https://www.hihoneycomb.com/
- email: info@hengshi-emi.com
- fallbackEmail: sales@hihoneycomb.com
- address: 河北省廊坊市固安县高新区通达道2号
- description: 金属蜂窝定制厂家...

## 产品字段

每个产品至少包含：slug、name、title、h1、description、keywords、applications、materials、processes、parameters、inquiryInfo、faq、related。

## 产品列表

建立以下产品数据：
1. EMI/RFI 屏蔽蜂窝通风板
2. 蜂窝通风波导板
3. 不锈钢蜂窝芯
4. 铜蜂窝芯 / 黄铜蜂窝芯
5. 铝蜂窝芯
6. 气流整流蜂窝
7. 风洞蜂窝
8. 蜂窝密封件
9. EMI 屏蔽玻璃 / 屏蔽视窗
10. 金属蜂窝定制件

## 应用数据

EMI屏蔽室、EMC测试室、屏蔽机柜、MRI屏蔽、通风散热、风洞试验、水洞试验、风机整流、流场测试、汽轮机密封、燃气轮机密封、压缩机密封、工业降噪。

## 询价参数

每个产品页提示客户提供：用途、材质、孔径/Cell Size、箔厚/Foil Thickness、蜂窝厚度/Depth、外形尺寸、边框结构、表面处理、图纸或草图、数量、交付地、测试要求。

## 文案原则

中文自然、专业、不夸大、不虚构测试数据、不过度堆关键词。

## 输出

输出：创建的数据文件、产品数量、应用数量、FAQ 数量、后续页面如何调用。

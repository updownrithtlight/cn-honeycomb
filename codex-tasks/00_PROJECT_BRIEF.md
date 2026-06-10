# 00 项目总说明：cn.hihoneycomb.com 中文站

你是我的高级前端工程师 + B2B 工业品 SEO 工程师 + UI 设计工程师。

请严格按本项目说明工作。每次只执行我指定的任务文件，不要一次性完成全部任务。

## 目标站点

我要做的是英文官网的中文版本独立站：

- 目标中文站：https://cn.hihoneycomb.com/
- 英文官网：https://www.hihoneycomb.com/

注意：`http://hshoneycomb.cn/` 只是参考站之一，不是本次目标域名。本次所有 canonical、sitemap、robots、hreflang 的中文 URL 都必须使用：

```txt
https://cn.hihoneycomb.com/
```

## 参考站点

请参考两个站点的风格与内容方向：

1. 英文官网：https://www.hihoneycomb.com/
   - 参考其国际 B2B 风格、产品分类、外贸询盘逻辑。
   - 但要避免其模板残留，如 No data、undefined、重复文案等。

2. 中文参考站：http://hshoneycomb.cn/
   - 参考其中文产品词和国内客户搜索习惯。
   - 例如：蜂窝通风波导板、EMI屏蔽通风口、屏蔽蜂窝通风口、不锈钢蜂窝芯等。
   - 不要复制该站代码、图片和页面内容。

## 公司与品牌

公司名称：
- 恒实（廊坊）精密机械制造有限公司
- 恒实蜂窝
- Hengshi Honeycomb

定位：
- 金属蜂窝定制厂家
- 工业金属蜂窝解决方案供应商
- 面向 EMI/RFI 屏蔽、气流整流、风洞测试、蜂窝密封、屏蔽视窗等应用

## 主要产品

围绕以下产品建设中文站：

1. EMI/RFI 屏蔽蜂窝通风板
2. 蜂窝通风波导板
3. 不锈钢蜂窝芯
4. 铜蜂窝芯 / 黄铜蜂窝芯
5. 铝蜂窝芯
6. 气流整流蜂窝
7. 风洞蜂窝
8. 蜂窝密封件
9. 屏蔽玻璃 / EMI 屏蔽视窗
10. 金属蜂窝定制件

## 材料能力

可自然出现：SS304、SS316、SS316L、SS310S、SS321、碳钢、铝、铜、黄铜、镍基合金、Inconel、Hastelloy、Monel。

## 工艺能力

可自然出现：点焊、激光焊、真空钎焊、成型、切割、边框装配、表面处理、按图纸定制。

涉及屏蔽效能、衰减 dB、风洞整流效果、密封性能时，不要凭空给数值。统一使用谨慎表述：

> 具体性能与材料、孔径、厚度、表面处理、安装方式和测试条件有关，可根据项目要求沟通样品或测试资料。

## 应用场景

自然覆盖：EMI屏蔽室、EMC测试室、屏蔽机柜、MRI屏蔽、通风散热、风洞试验、水洞试验、风机整流、流场测试、航空航天实验、汽轮机密封、燃气轮机密封、压缩机密封、工业降噪。

## 内容风格

- 中文表达自然；
- 专业、工程型、B2B；
- 适合采购、工程师、设备厂、设计院阅读；
- 不要机器翻译腔；
- 不要夸大宣传；
- 不要虚构客户案例、认证、检测报告；
- 不要出现 No data、undefined、零售价、市场价、元、空 keyword。

## 技术原则

优先方案：
1. Astro 静态站；
2. Next.js 静态导出；
3. 纯 HTML + CSS + JS 静态站。

不要做成纯客户端 SPA。要求每个页面是独立 URL，可静态构建，可用 Nginx 部署，移动端友好。

## 执行顺序

1. 01_REFERENCE_AUDIT_AND_STYLE.md
2. 02_TECH_STACK_AND_SCAFFOLD.md
3. 03_DESIGN_SYSTEM_AND_LAYOUT.md
4. 04_CONTENT_DATA_MODEL.md
5. 05_CREATE_CORE_PAGES.md
6. 06_CREATE_PRODUCT_PAGES.md
7. 07_SEO_TECH_FILES.md
8. 08_DEPLOYMENT.md
9. 09_QA_AND_DELIVERY.md

每一步完成后输出：本步完成了什么、创建/修改了哪些文件、如何验证、是否需要我确认后继续。

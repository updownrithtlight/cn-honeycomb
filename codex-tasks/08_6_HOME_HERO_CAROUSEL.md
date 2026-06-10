# 08.6 首页产品系列轮播 Hero

请读取 `codex-tasks/00_PROJECT_BRIEF.md`，并结合当前 Astro 静态站项目结构执行本任务。

## 一、当前项目

项目目录：

```txt
D:\dev\heng\cn\cn-hihoneycomb-site
```

技术栈：

```txt
Astro 静态站
Nginx 静态部署
Docker 多阶段构建
```

目标站点：

```txt
https://cn.hihoneycomb.com/
```

注意：

```txt
hshoneycomb.cn 只是参考站，不是目标站。
不要把 hshoneycomb.cn 写入 canonical、sitemap、hreflang 或站内链接。
```

## 二、本轮目标

将首页当前 Hero 区优化为“产品系列轮播 Banner”。

轮播内容要求：

```txt
不同系列产品的代表图片 + 产品系列标题 + 简短描述 + CTA 按钮
```

本轮只处理首页轮播，不要重构全站，不要处理 Docker、Nginx、CMS、数据库。

## 三、轮播系列建议

请设置 6 个首页轮播项：

### 1. EMI/RFI 屏蔽蜂窝通风板

标题：

```txt
EMI/RFI 屏蔽蜂窝通风板
```

描述：

```txt
用于屏蔽室、EMC 测试室、屏蔽机柜和 MRI 屏蔽等场景，在满足通风散热需求的同时实现电磁屏蔽。
```

图片：

```txt
/images/products/emi-shielded-honeycomb-vent-01.jpg
```

链接：

```txt
/emi-shielded-honeycomb-vent/
```

CTA：

```txt
查看产品
```

---

### 2. 蜂窝通风波导板

标题：

```txt
蜂窝通风波导板
```

描述：

```txt
基于金属蜂窝波导截止结构，适用于屏蔽通风口、设备舱段、屏蔽机柜等需要兼顾通风与屏蔽的场景。
```

图片：

```txt
/images/products/waveguide-honeycomb-vent-01.jpg
```

链接：

```txt
/waveguide-honeycomb-vent/
```

CTA：

```txt
了解波导板
```

---

### 3. 不锈钢蜂窝芯

标题：

```txt
不锈钢蜂窝芯
```

描述：

```txt
支持 304、316L、310S 等材料定制，可根据孔径、箔厚、厚度、外形尺寸和应用场景进行生产。
```

图片：

```txt
/images/products/stainless-steel-honeycomb-core-01.jpg
```

链接：

```txt
/stainless-steel-honeycomb-core/
```

CTA：

```txt
查看定制能力
```

---

### 4. 气流整流蜂窝

标题：

```txt
气流整流蜂窝
```

描述：

```txt
用于风机、风道、流场测试和实验设备，通过蜂窝结构降低气流偏角，改善流场均匀性。
```

图片：

```txt
/images/products/airflow-straightener-01.jpg
```

链接：

```txt
/airflow-straightener/
```

CTA：

```txt
查看应用
```

---

### 5. 风洞蜂窝

标题：

```txt
风洞蜂窝
```

描述：

```txt
安装于风洞稳定段，用于分割气流、抑制大尺度涡旋，为试验段提供更稳定的模拟气流环境。
```

图片：

```txt
/images/products/wind-tunnel-honeycomb-01.jpg
```

链接：

```txt
/wind-tunnel-honeycomb/
```

CTA：

```txt
查看风洞蜂窝
```

---

### 6. 蜂窝密封件

标题：

```txt
蜂窝密封件
```

描述：

```txt
面向汽轮机、燃气轮机、压缩机等设备的蜂窝密封需求，支持高温合金、不锈钢等材料按图纸定制。
```

图片：

```txt
/images/products/honeycomb-seal-01.jpg
```

链接：

```txt
/honeycomb-seal/
```

CTA：

```txt
查看密封件
```

## 四、数据结构

请优先创建或修改：

```txt
src/data/home.ts
```

增加：

```ts
export const heroSlides = [
  {
    title: "EMI/RFI 屏蔽蜂窝通风板",
    description: "用于屏蔽室、EMC 测试室、屏蔽机柜和 MRI 屏蔽等场景，在满足通风散热需求的同时实现电磁屏蔽。",
    image: "/images/products/emi-shielded-honeycomb-vent-01.jpg",
    imageAlt: "EMI/RFI屏蔽蜂窝通风板产品图",
    href: "/emi-shielded-honeycomb-vent/",
    cta: "查看产品"
  }
];
```

请补齐 6 个 slide。

如果当前项目已有首页数据文件，请在原数据文件基础上扩展，不要重复创建冲突数据。

## 五、组件要求

请创建或修改组件：

```txt
src/components/HeroCarousel.astro
```

如果已有 Hero 组件，请优先复用样式，但不要破坏其他页面 Hero。

组件要求：

1. 支持 6 个 slide；
2. 每个 slide 显示：

   * 标题；
   * 描述；
   * 产品图片；
   * CTA 按钮；
3. 支持左右切换按钮；
4. 支持底部圆点指示器；
5. 支持自动轮播；
6. 鼠标悬停时暂停自动轮播；
7. 移动端适配；
8. 图片不得拉伸变形；
9. 图片缺失时使用占位图；
10. 不引入大型第三方轮播库；
11. 优先使用 Astro + 少量原生 JS；
12. 不要把整个站改成客户端渲染；
13. 保持 SEO 友好，首屏内容要在 HTML 中可见。

## 六、占位图规则

如果图片文件不存在，请使用：

```txt
/images/placeholders/product-placeholder.svg
```

不要出现 broken image。

如果该占位图不存在，请创建它。

## 七、首页接入

请修改首页：

```txt
src/pages/index.astro
```

将原首页 Hero 替换或升级为：

```txt
HeroCarousel
```

要求：

1. 首页首屏显示轮播；
2. 首页 H1 仍然只能有一个；
3. 推荐 H1 保留：

   ```txt
   金属蜂窝定制厂家
   ```
4. 每个轮播标题不要都作为 H1，可以用 H2 或普通标题；
5. 不要破坏首页原有模块：

   * 核心产品
   * 定制能力
   * 应用领域
   * 为什么选择恒实蜂窝
   * 询价流程
   * 企业新闻
   * FAQ
   * 联系 CTA

## 八、样式要求

轮播风格：

```txt
工业制造感
深蓝 + 白色 + 金属灰
图片占比较大
文字清晰
CTA 明显
```

建议布局：

桌面端：

```txt
左侧文字
右侧图片
```

或者：

```txt
背景图 + 深蓝渐变遮罩 + 左侧文字
```

移动端：

```txt
上方图片
下方文字
按钮居中或左对齐
```

要求：

1. 轮播高度不要过高；
2. 首屏加载速度优先；
3. 不要使用过度动画；
4. 不要造成 CLS 明显布局偏移；
5. 图片设置宽高或固定比例；
6. 按钮有 hover 效果；
7. 圆点和箭头可点击；
8. 键盘可访问更好。

## 九、SEO 和性能要求

1. 首页 title、description、canonical、hreflang 不要改坏；
2. 不要改 sitemap 域名；
3. 不要改 robots；
4. 轮播第一屏内容必须在 HTML 中可见；
5. 图片 alt 必须完整；
6. 不要使用外链图片；
7. 不要抓取参考站图片；
8. 不要把 hshoneycomb.cn 写进页面；
9. 不要出现 undefined；
10. 不要出现 No data；
11. 不要出现 broken image；
12. 不要出现 WhatsApp。

## 十、轮播 JS 要求

如果需要 JS，请写成轻量原生 JS。

功能：

1. 默认每 5 秒切换一次；
2. 点击上一张 / 下一张；
3. 点击圆点切换；
4. 鼠标悬停暂停；
5. 鼠标离开恢复；
6. 页面不可见时暂停；
7. 不要依赖 window.onload 的复杂逻辑；
8. 不要影响 Astro 静态构建。

## 十一、构建验证

完成后执行：

```bash
npm run build
```

并检查：

```txt
dist/index.html
```

确认首页构建成功。

请同时检查：

1. 首页只有一个 H1；
2. 轮播图片 alt 存在；
3. 轮播按钮可点击；
4. 移动端布局不溢出；
5. 没有 broken image；
6. 没有 undefined；
7. 没有 No data。

## 十二、输出报告

完成后请输出：

```md
# 首页产品系列轮播完成报告

## 一、本轮完成内容

## 二、新增/修改文件

## 三、轮播数据列表

## 四、首页接入位置

## 五、图片 fallback 逻辑

## 六、SEO 检查结果

## 七、构建验证结果

## 八、仍需人工替换的真实图片
```

## 十三、禁止事项

本轮不要做：

1. 不要接 CMS；
2. 不要做后台；
3. 不要引入数据库；
4. 不要重构全站路由；
5. 不要改 Docker / Nginx；
6. 不要改 canonical 域名；
7. 不要使用 hshoneycomb.cn 作为目标站；
8. 不要抓取参考站图片；
9. 不要展示 WhatsApp；
10. 不要把占位文字展示到前台。

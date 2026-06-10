# 09 最终自检与交付报告

在执行本步骤前，请先完成 `08_DEPLOYMENT.md`。

## 目标

对 `cn.hihoneycomb.com` 中文站做最终检查、修复明显问题，并输出交付报告。

## 检查

1. 依赖安装：npm install；
2. 构建：npm run build；
3. 本地预览：npm run preview 或说明预览方式；
4. 页面存在：/, /products/, /emi-shielded-honeycomb-vent/, /waveguide-honeycomb-vent/, /stainless-steel-honeycomb-core/, /copper-honeycomb-core/, /aluminum-honeycomb-core/, /airflow-straightener/, /wind-tunnel-honeycomb/, /honeycomb-seal/, /emi-shielded-glass/, /custom-metal-honeycomb/, /applications/, /about/, /contact/, /articles/；
5. SEO：title 唯一、description 唯一、每页一个 H1、canonical 指向 cn.hihoneycomb.com 自己、hreflang 存在、Open Graph 存在、sitemap、robots、404、图片 alt、内链；
6. 内容问题：No data、undefined、lorem ipsum、零售价、市场价、元、空 keyword、假数据、虚假认证、虚假测试报告、虚假客户案例、夸大宣传、机器翻译腔；
7. 移动端：导航可用、表格不撑破屏幕、CTA 明显、无明显横向滚动。

## 交付报告格式

```md
# cn.hihoneycomb.com 中文站交付报告

## 一、完成内容
## 二、创建/修改文件清单
## 三、页面清单
## 四、本地运行方式
## 五、构建方式
## 六、部署方式
## 七、SEO 配置情况
## 八、需要人工替换的内容
- 邮箱
- 电话
- WhatsApp
- 产品图片
- 备案号
- 真实检测报告
- 真实案例
## 九、给英文官网服务商的中文入口代码
## 十、上线后要做的事
- 配置 DNS
- 配置 HTTPS
- 提交 sitemap
- 百度资源平台验证
- Bing Webmaster Tools 验证
- Google Search Console 验证
- 检查收录
## 十一、后续优化建议
```

如果某些命令无法执行，不要假装成功，请明确说明原因。

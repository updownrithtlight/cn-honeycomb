# 08 部署：Docker、Nginx、DNS、HTTPS

在执行本步骤前，请先完成 `07_SEO_TECH_FILES.md`。

## 目标

让中文站可部署到：

```txt
https://cn.hihoneycomb.com/
```

## 需要生成或完善

Dockerfile、docker-compose.yml、nginx.conf、README.md 部署说明。

## Dockerfile

构建型项目使用多阶段构建：Node 构建静态文件，Nginx 托管静态文件。纯静态站直接用 Nginx 拷贝文件。

## docker-compose.yml

服务名：
```txt
cn-hihoneycomb-site
```

示例端口：
```txt
8088:80
```

配置：restart: unless-stopped。

## Nginx

server_name：
```nginx
server_name cn.hihoneycomb.com;
```

要求：静态文件、gzip、HTML 不长期强缓存、CSS/JS/images 可长缓存、404 页面有效、不要把所有页面都重写到 index.html，除非项目确实是 SPA。

## README 必须包含

本地开发、构建、本地预览、Docker 部署、Nginx 部署、DNS 解析、HTTPS 证书、上线后 SEO 提交、需要人工替换内容。

## DNS 提示

提醒我把：

```txt
cn.hihoneycomb.com
```

解析到服务器 IP，或者绑定到 Cloudflare Pages / Vercel / Netlify 等静态托管平台。

## HTTPS 提示

服务器部署可用 Nginx + Certbot；静态托管通常自动提供 HTTPS；也可使用 Cloudflare 代理。

## 输出

输出：部署文件、本地命令、构建命令、Docker 启动命令、Nginx 部署路径、DNS 设置、HTTPS 建议。

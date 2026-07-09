# CN 站生产发布提示词

下次需要发布 `cn-hihoneycomb-site` 到生产环境时，直接把下面这段提示词发给 Codex：

```text
请把 D:\dev\heng\cn\cn-hihoneycomb-site 发布到生产环境。
要求：
1. 先在本地检查并提交需要上线的改动，然后推送到 GitHub `origin/main`。
2. 必须使用 WSL `Ubuntu-D` 和 `ssh racknerd-148` 操作生产机。
3. 生产机代码目录是 `/opt/cn-hihoneycomb-site/current`，Git 仓库根目录在这里，但真正的网站项目目录是 `/opt/cn-hihoneycomb-site/current/cn-hihoneycomb-site`。
4. 生产发布不要用旧的打包上传流程，直接走 GitHub 拉代码：
   - 确认 `/opt/cn-hihoneycomb-site/current` 是 Git checkout，并更新到 `origin/main`
   - 如果不是 Git checkout，就重新 clone `https://github.com/updownrithtlight/cn-honeycomb.git` 到 `/opt/cn-hihoneycomb-site/current`
5. 服务器根目录保留生产 `.env`：`/opt/cn-hihoneycomb-site/.env`
   发布前必须复制到：
   `/opt/cn-hihoneycomb-site/current/cn-hihoneycomb-site/.env`
6. Docker Compose 必须从真正项目目录运行，并且必须显式指定：
   - `--project-directory /opt/cn-hihoneycomb-site/current/cn-hihoneycomb-site`
   - `-f /opt/cn-hihoneycomb-site/current/cn-hihoneycomb-site/docker-compose.yml`
7. 不要直接信任 `.env` 里的 `IMAGE_TAG`，发布时必须显式覆盖成当前提交的 short sha，例如：
   `IMAGE_TAG=$(git -C /opt/cn-hihoneycomb-site/current rev-parse --short HEAD)`
8. 启动命令要强制重建并替换旧容器：
   `docker compose ... up -d --build --force-recreate cn-hihoneycomb-site`
9. 发布后必须验证：
   - `curl -fsS http://127.0.0.1:8088/api/health`
   - `https://cn.hihoneycomb.com/`
   - 本次新增或修改的页面 URL（比如新闻详情页）
10. 如果出现 502，先检查：
   - `docker ps -a --filter name=cn-hihoneycomb-site`
   - `curl -i http://127.0.0.1:8088/api/health`
   - `tail -n 80 /var/log/nginx/error.log`
   重点判断是不是 Nginx 代理到 `127.0.0.1:8088`，但后端容器没跑。
11. 完成后告诉我：
   - Git 提交号
   - 生产容器实际运行的镜像 tag
   - 公网验证结果
```

## 这次已验证的关键事实

- GitHub 仓库：`git@github.com:updownrithtlight/cn-honeycomb.git`
- 生产 SSH：`wsl.exe -d Ubuntu-D -- ssh racknerd-148`
- 生产域名：`https://cn.hihoneycomb.com`
- Nginx 上游：`127.0.0.1:8088`
- 当前成功上线的提交：`9699ec1`
- 当前新增新闻页示例：`/news/asme-turbo-expo-2026-milan/`

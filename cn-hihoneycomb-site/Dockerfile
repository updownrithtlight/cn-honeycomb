FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
ARG NPM_CONFIG_REGISTRY=https://registry.npmmirror.com
RUN npm ci

COPY . .
ARG PUBLIC_SITE_ORIGIN
ARG PUBLIC_TURNSTILE_SITE_KEY
ARG PUBLIC_AMAP_JS_KEY
ARG PUBLIC_AMAP_SECURITY_JS_CODE
ARG PUBLIC_ANALYTICS_PROVIDER
ARG PUBLIC_ANALYTICS_ID
RUN npm run build

FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.mjs ./server.mjs

EXPOSE 4321

CMD ["node", "server.mjs"]

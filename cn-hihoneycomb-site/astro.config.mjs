import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cn.hihoneycomb.com",
  output: "static",
  vite: {
    cacheDir: ".vite-cache-03"
  }
});

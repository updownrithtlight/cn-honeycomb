import { products } from "./products";

export const mainNavigation = [
  { href: "/", label: "首页" },
  { href: "/products/", label: "产品中心" },
  { href: "/applications/", label: "应用领域" },
  { href: "/custom-metal-honeycomb/", label: "定制能力" },
  { href: "/technical/", label: "技术文章" },
  { href: "/news/", label: "企业新闻" },
  { href: "/about/", label: "关于我们" },
  { href: "/contact/", label: "联系我们" }
];

export const footerProductNavigation = products.slice(0, 6).map((product) => ({
  href: `/${product.slug}/`,
  label: product.name
}));

export const reservedRoutes = [
  "/",
  "/products/",
  ...products.map((product) => `/${product.slug}/`),
  "/applications/",
  "/news/",
  "/about/",
  "/contact/",
  "/articles/",
  "/technical/"
];

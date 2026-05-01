import type { MetadataRoute } from "next";

const BASE = "https://sevnth.day";

const STATIC_PATHS = [
  "/",
  "/grow",
  "/rebuild",
  "/handover",
  "/catchup",
  "/services",
  "/services/websites",
  "/services/local-seo",
  "/services/ai-lead-capture",
  "/services/audit",
  "/cases",
  "/cases/nw-garage-doors",
  "/cases/copper-fox-gutters",
  "/cases/flawless-aesthetics",
  "/about",
  "/pricing",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return STATIC_PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://seventh.day/sitemap.xml",
    host: "https://seventh.day",
  };
}

import type { MetadataRoute } from "next";
import { navItems, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navItems.map((item) => ({ url: `${site.url}${item.href}` }));
}

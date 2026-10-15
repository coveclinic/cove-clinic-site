import type { MetadataRoute } from "next";
import { footer, nav, site } from "@/lib/content";
import { treatmentSlugs } from "@/lib/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  // The nav's pages, the treatments index and every treatment page.
  const pages = [...nav.links.map((l) => l.href), ...treatmentSlugs.map((s) => `/treatments/${s}`), ...footer.legal.map((l) => l.href)];
  const unique = Array.from(new Set(pages));
  return unique.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/privacy" || path === "/terms" ? 0.2 : 0.7,
  }));
}

import type { MetadataRoute } from "next";
import { abs } from "@/data/site";
import { allRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allRoutes().map((r) => ({
    url: abs(r.path),
    lastModified: r.lastModified ? new Date(r.lastModified) : now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

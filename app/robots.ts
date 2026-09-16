import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/site";
import { DISALLOWED_PATHS } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Pre-emptively excluded: none of these exist yet, but if an admin,
        // dashboard or auth route is ever added it must not become indexable.
        disallow: DISALLOWED_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

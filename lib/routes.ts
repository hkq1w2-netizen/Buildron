import { SERVICE_PAGES } from "@/data/service-pages";
import { SOLUTION_PAGES } from "@/data/solution-pages";
import { CASE_STUDIES } from "@/data/case-studies";
import { GUIDES } from "@/data/guides";
import { AUTOMATION_INDUSTRIES } from "@/data/automation-industries";

/**
 * Single registry of every indexable route.
 * The sitemap is generated from this, so a new page can never be orphaned
 * from the sitemap by accident.
 */
export type RouteEntry = { path: string; changeFrequency: "daily" | "weekly" | "monthly" | "yearly"; priority: number; lastModified?: string };

export const STATIC_ROUTES: RouteEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.7 },
  { path: "/web-development-faisalabad", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export function allRoutes(): RouteEntry[] {
  return [
    ...STATIC_ROUTES,
    ...SERVICE_PAGES.map((s) => ({ path: `/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...SOLUTION_PAGES.map((s) => ({ path: `/solutions/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...CASE_STUDIES.map((c) => ({ path: `/case-studies/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...GUIDES.map((g) => ({ path: `/guides/${g.slug}`, changeFrequency: "monthly" as const, priority: 0.6, lastModified: g.updated })),
    ...AUTOMATION_INDUSTRIES.map((p) => ({ path: `/ai-automation/${p.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}

/** Routes that must never be indexed if they are ever added. */
export const DISALLOWED_PATHS = ["/api/", "/admin", "/dashboard", "/login", "/register", "/account", "/_next/static/chunks/"];

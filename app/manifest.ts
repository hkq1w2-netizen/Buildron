import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.descriptor}`,
    short_name: SITE.name,
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#1e3aff",
    icons: [{ src: "/images/favicon.png", sizes: "any", type: "image/png" }],
  };
}

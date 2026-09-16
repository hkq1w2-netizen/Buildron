export const SITE = {
  name: "Buildron",
  legalName: "Buildron",
  descriptor: "Digital Systems",
  tagline: "Websites, business software and AI automation for Pakistani businesses.",
  email: "buildron.official@gmail.com",
  phone: "+92 328 6207176",
  phoneE164: "+923286207176",
  whatsapp: "https://wa.me/923286207176",
  url: "https://www.buildron.online",
  city: "Faisalabad",
  region: "Punjab",
  country: "Pakistan",
  countryCode: "PK",
  founded: "2024",
  areaServed: ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Pakistan"],
  ogImage: "/images/og-image.jpg",
} as const;

/** Single source of truth for the production origin. */
export const SITE_URL = SITE.url;

/** Absolute URL helper — never emit relative URLs into schema or sitemaps. */
export function abs(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

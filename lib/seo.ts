import type { Metadata } from "next";
import { SITE, SITE_URL, abs } from "@/data/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  /** Set false for thin/private/utility pages that should stay out of the index. */
  index?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Builds consistent, canonical-correct metadata for every route.
 * Canonical is always absolute and always on the production origin.
 */
export function pageMeta({
  title,
  description,
  path,
  image = SITE.ogImage,
  keywords,
  index = true,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const url = abs(path);
  return {
    // Absolute: these titles already carry the brand, so the root layout's
    // "%s | Buildron" template must not append a second suffix.
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
      : { index: false, follow: false, nocache: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_PK",
      type,
      images: [{ url: abs(image), width: 1200, height: 630, alt: `${SITE.name} — ${SITE.descriptor}` }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [abs(image)],
    },
  };
}

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* Only emit schema that matches content actually visible on the page.  */
/* ------------------------------------------------------------------ */

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE_URL,
    email: SITE.email,
    telephone: SITE.phoneE164,
    description:
      "Buildron is a digital systems agency in Faisalabad, Pakistan. It builds websites, e-commerce stores, custom ERP and business software, AI automation and AI chatbots for Pakistani and international businesses.",
    foundingDate: SITE.founded,
    image: abs(SITE.ogImage),
    logo: { "@type": "ImageObject", url: abs("/images/favicon.png") },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    },
    areaServed: SITE.areaServed.map((n) => ({ "@type": "AdministrativeArea", name: n })),
    knowsAbout: [
      "Web development",
      "AI automation",
      "ERP software",
      "E-commerce development",
      "Search engine optimization",
      "AI chatbots",
      "Business process automation",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        telephone: SITE.phoneE164,
        areaServed: SITE.countryCode,
        availableLanguage: ["en", "ur"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function webPageSchema(opts: { path: string; name: string; description: string }) {
  return {
    "@type": "WebPage",
    "@id": `${abs(opts.path)}#webpage`,
    url: abs(opts.path),
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: abs(opts.path),
    provider: { "@id": ORG_ID },
    areaServed: SITE.areaServed.map((n) => ({ "@type": "AdministrativeArea", name: n })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  published: string;
  updated: string;
}) {
  return {
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: abs(opts.path),
    mainEntityOfPage: { "@id": `${abs(opts.path)}#webpage` },
    datePublished: opts.published,
    dateModified: opts.updated,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export function caseStudySchema(opts: { name: string; description: string; path: string }) {
  return {
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    creator: { "@id": ORG_ID },
  };
}

/** Wraps any set of nodes into a single valid @graph document. */
export function graph(nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

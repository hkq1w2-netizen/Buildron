import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE, SITE_URL, abs } from "@/data/site";
import { graph, organizationSchema, websiteSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Web Development & AI Automation Company in Pakistan | Buildron",
    template: "%s | Buildron",
  },
  description:
    "Buildron is a web development, AI automation, SEO and digital systems company in Pakistan, building websites, web applications, ecommerce stores, ERP software and automated workflows.",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: SITE_URL },
  openGraph: { type: "website", siteName: SITE.name, locale: "en_PK", url: SITE_URL },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
    apple: [{ url: "/images/favicon.png" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: true, email: true, address: false },
  other: { "geo.region": "PK-PB", "geo.placename": SITE.city },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        {/* Site-wide entity definition. Page-level schema references these by @id. */}
        <JsonLd data={graph([organizationSchema(), websiteSchema()])} />
        <link rel="alternate" type="application/xml" title="Sitemap" href={abs("/sitemap.xml")} />
      </head>
      <body className="font-sans bg-ink text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-volt focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

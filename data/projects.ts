export type Project = {
  title: string;
  /** Slug of the matching case study page. */
  slug: string;
  category: string;
  desc: string;
  capabilities: string[];
  image: string;
  /** Present only for projects with a publicly reachable live site. */
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "DevKitLab",
    slug: "devkitlab-developer-tools",
    category: "Product / Developer Tools",
    desc: "A browser-based developer utility suite \u2014 JSON, encoding, regex, colour and time tools \u2014 where every operation runs client-side and no user data reaches a server.",
    capabilities: ["Product Build", "Client-Side Architecture", "Tool Suite", "SEO"],
    image: "/images/project-devkitlab.jpg",
    liveUrl: "https://www.devkitlab.online/",
  },
  {
    title: "Fashion E-Commerce Experience",
    slug: "fashion-ecommerce-experience",
    category: "E-Commerce / Fashion",
    desc: "A conversion-focused fashion storefront with editorial product presentation and a streamlined checkout flow.",
    capabilities: ["Custom Storefront", "Product System", "Checkout", "Mobile UX"],
    image: "/images/project-fashion.jpg",
  },
  {
    title: "Real Estate Digital Platform",
    slug: "real-estate-digital-platform",
    category: "Real Estate",
    desc: "Property discovery platform with search, listings and lead capture built for a modern real-estate workflow.",
    capabilities: ["Listings", "Search", "Lead Capture", "Responsive"],
    image: "/images/project-realestate.jpg",
  },
  {
    title: "Restaurant Digital Experience",
    slug: "",
    category: "Hospitality",
    desc: "Menu, reservations and brand storytelling combined into a warm, fast digital experience.",
    capabilities: ["Menu System", "Reservations", "Brand Design"],
    image: "/images/project-restaurant.jpg",
  },
  {
    title: "SaaS Analytics Dashboard",
    slug: "saas-analytics-dashboard",
    category: "SaaS / Web Application",
    desc: "A multi-role analytics product with real-time data views, reporting and a scalable component architecture.",
    capabilities: ["Dashboards", "Data Visualization", "Role-Based Access"],
    image: "/images/project-saas.jpg",
  },
  {
    title: "Manufacturing ERP System",
    slug: "manufacturing-erp-system",
    category: "ERP / Business Software",
    desc: "Centralized business system covering sales, inventory, production and accounts for a manufacturing operation.",
    capabilities: ["Sales", "Inventory", "Production", "Accounts"],
    image: "/images/project-erp.jpg",
  },
  {
    title: "AI Lead Automation Pipeline",
    slug: "ai-lead-automation-pipeline",
    category: "AI Automation",
    desc: "End-to-end lead handling: capture, AI qualification, CRM sync, WhatsApp follow-up and booked appointments.",
    capabilities: ["Lead Capture", "AI Qualification", "WhatsApp", "CRM Sync"],
    image: "/images/project-aiflow.jpg",
  },
  {
    title: "Corporate Digital Presence",
    slug: "corporate-digital-presence",
    category: "Corporate Website",
    desc: "A premium corporate website with strong typography, clear service architecture and performance-first build.",
    capabilities: ["Corporate UX", "Performance", "SEO Foundation"],
    image: "/images/project-corporate.jpg",
  },
  {
    title: "Direct-to-Consumer Store",
    slug: "direct-to-consumer-store",
    category: "E-Commerce",
    desc: "A DTC store with product storytelling, fast checkout and analytics-driven merchandising.",
    capabilities: ["DTC Storefront", "Payments", "Analytics"],
    image: "/images/project-store.jpg",
  },
];

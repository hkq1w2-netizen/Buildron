export type Service = {
  id: string;
  /** Route of the dedicated service page. */
  slug: string;
  num: string;
  title: string;
  tag: string;
  desc: string;
  points: string[];
  cta: string;
  message: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    id: "websites",
    slug: "web-development",
    num: "01",
    title: "Website Development",
    tag: "Premium Websites",
    desc: "Custom websites engineered around brand, UX, conversion, performance and SEO.",
    points: ["Brand & UX", "Conversion Focus", "Performance", "SEO", "Mobile", "Animation", "Scalability"],
    cta: "Build My Website",
    message: "Hi Buildron, I want to discuss a website project.",
    image: "/images/service-website.jpg",
  },
  {
    id: "webapps",
    slug: "custom-business-systems",
    num: "02",
    title: "Web Applications",
    tag: "Custom Digital Products",
    desc: "SaaS platforms, portals, dashboards and internal tools built around real workflows.",
    points: ["SaaS Platforms", "Customer Portals", "Dashboards", "Internal Systems", "Custom Tools"],
    cta: "Build My Platform",
    message: "Hi Buildron, I want to discuss a web application.",
    image: "/images/service-webapp.jpg",
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    num: "03",
    title: "E-Commerce",
    tag: "Digital Commerce",
    desc: "Online stores with product systems, cart, checkout, payments and analytics.",
    points: ["Online Stores", "Cart & Checkout", "Payments", "Orders", "Customer Accounts", "Analytics"],
    cta: "Build My Store",
    message: "Hi Buildron, I want to discuss an e-commerce project.",
    image: "/images/service-ecommerce.jpg",
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    num: "04",
    title: "AI Automation",
    tag: "Intelligent Automation",
    desc: "Automate lead capture, qualification, CRM, WhatsApp, email and appointments.",
    points: ["Lead Capture", "Qualification", "CRM Workflows", "WhatsApp", "Email", "Appointments", "Support"],
    cta: "Automate My Business",
    message: "Hi Buildron, I want to discuss AI automation for my business.",
    image: "/images/service-automation.jpg",
  },
  {
    id: "ai-agents",
    slug: "ai-chatbots",
    num: "05",
    title: "AI Agents",
    tag: "AI-Powered Assistants",
    desc: "AI systems for sales, support, FAQs, knowledge retrieval and lead qualification.",
    points: ["Sales", "Support", "FAQs", "Knowledge Retrieval", "Qualification", "Workflow Triggering"],
    cta: "Build My AI Agent",
    message: "Hi Buildron, I want to discuss an AI agent for my business.",
    image: "/images/service-aiagent.jpg",
  },
  {
    id: "erp",
    slug: "erp-development",
    num: "06",
    title: "Business Software",
    tag: "ERP & Business Systems",
    desc: "Custom systems for sales, inventory, production, purchasing, accounts and analytics.",
    points: ["Sales", "Inventory", "Production", "Purchasing", "Accounts", "Suppliers", "Analytics"],
    cta: "Build My System",
    message: "Hi Buildron, I want to discuss a custom business software/ERP project.",
    image: "/images/service-erp.jpg",
  },
  {
    id: "seo",
    slug: "seo",
    num: "07",
    title: "SEO",
    tag: "Digital Growth",
    desc: "Technical SEO, keyword strategy and content optimization for search visibility.",
    points: ["Technical SEO", "On-Page", "Keyword Strategy", "Content", "Local SEO", "Performance"],
    cta: "Grow My Visibility",
    message: "Hi Buildron, I'm interested in SEO services.",
    image: "/images/service-seo.jpg",
  },
  {
    id: "social",
    slug: "social-media-marketing",
    num: "08",
    title: "Social Media",
    tag: "Content & Social Growth",
    desc: "Content strategy, social management, creative direction and growth optimization.",
    points: ["Content Strategy", "Management", "Creative Direction", "Planning", "Analytics", "Growth"],
    cta: "Grow My Brand",
    message: "Hi Buildron, I'm interested in social media services.",
    image: "/images/service-social.jpg",
  },
];

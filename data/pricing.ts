export type Plan = {
  name: string;
  price: string;
  label?: string;
  features: string[];
  cta: string;
  message: string;
  featured?: boolean;
};

export const WEB_PLANS: Plan[] = [
  {
    name: "Starter",
    price: "Rs. 40,000 – 60,000",
    features: [
      "Custom responsive website",
      "Modern UI/UX",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact/lead forms",
      "Performance optimization",
      "Deployment",
    ],
    cta: "Start Starter Project",
    message: "Hi Buildron, I'm interested in the Web Development Starter package.",
  },
  {
    name: "Growth",
    price: "Rs. 80,000 – 150,000",
    label: "MOST POPULAR",
    features: [
      "Everything in Starter",
      "Advanced UI/UX",
      "Custom animations",
      "CMS/content management",
      "Advanced integrations",
      "Analytics",
      "Advanced SEO foundation",
      "Custom functionality",
    ],
    cta: "Choose Growth",
    message: "Hi Buildron, I'm interested in the Web Development Growth package.",
    featured: true,
  },
  {
    name: "Premium",
    price: "Rs. 180,000 – 350,000+",
    features: [
      "Everything in Growth",
      "Advanced architecture",
      "Custom web applications",
      "Complex integrations",
      "Advanced animations",
      "Custom dashboards",
      "AI integrations where required",
      "Scalable infrastructure",
    ],
    cta: "Build Premium",
    message: "Hi Buildron, I'm interested in the Web Development Premium package.",
  },
];

export const SEO_PLANS: Plan[] = [
  {
    name: "SEO Starter",
    price: "Rs. 15,000 / month",
    features: ["Technical SEO", "On-page optimization", "Keyword research", "Search optimization", "Monthly reporting"],
    cta: "Start SEO",
    message: "Hi Buildron, I'm interested in the SEO Starter package.",
  },
  {
    name: "SEO Growth",
    price: "Rs. 30,000 / month",
    features: [
      "Everything in Starter",
      "Advanced keyword strategy",
      "Content optimization",
      "Competitor analysis",
      "Advanced technical SEO",
      "Growth reporting",
    ],
    cta: "Grow With SEO",
    message: "Hi Buildron, I'm interested in the SEO Growth package.",
  },
];

export const SOCIAL_PLANS: Plan[] = [
  {
    name: "Social Starter",
    price: "Rs. 20,000 / month",
    features: ["Content strategy", "Social media management", "Content planning", "Basic analytics", "Publishing support"],
    cta: "Start Social Growth",
    message: "Hi Buildron, I'm interested in the Social Media Starter package.",
  },
  {
    name: "Social Growth",
    price: "Rs. 40,000 / month",
    features: [
      "Everything in Starter",
      "Advanced content strategy",
      "Creative direction",
      "Advanced analytics",
      "Growth optimization",
      "Publishing workflows",
    ],
    cta: "Scale Social",
    message: "Hi Buildron, I'm interested in the Social Media Growth package.",
  },
];

export const AI_PLANS: Plan[] = [
  {
    name: "AI Automation Starter",
    price: "Rs. 50,000 setup",
    features: ["Lead automation", "CRM workflows", "Email automation", "WhatsApp workflows", "AI integrations", "Notifications"],
    cta: "Automate My Business",
    message: "Hi Buildron, I'm interested in the AI Automation Starter package.",
  },
  {
    name: "AI Automation Growth",
    price: "Rs. 100,000 setup",
    features: [
      "Multiple workflows",
      "AI agents",
      "CRM integration",
      "WhatsApp automation",
      "Email automation",
      "Calendar integration",
      "Advanced business logic",
      "Reporting",
    ],
    cta: "Build My Automation System",
    message: "Hi Buildron, I'm interested in the AI Automation Growth package.",
  },
];

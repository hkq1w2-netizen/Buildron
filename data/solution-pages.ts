export type SolutionPage = {
  slug: string;
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  answer: string;
  realities: { title: string; desc: string }[];
  whatWeBuild: { title: string; desc: string; service: string }[];
  signals: string[];
  faqs: { q: string; a: string }[];
  ctaMessage: string;
  image: string;
  relatedServices: string[];
  relatedCaseStudies: string[];
  relatedGuides: string[];
};

export const SOLUTION_PAGES: SolutionPage[] = [
  {
    slug: "textile",
    label: "Textile & Garments",
    h1: "Textile ERP, Web Development & AI Automation for Pakistan",
    metaTitle: "Textile ERP, Software & Automation in Pakistan | Buildron",
    metaDescription:
      "Production tracking, inventory, costing and export-ready websites for textile and garment businesses in Faisalabad and across Pakistan.",
    answer:
      "Textile businesses in Faisalabad rarely fail because of demand. They lose margin because production status, stock and real per-unit cost are tracked in separate places. Buildron builds the production tracking, inventory and costing systems that close that gap, plus the export-facing web presence international buyers check before they engage.",
    realities: [
      { title: "Multi-stage production", desc: "Greige, dyeing, stitching, finishing and packing each hold stock, and a single order sits across several stages at once." },
      { title: "Costing arrives too late", desc: "Real cost per unit, including wastage and rework, is usually known only after the order has shipped." },
      { title: "Job work and outsourcing", desc: "Material leaves the premises for processing and has to be reconciled on return, often on paper." },
      { title: "Export buyer scrutiny", desc: "Overseas buyers assess capability from your website and documentation before any conversation happens." },
    ],
    whatWeBuild: [
      { title: "Production tracking", desc: "Job orders followed through each stage, with material issued, consumed and returned recorded against the order.", service: "erp-development" },
      { title: "Inventory across stages", desc: "Stock positions for raw, in-process and finished goods that reflect what is physically there.", service: "erp-development" },
      { title: "Costing and wastage", desc: "Per-order cost built from actual consumption rather than estimates applied after the fact.", service: "erp-development" },
      { title: "Export-facing website", desc: "A credible, fast site presenting capability, capacity, certifications and contact routes buyers expect.", service: "web-development" },
      { title: "Enquiry handling", desc: "Buyer enquiries captured, acknowledged quickly and followed up, across time zones.", service: "lead-automation" },
      { title: "Reporting", desc: "Production, stock and receivables visible without someone rebuilding the numbers each week.", service: "custom-business-systems" },
    ],
    signals: [
      "Stock on the system stopped matching stock in the store months ago",
      "You cannot quote confidently because you do not know your real cost",
      "Production status lives in a WhatsApp group",
      "Buyers ask for information your website does not provide",
    ],
    faqs: [
      {
        q: "How does textile ERP software work?",
        a: "It follows an order through production. A job order is created, material is issued against it, each stage records what was consumed and produced, and finished goods enter stock. Because every movement is recorded against the order, cost and status are known while the order is running rather than afterwards.",
      },
      {
        q: "Do you build for smaller units, not just large mills?",
        a: "Yes. Smaller units often benefit more, because they have less administrative capacity to absorb manual tracking. We start with the single module that hurts most, usually production or inventory.",
      },
      {
        q: "Can the system handle job work sent to outside processors?",
        a: "Yes, and it is one of the most common reasons Faisalabad units come to us. Material issued to a processor stays tracked as your stock until it returns, so reconciliation stops being a monthly argument.",
      },
    ],
    ctaMessage: "Hi Buildron, I run a textile business and want to discuss a system.",
    image: "https://images.unsplash.com/photo-1741437137509-a5b5e4f6fbe4?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["erp-development", "web-development", "custom-business-systems"],
    relatedCaseStudies: ["manufacturing-erp-system"],
    relatedGuides: ["textile-erp-explained", "spreadsheets-to-erp"],
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    h1: "Manufacturing Software, Web Development & Automation in Pakistan",
    metaTitle: "Manufacturing Software & Automation Company in Pakistan | Buildron",
    metaDescription:
      "Inventory, production tracking, purchasing and reporting systems for Pakistani manufacturers — built around your actual process.",
    answer:
      "Manufacturers usually do not need more software. They need the systems they already have to agree with each other. Buildron builds the connective layer — inventory, production status, purchasing and reporting — so stock, cost and delivery dates come from one place instead of being reconstructed by hand every week.",
    realities: [
      { title: "Stock accuracy decays", desc: "Physical stock and recorded stock separate quickly once volume rises, and every count is a disruption." },
      { title: "Purchasing is reactive", desc: "Materials are ordered when someone notices a shortage, not when production planning predicts it." },
      { title: "Delivery dates are estimates", desc: "Without live production status, commitments to customers are informed guesses." },
      { title: "Connectivity constraints", desc: "Industrial locations cannot assume reliable internet, which rules out some cloud-only tools." },
    ],
    whatWeBuild: [
      { title: "Inventory control", desc: "Multi-location stock with movement history, so variance can be traced rather than absorbed.", service: "erp-development" },
      { title: "Production visibility", desc: "Live job status, so sales can answer delivery questions without walking to the floor.", service: "erp-development" },
      { title: "Purchasing", desc: "Requirements driven by production plans and reorder levels, with supplier order tracking.", service: "erp-development" },
      { title: "Process automation", desc: "Approvals, reminders and document generation moved off individuals' memories.", service: "ai-automation" },
      { title: "Management reporting", desc: "One dashboard for output, stock, purchasing and receivables.", service: "custom-business-systems" },
      { title: "Offline tolerance", desc: "On-premise deployment or offline-capable entry where connectivity is unreliable.", service: "custom-business-systems" },
    ],
    signals: [
      "Physical stock counts routinely disagree with the system",
      "Purchasing reacts to shortages instead of anticipating them",
      "Sales cannot confirm a delivery date without phoning the floor",
      "Month-end reporting takes days of manual work",
    ],
    faqs: [
      {
        q: "Can a system work if our factory internet is unreliable?",
        a: "Yes. We deploy on-premise where necessary, or build entry screens that work offline and sync when the connection returns. This is planned at the start, not patched later.",
      },
      {
        q: "Do we have to replace all our existing software at once?",
        a: "No, and we advise against it. We connect to what works and replace only what is genuinely failing. Big-bang replacements are the most common way these projects fail.",
      },
      {
        q: "How do you handle staff who are not comfortable with software?",
        a: "By designing entry screens around the task rather than the database, keeping required fields minimal, and running the new system alongside the old method until the team trusts it.",
      },
    ],
    ctaMessage: "Hi Buildron, I run a manufacturing business and want to discuss a system.",
    image: "https://images.unsplash.com/photo-1741437137509-a5b5e4f6fbe4?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["erp-development", "ai-automation", "custom-business-systems"],
    relatedCaseStudies: ["manufacturing-erp-system"],
    relatedGuides: ["spreadsheets-to-erp"],
  },
  {
    slug: "ecommerce",
    label: "E-commerce",
    h1: "Ecommerce Websites, Marketing & Automation for Pakistani Brands",
    metaTitle: "Ecommerce Website & Automation for Pakistani Brands | Buildron",
    metaDescription:
      "Storefronts, order operations, stock sync and customer automation for online retail brands in Pakistan.",
    answer:
      "For Pakistani online brands the storefront is rarely the hard part. The operational layer is — cash on delivery verification, courier status, stock that matches reality, and the constant stream of customer questions. Buildron builds both, so growth in orders does not translate directly into growth in manual work.",
    realities: [
      { title: "Cash on delivery dominates", desc: "It is expected by customers and it makes unverified orders and returns a structural cost." },
      { title: "Mobile-first, bandwidth-constrained", desc: "Most traffic is mobile on variable connections, so heavy storefronts lose customers before the first product loads." },
      { title: "Support volume scales with orders", desc: "Order status and availability questions grow linearly unless they are automated." },
      { title: "Channels fragment", desc: "Instagram, WhatsApp and the website each accumulate their own orders and enquiries." },
    ],
    whatWeBuild: [
      { title: "Fast storefront", desc: "Mobile-first browsing and a short checkout supporting COD, cards and wallets.", service: "ecommerce" },
      { title: "Order verification", desc: "WhatsApp or OTP confirmation on COD orders to cut failed deliveries.", service: "lead-automation" },
      { title: "Stock sync", desc: "Website stock reconciled with warehouse or ERP so oversells stop.", service: "erp-development" },
      { title: "Support automation", desc: "An assistant handling order status and availability, escalating real problems.", service: "ai-chatbots" },
      { title: "Commerce SEO", desc: "Category and product pages structured to be found in search.", service: "seo" },
      { title: "Channel consolidation", desc: "Social and WhatsApp enquiries routed into the same pipeline as website orders.", service: "social-media-marketing" },
    ],
    signals: [
      "Return rate on COD orders is eating the margin",
      "Products sell after they are out of stock",
      "The team spends the morning answering 'where is my order'",
      "Product pages get no search traffic at all",
    ],
    faqs: [
      {
        q: "How do we reduce cash on delivery returns?",
        a: "The most effective single change is a confirmation step before dispatch — usually an automated WhatsApp message requiring a reply. It adds a few hours to fulfilment and removes a large share of failed deliveries.",
      },
      {
        q: "Should we stay on Shopify or move to a custom store?",
        a: "Stay on Shopify while your needs are catalogue, checkout and basic apps. Move when you need pricing logic, ERP integration or performance control that a theme cannot deliver. We will tell you which applies rather than defaulting to custom.",
      },
      {
        q: "Can website stock sync with our physical shop?",
        a: "Yes, provided the shop records sales in something we can read — a POS, an ERP or even a consistently maintained sheet. Without a source of truth, no sync is possible.",
      },
    ],
    ctaMessage: "Hi Buildron, I run an e-commerce brand and want to discuss a system.",
    image: "https://images.unsplash.com/photo-1721937127582-ed331de95a04?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["ecommerce", "ai-chatbots", "seo"],
    relatedCaseStudies: ["fashion-ecommerce-experience", "direct-to-consumer-store"],
    relatedGuides: ["whatsapp-lead-automation", "pakistani-business-website-checklist"],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    h1: "Real Estate Websites, SEO & Lead Automation in Pakistan",
    metaTitle: "Real Estate Website & Lead Automation in Pakistan | Buildron",
    metaDescription:
      "Property listing platforms, enquiry capture and WhatsApp lead automation for real estate businesses in Pakistan.",
    answer:
      "Real estate is a speed business. The agency that replies first usually gets the viewing. Buildron builds listing platforms that are genuinely searchable and the WhatsApp-first lead systems that make sure no enquiry waits, including the ones that arrive at midnight.",
    realities: [
      { title: "Response time decides outcomes", desc: "Buyers contact several agencies at once and engage seriously with whoever answers first." },
      { title: "WhatsApp is the channel", desc: "Most enquiries arrive and progress on WhatsApp, spread across individual agents' phones." },
      { title: "Listings change constantly", desc: "Availability, price and status shift daily, and stale listings waste everyone's time." },
      { title: "Trust is scarce", desc: "Buyers are cautious, so verifiable detail and real photography matter more than design polish." },
    ],
    whatWeBuild: [
      { title: "Listing platform", desc: "Property search with filters that match how buyers actually narrow down, and fast image loading.", service: "web-development" },
      { title: "Enquiry capture", desc: "Every listing enquiry captured with the property attached, so context is never lost.", service: "lead-automation" },
      { title: "Instant response", desc: "Automatic acknowledgement and qualification, day or night.", service: "ai-automation" },
      { title: "Agent routing", desc: "Leads assigned by area or property type, with escalation if nobody responds.", service: "lead-automation" },
      { title: "Pre-qualification", desc: "An assistant gathering budget, area and timeline before an agent invests time.", service: "ai-chatbots" },
      { title: "Listing management", desc: "A simple admin so availability and price stay current without a developer.", service: "custom-business-systems" },
    ],
    signals: [
      "Enquiries sit unanswered overnight and go cold",
      "Leads live on individual agents' phones with no shared record",
      "Listings on the website are out of date",
      "Agents spend time on enquiries that were never serious",
    ],
    faqs: [
      {
        q: "Can leads go straight to agents' WhatsApp?",
        a: "Yes, and that is usually the right design — agents already work there. The difference is that a copy of every enquiry is also recorded centrally, so the agency has visibility even though the conversation is personal.",
      },
      {
        q: "Should we build our own portal if listing sites already exist?",
        a: "Portals give reach, your own site gives control, margin and direct relationships. Most agencies should use both, with the owned site handling repeat and referral buyers who already know you.",
      },
    ],
    ctaMessage: "Hi Buildron, I run a real estate business and want to discuss a system.",
    image: "https://images.unsplash.com/photo-1724304406928-c43b01912fa1?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["lead-automation", "web-development", "ai-chatbots"],
    relatedCaseStudies: ["real-estate-digital-platform"],
    relatedGuides: ["whatsapp-lead-automation"],
  },
  {
    slug: "professional-services",
    label: "Professional Services",
    h1: "Professional Services Websites, SEO & Automation in Pakistan",
    metaTitle: "Professional Services Websites & Automation in Pakistan | Buildron",
    metaDescription:
      "Credibility-first websites, local search visibility and client workflow automation for consultancies, agencies and professional firms in Pakistan.",
    answer:
      "For consultancies, agencies and professional firms, the website is a credibility check before a first meeting, not a shop. Buildron builds sites that demonstrate expertise clearly, rank for the services people search locally, and automate the repetitive parts of onboarding so billable hours stay billable.",
    realities: [
      { title: "Buyers research before contacting", desc: "By the time someone enquires, they have already decided you are plausible or not." },
      { title: "Expertise is invisible", desc: "The knowledge that wins clients stays in meetings and never reaches a page anyone can find." },
      { title: "Onboarding is manual", desc: "Scheduling, document collection and intake consume hours that could be billed." },
      { title: "Local search is winnable", desc: "Most professional firms in Faisalabad have not seriously contested their own service queries." },
    ],
    whatWeBuild: [
      { title: "Credibility-first site", desc: "Clear service pages, real team identity and contact routes, built to load fast.", service: "web-development" },
      { title: "Service page architecture", desc: "One page per service that answers what it is, who it suits and what it costs to engage.", service: "seo" },
      { title: "Local visibility", desc: "Google Business Profile, consistent contact details and genuine local relevance.", service: "seo" },
      { title: "Intake automation", desc: "Scheduling, reminders and document collection handled without back-and-forth.", service: "ai-automation" },
      { title: "Enquiry handling", desc: "Consultation requests captured, qualified and routed to the right partner.", service: "lead-automation" },
      { title: "Client portal", desc: "A secure place for documents and status where the work justifies it.", service: "custom-business-systems" },
    ],
    signals: [
      "Referrals convert but nobody finds you through search",
      "Every enquiry needs the same five questions asked by email",
      "Scheduling a first meeting takes four messages",
      "The website says what you do but never why you are credible",
    ],
    faqs: [
      {
        q: "What should a professional services website include?",
        a: "A clear statement of what you do and for whom, a page per service explaining the engagement, real named people, genuine credentials, and an obvious contact route. Anonymous firms lose to named ones almost every time.",
      },
      {
        q: "Is content marketing worth it for a small firm?",
        a: "Yes, if it is focused. A handful of pages that properly answer the questions clients ask before engaging will outperform a large volume of generic articles, and they take far less time to maintain.",
      },
    ],
    ctaMessage: "Hi Buildron, I run a professional services firm and want to discuss a system.",
    image: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["web-development", "seo", "ai-automation"],
    relatedCaseStudies: ["corporate-digital-presence"],
    relatedGuides: ["pakistani-business-website-checklist", "website-vs-web-app"],
  },
];

export const SOLUTION_SLUGS = SOLUTION_PAGES.map((s) => s.slug);

export function getSolution(slug: string) {
  return SOLUTION_PAGES.find((s) => s.slug === slug);
}

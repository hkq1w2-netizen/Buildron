/**
 * Case studies are written from the project records in data/projects.ts.
 * Deliberate constraint: no client names, revenue figures, percentages,
 * testimonials or awards are stated anywhere, because none are verifiable.
 * Each study describes the problem, what was built, and what the system does.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  problem: string[];
  approach: string[];
  features: string[];
  stack: string[];
  outcome: string[];
  image: string;
  /** Public URL, only where the project is genuinely live and reachable. */
  liveUrl?: string;
  ctaMessage: string;
  relatedServices: string[];
  relatedSolutions: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "devkitlab-developer-tools",
    title: "DevKitLab",
    category: "Product / Developer Tools",
    metaTitle: "Case Study: DevKitLab Developer Tools Platform | Buildron",
    metaDescription:
      "How Buildron built DevKitLab, a browser-based developer utility suite where JSON, encoding, regex and conversion tools all run client-side with no server-side data handling.",
    summary:
      "Developers reach for online formatters and converters constantly, and routinely paste data into them that should never leave the machine \u2014 API tokens, payloads, config. DevKitLab is a utility suite built so that question does not arise: the work happens in the browser.",
    problem: [
      "Common online developer utilities process input server-side, so anything pasted in has left the developer's machine.",
      "That makes the convenient option the wrong one whenever the payload contains credentials, customer data or anything under a compliance obligation.",
      "Tools are usually scattered across separate sites, each with its own interface and its own ad load.",
      "Utility pages are individually searched for by name, so the suite needed every tool to be findable on its own terms rather than buried behind one landing page.",
    ],
    approach: [
      "Architected every tool as a client-side operation using the browser's own runtime, so no input is transmitted anywhere.",
      "Grouped the tools into named categories \u2014 JSON, encoding, generators, time, regex, colour, HTML, CSS, Markdown \u2014 so related work stays together.",
      "Gave each tool its own route and its own page, because that is how developers actually search for them.",
      "Built a shared interface shell and command-style search so moving between tools costs nothing.",
      "Wrote the privacy architecture into the page content itself rather than leaving it as an unverifiable claim in a footer.",
    ],
    features: [
      "JSON formatter, validator, minifier and tree viewer",
      "Base64 and URL encoding and decoding",
      "UUID, random string and password generation",
      "Unix timestamp, epoch and ISO 8601 conversion",
      "Regex testing, building, escaping and explanation",
      "Colour conversion between HEX, RGB and HSL with contrast inspection",
      "HTML, CSS and Markdown formatting with live preview",
      "Keyboard-driven search across the whole tool suite",
      "Accounts for saved preferences, with tool execution still local",
    ],
    stack: ["Next.js", "TypeScript", "Client-side Web APIs", "Web Crypto", "Per-tool routing and metadata"],
    outcome: [
      "Every utility runs inside the browser, so sensitive input is never transmitted to a backend.",
      "Each tool has its own indexable page and can be found directly by name.",
      "The suite is organised by category rather than as a flat list, so adjacent tools are one step away.",
      "The architecture takes new tools without changes to the shell around them.",
    ],
    image: "/images/project-devkitlab.jpg",
    liveUrl: "https://www.devkitlab.online/",
    ctaMessage: "Hi Buildron, I saw the DevKitLab case study and want to discuss building a product like it.",
    relatedServices: ["web-development", "seo"],
    relatedSolutions: ["professional-services"],
  },
  {
    slug: "manufacturing-erp-system",
    title: "Manufacturing ERP System",
    category: "ERP / Business Software",
    metaTitle: "Case Study: Manufacturing ERP System | Buildron",
    metaDescription:
      "How Buildron built a centralised ERP covering sales, inventory, production and accounts for a manufacturing operation.",
    summary:
      "A manufacturing operation running sales, stock, production and accounts in separate places needed one system where those numbers agreed with each other.",
    problem: [
      "Stock records and physical stock diverged between counts, and variance could not be traced to a movement.",
      "Production status was known on the floor but not in the office, so delivery commitments were guesses.",
      "Purchasing reacted to shortages rather than to planned requirements.",
      "Receivables were maintained separately from sales, so ageing was always behind.",
    ],
    approach: [
      "Documented the existing process with the people running it, including the informal workarounds that kept it functioning.",
      "Scoped inventory and production as the first modules, because those were the source of the downstream inaccuracy.",
      "Built against the operation's own terminology and item structure rather than a generic data model.",
      "Ran the new module alongside existing manual records during a pilot before cutover.",
    ],
    features: [
      "Job orders tracked through each production stage",
      "Material issued, consumed and returned recorded against the order",
      "Multi-location inventory with full movement history",
      "Purchase orders linked to requirements and pending receipts",
      "Sales, dispatch and invoicing tied to one customer record",
      "Role-based access so staff see their own scope",
      "Reporting views for stock, production output and receivables",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access control", "Server-side rendering"],
    outcome: [
      "Stock position, production status and receivables are read from one system rather than reconstructed from several.",
      "Variance in stock can be traced to a recorded movement instead of being absorbed at count time.",
      "Sales can answer delivery questions from the system without contacting the production floor.",
      "Reporting is a view rather than a manual monthly exercise.",
    ],
    image: "/images/project-erp.jpg",
    ctaMessage: "Hi Buildron, I saw your manufacturing ERP case study and want to discuss a similar system.",
    relatedServices: ["erp-development", "custom-business-systems"],
    relatedSolutions: ["manufacturing", "textile"],
  },
  {
    slug: "ai-lead-automation-pipeline",
    title: "AI Lead Automation Pipeline",
    category: "AI Automation",
    metaTitle: "Case Study: AI Lead Automation Pipeline | Buildron",
    metaDescription:
      "How Buildron built an end-to-end lead pipeline: capture, AI qualification, CRM sync, WhatsApp follow-up and appointment booking.",
    summary:
      "Enquiries were arriving across several channels with no shared record, so response depended on whoever happened to see the message first.",
    problem: [
      "Website, WhatsApp and social enquiries accumulated in three different places.",
      "First response time varied from minutes to days with no visibility into which.",
      "Follow-up happened only when someone remembered, so most enquiries stopped after one exchange.",
      "There was no reliable way to say how many enquiries arrived in a given month, or from where.",
    ],
    approach: [
      "Inventoried every route an enquiry could arrive through before building anything.",
      "Consolidated all routes into a single pipeline with the source recorded on each record.",
      "Added an automated acknowledgement so no enquiry sat unanswered, then AI summarisation to rank what deserved attention first.",
      "Made automated sequences stop the moment a human replied, so conversations never felt mechanical.",
    ],
    features: [
      "Unified capture from website forms, WhatsApp and social channels",
      "Immediate automated acknowledgement on every enquiry",
      "AI summarisation and qualification of inbound messages",
      "CRM records created and updated without duplicate entry",
      "Scheduled WhatsApp and email follow-up sequences",
      "Automatic sequence suppression once a person responds",
      "Appointment booking with reminders",
      "Reporting on volume, source and response time",
    ],
    stack: ["WhatsApp Business API", "Large language models", "Webhooks", "CRM integration", "Calendar integration"],
    outcome: [
      "Every enquiry now produces a record with a source, instead of existing only in a phone.",
      "First response is automatic, so no enquiry waits for a person to be available.",
      "Follow-up runs on a defined schedule rather than on recall.",
      "Enquiry volume and response time are reportable figures rather than estimates.",
    ],
    image: "/images/project-aiflow.jpg",
    ctaMessage: "Hi Buildron, I saw your lead automation case study and want to discuss a similar system.",
    relatedServices: ["lead-automation", "ai-automation", "ai-chatbots"],
    relatedSolutions: ["real-estate", "professional-services"],
  },
  {
    slug: "fashion-ecommerce-experience",
    title: "Fashion E-Commerce Experience",
    category: "E-Commerce / Fashion",
    metaTitle: "Case Study: Fashion E-Commerce Storefront | Buildron",
    metaDescription:
      "How Buildron built a conversion-focused fashion storefront with editorial product presentation and a streamlined mobile checkout.",
    summary:
      "A fashion brand needed a storefront that presented products with editorial quality while keeping checkout short enough to survive mobile browsing.",
    problem: [
      "Product presentation needed to feel considered, but heavy imagery was slowing pages on mobile connections.",
      "Checkout had too many steps for the way customers actually browsed and bought.",
      "Variants and stock were managed inconsistently, creating a risk of selling unavailable items.",
      "Product pages carried no structured data, so they were invisible in product-related search results.",
    ],
    approach: [
      "Designed mobile-first, treating desktop as the secondary case rather than the default.",
      "Used modern image formats and responsive sizing so editorial imagery did not cost load time.",
      "Reduced checkout to the minimum fields required, with cash on delivery supported alongside card payment.",
      "Modelled variants and stock in one place so the storefront reflected real availability.",
    ],
    features: [
      "Editorial product and collection presentation",
      "Variant and stock management from a single source",
      "Short mobile-first checkout",
      "Cash on delivery alongside card payment",
      "Optimised responsive imagery",
      "Product structured data on every item page",
      "Unique metadata across product and category pages",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Payment gateway integration", "Product schema"],
    outcome: [
      "Product pages load quickly on mobile data without compromising image quality.",
      "Checkout is short enough to complete in one sitting on a phone.",
      "Storefront stock reflects a single source, so the oversell risk is structural rather than manual.",
      "Product and category pages are structured to be eligible for rich results in search.",
    ],
    image: "/images/project-fashion.jpg",
    ctaMessage: "Hi Buildron, I saw your fashion e-commerce case study and want to discuss a similar store.",
    relatedServices: ["ecommerce", "seo", "web-development"],
    relatedSolutions: ["ecommerce", "textile"],
  },
  {
    slug: "real-estate-digital-platform",
    title: "Real Estate Digital Platform",
    category: "Real Estate",
    metaTitle: "Case Study: Real Estate Listing Platform | Buildron",
    metaDescription:
      "How Buildron built a property discovery platform with search, listings and enquiry capture for a real estate workflow.",
    summary:
      "A real estate business needed property discovery that matched how buyers narrow down, with enquiries captured against the specific property.",
    problem: [
      "Buyers filtered by area, budget and property type, but the existing site offered only a flat list.",
      "Enquiries arrived without the property attached, so agents had to ask what the buyer was looking at.",
      "Listing data went stale because updating it required a developer.",
      "Image-heavy listing pages loaded slowly on mobile.",
    ],
    approach: [
      "Modelled listings around the filters buyers actually use rather than around internal categories.",
      "Attached property context to every enquiry automatically at the point of capture.",
      "Built a simple listing admin so availability and price could be maintained by the team.",
      "Handled listing imagery with responsive optimisation and lazy loading below the fold.",
    ],
    features: [
      "Property search with area, budget and type filters",
      "Listing detail pages with image galleries",
      "Enquiry capture with the property automatically attached",
      "Listing management without developer involvement",
      "Responsive, optimised imagery",
      "Mobile-first browsing throughout",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Server-side rendering", "Image optimisation"],
    outcome: [
      "Buyers can narrow to relevant properties instead of scrolling a full list.",
      "Agents receive enquiries that already state which property prompted them.",
      "Listings stay current because the team can update them directly.",
      "Listing pages remain usable on mobile connections despite heavy imagery.",
    ],
    image: "/images/project-realestate.jpg",
    ctaMessage: "Hi Buildron, I saw your real estate case study and want to discuss a similar platform.",
    relatedServices: ["web-development", "lead-automation", "ai-chatbots"],
    relatedSolutions: ["real-estate"],
  },
  {
    slug: "saas-analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "SaaS / Web Application",
    metaTitle: "Case Study: SaaS Analytics Dashboard | Buildron",
    metaDescription:
      "How Buildron built a multi-role analytics product with real-time data views, reporting and a scalable component architecture.",
    summary:
      "An analytics product needed different roles to see different data, with an interface architecture that could absorb continuous feature additions.",
    problem: [
      "Several user roles needed genuinely different views of the same underlying data.",
      "Data views needed to update without a full page reload.",
      "Interface patterns were being rebuilt per screen, so each new feature added inconsistency.",
      "Reporting had to be exportable without duplicating the query logic.",
    ],
    approach: [
      "Defined a component library first, so new screens assembled from existing patterns.",
      "Implemented role-based access at the data layer rather than by hiding elements in the interface.",
      "Separated query logic from presentation so the same logic served both screen and export.",
      "Kept heavy visualisation components client-side and everything else server-rendered.",
    ],
    features: [
      "Role-based dashboards with per-role data scoping",
      "Real-time data views",
      "Reusable charting and table components",
      "Exportable reports sharing the screen's query logic",
      "Access control enforced at the data layer",
      "Component architecture built for continued feature growth",
    ],
    stack: ["Next.js", "React", "TypeScript", "Data visualisation libraries", "Role-based access control"],
    outcome: [
      "New screens are assembled from existing components rather than designed from scratch.",
      "Each role sees only the data it is entitled to, enforced server-side.",
      "Reports and on-screen views cannot drift apart, because they share query logic.",
      "The product can absorb new features without an interface rewrite.",
    ],
    image: "/images/project-saas.jpg",
    ctaMessage: "Hi Buildron, I saw your SaaS dashboard case study and want to discuss a similar product.",
    relatedServices: ["custom-business-systems", "web-development"],
    relatedSolutions: ["professional-services"],
  },
  {
    slug: "corporate-digital-presence",
    title: "Corporate Digital Presence",
    category: "Corporate Website",
    metaTitle: "Case Study: Corporate Website Build | Buildron",
    metaDescription:
      "How Buildron built a corporate website with clear service architecture, strong typography and a performance-first implementation.",
    summary:
      "A corporate site was presenting every service on one page, leaving search engines and visitors with nothing specific to engage with.",
    problem: [
      "All services were described on a single page, so no page matched any specific search intent.",
      "Titles and descriptions were duplicated or missing across the site.",
      "There was no structured data, so the organisation was not clearly defined to search engines.",
      "Page weight was high relative to the amount of content being delivered.",
    ],
    approach: [
      "Split services into individual pages, each answering one intent properly.",
      "Wrote unique titles, descriptions and canonical URLs for every route at build time.",
      "Added organisation, service and breadcrumb structured data matching visible page content only.",
      "Kept the site server-rendered, with client-side JavaScript limited to components that genuinely need it.",
    ],
    features: [
      "One page per service with distinct search intent",
      "Unique title, description and canonical on every route",
      "Organisation, Service and BreadcrumbList structured data",
      "Contextual internal linking between related pages",
      "Server-rendered pages with selective client hydration",
      "Generated sitemap and robots directives",
    ],
    stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Schema.org structured data"],
    outcome: [
      "Each service now has a page that can rank for its own query rather than competing with the homepage.",
      "Metadata is generated per route, so duplication cannot reappear as pages are added.",
      "The organisation is described to search engines in structured form consistent with the visible content.",
      "Pages are delivered server-rendered, with JavaScript reserved for interactive components.",
    ],
    image: "/images/project-corporate.jpg",
    ctaMessage: "Hi Buildron, I saw your corporate website case study and want to discuss a similar build.",
    relatedServices: ["web-development", "seo"],
    relatedSolutions: ["professional-services"],
  },
  {
    slug: "direct-to-consumer-store",
    title: "Direct-to-Consumer Store",
    category: "E-Commerce",
    metaTitle: "Case Study: Direct-to-Consumer Store | Buildron",
    metaDescription:
      "How Buildron built a DTC store with product storytelling, fast checkout and analytics-driven merchandising.",
    summary:
      "An established manufacturer launching direct to consumers needed a store that told the product story without slowing down the path to purchase.",
    problem: [
      "Product storytelling and fast checkout were pulling the design in opposite directions.",
      "Merchandising decisions were being made without data on what customers actually viewed.",
      "There was no analytics instrumentation, so drop-off points in checkout were unknown.",
      "Category pages carried no unique content, so they had nothing to rank with.",
    ],
    approach: [
      "Placed narrative content below the purchase decision rather than in front of it.",
      "Instrumented the funnel from product view to completed order before optimising anything.",
      "Gave category pages genuine unique copy instead of duplicating product descriptions.",
      "Kept checkout to the shortest sequence the payment and delivery options allowed.",
    ],
    features: [
      "Product storytelling placed after the buying decision",
      "Short checkout with cash on delivery and card payment",
      "Funnel analytics from product view through to order",
      "Unique category page content",
      "Responsive optimised product imagery",
      "Merchandising informed by view and conversion data",
    ],
    stack: ["Next.js", "Payment gateway integration", "Analytics instrumentation", "Product schema"],
    outcome: [
      "Customers reach the buying decision without scrolling through narrative first.",
      "Drop-off points in checkout are visible in analytics rather than assumed.",
      "Category pages have content of their own to be found with.",
      "Merchandising changes can be evaluated against recorded behaviour.",
    ],
    image: "/images/project-store.jpg",
    ctaMessage: "Hi Buildron, I saw your DTC store case study and want to discuss a similar project.",
    relatedServices: ["ecommerce", "seo"],
    relatedSolutions: ["ecommerce"],
  },
];

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((c) => c.slug);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

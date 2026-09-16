export type ServicePage = {
  slug: string;
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  /** Answer-first summary. One paragraph, no fluff. */
  answer: string;
  whoFor: string[];
  problems: string[];
  deliver: { title: string; desc: string }[];
  process: { step: string; desc: string }[];
  useCases: string[];
  tech: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSub: string;
  ctaMessage: string;
  image: string;
  relatedServices: string[];
  relatedSolutions: string[];
  relatedCaseStudies: string[];
  relatedGuides: string[];
  keywords?: string[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "web-development",
    label: "Web Development",
    h1: "Web Development Company in Pakistan for Business Websites & Web Apps",
    metaTitle: "Web Development Company in Pakistan | Buildron",
    metaDescription:
      "Buildron is a web development company in Pakistan building custom business websites, web applications and e-commerce platforms for companies in Faisalabad and nationwide.",
    serviceType: "Web development",
    answer:
      "Buildron designs and engineers custom websites and web applications for businesses in Faisalabad and across Pakistan. We do not assemble templates. Each site is built around your buyers, your sales process and your search visibility, then shipped on a modern stack that stays fast on Pakistani mobile networks.",
    whoFor: [
      "Manufacturers and exporters who need a credible site international buyers will trust",
      "Local service businesses that want to be found in Faisalabad search results",
      "Companies replacing a slow, dated or template-built website",
      "Startups that need a marketing site and a product interface from the same team",
    ],
    problems: [
      "A site that looks acceptable but generates almost no enquiries",
      "Pages that load slowly on mobile data, so visitors leave before they read anything",
      "No clear path from landing on the site to contacting the business",
      "Content that search engines cannot understand, so the site never ranks for its own services",
      "A website nobody can update without going back to the original developer",
    ],
    deliver: [
      { title: "Structure and UX", desc: "Page architecture mapped to how buyers actually decide, not to a template's menu." },
      { title: "Design system", desc: "A consistent visual language — type, spacing, components — so every future page matches." },
      { title: "Engineering", desc: "Modern React/Next.js builds with server rendering, image optimisation and clean semantic HTML." },
      { title: "Search foundation", desc: "Titles, descriptions, canonical URLs, structured data, sitemap and robots handled at build time." },
      { title: "Conversion paths", desc: "WhatsApp, call and form routes placed where intent actually peaks." },
      { title: "Handover", desc: "Deployment, analytics, Search Console setup and documentation you keep." },
    ],
    process: [
      { step: "Discover", desc: "We map your services, buyers and the questions they ask before they buy." },
      { step: "Architect", desc: "We agree the page structure and the search intent each page answers." },
      { step: "Design", desc: "Visual direction and key screens, reviewed before a line of production code." },
      { step: "Build", desc: "Component-based development with performance and accessibility checked as we go." },
      { step: "Launch", desc: "Deployment, redirects, analytics, Search Console and indexing checks." },
      { step: "Improve", desc: "We watch real behaviour and refine the pages that carry the most intent." },
    ],
    useCases: [
      "Corporate website for a textile exporter targeting overseas buyers",
      "Multi-service website for a professional services firm in Faisalabad",
      "Product and catalogue site for a manufacturer with a long sales cycle",
      "Marketing site plus customer portal for a growing SaaS product",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Headless CMS", "Structured data"],
    faqs: [
      {
        q: "How much does a website cost in Pakistan?",
        a: "Buildron's website projects typically start around Rs. 40,000 for a focused business site and rise with scope — custom functionality, integrations, dashboards and content volume are the main drivers. We quote against a defined scope rather than a page count.",
      },
      {
        q: "How long does a website take to build?",
        a: "A focused business website usually takes a few weeks from kickoff to launch. Larger web applications and systems are scoped individually, because timelines depend on integrations, content readiness and review cycles.",
      },
      {
        q: "Do you build websites that rank on Google?",
        a: "We build the technical foundation that ranking depends on: clean semantic HTML, correct canonical URLs, structured data, fast loading and a page structure that matches real search intent. Ranking itself also needs content and authority over time, which is covered by our SEO service.",
      },
      {
        q: "Can you redesign an existing website without losing search rankings?",
        a: "Yes. We map the existing URLs first, preserve the ones that hold value, and put permanent redirects in place for anything that changes. Losing rankings in a redesign is almost always caused by skipping that step.",
      },
    ],
    ctaTitle: "Need a website that actually brings in enquiries?",
    ctaSub: "Tell us about your business and what the current site is failing to do. We will tell you what we would build and roughly what it costs.",
    ctaMessage: "Hi Buildron, I want to discuss a website project.",
    image: "/images/service-website.jpg",
    relatedServices: ["ecommerce", "seo", "ai-chatbots"],
    relatedSolutions: ["textile", "professional-services"],
    relatedCaseStudies: ["corporate-digital-presence", "saas-analytics-dashboard"],
    relatedGuides: ["website-vs-web-app", "pakistani-business-website-checklist"],
    keywords: ["web development company Pakistan", "website development company Pakistan", "web design company Pakistan", "web development services Pakistan", "custom web development Pakistan", "business website development Pakistan", "web developer Pakistan"],
  },
  {
    slug: "ai-automation",
    label: "AI Automation",
    h1: "AI Automation Agency in Pakistan for Sales, Support & Operations",
    metaTitle: "AI Automation Agency in Pakistan | Buildron",
    metaDescription:
      "Buildron is an AI automation agency in Pakistan building WhatsApp automation, AI lead qualification, CRM workflows, follow-up systems and business process automation.",
    serviceType: "Business process automation",
    answer:
      "AI automation means connecting the repetitive parts of your business — enquiries, follow-up, data entry, reporting — into workflows that run without a person driving them. Buildron builds these systems around tools your team already uses, most often WhatsApp, email, spreadsheets and your CRM, so nothing has to be replaced on day one.",
    whoFor: [
      "Businesses losing leads because nobody replies fast enough",
      "Teams re-typing the same data into two or three different places",
      "Owners who are the bottleneck for every routine decision",
      "Sales teams with no reliable record of who followed up with whom",
    ],
    problems: [
      "Enquiries arrive on WhatsApp, Facebook and the website, and none of them end up in one list",
      "Follow-up depends on someone remembering, so most leads go cold",
      "Staff spend hours a week copying between forms, sheets and invoices",
      "Nobody can say how many leads came in last month without rebuilding the number by hand",
    ],
    deliver: [
      { title: "Lead capture", desc: "Every enquiry from every channel lands in one place, tagged with its source." },
      { title: "AI qualification", desc: "Incoming messages are read, summarised and sorted so your team sees the serious ones first." },
      { title: "Follow-up sequences", desc: "Automatic WhatsApp and email follow-up on a schedule you define, stopping the moment a human replies." },
      { title: "CRM sync", desc: "Contacts, notes and stages written straight into your CRM or sheet, with no duplicate entry." },
      { title: "Internal workflows", desc: "Quotes, approvals, reminders and handovers moved out of someone's memory and into a system." },
      { title: "Reporting", desc: "A standing view of enquiry volume, response time and conversion instead of a monthly reconstruction." },
    ],
    process: [
      { step: "Map", desc: "We trace what actually happens today, step by step, including the informal parts." },
      { step: "Prioritise", desc: "We pick the workflows with the highest time cost or the highest leak rate first." },
      { step: "Build", desc: "We implement the automation against your real tools and real data." },
      { step: "Test", desc: "We run it in parallel with the manual process before anything is switched off." },
      { step: "Handover", desc: "Your team learns to see, pause and adjust the workflows themselves." },
      { step: "Extend", desc: "Once the first workflow is trusted, we automate the next one." },
    ],
    useCases: [
      "Website and WhatsApp enquiries merged into one qualified lead pipeline",
      "Automatic quotation follow-up for a manufacturer with a long sales cycle",
      "Order status updates sent to customers without a staff member checking",
      "Daily operations summary assembled from several systems and sent to the owner",
    ],
    tech: ["WhatsApp Business API", "Large language models", "CRM integrations", "Webhooks", "Workflow automation", "Custom APIs"],
    faqs: [
      {
        q: "What can AI automation actually automate for a small business?",
        a: "Realistically: capturing and sorting enquiries, first-response messages, follow-up sequences, appointment reminders, data entry between systems, document and quote generation, and routine reporting. It does not replace judgement, negotiation or relationship work.",
      },
      {
        q: "Do I need to change the software I already use?",
        a: "Usually not. Most automation connects to what you already have — WhatsApp, email, spreadsheets, your existing CRM. We only recommend replacing a tool when it genuinely cannot be connected to anything.",
      },
      {
        q: "Is AI automation safe for customer data?",
        a: "It depends on how it is built. We keep customer data inside systems you control, limit what is sent to third-party models, and avoid sending identifying details where the workflow does not need them. We will tell you exactly what flows where before we build.",
      },
      {
        q: "How quickly does automation pay for itself?",
        a: "The honest answer is that it depends on how much time or how many leads you are currently losing. We scope the first workflow around a cost you can measure, so you can judge the return before committing to more.",
      },
    ],
    ctaTitle: "Which part of your business repeats itself every week?",
    ctaSub: "Describe the process that eats the most time or loses the most leads. We will tell you whether it can be automated and what that would involve.",
    ctaMessage: "Hi Buildron, I want to discuss AI automation for my business.",
    image: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["lead-automation", "ai-chatbots", "erp-development"],
    relatedSolutions: ["manufacturing", "ecommerce"],
    relatedCaseStudies: ["ai-lead-automation-pipeline"],
    relatedGuides: ["ai-automation-small-business", "whatsapp-lead-automation"],
    keywords: ["AI automation agency Pakistan", "AI automation services Pakistan", "business process automation Pakistan", "WhatsApp automation Pakistan", "AI lead automation Pakistan", "AI agents for business Pakistan", "workflow automation Pakistan"],
  },
  {
    slug: "erp-development",
    label: "ERP Development",
    h1: "ERP Software Development Company in Pakistan for Growing Businesses",
    metaTitle: "ERP Software Development Company in Pakistan | Buildron",
    metaDescription:
      "Custom ERP software development in Pakistan for manufacturers, textile businesses and growing companies. Connect sales, inventory, production, purchasing, accounts and reporting.",
    serviceType: "ERP software development",
    answer:
      "Buildron builds custom ERP systems for Pakistani businesses that have outgrown spreadsheets but do not fit standard off-the-shelf software. We start with the modules that are actually causing pain — usually inventory, production or receivables — and extend from there, so you get a working system in weeks rather than a two-year rollout.",
    whoFor: [
      "Textile and garment units tracking production across multiple stages",
      "Manufacturers and trading companies managing stock across several locations",
      "Businesses where the real system is a set of linked spreadsheets on one person's laptop",
      "Companies that bought generic ERP software and could not make it match their process",
    ],
    problems: [
      "Stock on paper does not match stock in the warehouse",
      "Nobody knows the true cost of a finished item until long after it has shipped",
      "Production status lives in a WhatsApp group and a notebook",
      "Receivables are tracked separately from sales, so ageing is always out of date",
      "Every report has to be built by hand before any decision can be made",
    ],
    deliver: [
      { title: "Sales and orders", desc: "Quotations, orders, dispatch and invoicing linked to one customer record." },
      { title: "Inventory", desc: "Real stock positions across stores and locations, with movement history." },
      { title: "Production", desc: "Job orders tracked through each stage, with material consumption and wastage recorded." },
      { title: "Purchasing", desc: "Supplier orders, receipts and pending quantities tied to what production actually needs." },
      { title: "Accounts", desc: "Receivables, payables and ledgers that reflect what sales and purchasing already entered." },
      { title: "Roles and reporting", desc: "Per-role access so staff see their work, and owners see the whole picture." },
    ],
    process: [
      { step: "Study", desc: "We sit with the people doing the work and document the real process, including the workarounds." },
      { step: "Scope", desc: "We agree which module goes live first and what is deliberately left for phase two." },
      { step: "Build", desc: "The first module is built against your actual data and terminology." },
      { step: "Pilot", desc: "One team or one location runs it alongside the existing method." },
      { step: "Roll out", desc: "Data migration, training and cutover once the pilot is trusted." },
      { step: "Extend", desc: "Additional modules added in priority order as the system proves itself." },
    ],
    useCases: [
      "Production tracking for a textile unit from greige to finished goods",
      "Multi-location inventory for a distributor with warehouse and shop stock",
      "Costing system that shows real per-unit cost including wastage",
      "Receivables ageing that updates automatically from sales entries",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access control", "Reporting and exports", "Cloud or on-premise hosting"],
    faqs: [
      {
        q: "When should a business replace spreadsheets with ERP?",
        a: "When more than one person needs to update the same numbers, when you cannot trust the stock or receivables figure without checking it manually, or when producing a basic report takes hours. Below that threshold, well-built spreadsheets are usually still the cheaper answer.",
  },
      {
        q: "Is custom ERP better than ready-made ERP software?",
        a: "Not always. Ready-made software is cheaper and faster if your process is close to standard. Custom becomes the better option when your process is the thing that makes you competitive, or when you have already tried to force a standard package to fit and failed.",
      },
      {
        q: "How long does an ERP implementation take?",
        a: "We deliberately avoid big-bang rollouts. A first working module typically goes live in weeks; a full multi-module system is built out in phases over months, with each phase usable on its own.",
      },
      {
        q: "Can the system work when the internet is down?",
        a: "Yes, this is a real constraint in Pakistani industrial areas and we plan for it. Depending on your setup we deploy on-premise, or build offline-tolerant entry that syncs when the connection returns.",
      },
    ],
    ctaTitle: "Outgrown your spreadsheets?",
    ctaSub: "Tell us which part of the operation is hardest to keep accurate. That is usually the right module to build first.",
    ctaMessage: "Hi Buildron, I want to discuss a custom ERP / business software project.",
    image: "/images/service-erp.jpg",
    relatedServices: ["ai-automation", "custom-business-systems"],
    relatedSolutions: ["textile", "manufacturing"],
    relatedCaseStudies: ["manufacturing-erp-system"],
    relatedGuides: ["spreadsheets-to-erp", "textile-erp-explained"],
    keywords: ["ERP software development company Pakistan", "custom ERP software Pakistan", "ERP development Pakistan", "textile ERP software Pakistan", "manufacturing ERP Pakistan", "business management software Pakistan"],
  },
  {
    slug: "seo",
    label: "SEO",
    h1: "SEO Company in Pakistan for Google Visibility & Qualified Leads",
    metaTitle: "SEO Company in Pakistan | Buildron",
    metaDescription:
      "SEO services in Pakistan covering technical SEO, on-page SEO, local SEO, content strategy and search visibility for businesses that want qualified enquiries.",
    serviceType: "Search engine optimization",
    answer:
      "Buildron's SEO work starts with the technical foundation — crawlability, page structure, speed and structured data — then builds the pages and content that match what your buyers actually search. We prioritise commercial and local queries that produce enquiries over broad keywords that produce traffic and nothing else.",
    whoFor: [
      "Businesses invisible for their own service in their own city",
      "Companies getting traffic that never turns into enquiries",
      "Sites that were rebuilt and lost their rankings",
      "Exporters who need to be found by international buyers, not just local ones",
    ],
    problems: [
      "The site is not indexed properly, so nothing else matters yet",
      "One page tries to target every service at once",
      "Titles and descriptions are duplicated or missing across the site",
      "No Google Business Profile, so the business is absent from local map results",
      "Content written for keyword count rather than for the question being asked",
    ],
    deliver: [
      { title: "Technical audit", desc: "Indexing, canonicals, redirects, speed, structured data and crawl waste, fixed not just listed." },
      { title: "Search intent mapping", desc: "One page per real query cluster, instead of a homepage trying to rank for everything." },
      { title: "On-page work", desc: "Titles, descriptions, heading structure and internal links rewritten to match intent." },
      { title: "Local SEO", desc: "Google Business Profile, consistent NAP details and genuine location relevance." },
      { title: "Content", desc: "Short, answer-first pages that resolve a question and route to the relevant service." },
      { title: "Measurement", desc: "Search Console and analytics configured so you can see queries, not just sessions." },
    ],
    process: [
      { step: "Audit", desc: "We find what is blocking indexing and ranking right now." },
      { step: "Fix", desc: "Technical issues are resolved first, because content cannot outrun a broken foundation." },
      { step: "Structure", desc: "We map keyword clusters to pages and fill the gaps." },
      { step: "Publish", desc: "Focused pages and guides, each answering one thing properly." },
      { step: "Link", desc: "Internal linking so authority reaches the pages that earn money." },
      { step: "Report", desc: "Monthly view of impressions, queries, positions and enquiries." },
    ],
    useCases: [
      "Local visibility for a service business targeting Faisalabad searches",
      "Service page architecture for an agency with eight overlapping offerings",
      "Recovering rankings lost during a website redesign",
      "Building topical authority around a specific industry niche",
    ],
    tech: ["Google Search Console", "Google Analytics 4", "Schema.org structured data", "Core Web Vitals", "Google Business Profile"],
    faqs: [
      {
        q: "How long does SEO take to work in Pakistan?",
        a: "Technical fixes and indexing improvements can show within weeks. Competitive commercial rankings usually take several months of consistent work. Anyone promising first position quickly is either targeting keywords nobody searches or not being straight with you.",
  },
      {
        q: "Can you guarantee a number one ranking?",
        a: "No, and no honest agency can. Google does not sell or promise positions. What we can commit to is a correct technical foundation, pages that match real search intent, and visible reporting on what is improving.",
      },
      {
        q: "What does SEO cost in Pakistan?",
        a: "Buildron's monthly SEO engagements start at Rs. 15,000 and scale with the breadth of the work. Technical-only audits can also be done as a one-off project.",
      },
      {
        q: "Do I need local SEO or national SEO?",
        a: "If customers can buy from you remotely, national. If they need to find, visit or trust a local presence, local first. Most Faisalabad service businesses should secure local visibility before competing nationally.",
      },
    ],
    ctaTitle: "Not showing up for your own service?",
    ctaSub: "Send us your website and the searches you want to win. We will tell you what is blocking you before quoting anything.",
    ctaMessage: "Hi Buildron, I'm interested in SEO services.",
    image: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["web-development", "social-media-marketing", "ecommerce"],
    relatedSolutions: ["professional-services", "ecommerce"],
    relatedCaseStudies: ["corporate-digital-presence"],
    relatedGuides: ["pakistani-business-website-checklist"],
    keywords: ["SEO company Pakistan", "SEO services Pakistan", "SEO agency Pakistan", "search engine optimization Pakistan", "technical SEO Pakistan", "local SEO Pakistan", "ecommerce SEO Pakistan"],
  },
  {
    slug: "social-media-marketing",
    label: "Social Media Marketing",
    h1: "Social Media Marketing Agency in Pakistan for Lead-Focused Growth",
    metaTitle: "Social Media Marketing Agency in Pakistan | Buildron",
    metaDescription:
      "Social media marketing services in Pakistan covering content strategy, social media management, creative direction and lead-focused growth across major platforms.",
    serviceType: "Social media marketing",
    answer:
      "Buildron treats social media as the top of a lead system rather than a separate activity. We plan content around what your buyers need to see before they enquire, publish consistently, and connect the resulting conversations to the same WhatsApp and CRM pipeline as the rest of your marketing, so attention turns into tracked enquiries.",
    whoFor: [
      "Businesses posting regularly with nothing measurable to show for it",
      "Brands where enquiries arrive on Instagram or Facebook and then get lost",
      "Companies with real expertise that never makes it into their content",
      "Local businesses competing for attention in a crowded Faisalabad market",
    ],
    problems: [
      "Posting is inconsistent because it depends on whoever has time",
      "Content shows products but never explains why a buyer should care",
      "DMs and comment enquiries are never followed up",
      "No way to tell which content actually produced business",
    ],
    deliver: [
      { title: "Content strategy", desc: "Themes tied to your services and the objections buyers raise before purchasing." },
      { title: "Planning and calendar", desc: "A schedule your team can actually sustain, agreed in advance." },
      { title: "Creative direction", desc: "Consistent visual identity across posts, so the brand is recognisable." },
      { title: "Management", desc: "Publishing, community responses and message routing handled." },
      { title: "Lead routing", desc: "Social enquiries pushed into the same WhatsApp and CRM pipeline as website leads." },
      { title: "Reporting", desc: "Reach and engagement reported alongside enquiries generated." },
    ],
    process: [
      { step: "Position", desc: "We define what your brand should be known for, specifically." },
      { step: "Plan", desc: "Content pillars and a realistic publishing rhythm." },
      { step: "Produce", desc: "Creative and copy prepared in batches, reviewed before scheduling." },
      { step: "Publish", desc: "Consistent posting and active community management." },
      { step: "Capture", desc: "Conversations routed to WhatsApp and logged as leads." },
      { step: "Refine", desc: "Double down on the formats that produce enquiries." },
    ],
    useCases: [
      "Product storytelling for a fashion or e-commerce brand",
      "Authority content for a professional services firm",
      "Behind-the-scenes manufacturing content that builds buyer confidence",
      "Launch campaigns tied to a landing page and WhatsApp capture",
    ],
    tech: ["Meta Business Suite", "Content scheduling tools", "WhatsApp Business", "UTM tracking", "Analytics"],
    faqs: [
      {
        q: "Does social media actually generate leads for B2B businesses in Pakistan?",
        a: "It does, but usually indirectly. Buyers check your social presence to decide whether you are credible before they contact you. For B2B, the goal is proof and visibility rather than direct selling in the feed.",
  },
      {
        q: "How often should a business post?",
        a: "Consistency beats volume. A sustainable two to three posts a week that you can maintain for a year will outperform daily posting that stops after six weeks.",
      },
      {
        q: "Do you run paid ads as well?",
        a: "We focus on organic content and the lead systems behind it. Where paid amplification makes sense, we will build the landing pages and tracking so ad spend is measurable, and tell you honestly if a specialist media buyer would serve you better.",
      },
    ],
    ctaTitle: "Posting consistently but not converting?",
    ctaSub: "Show us your current accounts and who you are trying to reach. We will tell you what is missing between content and enquiries.",
    ctaMessage: "Hi Buildron, I'm interested in social media services.",
    image: "https://images.unsplash.com/photo-1777559542722-5301247fa3b8?auto=format&fit=crop&fm=jpg&q=82&w=1800",
    relatedServices: ["seo", "lead-automation", "ecommerce"],
    relatedSolutions: ["ecommerce", "real-estate"],
    relatedCaseStudies: ["fashion-ecommerce-experience"],
    relatedGuides: ["whatsapp-lead-automation"],
    keywords: ["social media marketing agency Pakistan", "social media marketing services Pakistan", "social media management Pakistan", "SMM agency Pakistan", "social media advertising Pakistan", "Facebook marketing Pakistan", "Instagram marketing Pakistan"],
  },
  {
    slug: "ecommerce",
    label: "E-commerce",
    h1: "Ecommerce Website Development Company in Pakistan",
    metaTitle: "Ecommerce Website Development Company in Pakistan | Buildron",
    metaDescription:
      "E-commerce website development in Pakistan for online stores, product catalogues, checkout, payments, cash on delivery, courier workflows and mobile commerce.",
    serviceType: "E-commerce development",
    answer:
      "Buildron builds online stores designed for how Pakistani customers actually buy: mobile-first browsing, cash on delivery alongside card and wallet payments, and courier integration that keeps order status accurate. The priority is a checkout that does not lose people and an order flow your team can run without manual reconciliation.",
    whoFor: [
      "Brands selling through Instagram and WhatsApp who need a real storefront",
      "Retailers moving from a marketplace stall to their own channel",
      "Manufacturers launching a direct-to-consumer line",
      "Stores on a hosted platform that no longer fits how they operate",
    ],
    problems: [
      "Most of the traffic is mobile, but checkout was designed for desktop",
      "Cash on delivery orders with no verification step, so returns are high",
      "Stock shown online does not match stock in the shop",
      "Order status handled manually across WhatsApp and a courier portal",
      "Product pages that do not appear in search results at all",
    ],
    deliver: [
      { title: "Storefront", desc: "Fast, mobile-first browsing with category and search that works on a slow connection." },
      { title: "Product system", desc: "Variants, stock, pricing and imagery managed in one place." },
      { title: "Checkout", desc: "A short checkout supporting cash on delivery, cards and local wallets." },
      { title: "Orders and fulfilment", desc: "Order management with courier integration and status updates." },
      { title: "Customer accounts", desc: "Order history, addresses and reorder, where it earns its complexity." },
      { title: "Commerce SEO", desc: "Product and category pages with correct structured data and unique metadata." },
    ],
    process: [
      { step: "Catalogue", desc: "We model your products, variants and stock logic first." },
      { step: "Design", desc: "Storefront and checkout designed around mobile behaviour." },
      { step: "Build", desc: "Store, payments, shipping rules and order management implemented." },
      { step: "Integrate", desc: "Courier, payment gateway, analytics and WhatsApp connected." },
      { step: "Launch", desc: "Test orders end to end before going live." },
      { step: "Optimise", desc: "We track where checkout loses people and fix those steps." },
    ],
    useCases: [
      "Fashion brand moving from Instagram selling to an owned storefront",
      "Direct-to-consumer launch for an existing manufacturer",
      "Multi-category retail store with cash on delivery and card payments",
      "Wholesale ordering portal with per-customer pricing",
    ],
    tech: ["Next.js commerce", "Shopify", "WooCommerce", "Local payment gateways", "Courier APIs", "Product schema"],
    faqs: [
      {
        q: "Should I use Shopify or a custom online store?",
        a: "Shopify is the faster and cheaper starting point for a straightforward catalogue. Custom becomes worthwhile when you need unusual pricing logic, deep integration with an ERP or warehouse system, or performance and design control that a theme cannot give you.",
  },
      {
        q: "Can the store support cash on delivery?",
        a: "Yes, and for most Pakistani stores it is essential. We usually pair it with an order confirmation step — often a WhatsApp or OTP check — because unverified COD orders are the main source of failed deliveries.",
      },
      {
        q: "Can the store connect to my inventory or ERP system?",
        a: "Yes. Where you already run inventory or an ERP, we sync stock and orders so the website and the warehouse do not drift apart. This is often the single biggest operational gain.",
      },
    ],
    ctaTitle: "Selling through DMs and ready for a real store?",
    ctaSub: "Tell us what you sell, how you fulfil and what breaks today. We will recommend the platform honestly, custom or not.",
    ctaMessage: "Hi Buildron, I want to discuss an e-commerce project.",
    image: "/images/service-ecommerce.jpg",
    relatedServices: ["web-development", "seo", "ai-chatbots"],
    relatedSolutions: ["ecommerce", "textile"],
    relatedCaseStudies: ["fashion-ecommerce-experience", "direct-to-consumer-store"],
    relatedGuides: ["pakistani-business-website-checklist"],
    keywords: ["ecommerce website development Pakistan", "ecommerce website development company Pakistan", "online store development Pakistan", "Shopify development Pakistan", "WooCommerce development Pakistan", "custom ecommerce website Pakistan"],
  },
  {
    slug: "lead-automation",
    label: "Lead Automation",
    h1: "Lead Automation & WhatsApp Automation for Pakistani Businesses",
    metaTitle: "Lead Automation & WhatsApp Automation in Pakistan | Buildron",
    metaDescription:
      "Buildron builds lead automation and WhatsApp automation in Pakistan to capture, qualify, route and follow up leads from websites, WhatsApp and social channels.",
    serviceType: "Lead generation automation",
    answer:
      "Lead automation is the system that makes sure every enquiry is captured, answered quickly, followed up on a schedule and recorded. Buildron builds this across the channels Pakistani buyers actually use — WhatsApp first, then website forms, calls and social messages — so no enquiry depends on someone remembering it.",
    whoFor: [
      "Businesses where enquiries arrive faster than the team can answer them",
      "Sales teams with no shared record of who contacted whom",
      "Owners personally answering every WhatsApp message",
      "Companies spending on marketing without knowing which channel produces sales",
    ],
    problems: [
      "Slow first response, so the buyer contacts a competitor instead",
      "Follow-up stops after the first message",
      "Leads split across three phones and nobody's list",
      "No idea which marketing channel produced which sale",
    ],
    deliver: [
      { title: "Unified capture", desc: "Website, WhatsApp, calls and social enquiries collected into one pipeline with source tags." },
      { title: "Instant response", desc: "An immediate acknowledgement so the buyer knows they have reached a real business." },
      { title: "Qualification", desc: "Structured questions or AI summarisation so your team knows who to call first." },
      { title: "Follow-up", desc: "Scheduled WhatsApp and email sequences that stop automatically once a human replies." },
      { title: "Assignment", desc: "Leads routed to the right person by service, territory or value." },
      { title: "Attribution", desc: "Clear reporting on volume, response time, conversion and source." },
    ],
    process: [
      { step: "Inventory", desc: "We list every route an enquiry can currently arrive through." },
      { step: "Consolidate", desc: "All routes are connected to one pipeline." },
      { step: "Automate", desc: "Response, qualification and follow-up rules implemented." },
      { step: "Route", desc: "Ownership and escalation rules set so nothing sits unassigned." },
      { step: "Measure", desc: "Response time and conversion tracked from day one." },
      { step: "Tune", desc: "Sequences adjusted based on what actually gets replies." },
    ],
    useCases: [
      "WhatsApp-first lead pipeline for a real estate business",
      "Quotation follow-up automation for a manufacturer",
      "Appointment booking and reminders for a professional services firm",
      "Campaign attribution across social, search and referral enquiries",
    ],
    tech: ["WhatsApp Business API", "CRM integrations", "Webhooks", "Email automation", "Calendar booking", "UTM attribution"],
    faqs: [
      {
        q: "How does WhatsApp lead automation work?",
        a: "An enquiry from any channel creates a contact record. WhatsApp sends an immediate acknowledgement, then a short qualification exchange. The result is written to your CRM and assigned to a person. If the buyer replies to a human, the automated sequence stops so the conversation never feels robotic.",
  },
      {
        q: "Will customers know they are talking to automation?",
        a: "The first acknowledgement is clearly automated and should be, because it sets expectations. Everything after qualification is handled by your team. We deliberately avoid pretending a bot is a person.",
      },
      {
        q: "Do I need a CRM before doing this?",
        a: "No. If you do not have one, we can start with a structured shared sheet and move to a CRM when the volume justifies it. Starting with the tool you will actually keep updated matters more than picking the most capable one.",
      },
    ],
    ctaTitle: "How many enquiries did you lose last month?",
    ctaSub: "If you cannot answer that from a record, that is the problem worth fixing first. Tell us how leads reach you today.",
    ctaMessage: "Hi Buildron, I want to discuss lead automation for my business.",
    image: "/images/project-aiflow.jpg",
    relatedServices: ["ai-automation", "ai-chatbots", "social-media-marketing"],
    relatedSolutions: ["real-estate", "professional-services"],
    relatedCaseStudies: ["ai-lead-automation-pipeline", "real-estate-digital-platform"],
    relatedGuides: ["whatsapp-lead-automation", "ai-automation-small-business"],
    keywords: ["lead automation Pakistan", "WhatsApp lead automation Pakistan", "lead generation automation Pakistan", "sales automation Pakistan", "WhatsApp business automation Pakistan", "CRM lead automation Pakistan"],
  },
  {
    slug: "ai-chatbots",
    label: "AI Chatbots",
    h1: "AI Chatbot Development Company in Pakistan",
    metaTitle: "AI Chatbot Development Company in Pakistan | Buildron",
    metaDescription:
      "Buildron builds AI chatbot solutions in Pakistan for websites and WhatsApp, using your business information for grounded answers, lead qualification and human handover.",
    serviceType: "AI chatbot development",
    answer:
      "Buildron builds AI chatbots that answer from your actual business information — your services, prices, policies and stock — rather than generating plausible-sounding guesses. They handle repetitive questions on your website and WhatsApp, qualify the serious enquiries, and hand over to a human the moment the conversation needs one.",
    whoFor: [
      "Businesses answering the same handful of questions dozens of times a day",
      "Stores fielding constant order status and availability messages",
      "Companies receiving enquiries outside working hours",
      "Teams where support questions interrupt the people doing billable work",
    ],
    problems: [
      "Generic chatbots that invent answers and embarrass the brand",
      "Rigid button-only bots that frustrate anyone with a real question",
      "No handover path, so customers get stuck talking to a machine",
      "Bots that answer questions but never capture the lead",
    ],
    deliver: [
      { title: "Grounded answers", desc: "The bot answers from your documented information, and says it does not know rather than inventing." },
      { title: "Website and WhatsApp", desc: "One assistant across both channels, with consistent answers." },
      { title: "Lead qualification", desc: "Useful details captured during the conversation and passed to your team." },
      { title: "Human handover", desc: "Clear escalation to a person, with the conversation history attached." },
      { title: "Boundaries", desc: "Explicit limits on what the bot will discuss — no pricing improvisation, no promises." },
      { title: "Review loop", desc: "Conversation logs reviewed so gaps in the knowledge base get filled." },
    ],
    process: [
      { step: "Collect", desc: "We gather the real questions your team already answers." },
      { step: "Ground", desc: "Your policies, services and FAQs become the bot's knowledge source." },
      { step: "Build", desc: "Conversation design, guardrails and escalation rules." },
      { step: "Test", desc: "Adversarial testing, including questions it should refuse to answer." },
      { step: "Deploy", desc: "Launch on website and WhatsApp with monitoring enabled." },
      { step: "Improve", desc: "Regular review of unanswered questions and incorrect responses." },
    ],
    useCases: [
      "Order status and product availability for an online store",
      "Service and pricing questions on a professional services website",
      "Property enquiry pre-qualification for a real estate business",
      "Internal assistant that answers staff questions about procedures",
    ],
    tech: ["Large language models", "Retrieval-augmented generation", "WhatsApp Business API", "Vector search", "Custom guardrails"],
    faqs: [
      {
        q: "Will the chatbot make things up about my business?",
        a: "That is the main risk with a poorly built bot, and it is why we ground answers in your documented information and restrict the topics it will respond on. Where it does not have a confident answer, it says so and offers a handover rather than guessing.",
  },
      {
        q: "Can it handle Urdu or Roman Urdu?",
        a: "Yes. Modern language models handle Urdu and Roman Urdu reasonably well, which matters for Pakistani customers who message the way they speak. We test this explicitly rather than assuming it works.",
      },
      {
        q: "What is the difference between an AI chatbot and lead automation?",
        a: "A chatbot is the conversation layer — it answers and qualifies. Lead automation is the system behind it that records the enquiry, assigns it and follows up. They work best together, but you can start with either.",
      },
    ],
    ctaTitle: "Answering the same questions every day?",
    ctaSub: "Send us the ten questions your team repeats most. That list is usually enough to scope a useful assistant.",
    ctaMessage: "Hi Buildron, I want to discuss an AI chatbot for my business.",
    image: "/images/service-aiagent.jpg",
    relatedServices: ["ai-automation", "lead-automation", "ecommerce"],
    relatedSolutions: ["ecommerce", "real-estate"],
    relatedCaseStudies: ["ai-lead-automation-pipeline"],
    relatedGuides: ["ai-automation-small-business", "whatsapp-lead-automation"],
    keywords: ["AI chatbot development company Pakistan", "AI chatbot development Pakistan", "WhatsApp AI chatbot Pakistan", "custom AI chatbot Pakistan", "business AI chatbot Pakistan", "AI customer support chatbot Pakistan"],
  },
  {
    slug: "custom-business-systems",
    label: "Custom Business Systems",
    h1: "Custom Business Software Development in Pakistan",
    metaTitle: "Custom Business Software Development in Pakistan | Buildron",
    metaDescription:
      "Custom business software development in Pakistan for internal tools, portals, dashboards, workflow systems and integrations built around your actual process.",
    serviceType: "Custom software development",
    answer:
      "Some processes are too specific for standard software and too important to run on spreadsheets. Buildron builds focused internal systems — portals, dashboards, approval flows, scheduling and tracking tools — that do one job properly for your business instead of ninety generic jobs badly.",
    whoFor: [
      "Businesses whose competitive advantage is the process itself",
      "Teams running critical work through a shared spreadsheet nobody dares restructure",
      "Companies that need a customer or supplier portal",
      "Owners who need one reliable dashboard instead of five exports",
    ],
    problems: [
      "The process only works because one experienced person holds it in their head",
      "Data lives in several systems that do not talk to each other",
      "Off-the-shelf software forces a process change that costs more than it saves",
      "Reports are assembled manually, so they are always out of date",
    ],
    deliver: [
      { title: "Internal tools", desc: "Focused applications for the specific workflow causing friction." },
      { title: "Portals", desc: "Customer or supplier access to their own orders, documents and status." },
      { title: "Dashboards", desc: "One reliable view of the numbers that drive decisions." },
      { title: "Integrations", desc: "Existing systems connected so data is entered once." },
      { title: "Access control", desc: "Role-based permissions and an audit trail of who changed what." },
      { title: "Documentation", desc: "The system is handed over documented, not as a black box." },
    ],
    process: [
      { step: "Observe", desc: "We watch the process as it really runs, including the exceptions." },
      { step: "Define", desc: "We agree the narrow problem the first version will solve." },
      { step: "Prototype", desc: "A working version early, so feedback is on something real." },
      { step: "Build", desc: "Production implementation with access control and validation." },
      { step: "Adopt", desc: "Migration and training, with the old method available as a fallback." },
      { step: "Evolve", desc: "The system grows as the process does." },
    ],
    useCases: [
      "Supplier portal showing order and payment status",
      "Approval workflow for quotations above a threshold",
      "Scheduling and dispatch tool for a service team",
      "Owner dashboard combining sales, stock and receivables",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Role-based access control", "REST and webhook integrations", "Audit logging"],
    faqs: [
      {
        q: "How is this different from ERP development?",
        a: "ERP covers the core operational modules — sales, inventory, production, accounts — as one connected system. A custom business system is narrower: one process, built properly. Many clients start with a single system and grow into an ERP.",
  },
      {
        q: "What happens if we stop working together?",
        a: "You keep the code, the database and the documentation. We build on standard, widely used technology specifically so another competent developer can take over without a rewrite.",
      },
      {
        q: "Can you work with our existing software?",
        a: "Usually yes, if it exposes an API, a database or even a reliable export. We would rather connect to what works than replace it for the sake of tidiness.",
      },
    ],
    ctaTitle: "Is your most important process running on a spreadsheet?",
    ctaSub: "Describe the workflow and where it breaks. We will tell you whether it needs custom software or just a better spreadsheet.",
    ctaMessage: "Hi Buildron, I want to discuss a custom business system.",
    image: "/images/service-webapp.jpg",
    relatedServices: ["erp-development", "ai-automation", "web-development"],
    relatedSolutions: ["manufacturing", "professional-services"],
    relatedCaseStudies: ["saas-analytics-dashboard", "manufacturing-erp-system"],
    relatedGuides: ["spreadsheets-to-erp", "website-vs-web-app"],
    keywords: ["custom business software development Pakistan", "business management software Pakistan", "custom business systems Pakistan", "workflow software development Pakistan", "business process software Pakistan", "custom internal software Pakistan"],
  },
];

export const SERVICE_SLUGS = SERVICE_PAGES.map((s) => s.slug);

export function getService(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}

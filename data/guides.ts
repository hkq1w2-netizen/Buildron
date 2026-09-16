export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** The direct answer, rendered above everything else. */
  answer: string;
  published: string;
  updated: string;
  readMinutes: number;
  body: Block[];
  faqs: { q: string; a: string }[];
  ctaMessage: string;
  relatedServices: string[];
  relatedSolutions: string[];
  relatedCaseStudies: string[];
};

export const GUIDES: Guide[] = [
  {
    slug: "ai-automation-small-business",
    title: "What can AI automation actually automate for a small business?",
    h1: "What can AI automation actually automate for a small business?",
    metaTitle: "What Can AI Automation Do for a Small Business? | Buildron",
    metaDescription:
      "A practical list of what AI automation genuinely handles for a small business, what it does not, and where to start.",
    answer:
      "For most small businesses, AI automation reliably handles four things: capturing and sorting enquiries, sending first responses and follow-ups, moving data between systems so nobody retypes it, and assembling routine reports. It does not handle negotiation, judgement calls, or relationships — and any vendor claiming otherwise is selling you a disappointment.",
    published: "2026-02-10",
    updated: "2026-09-15",
    readMinutes: 4,
    body: [
      { type: "h2", text: "Why this question matters" },
      {
        type: "p",
        text: "Automation is usually sold as a capability list rather than an outcome. That makes it hard to judge whether it applies to you. The useful test is simpler: find the tasks in your week that are repetitive, rule-based and currently done by a person, then ask which of those are actually costing you money or losing you customers.",
      },
      { type: "h2", text: "What it genuinely automates" },
      {
        type: "ul",
        items: [
          "Enquiry capture — messages from WhatsApp, your website and social channels collected into one list with the source recorded.",
          "First response — an immediate acknowledgement so the enquiry does not sit unanswered while your team is busy.",
          "Qualification — reading an incoming message, summarising it, and sorting the serious enquiries from the casual ones.",
          "Follow-up — scheduled messages that stop automatically the moment a human replies.",
          "Data movement — writing the same details into your CRM, sheet or invoicing tool once instead of three times.",
          "Document generation — quotes, invoices and confirmations produced from structured data rather than retyped.",
          "Routine reporting — a daily or weekly summary assembled from several systems without anyone exporting anything.",
        ],
      },
      { type: "h2", text: "What it does not automate" },
      {
        type: "p",
        text: "Pricing negotiations, exceptions to your own rules, anything requiring commercial judgement, and relationship work. Automation also cannot fix a process that is broken — it will simply run the broken process faster and more consistently. If your follow-up script does not work when a person sends it, automating it produces more failure, not less.",
      },
      { type: "h2", text: "A realistic starting point" },
      {
        type: "ol",
        items: [
          "Pick one measurable problem — usually slow response to enquiries, or hours lost to duplicate data entry.",
          "Write down how the process runs today, including the informal parts people do without thinking.",
          "Automate the single highest-cost step, not the whole workflow.",
          "Run it alongside the manual method for two weeks before switching anything off.",
          "Measure the difference, then decide whether to automate the next step.",
        ],
      },
      { type: "h2", text: "A concrete example" },
      {
        type: "p",
        text: "A distributor was receiving around forty enquiries a week across WhatsApp, Facebook and a website form. Nothing was recorded centrally, so follow-up depended on whoever saw the message. The first automation did three things only: collected every enquiry into one list, sent an immediate acknowledgement, and scheduled a follow-up message two days later that cancelled itself if a staff member replied first. No AI decision-making, no CRM migration. That single step changed response time from unpredictable to immediate, and made enquiry volume a number the owner could actually see.",
      },
      { type: "h2", text: "How to judge a proposal" },
      {
        type: "p",
        text: "Ask what happens when the automation is wrong, who sees the failure, and how you switch it off. A vendor who cannot answer those three questions has not built the system for your business — they have configured a template and hoped.",
      },
    ],
    faqs: [
      {
        q: "Do I need AI, or just automation?",
        a: "Most of the value in a first project comes from ordinary automation — capture, routing, scheduled follow-up. AI adds value specifically where something unstructured has to be understood, like summarising a free-text enquiry or answering a question in the customer's own words.",
      },
      {
        q: "How much does automation cost to set up in Pakistan?",
        a: "Buildron's automation projects start around Rs. 50,000 for a focused first workflow and scale with the number of systems involved. The cost driver is usually integration complexity, not the automation logic itself.",
      },
      {
        q: "Will automation replace staff?",
        a: "In small businesses it usually redirects them rather than replacing them. The tasks it removes are the ones nobody wanted — retyping, chasing, exporting. The team ends up handling the conversations that actually require a person.",
      },
    ],
    ctaMessage: "Hi Buildron, I read your AI automation guide and want to discuss automating a process.",
    relatedServices: ["ai-automation", "lead-automation", "ai-chatbots"],
    relatedSolutions: ["manufacturing", "ecommerce"],
    relatedCaseStudies: ["ai-lead-automation-pipeline"],
  },
  {
    slug: "website-vs-web-app",
    title: "Website vs web app: which does a business need?",
    h1: "Website vs web app: which does your business need?",
    metaTitle: "Website vs Web App: Which Does Your Business Need? | Buildron",
    metaDescription:
      "The practical difference between a website and a web application, and how to tell which one your business actually needs.",
    answer:
      "A website presents information to persuade someone to contact or buy from you. A web application lets people do work — log in, enter data, and change something that persists. If your visitors only need to read and then contact you, you need a website. If they need to accomplish a task, you need an application. Many businesses need both, but rarely at the same time.",
    published: "2026-02-18",
    updated: "2026-09-15",
    readMinutes: 4,
    body: [
      { type: "h2", text: "The distinction that actually matters" },
      {
        type: "p",
        text: "The technical line between the two is blurry and not worth arguing about. The commercially useful distinction is state. A website shows the same content to everyone and does not remember them. A web application holds data per user, changes based on what they do, and has to handle accounts, permissions and the consequences of wrong input.",
      },
      {
        type: "p",
        text: "That difference drives everything else: cost, timeline, ongoing maintenance and the kind of testing required before launch.",
      },
      { type: "h2", text: "You need a website when" },
      {
        type: "ul",
        items: [
          "Your goal is enquiries, calls or credibility before a first meeting.",
          "Visitors read, evaluate, and then contact you through WhatsApp, a form or a phone call.",
          "Content changes occasionally — services, projects, team, pricing.",
          "Nobody needs to log in to get value from it.",
        ],
      },
      { type: "h2", text: "You need a web application when" },
      {
        type: "ul",
        items: [
          "Users log in and see data specific to them.",
          "Someone enters information that other people rely on later.",
          "Different roles need different permissions over the same data.",
          "The thing you are building replaces a spreadsheet or a manual process.",
        ],
      },
      { type: "h2", text: "What the difference costs you" },
      {
        type: "p",
        text: "A business website is a defined project with a clear end. An application is closer to an ongoing commitment: it needs authentication, validation, backups, error handling and a plan for what happens when a user does something unexpected. Budget for a web application should always include what happens after launch, because unlike a website it does not sit still.",
      },
      { type: "h2", text: "The common mistake" },
      {
        type: "p",
        text: "Businesses often specify an application when they need a website with one good form. Wanting customers to 'have a portal' usually means wanting them to see their order status — which may be solved by an automated WhatsApp update rather than a login system nobody will remember the password for. The cheapest version of a feature is frequently the right one to build first.",
      },
      { type: "h2", text: "How to decide in five minutes" },
      {
        type: "ol",
        items: [
          "Write the single most valuable thing a visitor should be able to do.",
          "Ask whether doing it requires the system to remember who they are.",
          "If no, it is a website. Build that, and build it well.",
          "If yes, ask whether a person could handle it manually at your current volume.",
          "If a person could, automate the message instead of building the application — and revisit when volume genuinely demands it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can one project include both?",
        a: "Yes, and it is common — a marketing website with a customer portal behind a login. We usually build and launch the website first, because it starts generating enquiries while the application is still being scoped.",
      },
      {
        q: "Is a web app more expensive to maintain?",
        a: "Considerably. A website needs occasional content updates. An application needs dependency updates, backups, monitoring and support for users who get stuck. That ongoing cost should be part of the decision, not a surprise afterwards.",
      },
    ],
    ctaMessage: "Hi Buildron, I read your website vs web app guide and want help deciding what to build.",
    relatedServices: ["web-development", "custom-business-systems"],
    relatedSolutions: ["professional-services"],
    relatedCaseStudies: ["saas-analytics-dashboard", "corporate-digital-presence"],
  },
  {
    slug: "pakistani-business-website-checklist",
    title: "What should a Pakistani business website include?",
    h1: "What should a Pakistani business website include?",
    metaTitle: "What Should a Pakistani Business Website Include? | Buildron",
    metaDescription:
      "A practical checklist of what a business website in Pakistan actually needs — from WhatsApp access to local search signals.",
    answer:
      "A Pakistani business website needs six things before anything else: a clear statement of what you do and where, visible WhatsApp and phone contact, one page per service, real proof of work, fast loading on mobile data, and consistent contact details that match your Google Business Profile. Design quality matters, but it never compensates for missing any of those six.",
    published: "2026-03-02",
    updated: "2026-09-15",
    readMinutes: 5,
    body: [
      { type: "h2", text: "Why local context changes the checklist" },
      {
        type: "p",
        text: "Generic website advice assumes desktop traffic, card payments and email as the default contact channel. In Pakistan the majority of visits are mobile, often on variable connections, and the expected contact route is WhatsApp. A site that ignores those three facts will underperform regardless of how well it is designed.",
      },
      { type: "h2", text: "The six essentials" },
      {
        type: "ol",
        items: [
          "A clear identity statement — what you do, who you serve, and which city or region you operate in, visible without scrolling.",
          "WhatsApp and phone access on every page, not buried on a contact page.",
          "One page per service, each explaining what it is, who it suits and what engagement involves.",
          "Genuine proof — real project work, real photographs, named people where appropriate.",
          "Fast mobile loading, with optimised images and minimal unnecessary JavaScript.",
          "Consistent name, address and phone number matching your Google Business Profile exactly.",
        ],
      },
      { type: "h2", text: "What most sites get wrong" },
      {
        type: "ul",
        items: [
          "Every service described on the homepage, so no page can rank for any specific search.",
          "A contact form as the only route, when most visitors would rather send a WhatsApp message.",
          "Stock photography instead of actual work, which local buyers spot immediately.",
          "Heavy sliders and background video that make the first load painful on mobile data.",
          "A phone number on the website that differs from the one on the Google listing.",
        ],
      },
      { type: "h2", text: "Things worth adding once the basics are done" },
      {
        type: "ul",
        items: [
          "A short FAQ answering the questions your team repeats on every call.",
          "Pricing ranges or a starting figure — most local sites hide this, so stating it builds trust and filters enquiries.",
          "An about page with real people, because anonymous businesses lose to named ones.",
          "Structured data describing your organisation and services to search engines.",
          "Urdu content if a meaningful share of your customers prefer it.",
        ],
      },
      { type: "h2", text: "A quick self-audit" },
      {
        type: "p",
        text: "Open your website on a phone, on mobile data, with the browser cache cleared. Count the seconds until you can read something useful. Then try to contact the business in one tap. If either of those fails, fix it before spending anything on advertising or content — paid traffic arriving at a slow or dead-end page is the most expensive mistake a small business can make online.",
      },
    ],
    faqs: [
      {
        q: "Do I need a website if I already sell through WhatsApp and Instagram?",
        a: "You do not strictly need one to sell, but you need one to be found. Search is where people look when they do not already know you exist, and a website is the only asset in that chain you actually own.",
      },
      {
        q: "Should pricing be shown on the website?",
        a: "A starting range usually helps more than it costs. It filters out enquiries you would have declined anyway and signals confidence. Exact pricing only makes sense when your scope is genuinely standardised.",
      },
      {
        q: "How important is a Google Business Profile?",
        a: "For any business serving a local market, it is often more important than the website itself for initial visibility. It is free, and the contact details on it must match your site exactly.",
      },
    ],
    ctaMessage: "Hi Buildron, I read your business website guide and want a review of my website.",
    relatedServices: ["web-development", "seo"],
    relatedSolutions: ["professional-services", "ecommerce"],
    relatedCaseStudies: ["corporate-digital-presence"],
  },
  {
    slug: "whatsapp-lead-automation",
    title: "How WhatsApp lead automation works",
    h1: "How WhatsApp lead automation works",
    metaTitle: "How WhatsApp Lead Automation Works | Buildron",
    metaDescription:
      "A plain explanation of how WhatsApp lead automation captures, qualifies and follows up enquiries — and where it should stop.",
    answer:
      "WhatsApp lead automation works in four steps: an enquiry from any channel creates a contact record, an automatic message acknowledges it immediately, a short qualification exchange gathers the details your team needs, and a scheduled follow-up sequence runs until a human replies — at which point the automation stops and the conversation becomes a normal one.",
    published: "2026-03-14",
    updated: "2026-09-15",
    readMinutes: 4,
    body: [
      { type: "h2", text: "Why WhatsApp specifically" },
      {
        type: "p",
        text: "In Pakistan, WhatsApp is where commercial conversations already happen. Buyers message rather than email, and they expect a reply in minutes rather than the next working day. The problem is that WhatsApp was designed for personal conversation, so at business volume it has no record, no assignment, and no way to tell which enquiries were dropped.",
      },
      { type: "h2", text: "The four stages" },
      {
        type: "ol",
        items: [
          "Capture — an enquiry from the website, a social channel or a direct message creates a record with the source attached.",
          "Acknowledge — an automatic message confirms receipt within seconds, so the buyer does not move on to a competitor.",
          "Qualify — a short structured exchange, or AI summarisation of a free-text message, gathers what your team needs to prioritise.",
          "Follow up — scheduled messages at defined intervals, cancelled automatically as soon as a person replies.",
        ],
      },
      { type: "h2", text: "What sits behind it" },
      {
        type: "p",
        text: "Business-grade automation uses the WhatsApp Business API rather than the ordinary app. That matters for two reasons: it allows multiple team members to work from one number with a shared record, and it keeps you within WhatsApp's rules. Automating a personal WhatsApp account through unofficial tools risks the number being banned, which for most businesses would be worse than the problem being solved.",
      },
      { type: "h2", text: "Where automation should stop" },
      {
        type: "ul",
        items: [
          "Pricing negotiation — automated price messages create commitments you may not want to honour.",
          "Complaints — an automated reply to an angry customer makes the situation worse.",
          "Anything requiring judgement about an exception to your own policy.",
          "Pretending to be a person. The first message should read as automated, because that sets honest expectations.",
        ],
      },
      { type: "h2", text: "A realistic first build" },
      {
        type: "p",
        text: "Start with capture and acknowledgement only. That alone fixes the most expensive failure — enquiries sitting unanswered — and requires no AI at all. Add qualification once you know what your team actually asks on every first call. Add follow-up sequences last, because those need real message copy that has been tested on real buyers.",
      },
      { type: "h2", text: "What to measure" },
      {
        type: "ul",
        items: [
          "Time from enquiry arriving to first response.",
          "Percentage of enquiries that receive any follow-up at all.",
          "Enquiries by source, so marketing spend can be judged.",
          "How many conversations required human takeover, and at which point.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will my WhatsApp number get banned for automation?",
        a: "Not if it is done through the official WhatsApp Business API with proper opt-in. Unofficial automation tools that drive the regular app are the ones that get numbers banned, which is why we do not use them.",
      },
      {
        q: "Can I keep using my existing WhatsApp number?",
        a: "In most cases yes, though migrating a number to the Business API is a one-way move and the number can no longer be used in the regular app. That trade-off is worth understanding before starting.",
      },
      {
        q: "What does it cost to run?",
        a: "There is a setup cost for building the workflows, plus WhatsApp's own per-conversation messaging charges, which are modest per enquiry. The recurring cost scales with conversation volume rather than with contacts stored.",
      },
    ],
    ctaMessage: "Hi Buildron, I read your WhatsApp automation guide and want to discuss a lead system.",
    relatedServices: ["lead-automation", "ai-automation", "ai-chatbots"],
    relatedSolutions: ["real-estate", "ecommerce"],
    relatedCaseStudies: ["ai-lead-automation-pipeline"],
  },
  {
    slug: "textile-erp-explained",
    title: "How textile ERP software works",
    h1: "How textile ERP software works",
    metaTitle: "How Textile ERP Software Works | Buildron",
    metaDescription:
      "How ERP software tracks a textile order through production stages, material consumption and costing — explained without jargon.",
    answer:
      "Textile ERP works by making the job order the centre of everything. A job order is created, material is issued against it, each production stage records what it consumed and produced, and finished goods enter stock against the same order. Because every movement is tied to that order, real cost and real status are known while the order is running instead of weeks after it ships.",
    published: "2026-04-05",
    updated: "2026-09-15",
    readMinutes: 5,
    body: [
      { type: "h2", text: "Why textile is harder than general manufacturing" },
      {
        type: "p",
        text: "Most manufacturing tracks a product through a line. Textile tracks material that changes identity at every stage — yarn becomes greige, greige becomes dyed fabric, fabric becomes cut parts, cut parts become finished pieces. Each transformation has its own wastage, and material frequently leaves the premises for job work and comes back in a different form. Generic ERP packages usually model this badly, which is why so many textile units abandon them.",
      },
      { type: "h2", text: "The core flow" },
      {
        type: "ol",
        items: [
          "A sales order or production plan creates a job order with a target quantity and specification.",
          "Material is issued from stores against that job order, so stock reduces and the order carries the cost.",
          "Each stage records input quantity, output quantity and wastage, so loss is visible where it occurs rather than as a total at the end.",
          "Material sent out for job work stays recorded as your stock, held against the processor, until it returns.",
          "Finished output is received into stock against the job order.",
          "Cost is calculated from actual consumption, not from an estimate applied afterwards.",
        ],
      },
      { type: "h2", text: "What this changes in practice" },
      {
        type: "ul",
        items: [
          "You can quote a new order using your real cost from a comparable previous order.",
          "Wastage is attributable to a stage and a period, so it can be investigated instead of accepted.",
          "Sales can give a delivery status without walking to the floor or calling a supervisor.",
          "Job work reconciliation with outside processors stops being a monthly dispute.",
          "Stock variance can be traced to a recorded movement rather than absorbed at count time.",
        ],
      },
      { type: "h2", text: "What it does not fix" },
      {
        type: "p",
        text: "ERP records what is entered. If a stage's output is entered approximately, the costing will be approximately wrong with far more confidence than a spreadsheet would have been. The discipline of accurate entry at each stage is the actual project — the software is the easier half. Any implementation that does not address who enters what, when, and what happens when they do not, will fail regardless of how good the system is.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "Not with a full rollout. Start with the single stage where you currently lose the most visibility — for most Faisalabad units that is either greige inventory or job work reconciliation. Get that one stage recorded accurately and trusted, then extend. A system covering one stage that people actually use beats a complete system that everyone works around.",
      },
    ],
    faqs: [
      {
        q: "Can textile ERP handle job work sent to outside processors?",
        a: "It should, and this is the single most common reason our clients replace generic packages. Material issued to a processor must remain your stock, tracked against that processor, until it returns in its new form.",
      },
      {
        q: "Is custom textile ERP better than a ready-made package?",
        a: "Ready-made is cheaper if your process is close to standard. Custom becomes worthwhile when your stage structure, costing method or job work arrangements are the thing that makes you competitive — or when you have already failed to make a package fit.",
      },
      {
        q: "How long before a textile unit sees value?",
        a: "A first module covering one stage typically goes live in weeks. Meaningful costing accuracy takes a full production cycle after that, because the system needs real completed orders to compare against.",
      },
    ],
    ctaMessage: "Hi Buildron, I read your textile ERP guide and want to discuss a system for my unit.",
    relatedServices: ["erp-development", "custom-business-systems"],
    relatedSolutions: ["textile", "manufacturing"],
    relatedCaseStudies: ["manufacturing-erp-system"],
  },
  {
    slug: "spreadsheets-to-erp",
    title: "When should a business replace spreadsheets with ERP?",
    h1: "When should a business replace spreadsheets with ERP?",
    metaTitle: "When Should You Replace Spreadsheets With ERP? | Buildron",
    metaDescription:
      "Four clear signals that a business has outgrown spreadsheets, and why moving too early is as costly as moving too late.",
    answer:
      "Replace spreadsheets when more than one person needs to update the same numbers, when you cannot trust a figure without manually checking it, when producing a routine report takes hours, or when the process only works because one experienced person holds it in their head. Below those thresholds, a well-built spreadsheet is usually still the cheaper and better answer.",
    published: "2026-04-22",
    updated: "2026-09-15",
    readMinutes: 4,
    body: [
      { type: "h2", text: "Spreadsheets are not the enemy" },
      {
        type: "p",
        text: "Spreadsheets are fast, flexible and universally understood. Most businesses that move off them too early end up with a rigid system that does less than the sheet did, and staff quietly keep the sheet running alongside it. The question is not whether spreadsheets are professional — it is whether yours has hit a limit that cannot be engineered around.",
      },
      { type: "h2", text: "The four signals" },
      {
        type: "ol",
        items: [
          "Concurrency — two or more people need to update the same data, and you are resolving conflicts or emailing versions.",
          "Trust — you cannot act on a number without verifying it manually, because you have been burned by a stale or broken figure.",
          "Reporting cost — assembling a routine report takes hours of copying, filtering and reconciling.",
          "Key-person risk — the process works because one person understands the structure, and it would stop if they left.",
        ],
      },
      { type: "h2", text: "Signals that are not reasons" },
      {
        type: "ul",
        items: [
          "The file is large. Size alone is a performance problem, not a structural one.",
          "A competitor bought ERP software. Their process is not yours.",
          "It feels unprofessional. Buyers judge your delivery, not your internal tooling.",
          "A vendor said you need it. Vendors always say you need it.",
        ],
      },
      { type: "h2", text: "What to do instead of a full replacement" },
      {
        type: "p",
        text: "Move one process at a time, starting with whichever of the four signals is costing you most. If concurrency is the problem, a shared database for that one dataset may solve it entirely. If reporting is the problem, the fix may be structuring the data properly rather than replacing the tool. The full ERP conversation belongs at the point where several processes have each crossed the threshold independently.",
      },
      { type: "h2", text: "What a migration actually involves" },
      {
        type: "ol",
        items: [
          "Documenting what the spreadsheet really does, including the parts nobody wrote down.",
          "Deciding what deliberately stays in a spreadsheet — analysis and ad-hoc modelling usually should.",
          "Cleaning historical data, which is almost always the longest step.",
          "Running both systems in parallel for a full cycle.",
          "Cutting over only once the new system has produced a period's figures that match.",
        ],
      },
      { type: "h2", text: "The honest cost comparison" },
      {
        type: "p",
        text: "A spreadsheet costs nothing to license and a great deal in hours once it is past its limit. A system costs money upfront and reduces those hours. The comparison worth making is not software cost against zero — it is software cost against the hours currently spent reconciling, plus the cost of decisions made on numbers you did not fully trust.",
      },
    ],
    faqs: [
      {
        q: "Can we keep using spreadsheets alongside a system?",
        a: "Yes, and you probably should. Systems are better at recording transactions; spreadsheets are better at ad-hoc analysis. The problem is only when the spreadsheet becomes the record of truth again.",
      },
      {
        q: "What is the biggest risk in moving off spreadsheets?",
        a: "Building a system that is less flexible than the sheet it replaced. Staff respond by maintaining both, which leaves you paying for a system and still doing the manual work.",
      },
      {
        q: "How much does a first module cost?",
        a: "It depends entirely on which process and how much historical data needs cleaning. We scope a single module against a problem you can measure, so the return is assessable before committing to a full system.",
      },
    ],
    ctaMessage: "Hi Buildron, I read your spreadsheets to ERP guide and want to discuss our situation.",
    relatedServices: ["erp-development", "custom-business-systems", "ai-automation"],
    relatedSolutions: ["manufacturing", "textile"],
    relatedCaseStudies: ["manufacturing-erp-system"],
  },
];

export const GUIDE_SLUGS = GUIDES.map((g) => g.slug);

export function getGuide(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}

export type AutomationIndustryPage = {
  slug: string;
  industry: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  answer: string;
  workflows: { title: string; desc: string }[];
  channels: string[];
  faqs: { q: string; a: string }[];
  image: string;
};

const BUSINESS_PHOTO = "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?auto=format&fit=crop&fm=jpg&q=82&w=1800";
const TEXTILE_PHOTO = "https://images.unsplash.com/photo-1741437137509-a5b5e4f6fbe4?auto=format&fit=crop&fm=jpg&q=82&w=1800";
const WAREHOUSE_PHOTO = "https://images.unsplash.com/photo-1721937127582-ed331de95a04?auto=format&fit=crop&fm=jpg&q=82&w=1800";
const RESTAURANT_PHOTO = "https://images.unsplash.com/photo-1645348210093-42dcad20c2e4?auto=format&fit=crop&fm=jpg&q=82&w=1800";

export const AUTOMATION_INDUSTRIES: AutomationIndustryPage[] = [
  {
    slug: "textile-manufacturing", industry: "Textile & Garments",
    metaTitle: "AI Automation for Textile & Garment Businesses | Buildron",
    metaDescription: "AI automation for textile and garment businesses in Pakistan: enquiry handling, RFQ routing, follow-up, reporting and workflow automation.",
    h1: "AI Automation for Textile & Garment Businesses in Pakistan",
    answer: "For textile mills, garment manufacturers and exporters, useful AI automation starts where information gets lost: buyer enquiries, RFQs, sample requests, production updates and follow-up. Buildron connects those steps so the right person receives the right information without repetitive copying between WhatsApp, email, sheets and internal systems.",
    workflows: [
      { title: "Buyer enquiry triage", desc: "Read incoming WhatsApp, website and email enquiries, extract product details and route them to sales." },
      { title: "RFQ & quotation follow-up", desc: "Create tasks, reminders and follow-up sequences for quotations, samples and buyer conversations." },
      { title: "Production reporting", desc: "Assemble daily status updates from approved data sources and send concise owner or manager summaries." },
      { title: "Document & data handoff", desc: "Move structured details between forms, sheets, CRM and approved internal systems without re-keying." },
    ],
    channels: ["WhatsApp", "Website forms", "Email", "CRM", "Google Sheets", "Internal ERP"],
    faqs: [
      { q: "Can AI automation qualify textile export enquiries?", a: "Yes. A workflow can extract buyer requirements, classify the enquiry, flag missing information and route the request to the correct sales owner. Human review stays in the loop for commercial decisions." },
      { q: "Can you automate quotation follow-up?", a: "Yes. Buildron can trigger reminders and scheduled WhatsApp or email follow-up based on quotation status, while stopping automation when a human replies or the opportunity changes state." },
    ],
    image: TEXTILE_PHOTO,
  },
  {
    slug: "manufacturing", industry: "Manufacturing",
    metaTitle: "AI Automation for Manufacturing Companies | Buildron",
    metaDescription: "Manufacturing AI automation for lead capture, order updates, production reporting, purchasing workflows and management dashboards in Pakistan.",
    h1: "AI Automation for Manufacturing Companies in Pakistan",
    answer: "Manufacturing automation works best when it removes coordination work around the production system rather than pretending AI can run the factory by itself. Buildron automates enquiry capture, order updates, approvals, routine reporting, purchasing reminders and cross-system handoffs around the processes your team already follows.",
    workflows: [
      { title: "Order status updates", desc: "Turn approved production or dispatch milestones into customer or sales-team updates automatically." },
      { title: "Purchase reminders", desc: "Watch approved purchase stages and alert the responsible person when a next action is due." },
      { title: "Daily management reports", desc: "Combine approved figures from production, inventory or sales systems into a recurring summary." },
      { title: "Approval routing", desc: "Send requests to the correct approver, record the decision and update the originating workflow." },
    ],
    channels: ["ERP", "Email", "WhatsApp", "Webhooks", "Sheets", "Dashboards"],
    faqs: [
      { q: "Does manufacturing AI automation replace ERP software?", a: "Not necessarily. Automation is often the layer around an ERP, connecting people, alerts, documents and external channels to the core system." },
      { q: "Can you automate management reporting?", a: "Yes. Buildron can assemble recurring reports from connected sources, with clear rules for which data is considered authoritative." },
    ],
    image: WAREHOUSE_PHOTO,
  },
  {
    slug: "ecommerce", industry: "E-commerce",
    metaTitle: "AI Automation for E-commerce Businesses | Buildron",
    metaDescription: "AI automation for ecommerce brands: customer support, order verification, abandoned-lead follow-up, stock alerts and reporting.",
    h1: "AI Automation for E-commerce Businesses in Pakistan",
    answer: "E-commerce teams often lose time to repetitive customer questions, order verification, status updates and fragmented channel data. Buildron connects the storefront, WhatsApp, customer support and operations so routine actions happen automatically while exceptions still reach a person.",
    workflows: [
      { title: "Order verification", desc: "Route new cash-on-delivery orders through structured verification and exception handling." },
      { title: "Customer support automation", desc: "Answer common product, delivery and policy questions from approved business information." },
      { title: "Post-purchase updates", desc: "Send order, dispatch and delivery messages automatically from trusted status events." },
      { title: "Low-stock & operations alerts", desc: "Notify the right team when tracked inventory or fulfilment conditions cross defined thresholds." },
    ],
    channels: ["Shopify / store", "WhatsApp", "Email", "CRM", "Courier data", "Analytics"],
    faqs: [
      { q: "Can AI automation handle ecommerce customer questions?", a: "Yes, for well-defined questions such as product information, policies and order-status guidance, using approved business data and clear escalation rules." },
      { q: "Can you automate cash-on-delivery verification?", a: "A workflow can collect and structure verification information, flag exceptions and update order records. The exact implementation depends on the store and communication channels." },
    ],
    image: WAREHOUSE_PHOTO,
  },
  {
    slug: "real-estate", industry: "Real Estate",
    metaTitle: "AI Automation for Real Estate Agencies | Buildron",
    metaDescription: "AI automation for real estate: WhatsApp lead qualification, property enquiry routing, follow-up, reminders and CRM updates.",
    h1: "AI Automation for Real Estate Businesses in Pakistan",
    answer: "Real estate teams can lose high-intent enquiries because agents respond at different speeds and property details are scattered across chats and spreadsheets. Buildron automates the repetitive work around lead capture, qualification, routing and follow-up while keeping property-specific or negotiation decisions with the agent.",
    workflows: [
      { title: "Property enquiry qualification", desc: "Capture budget, location, property type and timing from incoming enquiries and structure the lead." },
      { title: "Agent routing", desc: "Assign leads based on property type, area, branch or availability and notify the responsible agent." },
      { title: "Follow-up automation", desc: "Schedule reminders and re-engagement sequences while stopping them when an agent takes over." },
      { title: "CRM updates", desc: "Keep lead stages, notes and source information synced with the chosen customer system." },
    ],
    channels: ["WhatsApp", "Website", "CRM", "Email", "Property portal", "Calendar"],
    faqs: [
      { q: "Can AI qualify real estate leads on WhatsApp?", a: "Yes. A workflow can ask predefined questions, extract structured answers and route the lead. Property recommendations and negotiation can remain with the agent." },
      { q: "Can you automate property enquiry follow-up?", a: "Yes. Follow-up can be triggered by lead stage, response state or elapsed time, with stop conditions when the conversation becomes human-led." },
    ],
    image: BUSINESS_PHOTO,
  },
  {
    slug: "restaurants", industry: "Restaurants & Hospitality",
    metaTitle: "AI Automation for Restaurants & Hospitality | Buildron",
    metaDescription: "AI automation for restaurants in Pakistan: reservations, FAQs, WhatsApp enquiries, order updates, reviews and customer follow-up.",
    h1: "AI Automation for Restaurants & Hospitality Businesses",
    answer: "Restaurants can automate the repetitive customer and operations questions that arrive across WhatsApp, social media and websites. Buildron focuses on booking requests, menu and policy FAQs, order updates, review follow-up and simple internal notifications—without making the customer service experience feel robotic.",
    workflows: [
      { title: "Reservation enquiries", desc: "Collect date, time, party size and contact details before routing the booking request to staff or a booking system." },
      { title: "Menu & policy FAQs", desc: "Answer common questions from approved menu, hours, location and policy information." },
      { title: "Order and pickup updates", desc: "Send status messages from trusted order events instead of manual copy-paste replies." },
      { title: "Review & feedback follow-up", desc: "Trigger polite follow-up after selected customer interactions and route negative feedback to staff." },
    ],
    channels: ["WhatsApp", "Instagram", "Website", "Booking system", "POS / order system", "Email"],
    faqs: [
      { q: "Can AI automation answer restaurant FAQs?", a: "Yes. Common questions about hours, location, menu items and policies can be answered from approved information, with human handover for exceptions." },
      { q: "Can you automate reservation enquiries on WhatsApp?", a: "Yes. The workflow can collect booking details, check defined conditions and route the request to the correct staff or booking system." },
    ],
    image: RESTAURANT_PHOTO,
  },
  {
    slug: "professional-services", industry: "Professional Services",
    metaTitle: "AI Automation for Professional Services Firms | Buildron",
    metaDescription: "AI automation for consultancies, agencies and professional firms: intake, qualification, scheduling, follow-up and client workflow automation.",
    h1: "AI Automation for Professional Services Firms in Pakistan",
    answer: "Consultancies, agencies and professional firms often spend too much time turning inbound enquiries into structured client work. Buildron automates intake, qualification, scheduling, reminders, document handoffs and reporting so professionals can spend more time on the work that requires judgement.",
    workflows: [
      { title: "Lead intake", desc: "Turn website, WhatsApp or email enquiries into structured records with consistent required fields." },
      { title: "Qualification & routing", desc: "Summarise the request, classify fit and route qualified enquiries to the correct team member." },
      { title: "Meeting scheduling", desc: "Connect booking requests to calendars and trigger confirmations and reminders automatically." },
      { title: "Client onboarding", desc: "Send checklists, collect approved documents and update internal task status without manual chasing." },
    ],
    channels: ["Website", "WhatsApp", "Email", "CRM", "Calendar", "Client portal"],
    faqs: [
      { q: "Can AI automate client intake?", a: "Yes. Buildron can structure incoming requests, collect required details, summarise the enquiry and start the appropriate workflow." },
      { q: "Can automation schedule meetings and reminders?", a: "Yes. Calendar and messaging workflows can handle confirmations, reminders and internal notifications based on your rules." },
    ],
    image: BUSINESS_PHOTO,
  },
];

export function getAutomationIndustry(slug: string) {
  return AUTOMATION_INDUSTRIES.find((p) => p.slug === slug);
}

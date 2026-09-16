export type Industry = {
  title: string;
  /** Slug of the matching solution page, empty when none exists. */
  slug: string;
  desc: string;
  image: string;
};

export const INDUSTRIES: Industry[] = [
  {
    title: "Textile & Manufacturing",
    slug: "textile",
    desc: "Digital systems for manufacturers, exporters and textile businesses.",
    image: "https://images.unsplash.com/photo-1741437137509-a5b5e4f6fbe4?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  },
  {
    title: "E-commerce",
    slug: "ecommerce",
    desc: "Conversion-focused online commerce systems.",
    image: "https://images.unsplash.com/photo-1721937127582-ed331de95a04?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    desc: "Property websites and digital lead systems.",
    image: "https://images.unsplash.com/photo-1724304406928-c43b01912fa1?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  },
  {
    title: "Restaurants & Hospitality",
    slug: "",
    desc: "Modern websites, menus, ordering and customer experiences.",
    image: "https://images.unsplash.com/photo-1645348210093-42dcad20c2e4?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  },
  {
    title: "Professional Services",
    slug: "professional-services",
    desc: "Premium websites and automated client workflows.",
    image: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  },
  {
    title: "Startups",
    slug: "",
    desc: "MVPs, SaaS platforms and scalable digital products.",
    image: "https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?auto=format&fit=crop&fm=jpg&q=82&w=1800",
  },
];

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getService } from "@/data/service-pages";
import { getSolution } from "@/data/solution-pages";
import { getCaseStudy } from "@/data/case-studies";
import { getGuide } from "@/data/guides";

type Item = { href: string; label: string; kicker: string };

function resolve({
  services = [],
  solutions = [],
  caseStudies = [],
  guides = [],
}: {
  services?: string[];
  solutions?: string[];
  caseStudies?: string[];
  guides?: string[];
}): Item[] {
  const items: Item[] = [];
  for (const s of services) {
    const p = getService(s);
    if (p) items.push({ href: `/services/${p.slug}`, label: p.label, kicker: "Service" });
  }
  for (const s of solutions) {
    const p = getSolution(s);
    if (p) items.push({ href: `/solutions/${p.slug}`, label: p.label, kicker: "Industry" });
  }
  for (const s of caseStudies) {
    const p = getCaseStudy(s);
    if (p) items.push({ href: `/case-studies/${p.slug}`, label: p.title, kicker: "Case study" });
  }
  for (const s of guides) {
    const p = getGuide(s);
    if (p) items.push({ href: `/guides/${p.slug}`, label: p.title, kicker: "Guide" });
  }
  return items;
}

/**
 * Contextual internal links. Anchor text is the real page name rather than
 * "read more", so both readers and crawlers get a description of the target.
 */
export default function RelatedLinks(props: {
  heading?: string;
  services?: string[];
  solutions?: string[];
  caseStudies?: string[];
  guides?: string[];
}) {
  const items = resolve(props);
  if (items.length === 0) return null;

  return (
    <section className="py-14 border-t border-line/40" aria-labelledby="related-heading">
      <h2 id="related-heading" className="section-label mb-8">
        {props.heading ?? "Related on Buildron"}
      </h2>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <li key={it.href}>
            <Link
              href={it.href}
              className="group flex h-full items-start justify-between gap-4 rounded-xl border border-line/60 bg-charcoal/30 p-5 hover:border-volt/50 hover:bg-charcoal/60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-volt"
            >
              <span>
                <span className="block text-[11px] tracking-widest uppercase text-voltsoft mb-1.5">{it.kicker}</span>
                <span className="block text-paper/90 text-sm font-medium leading-snug">{it.label}</span>
              </span>
              <ArrowUpRight
                className="w-4 h-4 shrink-0 text-mist group-hover:text-voltsoft transition-colors"
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

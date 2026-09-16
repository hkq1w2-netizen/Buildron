import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-mist">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-mist/70">{c.name}</span>
              ) : (
                <Link href={c.path} className="hover:text-paper transition-colors underline-offset-4 hover:underline">
                  {c.name}
                </Link>
              )}
              {!last && <ChevronRight className="w-3 h-3 text-mist/40" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

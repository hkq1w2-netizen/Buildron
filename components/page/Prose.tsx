import type { ReactNode } from "react";

/** Consistent long-form typography for guide/service body copy. */
export default function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl space-y-5 text-mist leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-paper [&_h2]:pt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-paper [&_h3]:pt-4 [&_strong]:text-paper [&_strong]:font-semibold [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:list-decimal [&_a]:text-voltsoft [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-paper">
      {children}
    </div>
  );
}

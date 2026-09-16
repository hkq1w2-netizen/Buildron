import type { ReactNode } from "react";

/**
 * Answer-first summary box. Gives readers (and answer engines) the direct
 * answer above the fold, before any supporting detail.
 */
export default function AnswerBlock({ children }: { children: ReactNode }) {
  return (
    <div className="mt-10 rounded-2xl border border-volt/30 bg-volt/[0.06] p-6 md:p-8 max-w-3xl">
      <p className="section-label mb-3">In short</p>
      <div className="text-paper/90 text-base md:text-lg leading-relaxed">{children}</div>
    </div>
  );
}

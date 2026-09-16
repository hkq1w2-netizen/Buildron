import type { ReactNode } from "react";

export default function PageHero({
  label,
  h1,
  sub,
  children,
}: {
  label: string;
  h1: string;
  sub: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-7xl mx-auto px-6 lg:px-10 pb-6">
      <p className="section-label mb-5">{label}</p>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest leading-[1.03] max-w-4xl">
        {h1}
      </h1>
      <p className="mt-6 text-mist text-lg leading-relaxed max-w-2xl">{sub}</p>
      {children}
    </header>
  );
}

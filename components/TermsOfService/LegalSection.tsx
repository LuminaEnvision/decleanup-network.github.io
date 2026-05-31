import type { ReactNode } from "react";

type LegalSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function LegalSection({ id, title, subtitle, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-black/10 dark:border-white/10 pt-12 first:border-t-0 first:pt-0">
      <h2 className="text-2xl md:text-3xl font-bebas tracking-wide text-black dark:text-white mb-2">{title}</h2>
      {subtitle ? <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{subtitle}</p> : <div className="mb-8" />}
      <div className="legal-prose space-y-4 text-sm md:text-base text-gray-800 dark:text-gray-200 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalH3({ children }: { children: ReactNode }) {
  return <h3 className="text-lg font-semibold text-black dark:text-white mt-8 mb-2">{children}</h3>;
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 space-y-2 my-4">{children}</ul>;
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border border-[#FAFF00]/30 bg-[#FAFF00]/5 px-4 py-3 text-sm text-gray-800 dark:text-gray-200">
      {children}
    </p>
  );
}

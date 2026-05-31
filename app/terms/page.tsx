import type { Metadata } from "next";
import Link from "next/link";
import SubPageNav from "@/components/SubPageNav";
import GeneralTerms from "@/components/TermsOfService/GeneralTerms";
import BaseAppTerms from "@/components/TermsOfService/BaseAppTerms";
import CeloPlatformTerms from "@/components/TermsOfService/CeloPlatformTerms";

export const metadata: Metadata = {
  title: "Terms of Service | DeCleanup Network",
  description:
    "Terms of Service for decleanup.net, the Base application, and the DeCleanup Rewards platform on Celo.",
};

const toc = [
  { href: "#general", label: "I. General terms" },
  { href: "#base", label: "II. Base (Rewards)" },
  { href: "#celo", label: "III. Celo platform" },
] as const;

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0A0A0A] text-black dark:text-white font-sans selection:bg-[#58B12F] selection:text-black dark:selection:text-white">
      <SubPageNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:py-16">
        <div className="mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#58B12F]/20 bg-[#58B12F]/5 text-[#58B12F] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#58B12F] animate-pulse" />
            LEGAL
          </div>
          <h1 className="text-5xl md:text-7xl text-black dark:text-white leading-tight tracking-tighter mb-4 font-bebas">
            TERMS OF <span className="text-[#58B12F]">SERVICE</span>
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-light">
            Effective April 23, 2026 · DeCleanup Network
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 max-w-4xl lg:max-w-5xl mx-auto">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 text-sm space-y-2" aria-label="Terms sections">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">On this page</p>
              {toc.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-700 dark:text-gray-300 hover:text-[#58B12F] transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="lg:hidden mb-8 flex flex-wrap gap-2">
            {toc.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-[#58B12F]/50 hover:text-[#58B12F]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <article className="min-w-0 space-y-0">
            <GeneralTerms />
            <BaseAppTerms />
            <CeloPlatformTerms />
          </article>
        </div>
      </div>
    </div>
  );
}

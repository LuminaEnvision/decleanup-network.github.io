"use client";

import Link from "next/link";

const sections = [
  { href: "#why-decleanup", label: "Why DeCleanup Network Exists" },
  { href: "#mission", label: "The Mission" },
  { href: "#dmrv", label: "How Cleanups Become Proof" },
  { href: "#ecosystem", label: "The Ecosystem" },
  { href: "#tokenomics", label: "Two Tokens" },
  { href: "#theoryofchange", label: "From Action to Infrastructure" },
  { href: "#toc", label: "Theory of Change" },
  { href: "#roadmap", label: "Where We Are and Where We're Going" },
  { href: "#coordinate", label: "For Coordinators" },
  { href: "#forfunders", label: "For Funders" },
];

export default function LitepaperNav() {
  return (
    <nav
      className="sticky top-16 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 py-3"
      aria-label="Litepaper sections"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm">
        <Link href="#top" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap">
          Top
        </Link>
        {sections.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

"use client";

import React, { useState } from "react";

const cards = [
  {
    title: "DMRV",
    subtitle: "Data, Measurement, Reporting, Verification",
    frontLine: "Credible proof of environmental impact.",
    backContent: "Every cleanup is captured with photos, location, and waste estimates; scored by AI and verified by the community; then minted as a permanent impact record. This creates a shared, machine-readable evidence base for funders, ESG reporting, and impact accounting.",
  },
  {
    title: "Onchain Immutability",
    subtitle: "Permanent Records",
    frontLine: "Blockchain-verified cleanup history.",
    backContent: "Records live on Base and Celo. They cannot be altered after verification, so funders and partners can trust that impact data is real and attributable. This forms the backbone for rewards, Hypercerts, and future certification layers.",
  },
  {
    title: "Incentives & Reputation",
    subtitle: "Reward Real Work",
    frontLine: "Earn recognition for environmental action.",
    backContent: "Participants earn $bDCU for verified cleanups and build reputation through streaks and verification activity. $cDCU on Celo ties reputation to governance, so long-term contributors have a voice in how the network and funding evolve.",
  },
  {
    title: "Open Coordination",
    subtitle: "Transparent Funding",
    frontLine: "Community-driven cleanup initiatives.",
    backContent: "Campaigns, proposals, and funding pools are governed transparently. Communities decide priorities; funders can trace capital to verified outcomes. No single gatekeeper - coordination and funding are open and auditable.",
  },
];

export default function LitepaperWhyPillarCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {cards.map((card, index) => {
        const isFlipped = flipped === index;
        return (
          <button
            key={index}
            type="button"
            onClick={() => setFlipped(isFlipped ? null : index)}
            className="relative min-h-[200px] w-full cursor-pointer text-left overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#58B12F] transition-colors"
            aria-label={isFlipped ? `Hide ${card.title} description` : `Show ${card.title} description`}
          >
            <div
              className={`absolute inset-0 p-6 rounded-2xl flex flex-col transition-opacity duration-300 ${!isFlipped ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}
            >
              <h3 className="text-black dark:text-white font-bebas text-xl tracking-wide mb-1">{card.title}</h3>
              <p className="text-[#58B12F] text-sm font-medium mb-2">{card.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{card.frontLine}</p>
              <p className="text-xs text-gray-500 mt-4">Click to read more</p>
            </div>
            <div
              className={`absolute inset-0 p-5 rounded-2xl flex flex-col justify-between bg-neutral-900/95 border border-black/10 dark:border-white/10 transition-opacity duration-300 ${isFlipped ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}
            >
              <div className="flex-1 min-h-0 overflow-y-auto">
                <h3 className="text-black dark:text-white font-bebas text-lg tracking-wide mb-2">{card.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{card.backContent}</p>
              </div>
              <p className="text-xs text-gray-500 mt-3 shrink-0">Click to flip back</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

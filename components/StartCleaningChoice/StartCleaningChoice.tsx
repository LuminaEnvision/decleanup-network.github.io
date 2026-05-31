"use client";

import React, { useState, useRef, useEffect } from "react";

const LINKS = {
  farcaster: "https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards",
  base: "https://base.app/app/miniapp.decleanup.net",
  full: "https://dapp.decleanup.net",
};

type Variant = "default" | "litepaper";

export default function StartCleaningChoice({ variant = "default" }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isLitepaper = variant === "litepaper";

  useEffect(() => {
    if (!open || !isLitepaper || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const gap = 8;
    setPosition({
      top: rect.bottom + gap,
      right: Math.max(16, window.innerWidth - rect.right),
    });
  }, [open, isLitepaper]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen(true)}
        className={
          isLitepaper
            ? "border border-[#FAFF00]/50 text-[#FAFF00] px-4 py-1.5 rounded-full text-xs font-bold hover:bg-[#FAFF00] hover:text-black transition-all min-h-[36px] flex items-center justify-center"
            : "rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] min-h-[44px] flex items-center justify-center"
        }
      >
        {isLitepaper ? "LAUNCH APP" : "Start Cleaning"}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="start-cleaning-title"
          style={
            isLitepaper
              ? { display: "block" }
              : { display: "flex", alignItems: "center", justifyContent: "center" }
          }
        >
          <div
            className={
              isLitepaper
                ? "absolute w-full max-w-[320px] rounded-2xl border border-[#58B12F]/30 bg-gray-900 p-6 shadow-xl"
                : "relative w-full max-w-md rounded-2xl border border-[#58B12F]/30 bg-gray-900 p-6 shadow-xl"
            }
            style={
              isLitepaper
                ? { top: position.top, right: position.right, left: "auto" }
                : undefined
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 id="start-cleaning-title" className="text-xl font-bold text-black dark:text-white">
                {isLitepaper ? "Launch app" : "Where do you want to start?"}
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              <a
                href={LINKS.farcaster}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl border border-[#58B12F]/30 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-left text-black dark:text-white font-medium hover:border-[#58B12F]/60 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                Mini app on Farcaster
              </a>
              <a
                href={LINKS.base}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl border border-[#58B12F]/30 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-left text-black dark:text-white font-medium hover:border-[#58B12F]/60 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                Mini app on Base app
              </a>
              <a
                href={LINKS.full}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-xl border border-[#58B12F]/30 bg-black/5 dark:bg-white/5 px-4 py-3.5 text-left text-black dark:text-white font-medium hover:border-[#58B12F]/60 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              >
                {isLitepaper ? "Full platform on Celo (testing phase)" : "Full platform"}
              </a>
            </div>

            <p className="mt-4 text-xs text-gray-600 dark:text-gray-400 text-center">
              Opens in a new tab
            </p>
          </div>
        </div>
      )}
    </>
  );
}

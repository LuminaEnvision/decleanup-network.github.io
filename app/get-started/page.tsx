import type { Metadata } from "next";
import Link from "next/link";
import SubPageNav from "@/components/SubPageNav";
import GetStartedFlow from "@/components/GetStartedFlow/GetStartedFlow";

export const metadata: Metadata = {
  title: "Get Started | DeCleanup Rewards",
  description:
    "Join or organize cleanups, document results, and turn local action into verified global impact. Clean Local. Prove Global.",
};

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-[#58B12F] selection:text-white">
      <SubPageNav />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-24 pb-12 md:py-16">

        <GetStartedFlow />
      </div>
    </main>
  );
}

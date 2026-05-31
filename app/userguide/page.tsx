import type { Metadata } from "next";
import SubPageNav from "@/components/SubPageNav";
import WhoIsThisForCards from "@/components/WhoIsThisFor/WhoIsThisForCards";

export const metadata: Metadata = {
  title: "How It Works | DeCleanup Network",
  description:
    "Who is DeCleanup for? Individuals who care, builders who coordinate impact, and funders who support real-world environmental action.",
};

export default function UserGuidePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans overflow-x-hidden selection:bg-[#58B12F] selection:text-black dark:selection:text-white">
      <SubPageNav />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-12 md:py-16">

        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bebas text-black dark:text-white uppercase tracking-wide">
            How It Works
          </h1>
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
            Find your place in the network: clean and earn, build and coordinate, or fund verified impact.
          </p>
        </div>

        <WhoIsThisForCards />
      </div>
    </main>
  );
}

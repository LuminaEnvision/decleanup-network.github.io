import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const galleryImages = [
  { src: "/testimonial1.jpg", alt: "Community cleanup" },
  { src: "/testimonial2.jpg", alt: "Community cleanup" },
  { src: "/testimonial3.jpg", alt: "Community cleanup" },
  { src: "/testimonial4.jpg", alt: "Community cleanup" },
];

export default function CommunityImpactSection() {
  return (
    <section className="w-full py-16 md:py-24 overflow-hidden bg-white dark:bg-black border-t border-black/5 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-black dark:text-white mb-4 tracking-wide">
            Community Impact
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Participants worldwide use DeCleanup dApp to turn real-world impact into onchain products with additional utilities in the ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-12">
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image width={600} height={400} src={galleryImages[0].src} alt={galleryImages[0].alt} className="w-full h-full object-cover" />
          </div>
          <div className="col-span-1 flex flex-col gap-2">
            <div className="flex-1 rounded-lg overflow-hidden">
              <Image width={600} height={400} src={galleryImages[1].src} alt={galleryImages[1].alt} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 rounded-lg overflow-hidden">
              <Image width={600} height={400} src={galleryImages[2].src} alt={galleryImages[2].alt} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="col-span-1 rounded-lg overflow-hidden">
            <Image width={600} height={400} src={galleryImages[3].src} alt={galleryImages[3].alt} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <a
            href="https://x.com/8oobfbldkiw0i9l/status/1848054399597523225"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 rounded-2xl block hover:border-[#58B12F]/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bebas text-black dark:text-white tracking-wide">HEM Japan</h3>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#58B12F] transition-colors shrink-0" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Early partner organizing cleanups across Japan using DeCleanup&apos;s verification system. 2024: 12 active users, 9 cleanup events.
            </p>
          </a>
          <a
            href="https://x.com/trinitymorphy/status/1856394593824014341"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6 lg:p-8 rounded-2xl block hover:border-[#58B12F]/30 transition-colors group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-bebas text-black dark:text-white tracking-wide">Pestathon</h3>
              <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#58B12F] transition-colors shrink-0" />
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              University campaign combining education + action. Students learned environmental care while cleaning campus. DeCleanup added 120 USDGLO to Atlantis Impact Miner rewards. 2024: 9 active users, 4 cleanup events.
            </p>
          </a>
        </div>
        <div className="bg-neutral-900 p-8 lg:p-12 rounded-2xl border-l-4 border-[#FAFF00]">
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 italic leading-relaxed mb-6">
            &quot;DeCleanup dApp employs the most simplified system I&apos;ve encountered in dApps, making it easier for people to participate in environmental protection activities. Even picking up a single plastic bottle can transform into rewards!&quot;
          </p>
          <p className="text-base font-semibold text-gray-700 dark:text-gray-300 text-right">— Yuichi Hosomo, HEM Japan</p>
        </div>
      </div>
    </section>
  );
}

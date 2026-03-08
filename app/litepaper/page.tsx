import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  Scan,
  UserCheck,
  Link as LinkIcon,
  Building2,
  RefreshCw,
  CloudSun,
  Droplets,
  Leaf,
  ArrowRight,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Smartphone,
  LayoutDashboard,
  Wand2,
  Wallet,
  MapPin,
  FileText,
  MessageCircle,
  Layers,
  Star,
  ShieldCheck,
} from "lucide-react";
import LitepaperNav from "@/components/LitepaperNav/LitepaperNav";
import StartCleaningChoice from "@/components/StartCleaningChoice/StartCleaningChoice";
import TheoryOfChange from "@/components/TheoryOfChange/TheoryOfChange";
import LitepaperWhyPillarCards from "@/components/LitepaperWhyPillarCards/LitepaperWhyPillarCards";

export const metadata: Metadata = {
  title: "DeCleanup Network - Litepaper",
  description: "Infrastructure for verifiable, governable, and fundable environmental impact. February 2026 Edition.",
};

const scrollSection = "scroll-mt-24";

export default function LitepaperPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#58B12F] selection:text-white pb-0">

      {/* Top bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/images/decleanup_logo_full.png" alt="DeCleanup" width={32} height={32} className="h-8 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-200 font-medium">
            <StartCleaningChoice variant="litepaper" />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative pt-28 pb-14 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bebas text-white tracking-wide mb-3">
            DECLEANUP NETWORK LITEPAPER
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto mb-6">
            Infrastructure for verifiable, governable, and fundable environmental impact.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-[#FAFF00]/30 bg-[#FAFF00]/10 text-[#FAFF00] text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00] animate-pulse" />
              PHASE 1 LIVE
            </span>
            <span className="text-gray-400 text-sm">Base | Celo</span>
          </div>
          <p className="text-[#58B12F] font-medium text-lg">
            Turn cleanups into proof. Turn proof into funding.
          </p>
        </div>
      </header>

      <LitepaperNav />

      {/* #why-decleanup - Why DeCleanup Network Exists */}
      <section id="why-decleanup" className={`py-20 border-b border-white/5 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-12 text-center">Why DeCleanup Network Exists</h2>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-4 items-center">
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10">
                <h3 className="text-gray-300 font-semibold text-lg mb-2">The Problem</h3>
                <p className="text-gray-300 text-sm">Cleanups happen, but there&apos;s no credible proof or transparent coordination.</p>
              </div>
              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-12 h-8 text-[#58B12F]/70 shrink-0" />
              </div>
              <div className="p-6 rounded-2xl bg-[#58B12F]/[0.08] border border-[#58B12F]/20">
                <h3 className="text-gray-200 font-semibold text-lg mb-2">The Solution</h3>
                <p className="text-gray-300 text-sm">Verifiable, incentivized, and transparently funded environmental action.</p>
              </div>
            </div>
          </div>
          <LitepaperWhyPillarCards />
        </div>
      </section>

      {/* #mission - The Mission */}
      <section id="mission" className={`py-20 border-b border-white/5 bg-neutral-900/20 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-12 text-center">The Mission</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
              <h3 className="text-white font-bebas text-xl tracking-wide mb-3">Verifiable Data</h3>
              <p className="text-gray-300 text-sm mb-2">We turn invisible cleanup efforts into standardized, onchain evidence. No more &quot;trust me&quot; - only &quot;verify me.&quot;</p>
              <p className="text-gray-500 text-xs">Geotagged photos, timestamps, and DMRV create immutable records on Base and Celo chains.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
              <h3 className="text-white font-bebas text-xl tracking-wide mb-3">Auditable Impact</h3>
              <p className="text-gray-300 text-sm mb-2">Traceable impact records compatible with Hypercerts. Funders see where capital goes and what outcomes it produced.</p>
              <p className="text-gray-500 text-xs">AI + human verification reduces fraud; impact is attributed to real actors.</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.04]">
              <h3 className="text-white font-bebas text-xl tracking-wide mb-3">Governable Funding</h3>
              <p className="text-gray-300 text-sm mb-2">DAO-based allocation using linked tokens. Communities and funders decide how capital flows.</p>
              <p className="text-gray-500 text-xs">Governance is tied to $cDCU and reputation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* #dmrv - How Cleanups Become Proof */}
      <section id="dmrv" className={`py-20 border-b border-white/5 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-2 text-center">How Cleanups Become Proof</h2>
          <p className="text-gray-400 text-center text-sm mb-12 max-w-2xl mx-auto">Digital Monitoring, Reporting, and Verification. Every cleanup is accounted for.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            <div className="bg-[#0A0A0A] border border-neutral-700 p-6 rounded-xl flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-4 text-sm tabular-nums">01</div>
              <Camera className="text-white w-8 h-8 mb-3" />
              <h3 className="text-white text-lg font-bebas tracking-wide mb-1">Capture</h3>
              <p className="text-xs text-gray-400">Before/after photos + GPS location + waste estimate</p>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-700 p-6 rounded-xl flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-4 text-sm tabular-nums">02</div>
              <Scan className="text-white w-8 h-8 mb-3" />
              <h3 className="text-white text-lg font-bebas tracking-wide mb-1">AI Scan</h3>
              <p className="text-xs text-gray-400">Automated waste detection and category scoring</p>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-700 p-6 rounded-xl flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-4 text-sm tabular-nums">03</div>
              <UserCheck className="text-white w-8 h-8 mb-3" />
              <h3 className="text-white text-lg font-bebas tracking-wide mb-1">Verify</h3>
              <p className="text-xs text-gray-400">Community review catches edge cases and fraud</p>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-700 p-6 rounded-xl flex flex-col items-center text-center group">
              <div className="w-10 h-10 rounded-full bg-neutral-800 text-gray-200 font-bold flex items-center justify-center mb-4 text-sm tabular-nums">04</div>
              <LinkIcon className="text-[#58B12F] w-8 h-8 mb-3" />
              <h3 className="text-white text-lg font-bebas tracking-wide mb-1">Onchain</h3>
              <p className="text-xs text-gray-400">Minted as permanent Impact Record (Hypercert-compatible)</p>
            </div>
          </div>

          <h3 className="text-xl font-bebas text-white mb-4 text-center">What makes this different</h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto text-sm text-gray-300">
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span> Evidence-based, not claim-based</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span> Machine-readable data for ESG and SDG reporting</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span> Portable across impact ecosystems</li>
            <li className="flex items-start gap-2"><span className="text-[#58B12F] shrink-0">•</span> Tamper-resistant verification trail</li>
          </ul>

          <div className="mt-12 p-6 rounded-2xl bg-neutral-900/50 border border-white/10 max-w-3xl mx-auto">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-4 text-center">Data flow</p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              <div className="flex items-center gap-2"><Smartphone className="w-6 h-6 text-gray-500" /><span className="text-xs text-gray-400">Phone</span></div>
              <ArrowRight className="w-5 h-5 text-[#58B12F]/60 shrink-0" />
              <div className="flex items-center gap-2"><Scan className="w-6 h-6 text-gray-500" /><span className="text-xs text-gray-400">AI + Verify</span></div>
              <ArrowRight className="w-5 h-5 text-[#58B12F]/60 shrink-0" />
              <div className="flex items-center gap-2"><LinkIcon className="w-6 h-6 text-[#58B12F]" /><span className="text-xs text-gray-400">Blockchain</span></div>
              <ArrowRight className="w-5 h-5 text-[#58B12F]/60 shrink-0" />
              <div className="flex items-center gap-2"><LayoutDashboard className="w-6 h-6 text-gray-500" /><span className="text-xs text-gray-400">Funder dashboard</span></div>
            </div>
          </div>

          {/* Ecosystem - two ways to use DeCleanup */}
          <div id="ecosystem" className={`mt-20 ${scrollSection}`}>
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-2 text-center">The Ecosystem</h2>
            <p className="text-gray-400 text-center text-sm mb-10">Two ways to use DeCleanup - lightweight mini app or full platform.</p>
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-blue-900/10 rounded-3xl blur-xl group-hover:bg-blue-900/20 transition-all duration-500" />
                <div className="relative flex h-full flex-col bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                    <Smartphone className="text-blue-500 w-32 h-32 -rotate-12 translate-x-4 translate-y-4 opacity-30" />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider">BASE</span>
                    <h4 className="text-3xl text-white font-bebas tracking-wide">Mini App</h4>
                  </div>
                  <p className="text-gray-200 mb-8 min-h-[3.5rem] text-sm leading-relaxed">Lightweight entry for individuals via Farcaster or Base app.</p>
                  <div className="space-y-4 min-h-[10rem]">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <Camera className="text-blue-400 w-5 h-5" />
                      <span className="text-sm text-gray-200">Photo-based logging</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <Wand2 className="text-blue-400 w-5 h-5" />
                      <span className="text-sm text-gray-200">Quick verification</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <Wallet className="text-blue-400 w-5 h-5" />
                      <span className="text-sm text-gray-200">$bDCU rewards</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-8 flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest">
                    <a href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors flex items-center gap-1">
                      Open on Farcaster <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a href="https://base.app/app/miniapp.decleanup.net" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors flex items-center gap-1">
                      Open on Base app <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://dapp.decleanup.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 relative group block"
              >
                <div className="absolute inset-0 bg-[#FAFF00]/5 rounded-3xl blur-xl group-hover:bg-[#FAFF00]/10 transition-all duration-500" />
                <div className="relative flex h-full flex-col bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-[#FAFF00]/50 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                    <Layers className="text-[#FAFF00] w-32 h-32 rotate-12 translate-x-4 translate-y-4 opacity-30" />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-[#FAFF00] text-black text-[10px] font-bold px-2 py-1 rounded tracking-wider">CELO</span>
                    <h4 className="text-3xl text-white font-bebas tracking-wide">Full Platform</h4>
                  </div>
                  <p className="text-gray-200 mb-8 min-h-[3.5rem] text-sm leading-relaxed">Full platform for individuals, NGOs and organizers. Governance and coordination.</p>
                  <div className="space-y-4 min-h-[10rem]">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <MapPin className="text-[#FAFF00] w-5 h-5" />
                      <span className="text-sm text-gray-200">Geolocation and maps</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <FileText className="text-[#FAFF00] w-5 h-5" />
                      <span className="text-sm text-gray-200">Impact reports (Hypercerts)</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <MessageCircle className="text-[#FAFF00] w-5 h-5" />
                      <span className="text-sm text-gray-200">Funding governance</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FAFF00] group-hover:text-white transition-colors">
                    Explore Celo dApp <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* #tokenomics - Two Tokens (after Ecosystem) */}
      <section id="tokenomics" className={`py-20 border-b border-white/5 bg-neutral-900/20 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center mb-12 font-bebas text-gray-200">TWO TOKENS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-stretch gap-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all" />
              <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center bg-black z-10 shrink-0 overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)] md:self-center">
                <Image src="/images/dcu-token-logo.png" alt="$bDCU" width={96} height={96} className="w-full h-full object-contain" unoptimized />
              </div>
              <div className="z-10 text-center md:text-left flex-1 flex flex-col min-w-0">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h3 className="text-3xl text-white font-bebas tracking-wide">Utility token</h3>
                  <span className="text-[10px] bg-neutral-800 text-gray-200 px-2 py-0.5 rounded border border-neutral-700 tracking-wider">BASE</span>
                </div>
                <p className="text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">$bDCU</p>
                <p className="text-sm text-gray-400 mb-4">The &quot;action token.&quot; Used on Base for:</p>
                <ul className="space-y-3 mb-6 text-sm text-gray-200">
                  <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Cleanup rewards</li>
                  <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Streaks & referrals</li>
                  <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Verifier staking</li>
                  <li className="flex items-center gap-2"><Star className="text-blue-500 w-4 h-4 shrink-0" /> Liquid & tradable</li>
                </ul>
                <div className="mt-auto flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 bg-[#58B12F] hover:bg-[#58B12F]/80 text-black font-bold rounded-lg transition-all text-xs uppercase tracking-wider">Swap ETH / $bDCU</a>
                    <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-4 py-2 border border-[#58B12F] text-[#58B12F] hover:bg-[#58B12F]/10 font-bold rounded-lg transition-all text-xs uppercase tracking-wider">Swap USDT / $bDCU</a>
                  </div>
                  <a href="https://basescan.org/token/0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-400 hover:text-white transition-colors flex items-center gap-1 font-mono whitespace-nowrap overflow-x-auto min-w-0">
                    <LinkIcon className="w-3 h-3 shrink-0 flex-shrink-0" /> $bDCU contract: 0x30171b7014c02229497CdE6745DD3aD821F12b07
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col md:flex-row items-stretch gap-8 relative overflow-hidden group hover:border-[#FAFF00]/30 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#58B12F]/10 rounded-full blur-2xl group-hover:bg-[#58B12F]/20 transition-all" />
              <div className="w-24 h-24 rounded-full border-2 border-[#58B12F] flex items-center justify-center bg-black z-10 shrink-0 overflow-hidden shadow-[0_0_15px_rgba(88,177,47,0.5)] md:self-center">
                <Image src="/images/dcu-token-logo.png" alt="$cDCU" width={96} height={96} className="w-full h-full object-contain" unoptimized />
              </div>
              <div className="z-10 text-center md:text-left flex-1 flex flex-col min-w-0">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h3 className="text-3xl text-white font-bebas tracking-wide">Governance</h3>
                  <span className="text-[10px] bg-neutral-800 text-gray-200 px-2 py-0.5 rounded border border-neutral-700 tracking-wider">CELO</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Reputation, governance & advanced utilities</p>
                <ul className="space-y-3 mb-6 text-sm text-gray-200">
                  <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Earned through verified cleanups</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Non-tradable (reputation-linked)</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Governance via Gardens.fund</li>
                  <li className="flex items-center gap-2"><ShieldCheck className="text-[#58B12F] w-4 h-4 shrink-0" /> Verifier roles, streaks, analytics</li>
                </ul>
                <div className="mt-auto">
                  <button disabled className="w-full text-center px-6 py-3 bg-neutral-800 text-gray-400 font-semibold rounded-xl cursor-not-allowed opacity-60">View Celo dApp (inactive)</button>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/tokenomics" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#58B12F] hover:bg-[#58B12F]/90 text-black font-semibold text-sm transition-colors">
              Read full tokenomics
            </Link>
          </p>
        </div>
      </section>

      {/* #theoryofchange - From Action to Infrastructure */}
      <section id="theoryofchange" className={`py-20 border-b border-white/5 bg-neutral-900/20 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-12 text-center">From Action to Infrastructure</h2>

          <h3 className="text-xl font-bebas text-white mb-6 text-center">The Gap We Close</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-14 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-950/20">
              <h4 className="text-red-400 font-bebas text-lg mb-4">Without DeCleanup</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Cleanups happen but stay invisible</li>
                <li>• Funders rely on trust and reports</li>
                <li>• Data sits in spreadsheets</li>
                <li>• Volunteers get nothing</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-[#58B12F]/30 bg-[#58B12F]/5">
              <h4 className="text-[#58B12F] font-bebas text-lg mb-4">With DeCleanup</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Every cleanup becomes a verified record</li>
                <li>• Funders verify outcomes before funding</li>
                <li>• Data travels across ecosystems</li>
                <li>• Contributors build reputation and earn rewards</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bebas text-white mb-6 mt-14 text-center">SDG Alignment</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <a href="https://www.un.org/sustainabledevelopment/cities/" target="_blank" rel="noopener noreferrer nofollow" className="bg-amber-600/20 border border-amber-600/30 p-4 rounded-xl hover:bg-amber-600/30 transition-colors block text-center">
              <div className="text-amber-500 text-xs font-bold mb-1 font-mono">SDG 11</div>
              <Building2 className="text-white w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-white text-xs font-bebas uppercase">Sustainable Cities</p>
              <p className="text-amber-200/80 text-[10px] mt-1">Community-led urban cleanup</p>
            </a>
            <a href="https://www.un.org/sustainabledevelopment/sustainable-consumption-production/" target="_blank" rel="noopener noreferrer nofollow" className="bg-orange-600/20 border border-orange-600/30 p-4 rounded-xl hover:bg-orange-600/30 transition-colors block text-center">
              <div className="text-orange-500 text-xs font-bold mb-1 font-mono">SDG 12</div>
              <RefreshCw className="text-white w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-white text-xs font-bebas uppercase">Responsible Consumption</p>
              <p className="text-orange-200/80 text-[10px] mt-1">Waste diversion and sorting</p>
            </a>
            <a href="https://www.un.org/sustainabledevelopment/climate-change/" target="_blank" rel="noopener noreferrer nofollow" className="bg-emerald-800/20 border border-emerald-700/30 p-4 rounded-xl hover:bg-emerald-800/30 transition-colors block text-center">
              <div className="text-emerald-500 text-xs font-bold mb-1 font-mono">SDG 13</div>
              <CloudSun className="text-white w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-white text-xs font-bebas uppercase">Climate Action</p>
              <p className="text-emerald-200/80 text-[10px] mt-1">Emissions reduction from waste</p>
            </a>
            <a href="https://www.un.org/sustainabledevelopment/oceans/" target="_blank" rel="noopener noreferrer nofollow" className="bg-blue-600/20 border border-blue-600/30 p-4 rounded-xl hover:bg-blue-600/30 transition-colors block text-center">
              <div className="text-blue-500 text-xs font-bold mb-1 font-mono">SDG 14</div>
              <Droplets className="text-white w-6 h-6 mx-auto mb-2 opacity-80" />
              <p className="text-white text-xs font-bebas uppercase">Life Below Water</p>
              <p className="text-blue-200/80 text-[10px] mt-1">Waterway and coastal cleanup</p>
            </a>
            <a href="https://www.un.org/sustainabledevelopment/biodiversity/" target="_blank" rel="noopener noreferrer nofollow" className="bg-green-600/20 border border-green-600/30 p-4 rounded-xl hover:bg-green-600/30 transition-colors block text-center">
              <div className="text-green-500 text-xs font-bold mb-1 font-mono">SDG 15</div>
              <Leaf className="text-white w-6 h-6 mx-auto mb-2 opacity-80 fill-current" />
              <p className="text-white text-xs font-bebas uppercase">Life on Land</p>
              <p className="text-green-200/80 text-[10px] mt-1">Land and ecosystem restoration</p>
            </a>
          </div>
        </div>
      </section>

      {/* #toc - Theory of Change */}
      <section id="toc" className={`py-20 border-b border-white/5 bg-[#0A0A0A] ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-4 text-center">Theory of Change</h2>
          <p className="text-gray-400 text-center text-sm mb-12 max-w-2xl mx-auto">
            Our theory of change describes how DeCleanup turns invisible cleanup action into visible, verified impact: from the problem of unverified efforts, through the engine of DMRV and onchain records, to outcomes that funders and communities can trust and scale.
          </p>
          <div className="overflow-x-auto pb-4">
            <TheoryOfChange hideAppendix />
          </div>
        </div>
      </section>

      {/* #roadmap - Where We Are and Where We're Going */}
      <section id="roadmap" className={`py-20 border-b border-white/5 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-12 text-center">Where We Are and Where We&apos;re Going</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#0A0A0A] border border-blue-500/30 rounded-xl p-6">
              <div className="text-blue-500 font-bebas text-lg mb-1">PHASE 1 - LIVE</div>
              <ul className="space-y-2 text-sm text-gray-300 mt-4">
                <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 shrink-0" /> Base Mini App</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 shrink-0" /> $bDCU rewards</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 shrink-0" /> Basic verification</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-blue-500 w-4 h-4 shrink-0" /> Farcaster integration</li>
              </ul>
            </div>
            <div className="bg-[#0A0A0A] border border-dashed border-[#FAFF00]/40 rounded-xl p-6">
              <div className="text-[#FAFF00] font-bebas text-lg mb-1">PHASE 2 - IN DEV</div>
              <ul className="space-y-2 text-sm text-gray-300 mt-4">
                <li className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4 shrink-0" /> Celo Full dApp</li>
                <li className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4 shrink-0" /> Impact Products v2</li>
                <li className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4 shrink-0" /> Hypercert records</li>
                <li className="flex items-center gap-2"><Clock className="text-[#FAFF00] w-4 h-4 shrink-0" /> Gardens governance</li>
              </ul>
            </div>
            <div className="bg-[#0A0A0A] border border-neutral-700 rounded-xl p-6 opacity-90">
              <div className="text-gray-400 font-bebas text-lg mb-1">PHASE 3 - FUTURE</div>
              <ul className="space-y-2 text-sm text-gray-400 mt-4">
                <li>• AI-powered verification</li>
                <li>• RWI Rank (reputation)</li>
                <li>• Impact staking</li>
                <li>• Cross-campaign analytics</li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto p-6 rounded-xl bg-[#58B12F]/10 border border-[#58B12F]/20">
            <h3 className="text-lg font-bebas text-white mb-3">Current Focus (Q1-Q2 2026)</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Onboarding first 50 verified cleanups</li>
              <li>• Celo governance testing</li>
              <li>• AI trash detection integration (YOLOv8 on TACO dataset)</li>
              <li>• Coordinator tools for campaign management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* #coordinate - For Coordinators */}
      <section id="coordinate" className={`py-20 border-b border-white/5 bg-neutral-900/20 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-2 text-center">For Coordinators</h2>
          <p className="text-lg text-gray-200 text-center mb-6">Build campaigns that prove themselves.</p>
          <div className="max-w-2xl mx-auto mb-12 p-6 rounded-xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-white font-bebas text-lg mb-2">Why coordinate in real life?</h3>
            <p className="text-gray-300 text-sm">In-person cleanups create real impact and stronger communities. Coordinating them with DeCleanup means every event produces verified, onchain records - so participants get recognition and funders can support what’s actually happening on the ground.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-[#58B12F] font-bebas text-xl mb-3">Create Campaigns</h3>
              <p className="text-sm text-gray-400 mb-3">Set location, goals, and participant criteria.</p>
              <p className="text-xs text-gray-500">Participants join via app. Build auditable impact records.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-[#58B12F] font-bebas text-xl mb-3">Submit Proposals</h3>
              <p className="text-sm text-gray-400 mb-3">Shape network rules and priorities.</p>
              <p className="text-xs text-gray-500">Community reviews and votes. Decisions happen onchain.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-[#58B12F] font-bebas text-xl mb-3">Apply for Funding</h3>
              <p className="text-sm text-gray-400 mb-3">Access equipment, logistics, and organizer support.</p>
              <p className="text-xs text-gray-500">Transparent criteria, open evaluation. Pools governed by $cDCU holders.</p>
            </div>
          </div>

          <h3 className="text-lg font-bebas text-white mb-3 text-center">What&apos;s Coming</h3>
          <ul className="text-sm text-gray-400 text-center mb-8 max-w-2xl mx-auto space-y-1">
            <li>• Full governance on Celo (vote with $cDCU)</li>
            <li>• Shared DMRV data access across campaigns</li>
            <li>• Cross-campaign benchmarking and best practices</li>
          </ul>

          <p className="text-center mb-6">
            <a href="https://t.me/decleanup" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl bg-[#58B12F] hover:bg-[#58B12F]/90 text-black font-semibold text-sm transition-colors">
              Start coordinating now - no permission required
            </a>
          </p>
          <p className="text-center text-sm text-gray-400">
            <a href="mailto:decentralizedcleanup@gmail.com" className="text-[#58B12F] hover:underline">Email us</a>
          </p>
        </div>
      </section>

      {/* #forfunders - For Funders */}
      <section id="forfunders" className={`py-20 border-b border-white/5 ${scrollSection}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bebas text-white mb-2 text-center">For Funders</h2>
          <p className="text-lg text-gray-200 text-center mb-6">Fund action, not promises.</p>
          <div className="max-w-2xl mx-auto mb-12 p-6 rounded-xl border border-white/10 bg-white/[0.03]">
            <h3 className="text-white font-bebas text-lg mb-2">Why fund us?</h3>
            <p className="text-gray-300 text-sm">DeCleanup turns cleanup action into verifiable, onchain evidence. Funders get tamper-resistant records instead of self-reported claims, reusable data for ESG and SDG reporting, and a say in how pools and priorities are set through governance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-[#58B12F] font-bebas text-xl mb-3">Donate</h3>
              <p className="text-sm text-gray-400 mb-3">Direct support via Giveth. Transparent, traceable.</p>
              <a href="https://giveth.io/project/decentralized-cleanup-network" target="_blank" rel="noopener noreferrer" className="text-xs text-[#58B12F] hover:underline">giveth.io</a>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-[#58B12F] font-bebas text-xl mb-3">Fund Pools</h3>
              <p className="text-sm text-gray-400 mb-3">Targeted funding via Gardens platform and CrowdWalrus on Sui. Choose: equipment, logistics, research, organizers, cleanup campaigns.</p>
              <p className="text-xs text-gray-500 mt-2">
                <a href="https://gardens.fund" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:underline">gardens.fund</a> fund pools · <a href="https://www.crowdwalrus.xyz/campaigns/decleanupnet" target="_blank" rel="noopener noreferrer" className="text-[#58B12F] hover:underline">crowdwalrus.io</a> crowdfund
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-[#0A0A0A]">
              <h3 className="text-[#58B12F] font-bebas text-xl mb-3">Hold $DCU</h3>
              <p className="text-sm text-gray-400 mb-3">Governance participation and liquidity signal. Connect to network activity.</p>
              <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="text-xs text-[#58B12F] hover:underline">swap link</a>
            </div>
          </div>

          <h3 className="text-lg font-bebas text-white mb-4 text-center">What Funders Get</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="p-4 rounded-xl border border-[#58B12F]/20 bg-[#58B12F]/5">
              <h4 className="text-white font-semibold text-sm mb-1">Auditable Outcomes</h4>
              <p className="text-xs text-gray-400">Tamper-resistant records, not self-reported claims.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#58B12F]/20 bg-[#58B12F]/5">
              <h4 className="text-white font-semibold text-sm mb-1">Reusable Data</h4>
              <p className="text-xs text-gray-400">Structured for ESG, SDG, and impact accounting.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#58B12F]/20 bg-[#58B12F]/5">
              <h4 className="text-white font-semibold text-sm mb-1">Lower Overhead</h4>
              <p className="text-xs text-gray-400">Verification at protocol level, no custom audits.</p>
            </div>
            <div className="p-4 rounded-xl border border-[#58B12F]/20 bg-[#58B12F]/5">
              <h4 className="text-white font-semibold text-sm mb-1">Governance Voice</h4>
              <p className="text-xs text-gray-400">$cDCU holders shape pool criteria and priorities.</p>
            </div>
          </div>

          <h3 className="text-lg font-bebas text-white mb-3 text-center">What&apos;s Coming</h3>
          <ul className="text-sm text-gray-400 text-center mb-8 max-w-2xl mx-auto space-y-1">
            <li>• Funder dashboard with aggregated metrics</li>
            <li>• Onchain voting for pool priorities</li>
            <li>• Structured partnership workflows for NGOs and ESG teams</li>
          </ul>

          <p className="text-center mb-6">
            <a href="https://t.me/decleanup" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl bg-[#58B12F] hover:bg-[#58B12F]/90 text-black font-semibold text-sm transition-colors">
              Get in touch before committing funding
            </a>
          </p>
          <p className="text-center text-sm text-gray-400">
            <a href="mailto:decentralizedcleanup@gmail.com" className="text-[#58B12F] hover:underline">Email us</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-b from-[#58B12F]/10 to-transparent p-12 rounded-3xl border border-[#58B12F]/20 mb-12 relative overflow-hidden">
            <h2 className="text-3xl md:text-5xl text-white mb-4 font-bebas tracking-tight">NOT HYPE. <span className="text-[#58B12F]">INFRASTRUCTURE.</span></h2>
            <p className="text-gray-200 max-w-xl mx-auto mb-8 text-sm">
              DeCleanup Network is open, SDG-aligned infrastructure for turning real environmental work into verifiable, fundable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://farcaster.xyz/miniapps/SfsGBDcHpuSA/decleanup-rewards" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm">
                Start on Base <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://dapp.decleanup.net" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2 text-sm">
                Test on Celo <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/images/decleanup_logo_full.png" alt="DeCleanup Network" width={32} height={32} className="h-8 w-auto object-contain" />
            </div>
            <p className="text-xs text-gray-200">2026 © DeCleanup Network. Open Infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

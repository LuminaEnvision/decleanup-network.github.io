import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  ArrowLeft,
  Coins,
  Shield,
  ArrowRight,
  Zap,
  Lock,
  Users,
  Flame,
  Trophy,
  ArrowUpRight,
  TrendingUp,
  LineChart,
  BarChart3,
  Calendar,
  GanttChartSquare,
  Network,
  Milestone,
  CheckCircle,
  Clock,
  LayoutGrid,
  Heart,
  Globe,
  Star,
  ShieldCheck,
  Smartphone,
  Layers,
  MapPin,
  FileText,
  MessageCircle,
  Wand2,
  Wallet,
  Camera,
  Scan,
  Link as LinkIcon,
  Menu,
  X
} from "lucide-react";
import SubPageNav from "@/components/SubPageNav";

export const metadata: Metadata = {
  title: "DeCleanup Network Tokenomics",
  description: "The dual-token model powering the transition from local cleanup action to verified global impact.",
};

const SectionHeading = ({ badge, title, subtitle }: { badge?: string, title: string, subtitle?: string }) => (
  <div className="text-center mb-12">
    {badge && (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#FAFF00]/20 bg-[#FAFF00]/5 text-[#FAFF00] text-xs font-mono mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00] animate-pulse" />
        {badge}
      </div>
    )}
    <h2 className="text-4xl md:text-6xl font-bebas text-white mb-4 tracking-tight uppercase">{title}</h2>
    {subtitle && <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">{subtitle}</p>}
  </div>
);

const AllocationBar = ({ allocations }: { allocations: { label: string, value: number, color: string }[] }) => {
  const total = allocations.reduce((acc, curr) => acc + curr.value, 0);
  return (
    <div className="space-y-4">
      <div className="h-6 w-full rounded-full overflow-hidden flex bg-neutral-800">
        {allocations.map((alloc, i) => (
          <div
            key={i}
            style={{ width: `${(alloc.value / total) * 100}%`, backgroundColor: alloc.color }}
            className="h-full border-r border-black/20 last:border-0"
            title={`${alloc.label}: ${alloc.value}%`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {allocations.map((alloc, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: alloc.color }} />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">{alloc.label}</span>
              <span className="text-sm text-white font-mono">{alloc.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#58B12F] selection:text-white">
      <SubPageNav />

      <header id="top" className="relative pt-32 pb-16 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }} />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#FAFF00]/20 bg-[#FAFF00]/5 text-[#FAFF00] text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00] animate-pulse" />
            TOKENOMICS
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-4 font-bebas uppercase">
            NETWORK <span className="text-[#58B12F]">TOKENS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto font-light mb-8">
            Two tokens. One for action. One for proof.
          </p>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-6">
            DeCleanup runs on two tokens with distinct roles. <span className="text-blue-400 font-medium">$bDCU rewards participation</span>. <span className="text-[#58B12F] font-medium">$cDCU represents verified impact</span> and unlocks governance. Together they connect fast, liquid incentives on Base to long-term reputation and coordination on Celo.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Token Cards - Redesigned to match Litepaper Ecosystem style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-24">
          {/* $bDCU - Action Token */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-900/10 rounded-3xl blur-xl group-hover:bg-blue-900/20 transition-all duration-500" />
            <div className="relative flex h-full flex-col bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                <Coins className="text-blue-500 w-32 h-32 -rotate-12 translate-x-4 translate-y-4 opacity-10" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">BASE</span>
                <h3 className="text-3xl text-white font-bebas tracking-wide">$bDCU - Action Token</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 min-h-[84px] flex flex-col justify-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Total Supply</span>
                  <span className="text-lg text-white font-mono tracking-tight">1,000,000,000</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 min-h-[84px] flex flex-col justify-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Type</span>
                  <span className="text-lg text-white font-mono tracking-tight">Liquid ERC-20</span>
                </div>
              </div>

              <div className="text-gray-300 mb-8 text-sm leading-relaxed space-y-4 min-h-[100px]">
                <p>$bDCU is earned through action and traded freely. It is the entry point for anyone joining the network - no prior knowledge required, no long-term lock-up needed to get started.</p>
                <p className="italic text-gray-400">Fair launch through Clanker with no pre-mine, no team allocation, and no investor distribution. Every token in circulation was acquired on the open market.</p>
              </div>

              <div className="mb-8 min-h-[160px]">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Allocation Breakdown</p>
                <AllocationBar
                  allocations={[
                    { label: "Fair Launch", value: 85, color: "#3B82F6" },
                    { label: "Clanker Vault", value: 15, color: "#1D4ED8" },
                  ]}
                />
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 bg-white/3 rounded-lg border border-white/5 group/item hover:bg-white/5 transition-colors min-h-[64px]">
                  <Zap className="text-blue-400 w-5 h-5" />
                  <span className="text-sm text-gray-200">Earn from: Mini app cleanups, streaks, referrals</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/3 rounded-lg border border-white/5 group/item hover:bg-white/5 transition-colors min-h-[64px]">
                  <Flame className="text-blue-400 w-5 h-5" />
                  <span className="text-sm text-gray-200">Vault: Deflationary burns, ecosystem rewards</span>
                </div>
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-3">
                  <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-center text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                    Swap ETH <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] px-4 py-3 border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl text-center text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                    Swap USDT <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1.5">Contract Base</p>
                  <a href="https://basescan.org/token/0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue-400 hover:text-blue-300 transition-colors font-mono block truncate">
                    0x30171b7014...21F12b07
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* $cDCU - Proof Token */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[#58B12F]/10 rounded-3xl blur-xl group-hover:bg-[#58B12F]/20 transition-all duration-500" />
            <div className="relative flex h-full flex-col bg-neutral-900 border border-neutral-800 rounded-3xl p-8 overflow-hidden group-hover:border-[#58B12F]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-50 pointer-events-none">
                <ShieldCheck className="text-[#58B12F] w-32 h-32 rotate-12 translate-x-4 translate-y-4 opacity-10" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[#58B12F] text-black text-[10px] font-bold px-2 py-1 rounded tracking-wider uppercase">CELO</span>
                <h3 className="text-3xl text-white font-bebas tracking-wide">$cDCU - Proof Token</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 min-h-[84px] flex flex-col justify-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Max Supply</span>
                  <span className="text-lg text-white font-mono tracking-tight">10,000,000</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 min-h-[84px] flex flex-col justify-center">
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest block mb-1">Type</span>
                  <span className="text-lg text-white font-mono tracking-tight">Reputation</span>
                </div>
              </div>

              <div className="text-gray-300 mb-8 text-sm leading-relaxed space-y-4 min-h-[100px]">
                <p>$cDCU cannot be purchased on market. It is issued through verified environmental action on either Base or Celo. This keeps governance in the hands of people who have actually contributed.</p>
                <p className="italic text-gray-400">Earn directly on the Celo full platform or bridge your verified impact from the Base mini app. Simple, fast, non-transferable reputation.</p>
              </div>

              <div className="mb-8 min-h-[160px]">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Allocation Breakdown</p>
                <AllocationBar
                  allocations={[
                    { label: "Staking", value: 35, color: "#58B12F" },
                    { label: "Campaigns", value: 25, color: "#4B9628" },
                    { label: "Public", value: 20, color: "#3F7C21" },
                    { label: "Team", value: 10, color: "#32621A" },
                    { label: "Treasury", value: 5, color: "#264913" },
                    { label: "Comm", value: 4, color: "#1A300C" },
                    { label: "Liq", value: 1, color: "#0D1806" },
                  ]}
                />
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 bg-white/3 rounded-lg border border-white/5 group/item hover:bg-white/5 transition-colors min-h-[64px]">
                  <Trophy className="text-[#FAFF00] w-5 h-5" />
                  <span className="text-sm text-gray-200">500 $cDCU unlocks full governance participation</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/3 rounded-lg border border-white/5 group/item hover:bg-white/5 transition-colors min-h-[64px]">
                  <Users className="text-[#FAFF00] w-5 h-5" />
                  <span className="text-sm text-gray-200">Organizers earn match for participants in events</span>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <button disabled className="w-full px-6 py-4 bg-neutral-800 text-gray-500 font-bold rounded-2xl cursor-not-allowed opacity-60 text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                  Governance in Development <Lock className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* The Bridge - Visual Flow */}
        <section className="mb-24">
          <SectionHeading
            badge="THE ARCHITECTURE"
            title="The Impact Bridge"
            subtitle="Start with easy action. Dive deeper to the network and governance when the time is right."
          />
          <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-3xl bg-neutral-900/50 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(88, 177, 47, 0.15), transparent 70%)`
            }} />

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">

                {/* Connector Line (Desktop) */}
                <div className="hidden lg:block absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-blue-500/50 via-[#58B12F] to-[#58B12F]/50 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="text-[#58B12F] w-4 h-4" />
                  </div>
                </div>

                {/* Left Column - BASE */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                      <Camera className="text-blue-400 w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block mb-1">Path 01</span>
                      <h4 className="text-2xl font-bebas text-white uppercase tracking-wider">Action on Base</h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">1</div>
                      <p className="text-sm text-gray-300">Earn $bDCU via mini app cleanups, streaks, and referrals.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-start gap-3 relative group">
                      <div className="w-5 h-5 rounded-full bg-blue-600/30 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">2</div>
                      <div>
                        <p className="text-sm text-white font-medium">Bridge: 5 Cleanups → 500 $cDCU</p>
                        <p className="text-xs text-gray-400 mt-1">Claim your reputation on Celo after verifying impact on Base.</p>
                      </div>
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 lg:hidden">
                        <ArrowRight className="text-blue-400 w-5 h-5 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - CELO */}
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#58B12F]/20 border border-[#58B12F]/30 flex items-center justify-center shrink-0">
                      <Trophy className="text-[#58B12F] w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#58B12F] font-bold uppercase tracking-widest block mb-1">Path 02</span>
                      <h4 className="text-2xl font-bebas text-white uppercase tracking-wider">Action on Celo</h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#58B12F]/10 border border-[#58B12F]/20 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#58B12F]/30 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">1</div>
                      <p className="text-sm text-white font-medium">Earn $cDCU directly via the full platform.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">2</div>
                      <p className="text-sm text-gray-300">Unlock Governance, Verifier Staking, and Hypercerts directly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bridge Indicator Label */}
              <div className="mt-12 flex flex-col items-center">
                <div className="px-4 py-1.5 rounded-full bg-neutral-800 border border-white/10 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 flex items-center gap-3">
                  Base <ArrowRight className="w-3 h-3 text-[#58B12F]" /> Celo Only
                </div>
                <p className="text-[11px] text-gray-500 mt-2 font-light italic">Celo activity does not affect Base earnings</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-[#58B12F]/5 border border-[#58B12F]/10 group hover:border-[#58B12F]/30 transition-colors">
                <h5 className="text-[#58B12F] font-bebas text-lg mb-2 uppercase tracking-wide">Organizer Multiplier</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Applies on both platforms. A 10-person verified cleanup event counts as 10 cleanup credits, whether organized via Base mini app or Celo full platform.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/10 opacity-80 group hover:border-orange-500/30 transition-colors">
                <h5 className="text-orange-400 font-bebas text-lg mb-2 uppercase tracking-wide">Path 03: Burn-to-Earn (Base)</h5>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                  Future Base-only path: Burn a fixed dollar-equivalent of $bDCU on Base to mint $cDCU instantly, skipping cleanup accumulation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact System - Visual Cards */}
        <section className="mb-24">
          <SectionHeading
            badge="UTILITY"
            title="Impact Ecosystem"
            subtitle="The infrastructure powered by our dual-token system."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-[#58B12F]/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#58B12F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <LayoutGrid className="text-[#58B12F] w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bebas text-white mb-3 uppercase tracking-wider">Impact Products</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Dynamic NFTs that evolve with your history. Build a portable environmental reputation that travels across ecosystems - not locked to any platform.</p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-[#FAFF00]/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#FAFF00]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-[#FAFF00] w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bebas text-white mb-3 uppercase tracking-wider">Verifier Network</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Stake to join the verification layer. Review submissions and earn rewards. Slashing applies for false approvals, keeping the layer honest.</p>
            </div>
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/10 hover:border-[#58B12F]/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#58B12F]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="text-[#58B12F] w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bebas text-white mb-3 uppercase tracking-wider">Hypercerts</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Permanent ERC-1155 impact certificates minted every 10 cleanups. Usable for grant applications, ESG reporting, and onchain identity.</p>
            </div>
          </div>
        </section>

        {/* Token Lifecycle - Comparison */}
        <section className="mb-24">
          <SectionHeading
            badge="LIFE CYCLE"
            title="Action vs. Proof"
            subtitle="Comparing the paths of the two tokens."
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/20">
            <div className="grid md:grid-cols-2">
              {/* bDCU Path */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="p-3 bg-blue-600/10 rounded-xl mb-4">
                    <Zap className="text-blue-400 w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bebas text-blue-400 uppercase tracking-widest">$bDCU Path (Action)</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold mb-4 border border-blue-500/20">01</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Earn</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">Via Base mini app cleanups and community streaks.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold mb-4 border border-blue-500/20">02</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Stake</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">To access verifier roles and earn accuracy rewards.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold mb-4 border border-blue-500/20">03</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Trade</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">On Base DEXes for instant liquidity.</p>
                  </div>
                  <div className="flex flex-col items-center text-center italic opacity-50">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold mb-4 border border-blue-500/20">04</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Burn</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">Future option to upgrade reputation directly.</p>
                  </div>
                </div>
              </div>
              {/* cDCU Path */}
              <div className="p-8 md:p-12 bg-[#58B12F]/5">
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="p-3 bg-[#58B12F]/10 rounded-xl mb-4">
                    <ShieldCheck className="text-[#58B12F] w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bebas text-[#58B12F] uppercase tracking-widest">$cDCU Path (Proof)</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold text-[#58B12F] mb-4 border border-[#58B12F]/20">01</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Claim</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">After every 5 verified cleanups on Base.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold text-[#58B12F] mb-4 border border-[#58B12F]/20">02</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Stake</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">For long-term governance and verification power.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold text-[#58B12F] mb-4 border border-[#58B12F]/20">03</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Build</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">An onchain CV via Impact Products and Hypercerts.</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#58B12F]/20 flex items-center justify-center shrink-0 text-xs font-mono font-bold text-[#58B12F] mb-4 border border-[#58B12F]/20">04</div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tighter">Vote</p>
                    <p className="text-xs text-gray-400 max-w-[160px]">On Gardens.fund proposals to distribute funding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Governance Timeline - Visual Vertical */}
        <section className="mb-24 px-4 md:px-0">
          <SectionHeading
            badge="PHASED ROLLOUT"
            title="Governance Timeline"
            subtitle="The path to full decentralized funding and ownership."
          />
          <div className="max-w-2xl mx-auto space-y-8 relative">
            {/* Connector Line */}
            <div className="absolute left-[20px] top-4 bottom-4 w-px bg-white/10" />

            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#58B12F]/20 border border-[#58B12F]/40 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                <CheckCircle className="text-[#58B12F] w-5 h-5" />
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 transition-colors group-hover:border-white/20">
                <span className="text-[#58B12F] font-mono text-xs font-bold block mb-2 uppercase tracking-widest">Q2 2026</span>
                <h4 className="text-xl font-bebas text-white mb-2 uppercase tracking-wide">Gardens.fund Launch</h4>
                <p className="text-sm text-gray-400">Community curation live on Celo. First cohorts of verifiers onboarded.</p>
              </div>
            </div>

            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#FAFF00]/10 border border-[#FAFF00]/20 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                <Clock className="text-[#FAFF00] w-5 h-5" />
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 transition-colors group-hover:border-white/20">
                <span className="text-[#FAFF00] font-mono text-xs font-bold block mb-2 uppercase tracking-widest">Q3 2026</span>
                <h4 className="text-xl font-bebas text-white mb-2 uppercase tracking-wide">First Funding Vote</h4>
                <p className="text-sm text-gray-400">Active participants vote on the first public allocation from the treasury.</p>
              </div>
            </div>

            <div className="relative pl-12 group opacity-60">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                <Lock className="text-gray-500 w-5 h-5" />
              </div>
              <div className="p-6 rounded-2xl bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 transition-colors group-hover:border-white/20">
                <span className="text-gray-500 font-mono text-xs font-bold block mb-2 uppercase tracking-widest">Q4 2026</span>
                <h4 className="text-xl font-bebas text-white mb-2 uppercase tracking-wide">Full DAO Launch</h4>
                <p className="text-sm text-gray-400">Complete $cDCU-weighted voting on protocol and parameters.</p>
              </div>
            </div>
          </div>
          <p className="text-center mt-12 text-sm text-gray-500 italic">
            Building counts. Those earning $cDCU reputation now will have the strongest voice at launch.
          </p>
        </section>

        {/* Closing - Litepaper style */}
        <section className="text-center py-20 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bebas text-white mb-6 uppercase tracking-tight">Built for Proof. <span className="text-[#58B12F]">Scaled for Impact.</span></h3>
            <p className="text-lg md:text-xl text-gray-400 font-light italic mb-10">
              "Every cleanup becomes a verified onchain action. Every actor becomes part of a global coordination network."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/litepaper" className="px-8 py-4 bg-[#FAFF00] text-black font-bold rounded-2xl hover:bg-[#FAFF00]/90 transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                Read Litepaper <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-xs uppercase tracking-widest">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image src="/images/decleanup_logo_full.png" alt="DeCleanup Network" width={32} height={32} className="h-8 w-auto object-contain" />
            </div>
            <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">2026 © DeCleanup Network. Open Infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

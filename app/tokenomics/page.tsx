import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "DeCleanup Network Tokenomics",
  description: "The dual-token model powering DeCleanup Network's global impact ecosystem",
};

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#58B12F] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Back + Header */}
        <div className="mb-12 md:mb-16">
          <Link
            href="/#token"
            className="inline-flex items-center gap-2 text-[#58B12F] hover:text-[#58B12F]/80 font-semibold text-sm md:text-base transition-colors duration-200 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Home</span>
          </Link>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#FAFF00]/20 bg-[#FAFF00]/5 text-[#FAFF00] text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAFF00] animate-pulse" />
              TOKENOMICS
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-4 font-bebas">
              NETWORK <span className="text-[#58B12F]">TOKENS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto font-light mb-4">
              Two tokens. One for action. One for proof.
            </p>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              DeCleanup runs on two tokens with distinct roles. $bDCU rewards participation. $cDCU represents verified impact and unlocks governance. Together they connect fast, liquid incentives on Base to long-term reputation and coordination on Celo.
            </p>
          </div>
        </div>

        {/* $bDCU - Action Token */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* $bDCU - Action Token */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/images/dcu-token-logo.png" alt="$bDCU" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
                    <h2 className="text-2xl font-bebas text-white tracking-wide">$bDCU - Action Token</h2>
                  </div>
                  <div className="text-xs text-gray-400 mb-3 space-y-1">
                    <p><strong className="text-gray-200">Chain:</strong> Base</p>
                    <p><strong className="text-gray-200">Type:</strong> Liquid ERC-20</p>
                    <p><strong className="text-gray-200">Total Supply:</strong> 1,000,000,000</p>
                    <p><strong className="text-gray-200">Circulating:</strong> 850,000,000 (85%)</p>
                    <p><strong className="text-gray-200">Clanker Vault:</strong> 150,000,000 (15%) - burns, rewards, liquidity</p>
                  </div>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    $bDCU is earned through action and traded freely. It is the entry point for anyone joining the network - no prior knowledge required, no long-term lock-up needed to get started.
                  </p>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    $bDCU launched fairly through Clanker with no pre-mine, no team allocation, and no investor distribution. Every token in circulation was acquired on the open market. No insider had an advantage on day one.
                  </p>
                  <p className="text-xs font-medium text-gray-300 mb-2">Allocation:</p>
                  <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950/50 mb-4">
                    <table className="w-full min-w-[260px] border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-neutral-700"><th className="text-left py-2 px-3 font-medium text-gray-400">Purpose</th><th className="text-right py-2 px-3 font-medium text-gray-400">Amount</th><th className="text-right py-2 px-3 font-medium text-gray-400">Share</th></tr>
                      </thead>
                      <tbody className="text-gray-200">
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Fair launch circulating</td><td className="py-2 px-3 text-right">850,000,000</td><td className="py-2 px-3 text-right">85%</td></tr>
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Clanker Vault</td><td className="py-2 px-3 text-right">150,000,000</td><td className="py-2 px-3 text-right">15%</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">The vault exists for three purposes only: deflationary burns tied to network milestones, ecosystem rewards for verifiers and campaigns, and liquidity stabilization during volatility. The vault cannot be used for team compensation or investor payouts - it is protocol-owned.</p>
                  <p className="text-xs text-gray-400 mb-1"><strong className="text-gray-200">Earn from:</strong> Mini app cleanups, streaks, referrals.</p>
                  <p className="text-xs text-gray-400 mb-4"><strong className="text-gray-200">Use for:</strong> Verifier staking, trading on Base DEXes, campaign participation, bridging to $cDCU.</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#58B12F] hover:bg-[#58B12F]/80 text-black font-bold rounded-lg text-xs uppercase tracking-wider">Swap ETH / $bDCU</a>
                    <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[#58B12F] text-[#58B12F] hover:bg-[#58B12F]/10 font-bold rounded-lg text-xs uppercase tracking-wider">Swap USDT / $bDCU</a>
                  </div>
                  <a href="https://basescan.org/token/0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white transition-colors font-mono break-all">Contract: 0x30171b7014c02229497CdE6745DD3aD821F12b07</a>
                </div>
              </div>

              {/* $cDCU - Proof Token */}
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 relative overflow-hidden group hover:border-[#FAFF00]/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#58B12F]/10 rounded-full blur-2xl group-hover:bg-[#58B12F]/20 transition-all" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Image src="/images/dcu-token-logo.png" alt="$cDCU" width={48} height={48} className="w-12 h-12 object-contain" unoptimized />
                    <h2 className="text-2xl font-bebas text-white tracking-wide">$cDCU - Proof Token</h2>
                  </div>
                  <div className="text-xs text-gray-400 mb-3 space-y-1">
                    <p><strong className="text-gray-200">Chain:</strong> Celo</p>
                    <p><strong className="text-gray-200">Type:</strong> Reputation - earned through action, not bought</p>
                    <p><strong className="text-gray-200">Total Supply:</strong> 10,000,000</p>
                    <p><strong className="text-gray-200">Earned from:</strong> Verified cleanups on Base and full platform</p>
                  </div>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    $cDCU cannot be purchased on the open market. It is issued only through verified environmental action. This keeps governance in the hands of people who have actually contributed - not speculators who arrived after the fact.
                  </p>
                  <p className="text-xs font-medium text-gray-300 mb-2">Earning rate:</p>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">Every 5 verified cleanups on the Base mini app earns 500 $cDCU on Celo. Organizers receive credits equal to verified participants in their campaign - a 20-person cleanup event counts as 20 verified cleanups toward the organizer&apos;s total.</p>
                  <p className="text-xs font-medium text-gray-300 mb-2">Governance threshold:</p>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">500 $cDCU unlocks full governance participation - voting on proposals, funding pool allocations, and verification rules.</p>
                  <p className="text-xs font-medium text-gray-300 mb-2">Allocation:</p>
                  <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-950/50 mb-4">
                    <table className="w-full min-w-[260px] border-collapse text-sm">
                      <thead>
                        <tr className="border-b border-neutral-700"><th className="text-left py-2 px-3 font-medium text-gray-400">Purpose</th><th className="text-right py-2 px-3 font-medium text-gray-400">Share</th></tr>
                      </thead>
                      <tbody className="text-gray-200">
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Staking and Verifier Rewards</td><td className="py-2 px-3 text-right">35%</td></tr>
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Cleanup Campaign Incentives</td><td className="py-2 px-3 text-right">25%</td></tr>
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Public Distribution (vested)</td><td className="py-2 px-3 text-right">20%</td></tr>
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Team and Development (4-year vest)</td><td className="py-2 px-3 text-right">10%</td></tr>
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Verification Treasury</td><td className="py-2 px-3 text-right">5%</td></tr>
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Community Incentives</td><td className="py-2 px-3 text-right">4%</td></tr>
                        <tr className="border-b border-neutral-800"><td className="py-2 px-3">Liquidity</td><td className="py-2 px-3 text-right">1%</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 italic">The largest share goes to staking and verification because those roles keep the network trustworthy. Rewarding verifiers well is how you attract quality review, not rubber-stamping.</p>
                  <button disabled className="inline-block px-6 py-3 bg-neutral-800 text-gray-400 font-semibold rounded-xl cursor-not-allowed opacity-60 text-sm">View Celo dApp <span className="text-gray-500 font-normal">(governance in development)</span></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Bridge */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-6 text-center">The Bridge</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Cleanup activity happens on Base. Governance lives on Celo. The bridge connects both without requiring users to manage complex cross-chain transactions themselves.
            </p>
            <p className="text-gray-200 font-semibold mb-2">Current mechanism: Cleanup-count claim.</p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Complete 5 verified cleanups on the Base mini app. DeCleanup&apos;s backend generates a signed authorization. Visit the Celo dApp, connect your wallet, and claim 500 $cDCU. Simple, fast, no cross-chain gas complexity.
            </p>
            <p className="text-gray-200 font-semibold mb-2">Organizer multiplier:</p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Organizing a verified campaign event counts toward your cleanup total based on participant count. Run a 10-person cleanup, earn 10 cleanup credits toward your next $cDCU claim.
            </p>
            <p className="text-gray-200 font-semibold mb-2">Future mechanism: Burn-to-earn.</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              As the network matures and $bDCU reaches meaningful market value, a second bridge path will open. Burn a fixed dollar-equivalent of $bDCU on Base to mint $cDCU on Celo instantly - without needing cleanup count accumulation. The burn ratio will be oracle-priced in USD, not fixed in token amount, so it stays fair regardless of market conditions. Parameters will be set by community vote before launch.
            </p>
          </div>
        </section>

        {/* Impact System */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-10 text-center">Impact System</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-3">Impact Products</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Dynamic NFTs that evolve with your cleanup history. Each verified action levels up your Impact Product, building a portable environmental reputation that travels across ecosystems - not locked to any single platform.</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#FAFF00]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-3">Verifier System</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Stake $bDCU or $cDCU to join the verifier network. Verifiers review proof-of-impact submissions and earn rewards for accurate decisions. Slashing applies for false approvals, keeping the verification layer honest.</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-[#58B12F]/30 transition-colors">
                <h3 className="text-xl font-bebas tracking-wide text-white mb-3">Hypercerts</h3>
                <p className="text-sm text-gray-300 leading-relaxed">Minted after every 10 verified cleanups. Each Hypercert is a permanent ERC-1155 impact certificate - usable for grant applications, ESG reporting, and onchain identity. Your cleanup history becomes a credential.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Token Lifecycle */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-10 text-center">Token Lifecycle</h2>
            <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/50">
              <table className="w-full min-w-[500px] border-collapse">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="text-left py-4 px-6 text-lg font-medium text-[#58B12F]">$bDCU Path</th>
                    <th className="text-left py-4 px-6 text-lg font-medium text-[#FAFF00]">$cDCU Path</th>
                  </tr>
                </thead>
                <tbody className="text-gray-200">
                  <tr className="border-b border-neutral-800"><td className="py-4 px-6">Earn via Base mini app</td><td className="py-4 px-6">Earn via 5 verified cleanups</td></tr>
                  <tr className="border-b border-neutral-800"><td className="py-4 px-6">Stake for verifier access</td><td className="py-4 px-6">Stake for governance and verification</td></tr>
                  <tr className="border-b border-neutral-800"><td className="py-4 px-6">Trade on Base DEXes</td><td className="py-4 px-6">Build Impact Product reputation</td></tr>
                  <tr className="border-b border-neutral-800"><td className="py-4 px-6">Burn to earn $cDCU (future)</td><td className="py-4 px-6">Vote on Gardens.fund proposals</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Governance Timeline */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-2xl mx-auto px-0">
            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-6 text-center">Governance Timeline</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Governance is in development. Here is where it stands:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <span className="text-[#58B12F] font-mono font-bold shrink-0">Q2 2026</span>
                <p className="text-sm text-gray-200">Gardens.fund community live on Celo.</p>
              </div>
              <div className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <span className="text-[#58B12F] font-mono font-bold shrink-0">Q3 2026</span>
                <p className="text-sm text-gray-200">First community vote on funding pool allocation.</p>
              </div>
              <div className="flex items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <span className="text-[#58B12F] font-mono font-bold shrink-0">Q4 2026</span>
                <p className="text-sm text-gray-200">Full $cDCU governance launch.</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Active coordinators and verifiers building their $cDCU holdings now will have the strongest voice when governance opens.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="py-16 md:py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-0 text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto italic">
              Built for a transparent global impact economy - where every cleanup becomes verified onchain action.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Divider from "../ui/Divider";
// Simple Divider component since it's imported

type NavLinkVariant = "full" | "linksOnly" | "footerOnly";

const NavLink = ({ variant = "full" }: { variant?: NavLinkVariant }) => {
  const showFooter = variant === "full" || variant === "footerOnly";

  return (
    <nav className="relative overflow-hidden">
      {showFooter && (
        <>
          <Divider className="" />

          {/* Footer - Resources, Technical, Support */}
          <footer className="mt-6 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/litepaper" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Litepaper</Link></li>
                  <li><Link href="/tokenomics" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Tokenomics</Link></li>
                  <li><Link href="/toc" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Theory of change</Link></li>
                  <li><a href="https://paragraph.com/@decleanupnet" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Publications</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3">Technical</h4>
                <ul className="space-y-2">
                  <li><a href="https://github.com/DeCleanup-Network" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">GitHub</a></li>
                  <li><Link href="/docs" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Dev docs</Link></li>
                  <li><Link href="/userguide" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">User guide</Link></li>
                  <li><Link href="/terms" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Terms of service</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3">Support</h4>
                <ul className="space-y-2">
                  <li><a href="https://gardens.fund" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Gardens.fund (coming soon)</a></li>
                  <li><a href="https://giveth.io/project/decentralized-cleanup-network" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Donate on Giveth</a></li>
                  <li><a href="https://www.crowdwalrus.xyz/campaigns/decleanupnet" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Fund on CrowdWalrus</a></li>
                  <li><a href="https://app.uniswap.org/swap?chain=base&inputCurrency=ETH&outputCurrency=0x30171b7014c02229497CdE6745DD3aD821F12b07" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-[#58B12F] transition-colors text-sm">Invest in token</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-6" />
          </footer>
        </>
      )}
    </nav>
  );
};

export default NavLink;

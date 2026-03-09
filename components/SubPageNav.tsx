"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import StartCleaningChoice from "./StartCleaningChoice/StartCleaningChoice";

export default function SubPageNav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const allLinks = [
        { href: "/", label: "Home" },
        { href: "/litepaper", label: "Litepaper" },
        { href: "/tokenomics", label: "Tokenomics" },
        { href: "/toc", label: "Theory of Change" },
        { href: "/docs", label: "Dev Docs" },
        { href: "/userguide", label: "User Guide" },
    ];

    // Filter out the link for the current page
    const links = allLinks.filter(link => {
        // Normalize paths by removing trailing slashes for comparison
        const normalizedPath = pathname.replace(/\/$/, "") || "/";
        const normalizedLink = link.href.replace(/\/$/, "") || "/";
        return normalizedPath !== normalizedLink;
    });

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
                    <Image src="/images/decleanup_logo_full.png" alt="DeCleanup" width={32} height={32} className="h-8 w-auto object-contain" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6 text-[10px] xl:gap-8 xl:text-[11px] text-gray-200 font-medium font-mono uppercase tracking-widest">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-[#FAFF00] transition-colors whitespace-nowrap">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Action Button + Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <StartCleaningChoice variant="litepaper" />

                    <button
                        className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-[#0A0A0A]/98 border-b border-white/10 py-6 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-[#FAFF00] font-mono uppercase tracking-widest py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

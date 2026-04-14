"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-charcoal-700 bg-charcoal-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🎮</span>
          <span className="font-display text-xl text-teal-400 transition-colors group-hover:text-teal-300">
            TeachVault
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/games"
            className="text-sm font-medium text-charcoal-300 transition-colors hover:text-teal-400"
          >
            All Games
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal-300 hover:text-teal-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-charcoal-700 bg-charcoal-950 px-6 py-4 md:hidden">
          <Link
            href="/games"
            className="block py-2 text-sm font-medium text-charcoal-300 transition-colors hover:text-teal-400"
            onClick={() => setMobileOpen(false)}
          >
            All Games
          </Link>
        </div>
      )}
    </nav>
  );
}

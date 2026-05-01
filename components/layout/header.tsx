"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:py-5">
        <Link
          href="/"
          className="font-bold uppercase tracking-tight text-foreground"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="text-base md:text-lg">SEVENTH DAY</span>
          <span className="label-mono ml-3 hidden md:inline">[ SVNTH.DAY ]</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-wider text-foreground transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex invert-on-hover px-5 py-2.5 text-xs font-medium uppercase tracking-widest"
        >
          Start an Audit →
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center border border-foreground"
        >
          <span className="label-mono text-foreground" style={{ opacity: 1 }}>
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="invert-on-hover mt-3 px-5 py-3 text-center text-xs font-medium uppercase tracking-widest"
            >
              Start an Audit →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

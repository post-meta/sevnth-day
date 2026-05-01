"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CursorCoords } from "@/components/cursor-coords";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while overlay menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:py-5">
          <Link
            href="/"
            className="font-bold uppercase tracking-tight text-foreground"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="text-base md:text-lg">SEVENTH DAY</span>
          </Link>

          <CursorCoords />

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="label-mono inline-flex items-center gap-2 border border-foreground px-4 py-2 transition-colors hover:bg-foreground hover:text-background"
            style={{ opacity: 1 }}
          >
            <span>[ MENU ]</span>
          </button>
        </div>
      </header>

      {/* Fullscreen overlay menu */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-foreground text-background"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between border-b border-background/15 px-6 py-4 md:py-5">
            <span
              className="font-bold uppercase tracking-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              SEVENTH DAY
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="label-mono inline-flex items-center gap-2 border border-background/40 px-4 py-2 transition-colors hover:bg-background hover:text-foreground"
              style={{ color: "var(--background)", opacity: 1 }}
            >
              <span>[ CLOSE ]</span>
            </button>
          </div>

          <div className="mx-auto grid w-full max-w-[1200px] flex-1 grid-cols-1 gap-12 px-6 py-12 md:grid-cols-[1fr_2fr] md:py-16">
            {/* Left: brief + meta */}
            <div className="flex flex-col justify-between gap-12">
              <div className="space-y-3">
                <div
                  className="label-mono"
                  style={{ color: "var(--background)", opacity: 0.55 }}
                >
                  [ SEVENTH DAY · SVNTH.DAY ]
                </div>
                <div
                  className="label-mono"
                  style={{ color: "var(--background)", opacity: 0.55 }}
                >
                  Independent operator. Greater Seattle, WA.
                </div>
                <p className="max-w-xs text-sm leading-relaxed opacity-80">
                  Growth operations for service businesses. Websites, local SEO,
                  AI lead capture. Solo operator. Built since 2007.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:01@seventh.day"
                  className="label-mono transition-opacity hover:opacity-60"
                  style={{ color: "var(--background)", opacity: 0.85 }}
                >
                  01@seventh.day
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-between gap-4 border border-background/40 px-5 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-background hover:text-foreground"
                >
                  <span>Start an Audit</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right: massive nav */}
            <nav className="flex flex-col items-start justify-center gap-1 md:items-end md:text-right">
              {NAV.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 font-bold uppercase leading-[0.95] transition-opacity hover:opacity-100"
                  style={{
                    fontSize: "clamp(3rem, 9vw, 7rem)",
                    letterSpacing: "-0.04em",
                    opacity: 0.85,
                  }}
                >
                  <span
                    className="label-mono opacity-30 group-hover:opacity-60"
                    style={{ color: "var(--background)" }}
                  >
                    [ 0{i + 1} ]
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-background/15 px-6 py-4">
            <div
              className="label-mono mx-auto flex max-w-[1200px] items-center justify-between"
              style={{ color: "var(--background)", opacity: 0.55 }}
            >
              <span>[ 47.5301°N · 122.0326°W ]</span>
              <span className="hidden md:inline">
                Structured like a system. Not a brochure.
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

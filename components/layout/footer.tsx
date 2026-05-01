import Link from "next/link";

const COLS = [
  {
    label: "Services",
    items: [
      { href: "/services/websites", label: "Websites" },
      { href: "/services/local-seo", label: "Local SEO" },
      { href: "/services/ai-lead-capture", label: "AI Lead Capture" },
      { href: "/services/audit", label: "Audit" },
    ],
  },
  {
    label: "Work",
    items: [
      { href: "/cases/nw-garage-doors", label: "NW Garage Doors" },
      { href: "/cases/copper-fox-gutters", label: "Copper Fox Gutters" },
      { href: "/cases/flawless-aesthetics", label: "Flawless Aesthetics" },
    ],
  },
  {
    label: "Studio",
    items: [
      { href: "/about", label: "About" },
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      {/* Manifest panel */}
      <div className="border-b border-border bg-foreground py-10 text-background md:py-14">
        <div className="mx-auto max-w-[1200px] px-6">
          <p
            className="text-3xl font-bold uppercase leading-tight md:text-5xl md:leading-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Structured like a system.
            <br />
            <span className="opacity-50">Not a brochure.</span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-xl font-bold uppercase tracking-tight">
              SEVENTH DAY
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Growth operations for service businesses. Solo operator, Greater
              Seattle. Built since 2007.
            </p>
            <div className="label-mono mt-6">[ 47.5301°N · 122.0326°W ]</div>
          </div>

          {COLS.map((col) => (
            <div key={col.label}>
              <div className="label-mono mb-4">{col.label}</div>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm transition-opacity hover:opacity-60"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <div className="label-mono">© {year} · POST META LLC</div>
          <div className="label-mono">
            <a
              href="mailto:01@seventh.day"
              className="transition-opacity hover:opacity-60"
            >
              01@seventh.day
            </a>
          </div>
          <div className="label-mono">[ END.OF.TRANSMISSION ]</div>
        </div>
      </div>
    </footer>
  );
}

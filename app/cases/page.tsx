import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CASE_LIST } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Service businesses we currently support: NW Garage Doors, Copper Fox Gutters, Flawless Aesthetics.",
  alternates: { canonical: "/cases" },
};

const TRACK_TAGS: Record<string, string> = {
  "nw-garage-doors": "WEB · SEO · CONTENT",
  "copper-fox-gutters": "BRAND · WEB · CONTENT",
  "flawless-aesthetics": "WEB · AI BOT · CONTENT",
};

const KEY_OUTPUTS: Record<string, string> = {
  "nw-garage-doors": "ORG-RUN",
  "copper-fox-gutters": "BRD-RUN",
  "flawless-aesthetics": "BOT-RUN",
};

export default function CasesIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-16">
              <aside className="flex flex-col gap-4">
                <div className="label-mono">[ 00.WORK ]</div>
                <div className="label-mono" style={{ opacity: 0.7 }}>
                  Live engagements · {CASE_LIST.length} operators
                </div>
              </aside>
              <h1 className="h-large">
                Currently running
                <br />
                <span className="opacity-50">for these operators.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* TRACK HEADER STRIP */}
        <section className="border-b border-border bg-foreground text-background">
          <div className="mx-auto max-w-[1200px] px-6 py-6">
            <div
              className="label-mono flex flex-wrap items-center justify-between gap-4"
              style={{ color: "var(--background)", opacity: 0.7 }}
            >
              <span>[ OPERATING TRACKS ]</span>
              <span className="hidden md:inline">
                Track · Client · Stack · Key Output
              </span>
              <span>{CASE_LIST.length} active</span>
            </div>
          </div>
        </section>

        {/* TRACK TABLE */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px]">
            {/* table header (desktop only) */}
            <div
              className="label-mono hidden border-b border-border md:grid"
              style={{
                gridTemplateColumns: "60px 1.5fr 2.5fr 1fr",
                opacity: 0.5,
                padding: "1.25rem 1.5rem",
              }}
            >
              <span>NN</span>
              <span>Track / Client</span>
              <span>What gets built</span>
              <span className="text-right">Key Output</span>
            </div>

            <ul>
              {CASE_LIST.map((c, i) => (
                <li key={c.slug} className="border-b border-border last:border-b-0">
                  <Link
                    href={`/cases/${c.slug}`}
                    className="group block transition-colors hover:bg-foreground hover:text-background"
                  >
                    <div
                      className="grid gap-4 px-6 py-8 md:gap-6 md:py-10"
                      style={{
                        gridTemplateColumns: "60px 1fr",
                      }}
                    >
                      <div className="label-mono pt-2 group-hover:opacity-80">
                        [ 0{i + 1} ]
                      </div>
                      <div className="grid gap-6 md:grid-cols-[1.5fr_2.5fr_1fr] md:gap-6 md:items-start">
                        <div>
                          <div
                            className="text-xl font-bold uppercase md:text-3xl"
                            style={{ letterSpacing: "-0.025em" }}
                          >
                            {c.client}
                          </div>
                          <div className="label-mono mt-2">{c.industry}</div>
                          <div className="label-mono mt-1" style={{ opacity: 0.5 }}>
                            {TRACK_TAGS[c.slug]}
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed md:text-base">
                          {c.outcome}
                        </p>
                        <div className="flex flex-row items-center justify-between gap-4 md:flex-col md:items-end md:justify-start md:text-right">
                          <span className="label-mono inline-flex border border-current px-3 py-2">
                            {KEY_OUTPUTS[c.slug]}
                          </span>
                          <span className="label-mono">→ Read case</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
            <h2 className="h-large">Could be your business next.</h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="invert-on-hover px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                Start a 48-Hour Audit →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

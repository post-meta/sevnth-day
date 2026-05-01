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

export default function CasesIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">[ 00.WORK ]</div>
            <h1
              className="text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Currently running
              <br />
              <span className="opacity-50">for these operators.</span>
            </h1>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-0">
            <ul className="grid gap-px bg-border md:grid-cols-3">
              {CASE_LIST.map((c) => (
                <li key={c.slug} className="bg-background">
                  <Link
                    href={`/cases/${c.slug}`}
                    className="flex h-full flex-col justify-between gap-12 p-10 transition-colors hover:bg-foreground hover:text-background md:p-14"
                  >
                    <div>
                      <div className="label-mono mb-6">{c.industry}</div>
                      <h2
                        className="text-3xl font-bold uppercase md:text-4xl"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {c.client}
                      </h2>
                      <p className="mt-6 text-sm leading-relaxed opacity-80">
                        {c.outcome}
                      </p>
                    </div>
                    <span className="label-mono">→ Read case</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
            <h2
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Could be your business next.
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="invert-on-hover px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                Free 48-Hour Audit →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

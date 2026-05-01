import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "What things cost",
  description:
    "$500 audit. $5,000 rebuild. $1,500/mo. Published prices. No hidden retainers.",
  alternates: { canonical: "/pricing" },
};

const TIERS = [
  {
    n: "01",
    label: "Audit",
    price: "$500",
    cadence: "48 hours · one-time",
    body: "Full diagnostic of site, SEO, Google Business Profile, and lead flow. Recorded walkthrough. Prioritized fix list.",
    note: "Credits 100% toward a rebuild if you go forward.",
  },
  {
    n: "02",
    label: "Website Rebuild",
    price: "$5,000",
    cadence: "Fixed scope · ~2 weeks",
    body: "5–12 page site on a modern stack. Local SEO foundation. Lead capture connected to your phone or CRM.",
    note: "Live in two weeks from kickoff.",
  },
  {
    n: "03",
    label: "Monthly",
    price: "$1,500/mo",
    cadence: "Cancel anytime",
    body: "Local SEO, content, GBP, lead bot maintenance, hosting. Plain monthly summary. We earn the next month.",
    note: "No annual contracts. No surprise invoices.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">[ 00.PRICING ]</div>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              What things cost.
            </h1>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/80">
              Three tiers. Published. The audit credits toward a rebuild.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">
            <ul className="grid gap-px bg-border md:grid-cols-3">
              {TIERS.map((t) => (
                <li
                  key={t.n}
                  className="flex flex-col gap-6 bg-background p-8 md:p-10"
                >
                  <div className="label-mono">[ {t.n} ]</div>
                  <h2
                    className="text-3xl font-bold uppercase md:text-4xl"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    {t.label}
                  </h2>
                  <div>
                    <div
                      className="text-4xl font-bold md:text-5xl"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {t.price}
                    </div>
                    <div className="label-mono mt-2">{t.cadence}</div>
                  </div>
                  <p className="text-sm leading-relaxed">{t.body}</p>
                  <p className="label-mono mt-auto pt-4">{t.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">ANYTHING_BIGGER</span>
            </div>
            <h2
              className="mb-6 text-3xl font-bold uppercase md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Multi-location, custom integrations,
              <br />
              <span className="opacity-50">full automation.</span>
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-foreground/80">
              Custom scope. We give you a number after the audit, not before.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
            <h2
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Start with the audit.
            </h2>
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

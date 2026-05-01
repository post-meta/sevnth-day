import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd, ORGANIZATION_LD } from "@/components/json-ld";

const JOBS = [
  {
    href: "/grow",
    line: "The phone isn't ringing enough.",
    label: "Grow",
  },
  {
    href: "/rebuild",
    line: "You've paid agencies before. Nothing worked.",
    label: "Rebuild",
  },
  {
    href: "/handover",
    line: "You don't have time to manage marketing.",
    label: "Handover",
  },
  {
    href: "/catchup",
    line: "Competitors are getting calls that should be yours.",
    label: "Catch up",
  },
];

const CASES = [
  {
    href: "/cases/nw-garage-doors",
    client: "NW Garage Doors",
    industry: "Garage Doors · Bellevue, WA",
    outcome:
      "Rebuilt site + local SEO foundation. Two-location coverage, organic traffic stack.",
  },
  {
    href: "/cases/copper-fox-gutters",
    client: "Copper Fox Gutters",
    industry: "Gutter Services · Greater Seattle",
    outcome:
      "Brand from scratch. Voice, identity, site, GBP. Solar API and credibility-first content.",
  },
  {
    href: "/cases/flawless-aesthetics",
    client: "Flawless Aesthetics",
    industry: "Aesthetics Clinic · Federal Way, WA",
    outcome:
      "Site + Messenger AI lead bot. Compliance-aware copy, English-only auto-replies.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "We diagnose what you have. 48 hours. $500 — credits 100% toward a rebuild. Site, SEO, GBP, lead flow.",
  },
  {
    n: "02",
    title: "Show",
    body: "Recorded walkthrough — exactly what's broken and what isn't.",
  },
  {
    n: "03",
    title: "Fix",
    body: "Rebuild as fixed scope. Results ship before any retainer starts.",
  },
  {
    n: "04",
    title: "Run",
    body: "Then we run it monthly. Local SEO, content, GBP, lead capture. You answer the phone.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={ORGANIZATION_LD} />
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-40">
            <div className="label-mono mb-8 md:mb-12">
              [ 00.HERO ] — Greater Seattle, WA
            </div>

            <h1
              className="text-[clamp(2.5rem,8vw,7.5rem)] font-bold uppercase leading-[0.9] text-foreground"
              style={{ letterSpacing: "-0.045em" }}
            >
              You run
              <br />
              the business.
              <br />
              <span className="opacity-50">We run</span>
              <br />
              <span className="opacity-50">the growth.</span>
            </h1>

            <p className="mt-10 max-w-xl text-base md:text-lg text-foreground/80">
              For service businesses that need more of the right customers —
              without becoming their own marketing department.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="invert-on-hover px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                Start a 48-Hour Audit →
              </Link>
              <Link
                href="/cases"
                className="border border-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
              >
                See the work
              </Link>
            </div>
          </div>
        </section>

        {/* JOB PICKER */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">01.WHATS_YOUR_SITUATION</span>
            </div>

            <h2
              className="mb-12 text-3xl font-bold uppercase md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              What's your situation?
            </h2>

            <ul className="divide-y divide-border border-y border-border">
              {JOBS.map((job) => (
                <li key={job.href}>
                  <Link
                    href={job.href}
                    className="group flex flex-col gap-2 py-6 transition-colors hover:bg-foreground hover:text-background md:flex-row md:items-center md:justify-between md:gap-8 md:px-6 md:py-8"
                  >
                    <span className="text-lg md:text-2xl">{job.line}</span>
                    <span className="label-mono group-hover:opacity-100 md:text-right">
                      → {job.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WHO WE WORK WITH */}
        <section className="border-b border-border bg-foreground text-background">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div
              className="label-mono mb-8"
              style={{ color: "var(--background)", opacity: 0.55 }}
            >
              <span className="divider-ascii">02.WHO_WE_WORK_WITH</span>
            </div>

            <p
              className="text-3xl font-medium leading-tight md:text-5xl md:leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Garage doors. Gutters. Cleaning. Aesthetics. Towing. Service
              businesses that bill by the job.
              <br />
              <span className="opacity-50">
                If you do work with your hands or run a small clinic — we know
                your model.
              </span>
            </p>
          </div>
        </section>

        {/* PROOF */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">03.PROOF</span>
            </div>

            <h2
              className="mb-12 text-3xl font-bold uppercase md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Currently running for
            </h2>

            <ul className="grid gap-px bg-border md:grid-cols-3">
              {CASES.map((c) => (
                <li key={c.href} className="bg-background">
                  <Link
                    href={c.href}
                    className="flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-foreground hover:text-background"
                  >
                    <div>
                      <div className="label-mono mb-3">{c.industry}</div>
                      <h3
                        className="text-2xl font-bold uppercase md:text-3xl"
                        style={{ letterSpacing: "-0.025em" }}
                      >
                        {c.client}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed opacity-80">
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

        {/* HOW IT WORKS */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">04.HOW_IT_WORKS</span>
            </div>

            <h2
              className="mb-12 text-3xl font-bold uppercase md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              How it works
            </h2>

            <ol className="grid gap-px bg-border md:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.n} className="bg-background p-8">
                  <div className="label-mono mb-4">[ {s.n} ]</div>
                  <h3
                    className="mb-3 text-2xl font-bold uppercase"
                    style={{ letterSpacing: "-0.025em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section>
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
            <div className="label-mono mb-8">
              <span className="divider-ascii">05.READY</span>
            </div>

            <h2
              className="text-[clamp(2.25rem,6vw,5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Tell us what's broken.
              <br />
              <span className="opacity-50">
                We'll tell you if we can fix it.
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="invert-on-hover px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                Start an Audit →
              </Link>
              <a
                href="mailto:01@seventh.day"
                className="border border-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
              >
                01@seventh.day
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd, PERSON_LD } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "One operator. Eighteen years building. SEVENTH DAY is run solo by Eugene Krasnoperov from Greater Seattle.",
  alternates: { canonical: "/about" },
};

const CLIENTS = [
  {
    name: "NW Garage Doors",
    detail: "Garage Doors · Bellevue, WA",
    href: "/cases/nw-garage-doors",
  },
  {
    name: "Copper Fox Gutters",
    detail: "Gutter Services · Greater Seattle",
    href: "/cases/copper-fox-gutters",
  },
  {
    name: "Flawless Aesthetics",
    detail: "Aesthetics Clinic · Federal Way, WA",
    href: "/cases/flawless-aesthetics",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={PERSON_LD} />
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">[ 00.ABOUT ]</div>
            <h1
              className="text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              One operator.
              <br />
              <span className="opacity-50">Eighteen years building.</span>
            </h1>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
            <div>
              <div className="label-mono">
                <span className="divider-ascii">01.WHO</span>
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed md:text-xl md:leading-relaxed">
              <p>
                I'm Eugene. I've been writing code for the web since 2007 and
                ranking sites in Google since 2009. I run SEVENTH DAY solo —
                not because I want to scale a team, but because modern tools
                let one experienced operator do what used to take five.
              </p>
              <p className="text-foreground/70">
                That's why I can charge service-business prices and ship
                enterprise-grade work.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-foreground text-background">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
            <div>
              <div
                className="label-mono"
                style={{ color: "var(--background)", opacity: 0.55 }}
              >
                <span className="divider-ascii">02.WHY_SOLO</span>
              </div>
            </div>
            <ul className="space-y-5 text-lg md:text-xl">
              <li>No account managers between you and me.</li>
              <li>No junior dev quietly breaking your build.</li>
              <li>
                No <span className="opacity-60">"we'll get back to you Monday"</span>{" "}
                when it's broken Friday.
              </li>
              <li>You email me. I answer. I fix it.</li>
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">03.THE_WORK</span>
            </div>
            <h2
              className="mb-12 text-3xl font-bold uppercase md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Service businesses
              <br />
              <span className="opacity-50">currently supported</span>
            </h2>
            <ul className="divide-y divide-border border-y border-border">
              {CLIENTS.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="group flex flex-col gap-2 py-6 transition-colors hover:bg-foreground hover:text-background md:flex-row md:items-center md:justify-between md:px-6 md:py-8"
                  >
                    <div>
                      <div className="text-xl font-bold uppercase md:text-3xl">
                        {c.name}
                      </div>
                      <div className="label-mono mt-1">{c.detail}</div>
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
              Want to talk?
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="invert-on-hover px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                Book a Call →
              </Link>
              <a
                href="mailto:01@sevnth.day"
                className="border border-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
              >
                01@sevnth.day
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

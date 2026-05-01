import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CASES, CASE_LIST, type CaseSlug } from "@/lib/cases";

export function CasePage({ slug }: { slug: CaseSlug }) {
  const c = CASES[slug];
  const others = CASE_LIST.filter((x) => x.slug !== slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">[ CASE · {c.industry} ]</div>
            <h1
              className="text-[clamp(2.25rem,7vw,5.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              {c.client}
            </h1>
            <p
              className="mt-6 max-w-2xl text-2xl text-foreground/80 md:text-3xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {c.outcome}
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
            <div>
              <div className="label-mono">
                <span className="divider-ascii">01.SITUATION</span>
              </div>
            </div>
            <ul className="space-y-5 text-base leading-relaxed md:text-lg md:leading-relaxed">
              {c.situation.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="label-mono shrink-0">
                    [ {String(i + 1).padStart(2, "0")} ]
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border bg-foreground text-background">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
            <div>
              <div
                className="label-mono"
                style={{ color: "var(--background)", opacity: 0.55 }}
              >
                <span className="divider-ascii">02.WHAT_WE_DID</span>
              </div>
            </div>
            <ul className="space-y-6 text-base leading-relaxed md:text-lg md:leading-relaxed">
              {c.whatWeDid.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="label-mono shrink-0"
                    style={{ color: "var(--background)", opacity: 0.55 }}
                  >
                    [ {String(i + 1).padStart(2, "0")} ]
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
            <div>
              <div className="label-mono">
                <span className="divider-ascii">03.WHATS_RUNNING</span>
              </div>
            </div>
            <ul className="space-y-5 text-base leading-relaxed md:text-lg md:leading-relaxed">
              {c.whatsRunning.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="label-mono shrink-0">→</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
            <div className="label-mono mb-8">
              <span className="divider-ascii">OTHER_WORK</span>
            </div>
            <ul className="grid gap-px bg-border md:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug} className="bg-background">
                  <Link
                    href={`/cases/${o.slug}`}
                    className="flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-foreground hover:text-background"
                  >
                    <div>
                      <div className="label-mono mb-3">{o.industry}</div>
                      <h3
                        className="text-2xl font-bold uppercase md:text-3xl"
                        style={{ letterSpacing: "-0.025em" }}
                      >
                        {o.client}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed opacity-80">
                        {o.outcome}
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
              Want this kind of work
              <br />
              <span className="opacity-50">running for you?</span>
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

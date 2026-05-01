import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JOBS, STEPS, type JobSlug } from "@/lib/jobs";
import { CASES } from "@/lib/cases";

export function JobPage({ slug }: { slug: JobSlug }) {
  const job = JOBS[slug];
  const proofCases = job.proof.caseSlugs.map((s) => CASES[s]);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-32">
            <div className="label-mono mb-8">
              [ 00.{slug.toUpperCase()} ]
            </div>
            <h1
              className="text-[clamp(2.25rem,7vw,6rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              {job.hero.headline}
              {job.hero.headlineMuted ? (
                <>
                  <br />
                  <span className="opacity-50">{job.hero.headlineMuted}</span>
                </>
              ) : null}
            </h1>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground/80">
              {job.hero.sub}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="invert-on-hover inline-block px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                {job.hero.cta} →
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">{job.problem.label}</span>
            </div>
            <div className="space-y-6 text-lg leading-relaxed md:text-2xl md:leading-snug">
              {job.problem.paragraphs.map((p, i) => (
                <p key={i} className={i > 0 ? "text-foreground/70" : ""}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="border-b border-border bg-foreground text-background">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div
              className="label-mono mb-8"
              style={{ color: "var(--background)", opacity: 0.55 }}
            >
              <span className="divider-ascii">{job.whatWeDo.label}</span>
            </div>
            <h2
              className="mb-12 text-3xl font-bold uppercase md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              {job.whatWeDo.heading}
            </h2>
            <ul className="grid gap-px bg-background/20 md:grid-cols-2">
              {job.whatWeDo.bullets.map((b, i) => (
                <li
                  key={i}
                  className="bg-foreground p-8 md:p-10"
                  style={{ color: "var(--background)" }}
                >
                  <div
                    className="label-mono mb-4"
                    style={{ color: "var(--background)", opacity: 0.55 }}
                  >
                    [ {String(i + 1).padStart(2, "0")} ]
                  </div>
                  <p className="text-lg md:text-xl">{b}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROOF */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">03.PROOF</span>
            </div>
            <ul className="grid gap-px bg-border md:grid-cols-2">
              {proofCases.map((c) => (
                <li key={c.slug} className="bg-background">
                  <Link
                    href={`/cases/${c.slug}`}
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
            <ol className="grid gap-px bg-border md:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.n} className="bg-background p-8">
                  <div className="label-mono mb-4">[ {s.n} ]</div>
                  <h3
                    className="mb-3 text-xl font-bold uppercase md:text-2xl"
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

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
            <h2
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              {job.closing.headline}
              {job.closing.headlineMuted ? (
                <>
                  <br />
                  <span className="opacity-50">
                    {job.closing.headlineMuted}
                  </span>
                </>
              ) : null}
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="invert-on-hover px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                {job.closing.cta} →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

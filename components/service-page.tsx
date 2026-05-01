import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SERVICES, type ServiceSlug } from "@/lib/services";

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const s = SERVICES[slug];

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">[ {s.number} · SERVICES ]</div>
            <h1
              className="text-[clamp(2.25rem,7vw,5.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              {s.name}.
            </h1>
            <p
              className="mt-6 text-2xl text-foreground/80 md:text-3xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {s.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70">
              {s.oneLiner}
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1200px] gap-px bg-border px-0 md:grid-cols-2">
            <div className="bg-background p-8 md:p-12">
              <div className="label-mono mb-6">
                <span className="divider-ascii">WHATS_INCLUDED</span>
              </div>
              <ul className="space-y-5">
                {s.whatsIncluded.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="label-mono shrink-0">
                      [ {String(i + 1).padStart(2, "0")} ]
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-foreground p-8 text-background md:p-12">
              <div
                className="label-mono mb-6"
                style={{ color: "var(--background)", opacity: 0.55 }}
              >
                <span className="divider-ascii">WHATS_NOT</span>
              </div>
              <ul className="space-y-5">
                {s.whatsNot.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="label-mono shrink-0"
                      style={{ color: "var(--background)", opacity: 0.55 }}
                    >
                      [ × ]
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              <span className="divider-ascii">WHO_THIS_IS_FOR</span>
            </div>
            <p
              className="max-w-3xl text-2xl leading-tight md:text-4xl md:leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              {s.whoFor}
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
            <h2
              className="text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Ready to start?
            </h2>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="invert-on-hover px-7 py-4 text-xs font-medium uppercase tracking-widest"
              >
                Start a 48-Hour Audit →
              </Link>
              <Link
                href="/services"
                className="border border-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-60"
              >
                ← All services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

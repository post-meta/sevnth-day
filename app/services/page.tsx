import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SERVICE_LIST } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Four things, done well, for service businesses: websites, local SEO, AI lead capture, and audits.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">[ 00.SERVICES ]</div>
            <h1
              className="text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              What we do.
            </h1>
            <p
              className="mt-6 text-2xl text-foreground/80 md:text-3xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Four things. Done well.
              <br />
              <span className="opacity-60">For service businesses.</span>
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-[1200px] px-0">
            <ul className="grid gap-px bg-border md:grid-cols-2">
              {SERVICE_LIST.map((s) => (
                <li key={s.slug} className="bg-background">
                  <Link
                    href={`/services/${s.slug}`}
                    className="flex h-full flex-col justify-between gap-12 p-10 transition-colors hover:bg-foreground hover:text-background md:p-14"
                  >
                    <div>
                      <div className="label-mono mb-6">[ {s.number} ]</div>
                      <h2
                        className="text-3xl font-bold uppercase md:text-5xl"
                        style={{ letterSpacing: "-0.03em" }}
                      >
                        {s.name}
                      </h2>
                      <p
                        className="mt-4 text-lg md:text-xl"
                        style={{ letterSpacing: "-0.015em" }}
                      >
                        {s.tagline}
                      </p>
                      <p className="mt-6 text-sm leading-relaxed opacity-75">
                        {s.oneLiner}
                      </p>
                    </div>
                    <span className="label-mono">→ Read more</span>
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
              Not sure which one?
              <br />
              <span className="opacity-50">Start with the audit.</span>
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

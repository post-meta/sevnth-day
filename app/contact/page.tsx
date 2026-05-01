import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what's broken. We'll tell you if we can fix it. Free 48-hour audit, no retainer until you see the result.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              [ 00.CONTACT ] — Greater Seattle, WA
            </div>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Tell us what's broken.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
              We'll come back within one business day. Audit is free.
            </p>
          </div>
        </section>

        <section>
          <div className="mx-auto grid max-w-[1200px] gap-16 px-6 py-20 md:grid-cols-[2fr_1fr] md:py-28">
            <div>
              <div className="label-mono mb-6">
                <span className="divider-ascii">01.WRITE</span>
              </div>
              <ContactForm />
            </div>

            <aside className="space-y-10">
              <div>
                <div className="label-mono mb-3">EMAIL</div>
                <a
                  href="mailto:01@sevnth.day"
                  className="text-2xl font-bold uppercase tracking-tight transition-opacity hover:opacity-60"
                >
                  01@sevnth.day
                </a>
              </div>

              <div>
                <div className="label-mono mb-3">LOCATION</div>
                <p className="text-base">Greater Seattle, WA</p>
                <p className="label-mono mt-1">[ 47.5301°N · 122.0326°W ]</p>
              </div>

              <div>
                <div className="label-mono mb-3">RESPONSE TIME</div>
                <p className="text-base">One business day.</p>
                <p className="text-sm text-muted">
                  Faster if it's a fire and you say so.
                </p>
              </div>

              <div>
                <div className="label-mono mb-3">WHAT HAPPENS NEXT</div>
                <ol className="space-y-2 text-sm">
                  <li>1. We read what's broken.</li>
                  <li>2. If we can help, we send a 48-hour audit plan.</li>
                  <li>3. You decide. No pitch. No retainer pressure.</li>
                </ol>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

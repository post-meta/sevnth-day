import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/contact-form";
import { CalEmbed } from "@/components/cal-embed";

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
        {/* HERO */}
        <section className="border-b border-border bg-grid">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <div className="label-mono mb-8">
              [ 00.CONTACT ] — Greater Seattle, WA
            </div>
            <h1
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold uppercase leading-[0.95]"
              style={{ letterSpacing: "-0.04em" }}
            >
              Get in touch.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
              Two ways: book a 30-min discovery call, or write what's broken
              and we'll come back within a business day.
            </p>
          </div>
        </section>

        {/* TWO COLUMNS: form + cal embed */}
        <section>
          <div className="mx-auto grid max-w-[1200px] gap-16 px-6 py-20 md:grid-cols-2 md:py-28">
            {/* Form */}
            <div>
              <div className="label-mono mb-6">
                <span className="divider-ascii">01.WRITE</span>
              </div>
              <h2
                className="mb-8 text-2xl font-bold uppercase md:text-3xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Tell us what's broken.
              </h2>
              <ContactForm />
            </div>

            {/* Cal */}
            <div>
              <div className="label-mono mb-6">
                <span className="divider-ascii">02.BOOK</span>
              </div>
              <h2
                className="mb-8 text-2xl font-bold uppercase md:text-3xl"
                style={{ letterSpacing: "-0.025em" }}
              >
                Book a 30-min call.
              </h2>
              <CalEmbed />
              <p className="label-mono mt-4">
                Or email{" "}
                <a className="underline" href="mailto:01@sevnth.day">
                  01@sevnth.day
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

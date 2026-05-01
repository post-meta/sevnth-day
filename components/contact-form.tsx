"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      businessUrl: String(formData.get("businessUrl") ?? ""),
      whatsBroken: String(formData.get("whatsBroken") ?? ""),
      // honeypot — bots fill this, humans don't see it
      company: String(formData.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? `Request failed: ${res.status}`);
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-foreground p-8">
        <div className="label-mono mb-3">[ MESSAGE.RECEIVED ]</div>
        <h3 className="text-2xl font-bold uppercase tracking-tight">
          Got it.
        </h3>
        <p className="mt-3 text-foreground/80">
          We'll come back within one business day. If urgent, email{" "}
          <a className="underline" href="mailto:01@seventh.day">
            01@seventh.day
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <Field label="Your name" name="name" type="text" required autoComplete="name" />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
      />
      <Field
        label="Your business URL"
        name="businessUrl"
        type="url"
        placeholder="https://"
        autoComplete="url"
      />
      <FieldArea
        label="What's broken?"
        name="whatsBroken"
        required
        rows={5}
        placeholder="Describe what's not working — phone not ringing, agency burned you, lead bot stuck, anything."
      />

      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Company (leave blank)
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="invert-on-hover mt-2 px-7 py-4 text-xs font-medium uppercase tracking-widest disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send →"}
      </button>

      {status === "error" && (
        <p className="label-mono" style={{ color: "var(--foreground)", opacity: 0.9 }}>
          [ ERROR ] {errorMessage}
        </p>
      )}
    </form>
  );
}

function Field(props: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="label-mono">
        {props.label}
        {props.required ? " *" : ""}
      </span>
      <input
        name={props.name}
        type={props.type}
        required={props.required}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        inputMode={props.inputMode}
        className="border border-border bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}

function FieldArea(props: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="label-mono">
        {props.label}
        {props.required ? " *" : ""}
      </span>
      <textarea
        name={props.name}
        required={props.required}
        rows={props.rows ?? 4}
        placeholder={props.placeholder}
        className="border border-border bg-transparent px-4 py-3 text-base outline-none transition-colors focus:border-foreground"
      />
    </label>
  );
}

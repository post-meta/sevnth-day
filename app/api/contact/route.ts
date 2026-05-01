import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const FROM = process.env.RESEND_FROM ?? "noreply@sevnth.day";
const TO = process.env.RESEND_TO ?? "01@sevnth.day";

type Payload = {
  name?: string;
  email?: string;
  businessUrl?: string;
  whatsBroken?: string;
  company?: string;
};

export async function POST(request: NextRequest) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const businessUrl = body.businessUrl?.trim() ?? "";
  const whatsBroken = body.whatsBroken?.trim() ?? "";
  const honeypot = body.company?.trim() ?? "";

  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !whatsBroken) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (whatsBroken.length > 5000 || name.length > 200 || email.length > 200) {
    return NextResponse.json({ error: "Field too long" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const subject = `New audit request: ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Business URL: ${businessUrl || "(not provided)"}`,
    "",
    "What's broken:",
    whatsBroken,
  ].join("\n");

  try {
    const { error } = await resend.emails.send({
      from: `SEVENTH DAY <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}

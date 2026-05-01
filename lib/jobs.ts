export type JobSlug = "grow" | "rebuild" | "handover" | "catchup";

export type JobData = {
  slug: JobSlug;
  title: string;
  description: string;
  hero: {
    headline: string;
    headlineMuted?: string;
    sub: string;
    cta: string;
  };
  problem: {
    label: string;
    paragraphs: string[];
  };
  whatWeDo: {
    label: string;
    heading: string;
    bullets: string[];
  };
  proof: {
    caseSlugs: Array<"nw-garage-doors" | "copper-fox-gutters" | "flawless-aesthetics">;
  };
  closing: {
    headline: string;
    headlineMuted?: string;
    cta: string;
  };
};

export const JOBS: Record<JobSlug, JobData> = {
  grow: {
    slug: "grow",
    title: "More calls from Google for service businesses",
    description:
      "We rebuild the system that brings customers to your service business — local SEO, GBP, web, lead capture.",
    hero: {
      headline: "More calls.",
      headlineMuted: "More booked jobs.",
      sub: "You don't need a marketing strategy. You need the phone to ring with the right customers from your service area.",
      cta: "Free Audit",
    },
    problem: {
      label: "01.THE_PROBLEM",
      paragraphs: [
        "In 2026, your Google Business Profile drives the majority of your bookings. Most service businesses leave it half-empty.",
        "Reviews are stale. Photos are old. Categories are wrong. Your website gets traffic that doesn't call.",
        "Meanwhile competitors fill theirs and take the calls.",
      ],
    },
    whatWeDo: {
      label: "02.WHAT_WE_DO",
      heading: "We rebuild the system that brings customers to you",
      bullets: [
        "Local SEO that ranks for the searches your customers actually make.",
        "Google Business Profile that shows up in the map pack.",
        "Website that turns visitors into calls and booked jobs.",
        "AI lead capture that catches inquiries when you can't pick up.",
      ],
    },
    proof: { caseSlugs: ["nw-garage-doors", "flawless-aesthetics"] },
    closing: {
      headline: "Want to see where your leads are leaking?",
      cta: "Free Audit",
    },
  },
  rebuild: {
    slug: "rebuild",
    title: "Hire someone to fix the website that doesn't convert",
    description:
      "Most website redesigns fail to deliver ROI. We audit before you commit. No retainer until the rebuild ships.",
    hero: {
      headline: "Paid an agency before.",
      headlineMuted: "Nothing happened.",
      sub: "This time, you don't pay a retainer until you see the result.",
      cta: "Free 48-Hour Diagnostic",
    },
    problem: {
      label: "01.THE_PROBLEM",
      paragraphs: [
        "Most website redesigns fail to deliver ROI. The reason: agencies fix the visuals when the problem is the conversion path.",
        "You bought a prettier site. Same number of calls. Sometimes fewer.",
        "You got SEO reports that show \"traffic up\" while bookings stay flat. You got a chatbot you can't turn off and never trained. You got monthly invoices for work nobody can show you.",
      ],
    },
    whatWeDo: {
      label: "02.HOW_WERE_DIFFERENT",
      heading: "How we work, differently",
      bullets: [
        "We do the audit before you commit. You see what we'd actually do.",
        "We charge for the rebuild as a fixed scope. Not hours. Not phases.",
        "We don't start a monthly retainer until the rebuild ships and starts working.",
        "If we can't fix it, we say so. We don't bill for diagnosis disguised as strategy.",
      ],
    },
    proof: { caseSlugs: ["nw-garage-doors", "copper-fox-gutters"] },
    closing: {
      headline: "Tell us what your last agency built.",
      headlineMuted: "We'll audit it free.",
      cta: "Start Diagnostic",
    },
  },
  handover: {
    slug: "handover",
    title: "Managed marketing for service businesses",
    description:
      "Stop being your own marketing department. We handle everything. You answer the phone.",
    hero: {
      headline: "Stop being your own",
      headlineMuted: "marketing department.",
      sub: "You service the customers. We bring them in. Quietly.",
      cta: "Free Audit",
    },
    problem: {
      label: "01.THE_PROBLEM",
      paragraphs: [
        "You didn't open a service business to learn SEO at midnight.",
        "You didn't hire help to micromanage their reports. You didn't sign up for weekly meetings about content calendars.",
        "You signed up to do the work. Marketing should be invisible.",
      ],
    },
    whatWeDo: {
      label: "02.HOW_WE_WORK",
      heading: "How we work",
      bullets: [
        "We handle everything from technical to content to local rankings.",
        "You see one monthly summary. Plain language. Numbers, not graphs nobody reads.",
        "Leads come to you as calls, texts, or notifications — already qualified.",
        "No status meetings. No campaigns to approve. No surprise invoices.",
      ],
    },
    proof: { caseSlugs: ["copper-fox-gutters", "flawless-aesthetics"] },
    closing: {
      headline: "Want to hand it off?",
      cta: "Free Audit",
    },
  },
  catchup: {
    slug: "catchup",
    title: "Outrank competitors in local search",
    description:
      "Local Pack gets the most clicks. If competitors are there and you're not, here's how we change that.",
    hero: {
      headline: "Your competitors are getting",
      headlineMuted: "the calls that should be yours.",
      sub: "Local search is winnable. Most service businesses just don't try.",
      cta: "Free Competitive Audit",
    },
    problem: {
      label: "01.THE_PROBLEM",
      paragraphs: [
        "The Local Pack — top three results on Google Maps — gets the majority of clicks for local searches. If you're not there, your competitors are.",
        "Their reviews are growing. Yours are stale. Their site loads faster. Theirs has photos. Theirs answers questions.",
        "Theirs shows up in the map pack. Yours is on page two.",
      ],
    },
    whatWeDo: {
      label: "02.WHAT_YOU_GET",
      heading: "Competitive audit — what you get",
      bullets: [
        "Side-by-side ranking comparison for every search that matters in your area.",
        "GBP gap analysis: what they have, what you don't.",
        "Review velocity gap: how fast they're catching up — or pulling ahead.",
        "Site speed and conversion comparison, with a 90-day plan to close the gap.",
      ],
    },
    proof: { caseSlugs: ["nw-garage-doors", "copper-fox-gutters"] },
    closing: {
      headline: "Want to see how you stack up?",
      cta: "Free Competitive Audit",
    },
  },
};

export const STEPS = [
  {
    n: "01",
    title: "Audit",
    body: "Free 48-hour diagnostic. Site, SEO, GBP, lead flow.",
  },
  {
    n: "02",
    title: "Show",
    body: "You see exactly what's broken. Recorded walkthrough.",
  },
  {
    n: "03",
    title: "Fix",
    body: "Fixed-scope rebuild. Results before retainer.",
  },
  {
    n: "04",
    title: "Run",
    body: "Monthly local SEO, content, GBP, lead capture.",
  },
] as const;

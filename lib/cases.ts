export type CaseSlug =
  | "nw-garage-doors"
  | "copper-fox-gutters"
  | "flawless-aesthetics";

export type CaseData = {
  slug: CaseSlug;
  client: string;
  industry: string;
  title: string;
  description: string;
  outcome: string;
  situation: string[];
  whatWeDid: string[];
  whatsRunning: string[];
};

export const CASES: Record<CaseSlug, CaseData> = {
  "nw-garage-doors": {
    slug: "nw-garage-doors",
    client: "NW Garage Doors",
    industry: "Garage Doors · Bellevue, WA",
    title: "NW Garage Doors — site rebuild + local SEO",
    description:
      "Rebuilt site and local SEO foundation for a two-location garage door installer in Greater Seattle.",
    outcome:
      "Modern stack, clean redirect map, two-location coverage, structured data baseline. Ongoing retainer.",
    situation: [
      "Aging WordPress site that didn't reflect the actual scope of work or the two-location reality.",
      "Inconsistent URL structure across services and city pages — link equity bleeding across irrelevant slugs.",
      "Google Business Profile present but underused; service-area coverage thin.",
    ],
    whatWeDid: [
      "Rebuilt the site on a modern Next.js stack — fast, structured, ready for ads landing pages and local content scaling.",
      "Mapped every legacy URL and shipped a comprehensive 301 plan so existing rankings carried over cleanly.",
      "Built city + service permutations as templated pages with real local context — not thin spam.",
      "Set up structured data (LocalBusiness, Service, FAQ) and tightened internal linking.",
    ],
    whatsRunning: [
      "Monthly local SEO and content retainer.",
      "GBP optimization, review-velocity workflow.",
      "Performance and lead-capture monitoring.",
    ],
  },
  "copper-fox-gutters": {
    slug: "copper-fox-gutters",
    client: "Copper Fox Gutters",
    industry: "Gutter Services · Greater Seattle",
    title: "Copper Fox Gutters — brand from scratch",
    description:
      "Brand, voice, identity, site, GBP, and credibility-first content for a Greater Seattle gutter operator.",
    outcome:
      "Brand from zero — voice and identity through site, GBP, and a 6-article blog program shipped at launch.",
    situation: [
      "Established operator with deep field experience and no consumer-facing brand.",
      "No website, no consistent identity, no visible online proof of the work.",
      "Strong word-of-mouth pipeline that didn't survive a Google search comparison against younger, slicker competitors.",
    ],
    whatWeDid: [
      "Built the brand from scratch — naming, voice, identity, the fox mascot — with the operator's actual story driving every choice.",
      "Wrote and shipped a credibility-first website. Fast, opinionated, no agency-template smell.",
      "Set up Google Business Profile with proper categories, photos, and review prompts wired into the operator's workflow.",
      "Stage 1 of the blog program: 6 articles, ~11,500 words, all written to match the brand voice and the homeowner's actual questions.",
    ],
    whatsRunning: [
      "Stage 2 blog program in motion.",
      "GBP review velocity and ongoing content cadence.",
      "Performance and lead-flow monitoring.",
    ],
  },
  "flawless-aesthetics": {
    slug: "flawless-aesthetics",
    client: "Flawless Aesthetics",
    industry: "Aesthetics Clinic · Federal Way, WA",
    title: "Flawless Aesthetics — site + AI lead bot",
    description:
      "Site, compliance-aware copy, and a Messenger AI lead bot for an aesthetics clinic in Federal Way.",
    outcome:
      "Website live since 2026-03-18 alongside a Messenger AI lead bot routing inquiries when the clinic is mid-treatment.",
    situation: [
      "Solo provider clinic with a steady cadence of Instagram and Messenger inquiries.",
      "Inquiries falling through the cracks during treatment hours — slow replies cost bookings.",
      "Marketing copy needed to clear medspa advertising compliance (Rx-product trademark rules, comparative claims, fabricated-claim risk).",
    ],
    whatWeDid: [
      "Built the website with clinical, honest copy — no trademarked Rx product names paired with prices, no comparative claims, no fabricated outcomes.",
      "Designed a Messenger AI lead bot on Cloudflare Workers — qualifies, routes, and notifies in under a minute.",
      "Made the bot English-only by design (per operator request after testing) so quality stays consistent.",
      "Established a content cadence pattern with carousel structures that match medspa creative norms.",
    ],
    whatsRunning: [
      "Site live since 2026-03-18.",
      "Messenger AI bot operating with English-only auto-replies.",
      "Ongoing carousel content and ad compliance review.",
    ],
  },
};

export const CASE_LIST: CaseData[] = [
  CASES["nw-garage-doors"],
  CASES["copper-fox-gutters"],
  CASES["flawless-aesthetics"],
];

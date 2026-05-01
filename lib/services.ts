export type ServiceSlug =
  | "websites"
  | "local-seo"
  | "ai-lead-capture"
  | "audit";

export type ServiceData = {
  slug: ServiceSlug;
  number: string;
  name: string;
  tagline: string;
  oneLiner: string;
  metaTitle: string;
  metaDescription: string;
  whatsIncluded: string[];
  whatsNot: string[];
  whoFor: string;
};

export const SERVICES: Record<ServiceSlug, ServiceData> = {
  websites: {
    slug: "websites",
    number: "01",
    name: "Websites",
    tagline: "Built on a modern stack. Load in under a second.",
    oneLiner:
      "Designed to convert traffic into calls and booked jobs. Not templates. Not WordPress on autopilot. Real custom builds.",
    metaTitle: "Custom websites for service businesses",
    metaDescription:
      "Modern stack. Sub-second load. Built to convert traffic into calls and booked jobs. Not WordPress on autopilot.",
    whatsIncluded: [
      "Custom design and build on a modern stack (Next.js, Tailwind, MDX where it fits).",
      "Local SEO foundation: structured data, semantic markup, internal linking.",
      "Lead capture wired to your phone or CRM, with notifications you'll actually read.",
      "Performance budget: Lighthouse mobile 90+, sub-second LCP.",
      "Two weeks from kickoff to live, in fixed scope.",
    ],
    whatsNot: [
      "We don't ship pre-built themes with your logo dropped in.",
      "We don't reuse copy across clients.",
      "We don't bill by the hour.",
    ],
    whoFor:
      "Service businesses that bill by the job and need a site that loads fast and turns visitors into calls — without ongoing developer overhead.",
  },
  "local-seo": {
    slug: "local-seo",
    number: "02",
    name: "Local SEO",
    tagline: "Rank where customers in your area are searching.",
    oneLiner:
      "Google Business Profile, local content, technical fixes, review velocity, citation cleanup. Run monthly.",
    metaTitle: "Local SEO for service businesses",
    metaDescription:
      "Rank in the local pack. Google Business Profile, local content, review velocity, technical fixes. Monthly retainer.",
    whatsIncluded: [
      "Google Business Profile audit and optimization (categories, services, photos, posts).",
      "Local content program — city + service permutations written for actual search intent, not thin spam.",
      "Review velocity workflow built into your operator's daily flow.",
      "Citation cleanup, NAP consistency, schema markup.",
      "Monthly summary in plain language. Numbers, not graphs.",
    ],
    whatsNot: [
      "We don't buy fake reviews.",
      "We don't spin AI content. Every page is written for a real query.",
      "We don't lock people into 12-month contracts.",
    ],
    whoFor:
      "Service businesses with a defined service area that need to win the Local Pack and stop losing calls to competitors who are simply showing up.",
  },
  "ai-lead-capture": {
    slug: "ai-lead-capture",
    number: "03",
    name: "AI Lead Capture",
    tagline: "Catches inquiries when you can't pick up.",
    oneLiner:
      "Web chat, Messenger, Telegram, SMS — connected to where leads come in. Qualifies, routes, notifies. Built to your business, not bolted on.",
    metaTitle: "AI lead capture for service businesses",
    metaDescription:
      "Web chat, Messenger, SMS. Qualifies and routes inquiries when you're on a job. Built for your business, not a generic bot.",
    whatsIncluded: [
      "Custom-built lead bot trained on your services, pricing, and qualification criteria.",
      "Channel coverage: web chat, Messenger, Telegram, or SMS — wherever your customers come in.",
      "Notification flow: leads land in your phone as a text or call, already qualified.",
      "Live in days, not weeks. Iterates with usage.",
      "Compliance-aware where it matters (medspa, regulated services).",
    ],
    whatsNot: [
      "Not a generic chatbot widget.",
      "Not a third-party SaaS you'll get locked into.",
      "Not a black box — you see the prompts, the rules, the logs.",
    ],
    whoFor:
      "Operators who lose bookings during work hours. Solo providers, two-person crews, clinics where the front desk is also the chair.",
  },
  audit: {
    slug: "audit",
    number: "04",
    name: "Audits",
    tagline: "48-hour diagnostic. See what's broken before committing.",
    oneLiner:
      "Site, SEO, GBP, lead flow. You see exactly what's broken before any rebuild starts. Recorded walkthrough. Prioritized fix list.",
    metaTitle: "48-hour audit for service businesses",
    metaDescription:
      "$500 48-hour diagnostic of site, SEO, Google Business Profile, and lead flow. Recorded walkthrough. Prioritized fix list. Credits toward rebuild.",
    whatsIncluded: [
      "Full site review — performance, conversion, structure, mobile UX.",
      "Local SEO snapshot — rankings, GBP gaps, review velocity vs competitors.",
      "Lead flow trace — where inquiries come in, where they leak.",
      "Recorded walkthrough video and a prioritized fix list.",
      "Credits 100% toward a website rebuild if you go forward.",
    ],
    whatsNot: [
      "Not a 40-page PDF nobody reads.",
      "Not a sales pitch dressed as a report.",
      "Not a commitment — you walk away with the findings either way.",
    ],
    whoFor:
      "Anyone considering an agency engagement who wants to see what they'd actually be paying for before signing anything.",
  },
};

export const SERVICE_LIST: ServiceData[] = [
  SERVICES.websites,
  SERVICES["local-seo"],
  SERVICES["ai-lead-capture"],
  SERVICES.audit,
];

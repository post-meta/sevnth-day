const DEFAULT_ITEMS = [
  "Websites",
  "Local SEO",
  "AI Lead Capture",
  "Google Business Profile",
  "Content",
  "Audits",
  "Service Pages",
  "Schema",
  "Review Velocity",
  "Map Pack",
];

export function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  // Duplicate items for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="marquee border-y border-border bg-foreground py-6 text-background">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 text-2xl font-bold uppercase md:text-4xl"
            style={{ letterSpacing: "-0.025em" }}
          >
            <span>{item}</span>
            <span className="opacity-30">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

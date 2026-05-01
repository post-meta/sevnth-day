const DEFAULT_ITEMS = [
  "Garage Doors",
  "Gutters",
  "Cleaning",
  "Aesthetics",
  "Towing",
  "Service businesses that bill by the job",
];

export function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="marquee border-y border-border bg-foreground py-3 text-background">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span
            key={i}
            className="label-mono flex items-center gap-6"
            style={{ color: "var(--background)", opacity: 0.85 }}
          >
            <span>{item}</span>
            <span style={{ opacity: 0.4 }}>/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

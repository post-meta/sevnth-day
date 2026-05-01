"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "sevnthday/discovery";

export function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "discovery" });
      const palette = {
        "cal-bg": "#ebe9e2",
        "cal-bg-emphasis": "#0a0a0a",
        "cal-border": "rgba(10,10,10,0.12)",
        "cal-text": "#0a0a0a",
        "cal-text-emphasis": "#0a0a0a",
        "cal-brand": "#0a0a0a",
        "cal-brand-emphasis": "#0a0a0a",
      };
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: palette, dark: palette },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="border border-border">
      <iframe
        title="Book a discovery call"
        src={`https://cal.com/${CAL_LINK}/embed?layout=month_view&theme=light`}
        className="block h-[700px] w-full border-0 bg-background"
        loading="lazy"
      />
    </div>
  );
}

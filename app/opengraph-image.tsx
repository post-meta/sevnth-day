import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "SEVENTH DAY — You run the business. We run the growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#EBE9E2",
          color: "#0A0A0A",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Inter, system-ui",
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.55,
            display: "flex",
          }}
        >
          [ SEVENTH DAY · SVNTH.DAY ]
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>You run the business.</div>
          <div style={{ display: "flex", opacity: 0.5 }}>We run the growth.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: 0.55,
          }}
        >
          <div style={{ display: "flex" }}>Greater Seattle, WA</div>
          <div style={{ display: "flex" }}>01@sevnth.day</div>
        </div>
      </div>
    ),
    size,
  );
}

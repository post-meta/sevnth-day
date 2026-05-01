"use client";

import { useEffect, useState } from "react";

export function CursorCoords() {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let raf = 0;
    let pending: { x: number; y: number } | null = null;
    function onMove(e: MouseEvent) {
      pending = { x: e.clientX, y: e.clientY };
      if (raf) return;
      raf = requestAnimationFrame(() => {
        if (pending) setCoords(pending);
        raf = 0;
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Hide on touch devices (no cursor)
  if (!coords) {
    return (
      <span className="label-mono hidden md:inline-flex">
        [ CURSOR · IDLE ]
      </span>
    );
  }

  return (
    <span className="label-mono hidden md:inline-flex tabular-nums" style={{ opacity: 0.7 }}>
      [ X · {String(coords.x).padStart(4, "0")} · Y · {String(coords.y).padStart(4, "0")} ]
    </span>
  );
}

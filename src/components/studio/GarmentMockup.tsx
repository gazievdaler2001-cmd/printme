"use client";

import type { CSSProperties } from "react";

// Lightweight SVG garments so the color preview works live without needing
// per-color product photos. The print is overlaid via an absolutely
// positioned zone on top of the chest area.

export type GarmentType = "tshirt" | "hoodie";

const TSHIRT_PATH =
  "M75 30 L112 14 Q150 36 188 14 L225 30 L272 78 L238 114 L214 96 L214 276 Q150 292 86 276 L86 96 L62 114 L28 78 Z";

const HOODIE_PATH =
  "M70 46 L112 22 Q150 44 188 22 L230 46 L276 96 L242 130 L218 112 L218 280 Q150 296 82 280 L82 112 L58 130 L24 96 Z";

export function GarmentMockup({
  type,
  color,
  children,
}: {
  type: GarmentType;
  color: string;
  children?: React.ReactNode; // the print overlay
}) {
  // Light garments need a visible outline on white background.
  const isLight = ["#ffffff", "#e8d9b5", "#f5f5f5", "#cdb4ff"].includes(
    color.toLowerCase(),
  );
  const stroke = isLight ? "#d4d4d8" : "rgba(0,0,0,.15)";

  const printZone: CSSProperties = {
    position: "absolute",
    left: "33%",
    top: type === "hoodie" ? "34%" : "30%",
    width: "34%",
    height: "44%",
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 300 300" className="h-full w-full drop-shadow-sm">
        <path d={type === "hoodie" ? HOODIE_PATH : TSHIRT_PATH} fill={color} stroke={stroke} strokeWidth={2} />
        {type === "hoodie" && (
          <>
            {/* hood */}
            <path
              d="M112 22 Q150 60 188 22 Q176 6 150 8 Q124 6 112 22 Z"
              fill={color}
              stroke={stroke}
              strokeWidth={2}
            />
            {/* pocket */}
            <path
              d="M110 232 L190 232 L182 268 L118 268 Z"
              fill="none"
              stroke={stroke}
              strokeWidth={2}
            />
            {/* strings */}
            <line x1="140" y1="40" x2="138" y2="80" stroke={stroke} strokeWidth={2} />
            <line x1="160" y1="40" x2="162" y2="80" stroke={stroke} strokeWidth={2} />
          </>
        )}
        {/* collar */}
        {type === "tshirt" && (
          <path d="M112 14 Q150 44 188 14" fill="none" stroke={stroke} strokeWidth={2} />
        )}
      </svg>

      <div style={printZone}>{children}</div>
    </div>
  );
}

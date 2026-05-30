import { Swords, Sparkles, Rocket, Car, Minus, Mountain, Zap } from "lucide-react";
import { GarmentMockup, type GarmentType } from "./GarmentMockup";

// Network-free themed design previews using layered CSS gradients.
// 7 themes: 0=Самурай, 1=Аниме, 2=Космос, 3=Машины, 4=Минимализм, 5=Горы, 6=Киберпанк
export const DESIGN_THEMES = [
  { gradient: "from-rose-600 via-red-500 to-orange-400",      glow: "rgba(255,180,120,.55)", Icon: Swords },
  { gradient: "from-fuchsia-400 via-purple-500 to-indigo-600", glow: "rgba(236,160,255,.55)", Icon: Sparkles },
  { gradient: "from-indigo-800 via-violet-700 to-purple-900",  glow: "rgba(150,140,255,.45)", Icon: Rocket },
  { gradient: "from-blue-500 via-cyan-500 to-teal-400",        glow: "rgba(150,230,255,.55)", Icon: Car },
  { gradient: "from-zinc-100 via-zinc-300 to-zinc-400",        glow: "rgba(255,255,255,.7)",  Icon: Minus },
  { gradient: "from-amber-500 via-orange-400 to-yellow-300",   glow: "rgba(255,230,150,.6)",  Icon: Mountain },
  { gradient: "from-cyan-400 via-violet-500 to-blue-900",      glow: "rgba(130,220,255,.5)",  Icon: Zap },
] as const;

// A single design config used across the page. `image`, when set, renders a
// real product photo (e.g. /products/samurai.jpg) instead of the SVG mockup —
// so swapping in real photography later is a one-line change per item.
export interface DesignConfig {
  theme: number;
  type: GarmentType;
  garmentColor: string;
  printFill: number;
  image?: string;
}

// Examples grid — order matches the reference:
// Самурай · Аниме · Киберпанк · Машины · Горы · Космос
export const CATALOG_DESIGNS: DesignConfig[] = [
  { theme: 0, type: "tshirt", garmentColor: "#18181b", printFill: 84 }, // Самурай — black tshirt
  { theme: 1, type: "tshirt", garmentColor: "#ffffff", printFill: 80 }, // Аниме — white tshirt
  { theme: 6, type: "hoodie", garmentColor: "#18181b", printFill: 82 }, // Киберпанк — black hoodie
  { theme: 3, type: "tshirt", garmentColor: "#ffffff", printFill: 64 }, // Машины — white tshirt
  { theme: 5, type: "hoodie", garmentColor: "#e8d9b5", printFill: 70 }, // Горы — beige hoodie
  { theme: 2, type: "tshirt", garmentColor: "#18181b", printFill: 78 }, // Космос — black tshirt
];

export function DesignThumb({
  theme,
  type = "tshirt",
  garmentColor = "#18181b",
  printFill = 100,
  image,
}: {
  theme: number;
  type?: GarmentType;
  garmentColor?: string;
  printFill?: number; // 30–100 — percentage of print zone filled
  image?: string;
}) {
  // Real product photo path — render it directly when provided.
  if (image) {
    return (
      <div className="relative mx-auto aspect-square w-full max-w-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>
    );
  }

  const t = DESIGN_THEMES[theme % DESIGN_THEMES.length];
  const Icon = t.Icon;
  // Padding shrinks the visible print inside the print zone.
  const pad = `${((100 - printFill) / 200) * 100}%`;

  return (
    <GarmentMockup type={type} color={garmentColor}>
      <div className="h-full w-full" style={{ padding: pad }}>
        <div className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-[10%] bg-gradient-to-br ${t.gradient}`}>
          {/* Soft radial highlight — gives the print depth instead of a flat fill */}
          <div
            className="absolute -top-1/4 left-1/4 h-3/4 w-3/4 rounded-full blur-xl"
            style={{ background: `radial-gradient(circle, ${t.glow} 0%, transparent 70%)` }}
          />
          {/* Decorative accent dots */}
          <div className="absolute right-[14%] top-[16%] h-[7%] w-[7%] rounded-full bg-white/40" />
          <div className="absolute left-[16%] bottom-[20%] h-[4%] w-[4%] rounded-full bg-white/30" />
          {/* Main themed icon */}
          <Icon
            className="relative z-10 text-white/95 drop-shadow"
            size={Math.round(40 * (printFill / 100) + 12)}
            strokeWidth={1.5}
          />
        </div>
      </div>
    </GarmentMockup>
  );
}

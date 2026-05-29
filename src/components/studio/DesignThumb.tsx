import { Swords, Sparkles, Rocket, Car, Minus, Mountain, Zap } from "lucide-react";
import { GarmentMockup, type GarmentType } from "./GarmentMockup";

// Network-free themed design previews using CSS gradients.
// 7 themes: 0=Самурай, 1=Аниме, 2=Космос, 3=Машины, 4=Минимализм, 5=Горы, 6=Киберпанк
export const DESIGN_THEMES = [
  { gradient: "from-rose-600 via-red-500 to-orange-400", Icon: Swords },
  { gradient: "from-fuchsia-400 via-purple-500 to-indigo-600", Icon: Sparkles },
  { gradient: "from-indigo-800 via-violet-700 to-purple-900", Icon: Rocket },
  { gradient: "from-blue-500 via-cyan-500 to-teal-400", Icon: Car },
  { gradient: "from-zinc-100 via-zinc-300 to-zinc-400", Icon: Minus },
  { gradient: "from-amber-500 via-orange-400 to-yellow-300", Icon: Mountain },
  { gradient: "from-cyan-400 via-violet-500 to-blue-900", Icon: Zap },
] as const;

// Varied configs for the examples grid — different garments, colors, and print sizes.
export const CATALOG_DESIGNS: {
  theme: number;
  type: GarmentType;
  garmentColor: string;
  printFill: number;
}[] = [
  { theme: 1, type: "tshirt",  garmentColor: "#18181b", printFill: 78 }, // Аниме — black tshirt, big
  { theme: 0, type: "hoodie",  garmentColor: "#18181b", printFill: 85 }, // Самурай — black hoodie, full
  { theme: 2, type: "tshirt",  garmentColor: "#1e3a5f", printFill: 62 }, // Космос — navy tshirt, medium
  { theme: 3, type: "tshirt",  garmentColor: "#ffffff", printFill: 52 }, // Машины — white tshirt, small
  { theme: 4, type: "tshirt",  garmentColor: "#f4f4f5", printFill: 44 }, // Минимализм — light tshirt, mini
  { theme: 5, type: "hoodie",  garmentColor: "#e8d9b5", printFill: 68 }, // Горы — beige hoodie, medium
];

// 4 hero strip designs — the most visually striking.
export const HERO_STRIP_DESIGNS: {
  theme: number;
  type: GarmentType;
  garmentColor: string;
  printFill: number;
}[] = [
  { theme: 1, type: "tshirt", garmentColor: "#18181b", printFill: 75 }, // Аниме
  { theme: 0, type: "hoodie", garmentColor: "#18181b", printFill: 82 }, // Самурай
  { theme: 6, type: "tshirt", garmentColor: "#0f172a", printFill: 68 }, // Киберпанк
  { theme: 3, type: "tshirt", garmentColor: "#ffffff", printFill: 55 }, // Авто
];

export function DesignThumb({
  theme,
  type = "tshirt",
  garmentColor = "#18181b",
  printFill = 100,
}: {
  theme: number;
  type?: GarmentType;
  garmentColor?: string;
  printFill?: number; // 30–100 — percentage of print zone filled
}) {
  const t = DESIGN_THEMES[theme % DESIGN_THEMES.length];
  const Icon = t.Icon;
  // Padding shrinks the visible print inside the print zone.
  const pad = `${((100 - printFill) / 200) * 100}%`;

  return (
    <GarmentMockup type={type} color={garmentColor}>
      <div className="h-full w-full" style={{ padding: pad }}>
        <div
          className={`flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br ${t.gradient} shadow-md`}
        >
          <Icon className="text-white/90 drop-shadow" size={Math.round(22 * (printFill / 100) + 8)} strokeWidth={1.75} />
        </div>
      </div>
    </GarmentMockup>
  );
}

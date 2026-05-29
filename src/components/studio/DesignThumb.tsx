import { Swords, Sparkles, Rocket, Car, Minus, Mountain } from "lucide-react";
import { GarmentMockup, type GarmentType } from "./GarmentMockup";

// Themed, network-free design previews rendered with gradients + icons.
// Order matches dict.home.examples: Самурай, Аниме, Космос, Машины, Минимализм, Горы.
export const DESIGN_THEMES = [
  { gradient: "from-rose-500 via-red-600 to-orange-500", Icon: Swords },
  { gradient: "from-fuchsia-500 via-purple-500 to-indigo-500", Icon: Sparkles },
  { gradient: "from-indigo-600 via-violet-700 to-slate-900", Icon: Rocket },
  { gradient: "from-cyan-500 via-blue-600 to-slate-800", Icon: Car },
  { gradient: "from-zinc-300 via-zinc-400 to-zinc-500", Icon: Minus },
  { gradient: "from-amber-400 via-orange-500 to-rose-500", Icon: Mountain },
] as const;

export function DesignThumb({
  theme,
  type = "tshirt",
  garmentColor = "#18181b",
}: {
  theme: number;
  type?: GarmentType;
  garmentColor?: string;
}) {
  const t = DESIGN_THEMES[theme % DESIGN_THEMES.length];
  const Icon = t.Icon;
  return (
    <GarmentMockup type={type} color={garmentColor}>
      <div
        className={`flex h-full w-full items-center justify-center rounded-md bg-gradient-to-br ${t.gradient} shadow-lg`}
      >
        <Icon className="text-white/90" size={28} strokeWidth={1.75} />
      </div>
    </GarmentMockup>
  );
}

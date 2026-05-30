import { Upload, Type, Pencil, Sparkles } from "lucide-react";
import { DesignThumb } from "@/components/studio/DesignThumb";

// Hero "mini studio" — a static, premium mockup that shows the product in
// context with a floating tool rail, an AI prompt card and a colour / size
// panel. Mirrors the studio without any interactivity, so it stays a server
// component. Swap `image` in for a real product photo when available.
export function HeroStudio({
  genLabel,
  genPlaceholder,
  generateLabel,
  colorLabel,
  sizeLabel,
  image,
}: {
  genLabel: string;
  genPlaceholder: string;
  generateLabel: string;
  colorLabel: string;
  sizeLabel: string;
  image?: string;
}) {
  const tools = [Upload, Type, Pencil, Sparkles];
  const colors = ["#18181b", "#ffffff", "#e8d9b5", "#3f6212"];
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="relative">
      {/* Product card */}
      <div className="relative rounded-[28px] border border-black/[.06] bg-white p-6 shadow-[0_24px_70px_rgba(16,16,18,.10)] sm:p-8">
        <div className="mx-auto w-full max-w-sm">
          <DesignThumb theme={0} type="tshirt" garmentColor="#18181b" printFill={84} image={image} />
        </div>
      </div>

      {/* Floating tool rail (left) */}
      <div className="absolute -left-3 top-10 hidden flex-col gap-2 rounded-2xl border border-black/[.06] bg-white/90 p-1.5 shadow-card backdrop-blur sm:flex">
        {tools.map((Icon, i) => (
          <span
            key={i}
            className={`flex h-9 w-9 items-center justify-center rounded-xl ${
              i === 3 ? "bg-accent text-white" : "text-ink/60 hover:bg-neutral-100"
            }`}
          >
            <Icon size={17} strokeWidth={1.75} />
          </span>
        ))}
      </div>

      {/* AI generator card (bottom-left overlap) */}
      <div className="absolute -bottom-6 left-2 w-60 rounded-2xl border border-black/[.06] bg-white/95 p-4 shadow-float backdrop-blur sm:left-6">
        <p className="flex items-center gap-1.5 text-sm font-semibold">
          <Sparkles size={15} className="text-accent" />
          {genLabel}
        </p>
        <div className="mt-2.5 rounded-xl border border-black/10 bg-neutral-50 px-3 py-2 text-xs text-ink/45">
          {genPlaceholder}
        </div>
        <button className="btn-primary mt-2.5 w-full py-2 text-xs shadow-none">
          {generateLabel} <Sparkles size={12} />
        </button>
      </div>

      {/* Colour + size panel (right overlap) */}
      <div className="absolute -right-2 bottom-12 w-44 rounded-2xl border border-black/[.06] bg-white/95 p-4 shadow-float backdrop-blur sm:-right-4">
        <p className="text-[11px] font-semibold text-ink/70">{colorLabel}</p>
        <div className="mt-2 flex gap-2">
          {colors.map((c, i) => (
            <span
              key={c}
              className={`h-6 w-6 rounded-full ${i === 0 ? "ring-2 ring-accent ring-offset-1" : "border border-black/10"}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] font-semibold text-ink/70">{sizeLabel}</p>
        <div className="mt-2 flex gap-1.5">
          {sizes.map((s, i) => (
            <span
              key={s}
              className={`flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-medium ${
                i === 1 ? "bg-accent text-white" : "border border-black/10 text-ink/70"
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

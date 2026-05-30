import { Star, Heart } from "lucide-react";
import { DesignThumb } from "@/components/studio/DesignThumb";

// Decorative QR glyph (no network).
function QrGlyph({ size = 44 }: { size?: number }) {
  const cells = [1,1,1,0,1,0,1, 1,0,1,0,0,1,1, 1,1,1,1,1,0,1,
                 0,0,1,0,1,1,0, 1,1,0,1,0,0,1, 1,0,1,1,1,1,0, 1,1,0,0,1,0,1];
  return (
    <svg width={size} height={size} viewBox="0 0 7 7" shapeRendering="crispEdges">
      <rect width="7" height="7" fill="white" />
      {cells.map((c, i) => c
        ? <rect key={i} x={i % 7} y={Math.floor(i / 7)} width="1" height="1" fill="#0f0f12" />
        : null)}
    </svg>
  );
}

// A premium open-box illustration for the packaging block — branded box with a
// folded garment, thank-you card, QR and playful stickers. Pure CSS/SVG, so it
// renders identically everywhere with no external assets.
export function PackagingBox({ brandTagline, image }: { brandTagline: string; image?: string }) {
  if (image) {
    return (
      <div className="overflow-hidden rounded-3xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1c22] to-[#0f0f12] p-5 shadow-[0_24px_70px_rgba(16,16,18,.25)]">
      {/* Brand label */}
      <div className="absolute left-6 top-5 z-20">
        <p className="text-lg font-extrabold text-white">
          Print<span className="text-accent-light">Me</span>
        </p>
        <p className="text-[10px] text-white/40">{brandTagline}</p>
      </div>

      {/* Open box: tissue tray */}
      <div className="absolute inset-x-8 bottom-6 top-16 rounded-2xl bg-white/[.06] ring-1 ring-white/10">
        {/* tissue paper crosshatch */}
        <div
          className="absolute inset-2 rounded-xl opacity-[.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0 2px,transparent 2px 12px),repeating-linear-gradient(-45deg,#fff 0 2px,transparent 2px 12px)",
          }}
        />

        {/* Folded garment with print */}
        <div className="absolute left-6 top-5 h-[58%] w-[44%] rotate-[-4deg] rounded-lg bg-[#0c0c0f] p-3 shadow-lg ring-1 ring-white/10">
          <div className="h-full w-full">
            <DesignThumb theme={0} garmentColor="#0c0c0f" printFill={60} />
          </div>
        </div>

        {/* Thank-you card + QR */}
        <div className="absolute bottom-5 right-5 flex w-[46%] items-center gap-2 rounded-xl bg-white p-2.5 shadow-lg">
          <div className="flex-1">
            <p className="text-[13px] font-bold text-ink">Thank you 💜</p>
            <p className="text-[9px] text-ink/50">PrintMe team</p>
          </div>
          <div className="shrink-0 rounded-md bg-white p-0.5 ring-1 ring-black/10">
            <QrGlyph size={40} />
          </div>
        </div>
      </div>

      {/* Playful stickers */}
      <div className="absolute right-6 top-20 flex h-11 w-11 rotate-12 items-center justify-center rounded-2xl bg-accent shadow-lg">
        <Star size={18} className="fill-white text-white" />
      </div>
      <div className="absolute left-4 bottom-10 flex h-10 w-10 -rotate-12 items-center justify-center rounded-2xl bg-pink-400 shadow-lg">
        <Heart size={16} className="fill-white text-white" />
      </div>
      <div className="absolute right-10 bottom-6 flex h-9 w-9 rotate-6 items-center justify-center rounded-xl bg-yellow-400 text-lg shadow-lg">
        😊
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Palette,
  Type,
  Upload,
  Smile,
  SlidersHorizontal,
  Wand2,
  Sparkles,
  Undo2,
  Redo2,
  Layers,
  ArrowUpDown,
  Trash2,
  Minus,
  Plus,
  Hand,
  Shirt,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ArrowUpToLine,
  ArrowDownToLine,
  ShieldCheck,
  Truck,
  Gift,
  HelpCircle,
  ShoppingBag,
  Heart,
} from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { GarmentMockup, type GarmentType } from "./GarmentMockup";

const RAIL_ICONS = [Palette, Type, Upload, Smile, SlidersHorizontal, Wand2];
const FEATURE_ICONS = [ShieldCheck, Truck, Gift, HelpCircle];

const PRODUCT_COLORS = ["#ffffff", "#000000", "#9ca3af", "#e8d9b5", "#1e3a5f"];
const SIZES = ["S", "M", "L", "XL", "XXL"];
const RATIOS = ["1:1", "3:4", "4:3", "9:16", "16:9"];

// Sample prints per style (mock; replaced by OpenAI output in Phase 3).
const STYLE_SAMPLES = [
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=600", // cyberpunk-ish
  "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600", // anime-ish
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600", // realism
  "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600", // minimal
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600", // abstract
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600", // fantasy
];

const PRICES: Record<GarmentType, number> = { tshirt: 249, hoodie: 699 };

export function StudioClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const s = dict.studio;

  const [tab, setTab] = useState<"ai" | "simple">("ai");
  const [product, setProduct] = useState<GarmentType>("tshirt");
  const [color, setColor] = useState("#ffffff");
  const [size, setSize] = useState("M");
  const [prompt, setPrompt] = useState("");
  const [styleIdx, setStyleIdx] = useState(0);
  const [ratioIdx, setRatioIdx] = useState(0);
  const [generations, setGenerations] = useState(8);
  const [printImg, setPrintImg] = useState<string | null>(STYLE_SAMPLES[0]);
  const [printScale, setPrintScale] = useState(80);
  const [alignH, setAlignH] = useState<"start" | "center" | "end">("center");
  const [alignV, setAlignV] = useState<"start" | "center" | "end">("center");

  function generate() {
    if (generations <= 0) return;
    setPrintImg(STYLE_SAMPLES[styleIdx]);
    setGenerations((g) => g - 1);
  }

  function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) setPrintImg(URL.createObjectURL(file));
  }

  const justify =
    alignH === "start" ? "justify-start" : alignH === "end" ? "justify-end" : "justify-center";
  const items =
    alignV === "start" ? "items-start" : alignV === "end" ? "items-end" : "items-center";

  return (
    <>
      <div className="mx-auto grid max-w-[1400px] gap-4 px-4 py-6 lg:grid-cols-[320px_1fr_300px]">
        {/* ---------------- Left panel ---------------- */}
        <div className="flex gap-3">
          {/* icon rail */}
          <div className="flex flex-col items-center gap-1 rounded-2xl border border-black/[.06] bg-white p-2">
            {RAIL_ICONS.map((Icon, i) => (
              <button
                key={i}
                title={s.rail[i]}
                className={`flex h-12 w-12 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] transition-colors ${
                  i === 0 || i === 5
                    ? "bg-accent-soft text-accent"
                    : "text-ink/50 hover:bg-neutral-100"
                }`}
              >
                <Icon size={18} />
                <span className="leading-none">{s.rail[i].slice(0, 6)}</span>
              </button>
            ))}
          </div>

          {/* panel content */}
          <div className="flex-1 rounded-2xl border border-black/[.06] bg-white p-4">
            <div className="mb-4 flex gap-1 rounded-full bg-neutral-100 p-1 text-sm">
              {(["ai", "simple"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 rounded-full py-1.5 font-medium transition-colors ${
                    tab === t ? "bg-white text-accent shadow-sm" : "text-ink/50"
                  }`}
                >
                  {t === "ai" ? s.aiTab : s.simpleTab}
                </button>
              ))}
            </div>

            <h2 className="mb-3 flex items-center gap-2 font-bold">
              {s.aiTitle}
              <HelpCircle size={15} className="text-ink/30" />
            </h2>

            <label className="text-sm text-ink/60">{s.promptLabel}</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value.slice(0, 500))}
              placeholder={s.promptPlaceholder}
              rows={3}
              className="mt-1.5 w-full resize-none rounded-xl border border-black/10 p-3 text-sm outline-none focus:border-accent"
            />
            <p className="mt-1 text-right text-xs text-ink/35">{prompt.length}/500</p>

            <h3 className="mb-2 mt-3 text-sm font-semibold">{s.styleTitle}</h3>
            <div className="grid grid-cols-3 gap-2">
              {s.styles.map((st, i) => (
                <button
                  key={st}
                  onClick={() => setStyleIdx(i)}
                  className={`overflow-hidden rounded-xl border text-left transition-all ${
                    styleIdx === i ? "border-accent ring-1 ring-accent" : "border-black/10"
                  }`}
                >
                  <span
                    className="block h-12 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${STYLE_SAMPLES[i]})` }}
                  />
                  <span className="block px-1.5 py-1 text-[11px] font-medium">{st}</span>
                </button>
              ))}
            </div>

            <h3 className="mb-2 mt-4 text-sm font-semibold">{s.ratioTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {RATIOS.map((r, i) => (
                <button
                  key={r}
                  onClick={() => setRatioIdx(i)}
                  className={`rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                    ratioIdx === i
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-black/10 text-ink/60"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <button onClick={generate} className="btn-primary mt-4 w-full">
              <Upload size={16} />
              {dict.home.generate}
              <Sparkles size={15} />
            </button>
            <p className="mt-2 text-center text-xs text-ink/40">
              {s.generationsLeft} {generations}
            </p>

            <div className="my-3 flex items-center gap-3 text-xs text-ink/35">
              <span className="h-px flex-1 bg-black/10" />
              {s.or}
              <span className="h-px flex-1 bg-black/10" />
            </div>

            <label className="btn-outline w-full cursor-pointer py-2.5 text-sm">
              <Upload size={16} />
              {s.uploadImage}
              <input type="file" accept="image/*" onChange={onUpload} className="hidden" />
            </label>
            <p className="mt-2 text-center text-xs text-ink/40">{s.uploadHint}</p>
          </div>
        </div>

        {/* ---------------- Center canvas ---------------- */}
        <div className="rounded-2xl border border-black/[.06] bg-neutral-50 p-4">
          {/* toolbar */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex gap-1">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink/60 shadow-sm">
                <Undo2 size={16} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink/60 shadow-sm">
                <Redo2 size={16} />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="btn-ghost py-2 text-sm">{s.save}</button>
              <button className="btn-primary px-5 py-2 text-sm shadow-none">{s.download}</button>
            </div>
          </div>

          {/* canvas */}
          <div className="relative rounded-2xl bg-white p-6">
            {/* selection toolbar */}
            <div className="absolute left-1/2 top-4 z-10 flex -translate-x-1/2 gap-1 rounded-xl bg-white px-2 py-1.5 shadow-card">
              {[Layers, ArrowUpDown, Trash2].map((Icon, i) => (
                <button key={i} className="flex h-7 w-7 items-center justify-center rounded-md text-ink/50 hover:bg-neutral-100">
                  <Icon size={15} />
                </button>
              ))}
            </div>

            <GarmentMockup type={product} color={color}>
              <div className={`flex h-full w-full ${justify} ${items}`}>
                {printImg && (
                  <div
                    className="relative ring-1 ring-accent/60"
                    style={{ width: `${printScale}%` }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={printImg} alt="print" className="block w-full rounded-sm object-contain" />
                    {/* selection handles */}
                    {[
                      "left-0 top-0", "right-0 top-0",
                      "left-0 bottom-0", "right-0 bottom-0",
                    ].map((pos) => (
                      <span key={pos} className={`absolute ${pos} h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent`} />
                    ))}
                  </div>
                )}
              </div>
            </GarmentMockup>

            {/* zoom controls */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-card">
                <button className="text-ink/50"><Minus size={15} /></button>
                <span className="text-sm font-medium">100%</span>
                <button className="text-ink/50"><Plus size={15} /></button>
              </div>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink/50 shadow-card">
                <Hand size={15} />
              </button>
            </div>
          </div>

          {/* preview in other colors */}
          <div className="mt-4 rounded-2xl bg-white p-4">
            <p className="mb-3 text-sm font-medium">{s.previewColors}</p>
            <div className="flex gap-3 overflow-x-auto">
              {PRODUCT_COLORS.map((col) => (
                <button
                  key={col}
                  onClick={() => setColor(col)}
                  className={`shrink-0 rounded-xl border p-1 transition-colors ${
                    color === col ? "border-accent" : "border-black/10"
                  }`}
                >
                  <div className="h-16 w-16">
                    <GarmentMockup type={product} color={col} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Right panel ---------------- */}
        <div className="rounded-2xl border border-black/[.06] bg-white p-4">
          {/* product toggle */}
          <div className="grid grid-cols-2 gap-2">
            {(["tshirt", "hoodie"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setProduct(p)}
                className={`flex items-center justify-center gap-2 rounded-xl border py-4 text-sm font-medium transition-colors ${
                  product === p
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-black/10 text-ink/60"
                }`}
              >
                <Shirt size={18} />
                {p === "tshirt" ? "Футболка" : "Худи"}
              </button>
            ))}
          </div>

          {/* color */}
          <h3 className="mb-2 mt-6 text-sm font-bold">{s.productColor}</h3>
          <div className="flex flex-wrap gap-2.5">
            {PRODUCT_COLORS.map((col) => (
              <button
                key={col}
                onClick={() => setColor(col)}
                style={{ backgroundColor: col }}
                className={`h-9 w-9 rounded-full border transition-all ${
                  color === col ? "ring-2 ring-accent ring-offset-2" : "border-black/15"
                }`}
              />
            ))}
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-ink/40">
              <Plus size={16} />
            </button>
          </div>

          {/* size */}
          <div className="mb-2 mt-6 flex items-center justify-between">
            <h3 className="text-sm font-bold">{s.productSize}</h3>
            <button className="text-xs font-medium text-accent">{dict.catalog.sizeTable}</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {SIZES.map((sz) => (
              <button
                key={sz}
                onClick={() => setSize(sz)}
                className={`h-10 w-10 rounded-lg border text-sm transition-colors ${
                  size === sz ? "border-accent bg-accent text-white" : "border-black/10 text-ink/70"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>

          {/* print position */}
          <h3 className="mb-2 mt-6 text-sm font-bold">{s.printPosition}</h3>
          <div className="flex gap-2">
            {([
              { icon: AlignLeft, fn: () => setAlignH("start") },
              { icon: AlignCenter, fn: () => setAlignH("center") },
              { icon: AlignRight, fn: () => setAlignH("end") },
              { icon: ArrowUpToLine, fn: () => setAlignV("start") },
              { icon: ArrowDownToLine, fn: () => setAlignV("end") },
            ] as const).map(({ icon: Icon, fn }, i) => (
              <button
                key={i}
                onClick={fn}
                className="flex h-9 flex-1 items-center justify-center rounded-lg border border-black/10 text-ink/60 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button onClick={() => setPrintScale((v) => Math.max(30, v - 5))} className="text-ink/50">
              <Minus size={16} />
            </button>
            <input
              type="range"
              min={30}
              max={100}
              value={printScale}
              onChange={(e) => setPrintScale(Number(e.target.value))}
              className="flex-1 accent-accent"
            />
            <span className="w-12 rounded-lg bg-neutral-100 py-1 text-center text-sm font-medium">
              {printScale}%
            </span>
          </div>

          {/* total */}
          <div className="mt-6 border-t border-black/[.06] pt-4">
            <p className="text-sm text-ink/55">{s.total}</p>
            <p className="mt-1">
              <span className="text-3xl font-extrabold">{PRICES[product]}</span>{" "}
              <span className="text-ink/50">{s.currency}</span>
            </p>
          </div>

          <Link href={`/${locale}/cart`} className="btn-primary mt-4 w-full">
            <ShoppingBag size={18} />
            {dict.common.addToCart}
          </Link>
          <button className="btn-outline mt-2 w-full">
            <Heart size={18} />
            {dict.common.saveDesign}
          </button>
        </div>
      </div>

      {/* bottom features */}
      <div className="border-t border-black/[.06] bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="text-xs text-ink/50">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Upload, Wand2, Shirt, PackageCheck, Sparkles, Printer,
  Truck, Gift, Star, ArrowRight, Check, Heart, ChevronRight,
  Move, ZoomIn, Palette, Smartphone, ShieldCheck,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/ui/Reveal";
import { DesignThumb, CATALOG_DESIGNS, HERO_STRIP_DESIGNS, DESIGN_THEMES } from "@/components/studio/DesignThumb";
import { GarmentMockup } from "@/components/studio/GarmentMockup";

// ─── Step icons aligned with step order ─────────────────────────────────────
const STEP_ICONS = [Upload, Wand2, Shirt, PackageCheck];
const ADV_ICONS  = [Wand2, Printer, Truck, Gift];
const STUDIO_FEATURES = [Move, ZoomIn, Palette];

// ─── Decorative QR glyph (no network) ───────────────────────────────────────
function QrGlyph({ size = 56 }: { size?: number }) {
  const cells = [1,1,1,0,1,0,1, 1,0,1,0,0,1,1, 1,1,1,1,1,0,1,
                 0,0,1,0,1,1,0, 1,1,0,1,0,0,1, 1,0,1,1,1,1,0, 1,1,0,0,1,0,1];
  return (
    <svg width={size} height={size} viewBox="0 0 7 7" shapeRendering="crispEdges">
      <rect width="7" height="7" fill="white" rx="0.5" />
      {cells.map((c, i) => c
        ? <rect key={i} x={i%7} y={Math.floor(i/7)} width="1" height="1" fill="#0f0f12" />
        : null)}
    </svg>
  );
}

// ─── Fake studio interface (browser mockup) ──────────────────────────────────
function StudioMockup({ locale }: { locale: Locale }) {
  const styleGrads = [
    "from-cyan-400 via-violet-500 to-blue-900",
    "from-fuchsia-400 via-purple-500 to-indigo-600",
    "from-amber-500 via-orange-400 to-yellow-300",
    "from-rose-600 via-red-500 to-orange-400",
    "from-indigo-800 via-violet-700 to-purple-900",
    "from-blue-500 via-cyan-500 to-teal-400",
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-black/[.07] shadow-[0_4px_40px_rgba(0,0,0,.08)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-black/[.06] bg-neutral-50 px-4 py-3">
        <div className="flex gap-1.5">
          {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c) => (
            <div key={c} className={`h-3 w-3 rounded-full ${c}`} />
          ))}
        </div>
        <div className="mx-auto rounded-full bg-white px-3 py-1 text-xs text-ink/40 shadow-sm">
          printme.tj/studio
        </div>
        <div className="flex gap-2 text-xs">
          <span className="text-ink/40">Сохр.</span>
          <span className="rounded-full bg-accent px-2.5 py-0.5 font-medium text-white">
            Скачать
          </span>
        </div>
      </div>

      {/* Three panels */}
      <div className="grid h-[320px] grid-cols-[190px_1fr_170px] divide-x divide-black/[.05] sm:h-[360px]">

        {/* LEFT — AI panel */}
        <div className="flex flex-col gap-2.5 overflow-hidden bg-white p-3">
          <div className="flex rounded-full bg-neutral-100 p-0.5 text-xs">
            <span className="flex-1 rounded-full bg-white py-1 text-center font-semibold text-accent shadow-sm">
              AI-редактор
            </span>
            <span className="flex-1 py-1 text-center text-ink/40">Простой</span>
          </div>
          <div>
            <p className="mb-1 text-[11px] text-ink/50">Опишите идею</p>
            <div className="rounded-xl border border-black/10 bg-neutral-50 p-2 text-[11px] leading-relaxed text-ink/70">
              Кибер-самурай с неоновым мечом на фоне токийских огней…
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[11px] text-ink/50">Стиль</p>
            <div className="grid grid-cols-3 gap-1">
              {styleGrads.map((g, i) => (
                <div
                  key={i}
                  className={`h-9 rounded-lg bg-gradient-to-br ${g} ${i === 0 ? "ring-1 ring-accent ring-offset-1" : ""}`}
                />
              ))}
            </div>
          </div>
          <button className="mt-auto w-full rounded-full bg-accent py-2 text-xs font-semibold text-white">
            Сгенерировать ✨
          </button>
        </div>

        {/* CENTER — canvas */}
        <div className="flex flex-col items-center justify-center gap-3 bg-neutral-50/80 p-4">
          <div className="relative w-36 sm:w-44">
            <GarmentMockup type="tshirt" color="#18181b">
              <div className="relative h-full w-full">
                <div className="h-full w-full rounded-sm bg-gradient-to-br from-cyan-400 via-violet-500 to-blue-900 ring-[1.5px] ring-accent" />
                {/* selection handles */}
                {["left-0 top-0","right-0 top-0","left-0 bottom-0","right-0 bottom-0"].map((pos) => (
                  <span key={pos} className={`absolute ${pos} -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-white shadow-sm`} />
                ))}
              </div>
            </GarmentMockup>
          </div>
          {/* Color strip */}
          <div className="flex gap-2">
            {["#18181b","#ffffff","#e8d9b5","#1e3a5f","#7c3aed"].map((c,i) => (
              <div key={c} className={`h-6 w-6 rounded-full ${i===0 ? "ring-2 ring-accent ring-offset-1":"border border-black/15"}`}
                style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* RIGHT — controls */}
        <div className="flex flex-col gap-2.5 overflow-hidden bg-white p-3">
          <div className="grid grid-cols-2 gap-1">
            {["Футболка","Худи"].map((t,i) => (
              <div key={t} className={`rounded-lg border py-2 text-center text-[11px] font-medium ${i===0?"border-accent bg-accent/5 text-accent":"border-black/10 text-ink/50"}`}>
                {t}
              </div>
            ))}
          </div>
          <div>
            <p className="mb-1.5 text-[11px] font-semibold">Цвет изделия</p>
            <div className="flex flex-wrap gap-1.5">
              {["#18181b","#ffffff","#94a3b8","#e8d9b5","#7c3aed"].map((c,i) => (
                <div key={c} className={`h-6 w-6 rounded-full border ${i===0?"ring-2 ring-accent ring-offset-1":""}`}
                  style={{ backgroundColor: c, borderColor: c==="#ffffff"?"#d4d4d8":"transparent" }} />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-[11px] font-semibold">Размер</p>
            <div className="flex flex-wrap gap-1">
              {["S","M","L","XL"].map((s,i) => (
                <span key={s} className={`rounded-lg border px-2 py-1 text-[11px] font-medium ${i===1?"border-accent bg-accent text-white":"border-black/10 text-ink/70"}`}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-1 text-[11px] font-semibold">Позиция принта</p>
            <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full w-[78%] rounded-full bg-accent" />
            </div>
          </div>
          <div className="mt-auto border-t border-black/[.06] pt-2">
            <p className="text-[10px] text-ink/45">Итого</p>
            <p className="text-lg font-extrabold">249 <span className="text-xs font-normal text-ink/40">сом</span></p>
            <button className="mt-1.5 w-full rounded-full bg-accent py-2 text-xs font-semibold text-white">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Phone frame mockup ──────────────────────────────────────────────────────
function PhoneMockup({ locale }: { locale: Locale }) {
  const gradients = ["from-fuchsia-400 via-purple-500 to-indigo-600","from-cyan-400 via-violet-500 to-blue-900","from-rose-600 via-red-500 to-orange-400"];
  return (
    <div className="relative mx-auto h-[500px] w-[250px]">
      {/* outer shell */}
      <div className="absolute inset-0 rounded-[40px] bg-[#1a1a1f] shadow-2xl ring-1 ring-white/10" />
      {/* side buttons */}
      <div className="absolute -left-[3px] top-[90px] h-8 w-[3px] rounded-l-full bg-[#2a2a30]" />
      <div className="absolute -left-[3px] top-[130px] h-14 w-[3px] rounded-l-full bg-[#2a2a30]" />
      <div className="absolute -right-[3px] top-[110px] h-10 w-[3px] rounded-r-full bg-[#2a2a30]" />
      {/* screen */}
      <div className="absolute inset-[5px] overflow-hidden rounded-[36px] bg-white">
        {/* status bar */}
        <div className="flex items-center justify-between bg-white px-4 pt-3 pb-1">
          <span className="text-[9px] font-semibold">9:41</span>
          <div className="h-3 w-16 rounded-full bg-[#1a1a1f]" /> {/* notch */}
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-ink/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-ink/40" />
            <div className="h-1.5 w-3 rounded-sm bg-ink/40" />
          </div>
        </div>
        {/* app header */}
        <div className="flex items-center justify-between border-b border-black/[.06] px-3 py-1.5">
          <span className="text-[11px] font-extrabold">Print<span className="text-accent">Me</span></span>
          <span className="rounded-full bg-accent px-2.5 py-1 text-[8px] font-semibold text-white">Создать</span>
        </div>
        {/* hero content */}
        <div className="px-3 py-2">
          <p className="text-[10px] font-extrabold leading-tight text-ink">Создай дизайн<br/>с помощью AI</p>
          <p className="mt-0.5 text-[8px] text-ink/50">Загрузи фото или опиши идею</p>

          {/* garment preview */}
          <div className="mt-2 h-[110px] overflow-hidden rounded-2xl bg-neutral-100 p-1">
            <DesignThumb theme={1} type="tshirt" garmentColor="#18181b" printFill={72} />
          </div>

          {/* style strip */}
          <p className="mt-2 text-[8px] font-semibold text-ink/50">Стиль</p>
          <div className="mt-1 flex gap-1">
            {gradients.map((g, i) => (
              <div key={i} className={`h-8 flex-1 rounded-lg bg-gradient-to-br ${g} ${i===0?"ring-1 ring-accent ring-offset-1":""}`} />
            ))}
          </div>

          {/* prompt */}
          <div className="mt-2 rounded-xl border border-black/10 bg-neutral-50 px-2 py-1.5 text-[8px] text-ink/60">
            Кибер-самурай с неоновым мечом…
          </div>

          {/* button */}
          <button className="mt-2 w-full rounded-full bg-accent py-1.5 text-[9px] font-bold text-white">
            Сгенерировать ✨
          </button>
        </div>
      </div>
      {/* home bar */}
      <div className="absolute bottom-2 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/20" />
    </div>
  );
}

// ─── Main page component ─────────────────────────────────────────────────────
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const h = dict.home;
  const isTg = locale === "tg";

  return (
    <>
      {/* ════════════════ BLOCK 1 — HERO ════════════════ */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          {/* Left */}
          <Reveal>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {h.heroTitle1}{" "}
              <span className="accent-text">{h.heroAccent}</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/60">
              {h.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${locale}/studio`} className="btn-primary px-8 py-4 text-base">
                {h.ctaPrimary}
                <Sparkles size={18} />
              </Link>
              <Link href="#examples" className="btn-ghost px-7 py-4 text-base">
                {h.ctaSecondary}
              </Link>
            </div>
            {/* Social proof line */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["A","M","T","N","D"].map((l,i) => (
                  <div key={i} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-neutral-800 text-[10px] font-bold text-white shadow-sm">
                    {l}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-ink/60">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({length:5}).map((_,i) => <Star key={i} size={13} className="fill-current" />)}
                </div>
                <span>1 200+ заказов</span>
              </div>
            </div>
          </Reveal>

          {/* Right — main mockup */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="rounded-3xl bg-neutral-50 p-5 shadow-card">
                <DesignThumb theme={1} type="hoodie" garmentColor="#0f0f12" printFill={82} />
              </div>
              {/* Floating AI card */}
              <div className="absolute -bottom-5 -left-4 w-56 rounded-2xl border border-black/[.06] bg-white/95 p-4 shadow-float backdrop-blur sm:-left-8">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Wand2 size={15} className="text-accent" />
                  {h.aiEditorLabel}
                </p>
                <div className="mt-2 rounded-lg border border-black/10 bg-neutral-50 px-3 py-2 text-xs text-ink/60">
                  {h.aiEditorPrompt}
                </div>
                <button className="btn-primary mt-2 w-full py-2 text-xs shadow-none">
                  {h.generate} <Sparkles size={12} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Design strip — 4 AI design previews */}
        <Reveal>
          <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-8">
            <p className="mb-4 text-sm font-medium text-ink/40">
              {isTg ? "Намунаҳои тарроҳиҳои AI" : "Примеры AI дизайнов"}
            </p>
            <div className="grid grid-cols-4 gap-3">
              {HERO_STRIP_DESIGNS.map((d, i) => (
                <Link
                  key={i}
                  href={`/${locale}/studio?theme=${d.theme}`}
                  className="group card overflow-hidden transition-transform hover:-translate-y-1"
                >
                  <div className="bg-neutral-50 p-3">
                    <DesignThumb
                      theme={d.theme}
                      type={d.type}
                      garmentColor={d.garmentColor}
                      printFill={d.printFill}
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-black/[.05] px-3 py-2.5">
                    <span className="text-sm font-semibold">{h.heroStripLabels[i]}</span>
                    <ArrowRight size={14} className="text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════ BLOCK 2 — HOW IT WORKS ════════════════ */}
      <section className="section bg-neutral-50">
        <Reveal>
          <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
            {h.howTitle} <span className="accent-text">{h.howAccent}</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-start">
          {h.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={i} className="flex items-center gap-4 lg:flex-col lg:items-start lg:flex-1">
                <Reveal delay={i * 0.07}>
                  <div className="relative flex-1 overflow-hidden rounded-3xl bg-white p-6 shadow-card">
                    {/* Large background number */}
                    <span className="pointer-events-none absolute -right-1 -top-5 select-none font-black text-[100px] leading-none text-black/[.04]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Icon */}
                    <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/[.08] bg-white shadow-[0_2px_8px_rgba(0,0,0,.06)]">
                      <Icon size={26} strokeWidth={1.5} className="text-ink/70" />
                    </div>
                    {/* Step label */}
                    <span className="text-xs font-bold text-accent">0{i + 1}</span>
                    <h3 className="mt-1 font-bold leading-snug">{step.title}</h3>
                    <p className="mt-1.5 text-sm text-ink/55">{step.desc}</p>
                  </div>
                </Reveal>
                {/* Arrow connector between steps on desktop */}
                {i < h.steps.length - 1 && (
                  <div className="hidden shrink-0 items-center justify-center pt-12 lg:flex">
                    <ChevronRight size={22} className="text-neutral-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ════════════════ BLOCK 3 — EXAMPLES ════════════════ */}
      <section id="examples" className="section">
        <Reveal>
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">
            {h.examplesTitle} <span className="accent-text">{h.examplesAccent}</span>
          </h2>
          <p className="mb-10 text-ink/55">
            {isTg ? "Ба ягонеяш клик кунед ва тарроҳиро фавран созед" : "Нажмите на любой и сразу начните создавать"}
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {h.examples.map((name, i) => {
            const d = CATALOG_DESIGNS[i];
            return (
              <Reveal key={name} delay={(i % 3) * 0.07}>
                <article className="card group overflow-hidden">
                  <div className="bg-neutral-50 p-4 transition-transform duration-300 group-hover:scale-[1.02]">
                    <DesignThumb
                      theme={d.theme}
                      type={d.type}
                      garmentColor={d.garmentColor}
                      printFill={d.printFill}
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-black/[.06] p-4">
                    <h3 className="font-semibold">{name}</h3>
                    <Link
                      href={`/${locale}/studio?theme=${d.theme}`}
                      className="flex items-center gap-1 text-sm font-medium text-accent"
                    >
                      {dict.common.createSimilar}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ════════════════ BLOCK 4 — STUDIO PREVIEW ════════════════ */}
      <section className="section bg-neutral-50 pt-0">
        <div className="rounded-3xl bg-white px-5 py-10 shadow-card sm:px-8 sm:py-12">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
            {/* Left: text */}
            <Reveal>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                {h.studioPreviewTitle}{" "}
                <span className="accent-text">{h.studioPreviewAccent}</span>
              </h2>
              <p className="mt-4 text-ink/60">{h.studioPreviewSubtitle}</p>
              <ul className="mt-6 space-y-4">
                {[
                  { Icon: Move, text: isTg ? "Чопро озодона ҷобаҷо кунед" : "Перемещение принта" },
                  { Icon: ZoomIn, text: isTg ? "Андозаро тағйир диҳед" : "Изменение размера" },
                  { Icon: Palette, text: isTg ? "Ранги либосро иваз кунед" : "Смена цвета одежды" },
                ].map(({ Icon, text }, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-black/[.08] bg-neutral-50">
                      <Icon size={18} className="text-ink/60" />
                    </span>
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/studio`} className="btn-primary mt-8 inline-flex">
                {isTg ? "Редакторро синамоиш кунед" : "Попробовать редактор"}
                <ArrowRight size={16} />
              </Link>
            </Reveal>
            {/* Right: browser mockup */}
            <Reveal delay={0.1}>
              <StudioMockup locale={locale as Locale} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ BLOCK 5 — ADVANTAGES ════════════════ */}
      <section className="section">
        <Reveal>
          <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
            {h.advantagesTitle} <span className="accent-text">{h.advantagesAccent}</span>
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {h.advantages.map((a, i) => {
            const Icon = ADV_ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.07}>
                <div className="card h-full p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[.08] bg-neutral-50 shadow-[0_1px_4px_rgba(0,0,0,.06)]">
                    <Icon size={22} strokeWidth={1.5} className="text-ink/65" />
                  </div>
                  <h3 className="font-bold">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ════════════════ BLOCK 6 — PACKAGING ════════════════ */}
      <section className="section pt-0">
        <Reveal>
          <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-[#0f0f12] px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-2">
            {/* Left: text */}
            <div>
              <span className="chip mb-4 border border-white/10 bg-white/10 text-white/80">
                {isTg ? "Бастабандӣ" : "Упаковка"}
              </span>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight sm:text-4xl">
                {h.packagingTitle}
              </h2>
              <p className="mt-4 text-white/60">{h.packagingText}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {h.packagingItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Check size={13} className="text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: box visual */}
            <div className="relative h-64 overflow-hidden rounded-2xl bg-white/5 sm:h-72">
              {/* Box label */}
              <div className="absolute left-4 top-4 z-10">
                <p className="text-base font-extrabold text-white">
                  Print<span className="text-accent-light">Me</span>
                </p>
                <p className="text-[10px] text-white/40">{dict.footer.tagline}</p>
              </div>

              {/* Garment preview */}
              <div className="absolute inset-x-1/4 top-12 bottom-16">
                <DesignThumb theme={0} garmentColor="#18181b" printFill={72} />
              </div>

              {/* Sticker: smiley */}
              <div className="absolute left-4 bottom-1/3 flex h-11 w-11 -rotate-12 items-center justify-center rounded-2xl bg-yellow-400 text-xl shadow-lg">
                😊
              </div>
              {/* Sticker: star */}
              <div className="absolute right-5 top-1/3 flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-accent shadow-lg">
                <Star size={18} className="fill-white text-white" />
              </div>
              {/* Sticker: heart */}
              <div className="absolute left-10 bottom-16 flex h-9 w-9 rotate-6 items-center justify-center rounded-xl bg-pink-400 shadow-lg">
                <Heart size={15} className="fill-white text-white" />
              </div>

              {/* Thank-you card + QR */}
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-white/95 p-3 backdrop-blur">
                <div className="flex-1">
                  <p className="text-sm font-bold text-ink">Thank you 💜</p>
                  <p className="text-[10px] text-ink/50">
                    {isTg ? "Сипосгузор ҳастем!" : "Спасибо за заказ!"}
                  </p>
                </div>
                <div className="shrink-0 rounded-lg bg-white p-1 shadow-card">
                  <QrGlyph size={48} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════ BLOCK 7 — TRUST ════════════════ */}
      <section className="section pt-0">
        <Reveal>
          <div className="rounded-3xl border border-black/[.06] bg-white px-6 py-10 sm:px-10">
            <h2 className="mb-10 text-center text-2xl font-extrabold sm:text-3xl">
              {h.trustTitle} <span className="accent-text">{h.trustAccent}</span>
            </h2>
            <div className="grid gap-6 divide-y divide-black/[.05] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {h.trustStats.map((s, i) => (
                <div key={i} className="pt-6 text-center first:pt-0 sm:px-8 sm:pt-0">
                  <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm text-ink/50">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════ BLOCK 8 — REVIEWS ════════════════ */}
      <section className="section bg-neutral-50 pt-0">
        <div className="rounded-3xl bg-neutral-50 px-0 py-0">
          <Reveal>
            <h2 className="mb-10 text-3xl font-extrabold sm:text-4xl">
              {h.reviewsTitle} <span className="accent-text">{h.reviewsAccent}</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {h.reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="card h-full p-6">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f0f12] text-sm font-bold text-white shadow-sm">
                      {r.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <figcaption className="font-semibold">{r.name}</figcaption>
                      <p className="text-xs text-ink/45">{r.city}</p>
                    </div>
                    {/* Verified badge */}
                    <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-medium text-green-600">
                      <ShieldCheck size={10} />
                      {isTg ? "Тасдиқ" : "Верифицирован"}
                    </span>
                  </div>
                  {/* Stars */}
                  <div className="mt-3 flex gap-0.5 text-amber-400">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <Star key={s} size={14} className="fill-current" />
                    ))}
                  </div>
                  {/* Product chip */}
                  <div className="mt-2">
                    <span className="chip text-[11px]">{r.product}</span>
                  </div>
                  {/* Review text */}
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink/65">
                    "{r.text}"
                  </blockquote>
                  {/* Mini design preview */}
                  <div className="mt-4 overflow-hidden rounded-xl bg-neutral-100 p-2">
                    <div className="h-20">
                      <DesignThumb
                        theme={(i + 1) % DESIGN_THEMES.length}
                        garmentColor={["#18181b","#f4f4f5","#18181b"][i]}
                        printFill={65}
                      />
                    </div>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ BLOCK 9 — MOBILE ════════════════ */}
      <section className="section">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="chip">
              <Smartphone size={13} />
              {isTg ? "Мобилӣ" : "Мобильная версия"}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              {h.mobileTitle} <span className="accent-text">{h.mobileAccent}</span>
            </h2>
            <p className="mt-4 max-w-md text-ink/60">{h.mobileSubtitle}</p>
            <ul className="mt-6 space-y-3">
              {[
                isTg ? "Интерфейси пурра дар смартфон" : "Полный интерфейс на смартфоне",
                isTg ? "Бидуни боргузорӣ — танҳо браузер" : "Без скачивания — только браузер",
                isTg ? "Тарроҳиро созед ва фармоиш диҳед" : "Создавай и заказывай с телефона",
              ].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check size={13} className="text-accent" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href={`/${locale}/studio`} className="btn-ghost mt-8 inline-flex">
              {isTg ? "Кушоед" : "Открыть редактор"}
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <PhoneMockup locale={locale as Locale} />
          </Reveal>
        </div>
      </section>

      {/* ════════════════ BLOCK 10 — FINAL CTA (DARK) ════════════════ */}
      <section className="section pt-0">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-[#0f0f12] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
            {/* Subtle accent glows */}
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

            <Heart className="relative z-10 mx-auto mb-5 fill-accent text-accent" size={34} />
            <h2 className="relative z-10 text-3xl font-extrabold tracking-tight sm:text-5xl">
              {h.finalTitle}
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-md text-white/60">
              {h.finalText}
            </p>
            <Link
              href={`/${locale}/studio`}
              className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              {h.ctaPrimary}
              <ArrowRight size={18} />
            </Link>

            {/* Decorative garment previews */}
            <div className="pointer-events-none absolute -bottom-4 left-6 hidden h-32 w-24 opacity-30 lg:block">
              <DesignThumb theme={0} garmentColor="#18181b" printFill={80} />
            </div>
            <div className="pointer-events-none absolute -bottom-4 right-6 hidden h-32 w-24 opacity-30 lg:block">
              <DesignThumb theme={6} garmentColor="#0f172a" printFill={75} />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

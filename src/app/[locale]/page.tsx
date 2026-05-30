import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Upload, Wand2, Shirt, PackageCheck, Sparkles, Printer,
  Truck, Gift, Star, ArrowRight, Check, Heart, MousePointer2,
  Award, Users, Clock,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/ui/Reveal";
import { DesignThumb, CATALOG_DESIGNS } from "@/components/studio/DesignThumb";
import { HeroStudio } from "@/components/home/HeroStudio";
import { PackagingBox } from "@/components/home/PackagingBox";

// ─── Icon maps aligned with content order ───────────────────────────────────
const STEP_ICONS    = [Upload, Wand2, Shirt, PackageCheck];
const ADV_ICONS     = [Wand2, Printer, Truck, Gift];
const FEATURE_ICONS = [Sparkles, Award, Truck, MousePointer2];
const STAT_ICONS    = [Users, Sparkles, Clock, Star];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const h = dict.home;

  return (
    <>
      {/* ════════════════ BLOCK 1 — HERO ════════════════ */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[460px] w-[460px] rounded-full bg-accent/[.07] blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          {/* Left */}
          <Reveal>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {h.heroTitle1}{" "}
              <span className="accent-text">{h.heroAccent}</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/60">
              {h.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${locale}/studio`} className="btn-primary px-7 py-3.5 text-base">
                {h.ctaPrimary}
                <ArrowRight size={18} />
              </Link>
              <Link href="#examples" className="btn-ghost px-6 py-3.5 text-base">
                {h.ctaSecondary}
              </Link>
            </div>

            {/* Feature chips */}
            <div className="mt-9 grid grid-cols-2 gap-2.5 sm:max-w-md sm:grid-cols-4">
              {h.heroFeatures.map((f, i) => {
                const Icon = FEATURE_ICONS[i];
                return (
                  <div key={i} className="flex flex-col gap-1.5 rounded-2xl border border-black/[.06] bg-white p-3 shadow-[0_1px_3px_rgba(0,0,0,.04)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft">
                      <Icon size={15} className="text-accent" />
                    </span>
                    <span className="text-[11px] font-medium leading-tight text-ink/70">{f}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right — mini studio */}
          <Reveal delay={0.1}>
            <HeroStudio
              genLabel={h.heroGenLabel}
              genPlaceholder={h.heroGenPlaceholder}
              generateLabel={h.generate}
              colorLabel={h.heroColorLabel}
              sizeLabel={h.heroSizeLabel}
            />
          </Reveal>
        </div>
      </section>

      {/* ════════════════ BLOCK 2 — HOW IT WORKS ════════════════ */}
      <section className="section bg-neutral-50">
        <Reveal>
          <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
            {h.howTitle} <span className="accent-text">{h.howAccent}</span>
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:items-stretch">
          {h.steps.map((step, i) => (
            <div key={i} className="flex items-stretch gap-4 lg:flex-1">
              <Reveal delay={i * 0.07} className="w-full">
                <div className="relative h-full rounded-3xl border border-black/[.05] bg-white p-6 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-base font-extrabold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-bold leading-snug">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{step.desc}</p>
                </div>
              </Reveal>
              {/* Dashed connector */}
              {i < h.steps.length - 1 && (
                <div className="hidden shrink-0 items-center self-center lg:flex">
                  <span className="h-px w-7 border-t-2 border-dashed border-accent/30" />
                  <ArrowRight size={16} className="-ml-1.5 text-accent/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════ BLOCK 3 — EXAMPLES ════════════════ */}
      <section id="examples" className="section">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {h.examplesTitle} <span className="accent-text">{h.examplesAccent}</span>
            </h2>
            <Link
              href={`/${locale}/catalog`}
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-accent sm:flex"
            >
              {h.examplesViewAll}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {h.examples.map((name, i) => {
            const d = CATALOG_DESIGNS[i];
            return (
              <Reveal key={name} delay={(i % 6) * 0.05}>
                <article className="card group h-full overflow-hidden">
                  <div className="bg-neutral-50 p-3 transition-transform duration-300 group-hover:scale-[1.03]">
                    <DesignThumb
                      theme={d.theme}
                      type={d.type}
                      garmentColor={d.garmentColor}
                      printFill={d.printFill}
                      image={d.image}
                    />
                  </div>
                  <div className="border-t border-black/[.06] p-3.5">
                    <h3 className="text-sm font-semibold">{name}</h3>
                    <Link
                      href={`/${locale}/studio?theme=${d.theme}`}
                      className="mt-1 flex items-center gap-1 text-xs font-medium text-accent"
                    >
                      {dict.common.createSimilar}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ════════════════ BLOCK 4 — ADVANTAGES ════════════════ */}
      <section className="section pt-0">
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
                <div className="card flex h-full items-start gap-4 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-float">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-bold">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ════════════════ BLOCK 5 — PACKAGING ════════════════ */}
      <section className="section pt-0">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-accent-soft px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2">
            {/* Left: text */}
            <div>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                {h.packagingTitle}
              </h2>
              <p className="mt-4 max-w-md text-ink/60">{h.packagingText}</p>
              <ul className="mt-7 grid grid-cols-2 gap-3">
                {h.packagingItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink/75">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                      <Check size={13} className="text-accent" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: box visual */}
            <PackagingBox brandTagline={dict.footer.tagline} />
          </div>
        </Reveal>
      </section>

      {/* ════════════════ BLOCK 6 — STATS ════════════════ */}
      <section className="section pt-0">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 rounded-3xl bg-[#0f0f12] px-6 py-10 sm:px-10 lg:grid-cols-4">
            {h.stats.map((s, i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div key={i} className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/15">
                    <Icon size={20} className="text-accent-light" />
                  </span>
                  <div>
                    <p className="text-2xl font-extrabold text-white sm:text-3xl">{s.value}</p>
                    <p className="text-xs text-white/50">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ════════════════ BLOCK 7 — REVIEWS ════════════════ */}
      <section className="section bg-neutral-50">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {h.reviewsTitle} <span className="accent-text">{h.reviewsAccent}</span>
            </h2>
            <Link
              href={`/${locale}/catalog`}
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-accent sm:flex"
            >
              {h.reviewsViewAll}
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {h.reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="card relative h-full overflow-hidden p-6">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f0f12] text-sm font-bold text-white">
                    {r.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <figcaption className="font-semibold leading-tight">{r.name}</figcaption>
                    <p className="text-xs text-ink/45">{r.handle}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="mt-3 flex gap-0.5 text-accent">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} size={14} className="fill-current" />
                  ))}
                </div>
                {/* Review text */}
                <blockquote className="mt-3 max-w-[78%] text-sm leading-relaxed text-ink/65">
                  “{r.text}”
                </blockquote>
                {/* Mini product preview */}
                <div className="absolute bottom-4 right-4 h-24 w-24 overflow-hidden rounded-xl bg-neutral-100 p-1.5">
                  <DesignThumb
                    theme={CATALOG_DESIGNS[i].theme}
                    type={CATALOG_DESIGNS[i].type}
                    garmentColor={CATALOG_DESIGNS[i].garmentColor}
                    printFill={62}
                  />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════════ BLOCK 8 — FINAL CTA (PURPLE GRADIENT) ════════════════ */}
      <section className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-accent-gradient px-6 py-16 text-center text-white sm:px-10 sm:py-20">
            {/* Sparkle decorations */}
            <Sparkles className="pointer-events-none absolute left-[12%] top-10 text-white/40" size={22} />
            <Sparkles className="pointer-events-none absolute right-[16%] top-16 text-white/30" size={16} />
            <Sparkles className="pointer-events-none absolute right-[30%] bottom-12 text-white/30" size={18} />

            <Heart className="relative z-10 mx-auto mb-5 fill-white text-white" size={32} />
            <h2 className="relative z-10 text-3xl font-extrabold tracking-tight sm:text-5xl">
              {h.finalTitle}
            </h2>
            <p className="relative z-10 mx-auto mt-4 max-w-md text-white/80">
              {h.finalText}
            </p>
            <Link
              href={`/${locale}/studio`}
              className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-accent-dark transition-transform hover:scale-[1.03]"
            >
              {h.ctaPrimary}
              <ArrowRight size={18} />
            </Link>

            {/* Decorative garment previews */}
            <div className="pointer-events-none absolute -bottom-6 left-4 hidden h-40 w-32 opacity-90 lg:block">
              <DesignThumb theme={5} type="tshirt" garmentColor="#ffffff" printFill={70} />
            </div>
            <div className="pointer-events-none absolute -bottom-6 right-4 hidden h-40 w-32 opacity-90 lg:block">
              <DesignThumb theme={1} type="hoodie" garmentColor="#18181b" printFill={75} />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

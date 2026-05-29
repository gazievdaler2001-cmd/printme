import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Upload,
  Wand2,
  Shirt,
  PackageCheck,
  Sparkles,
  Printer,
  Truck,
  Gift,
  Star,
  ArrowRight,
  Check,
  Heart,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Reveal } from "@/components/ui/Reveal";
import { DesignThumb } from "@/components/studio/DesignThumb";

const STEP_ICONS = [Upload, Wand2, Shirt, PackageCheck];
const ADV_ICONS = [Wand2, Printer, Truck, Gift];

// Small deterministic QR-like glyph (decorative, network-free).
function QrGlyph() {
  const cells = [
    1, 1, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 0, 1,
    0, 0, 1, 0, 1, 1, 0,
    1, 1, 0, 1, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 0,
    1, 1, 0, 0, 1, 0, 1,
  ];
  return (
    <svg viewBox="0 0 7 7" className="h-14 w-14" shapeRendering="crispEdges">
      <rect width="7" height="7" fill="white" />
      {cells.map((c, i) =>
        c ? (
          <rect key={i} x={i % 7} y={Math.floor(i / 7)} width="1" height="1" fill="#0f0f12" />
        ) : null,
      )}
    </svg>
  );
}

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
      {/* ============ BLOCK 1 — HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-accent-gradient opacity-20 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {h.heroTitle1}{" "}
              <span className="accent-text">{h.heroAccent}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">
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
          </Reveal>

          {/* Hero visual */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="rounded-3xl bg-neutral-50 p-6 shadow-card">
                <DesignThumb theme={1} type="hoodie" garmentColor="#0f0f12" />
              </div>
              {/* Floating AI editor card */}
              <div className="absolute -bottom-6 -left-4 w-60 rounded-2xl border border-black/[.06] bg-white/95 p-4 shadow-float backdrop-blur sm:-left-8">
                <p className="flex items-center gap-2 text-sm font-semibold">
                  <Wand2 size={15} className="text-accent" />
                  {h.aiEditorLabel}
                </p>
                <div className="mt-2 rounded-lg border border-black/10 px-3 py-2 text-xs text-ink/60">
                  {h.aiEditorPrompt}
                </div>
                <button className="btn-primary mt-2 w-full py-2 text-xs shadow-none">
                  {h.generate}
                  <Sparkles size={13} />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BLOCK 2 — HOW IT WORKS ============ */}
      <section className="section">
        <Reveal>
          <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
            {h.howTitle} <span className="accent-text">{h.howAccent}</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {h.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <span className="mt-4 block text-sm font-bold text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-1 font-semibold leading-snug">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{step.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ BLOCK 3 — EXAMPLES ============ */}
      <section id="examples" className="bg-neutral-50">
        <div className="section">
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
              {h.examplesTitle}{" "}
              <span className="accent-text">{h.examplesAccent}</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {h.examples.map((name, i) => (
              <Reveal key={name} delay={(i % 3) * 0.08}>
                <article className="card group overflow-hidden">
                  <div className="bg-white p-4 transition-transform duration-300 group-hover:scale-[1.02]">
                    <DesignThumb theme={i} />
                  </div>
                  <div className="flex items-center justify-between gap-2 border-t border-black/[.06] p-4">
                    <h3 className="font-semibold">{name}</h3>
                    <Link
                      href={`/${locale}/studio?theme=${i}`}
                      className="flex items-center gap-1 text-sm font-medium text-accent hover:gap-2"
                    >
                      {dict.common.createSimilar}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOCK 4 — ADVANTAGES ============ */}
      <section className="section">
        <Reveal>
          <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
            {h.advantagesTitle}{" "}
            <span className="accent-text">{h.advantagesAccent}</span>
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {h.advantages.map((a, i) => {
            const Icon = ADV_ICONS[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card h-full p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-float">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-semibold">{a.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ============ BLOCK 5 — PACKAGING ============ */}
      <section className="section pt-0">
        <div className="grid items-center gap-10 rounded-3xl bg-neutral-50 p-6 sm:p-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {h.packagingTitle}
            </h2>
            <p className="mt-4 max-w-md text-ink/60">{h.packagingText}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {h.packagingItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Packaging visual (network-free) */}
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-ink">
              <div className="absolute inset-0 bg-accent-gradient opacity-20 blur-2xl" />
              <div className="absolute left-5 top-5 text-white">
                <p className="text-lg font-extrabold">
                  Print<span className="text-accent-light">Me</span>
                </p>
                <p className="text-xs text-white/50">{dict.footer.tagline}</p>
              </div>

              {/* contents card */}
              <div className="absolute inset-x-5 bottom-5 flex items-center gap-4 rounded-2xl bg-white/95 p-4 backdrop-blur">
                <div className="h-20 w-20 shrink-0">
                  <DesignThumb theme={0} garmentColor="#18181b" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Thank you 💜</p>
                  <div className="mt-2 flex gap-1.5">
                    {["#7c3aed", "#f5a3c7", "#22d3ee", "#f59e0b"].map((c) => (
                      <span
                        key={c}
                        className="h-5 w-5 rounded-full"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-1 shadow-card">
                  <QrGlyph />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ BLOCK 6 — REVIEWS ============ */}
      <section className="bg-neutral-50">
        <div className="section">
          <Reveal>
            <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">
              {h.reviewsTitle}{" "}
              <span className="accent-text">{h.reviewsAccent}</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {h.reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="card h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-gradient text-sm font-bold text-white">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <figcaption className="font-semibold">{r.name}</figcaption>
                      <p className="text-xs text-ink/45">{r.city}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-0.5 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} className="fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink/65">
                    “{r.text}”
                  </blockquote>
                  <div className="mt-4 h-24 overflow-hidden rounded-xl bg-neutral-100 p-2">
                    <DesignThumb theme={i + 2} garmentColor="#e5e5e5" />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOCK 7 — FINAL CTA ============ */}
      <section className="section">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-accent-gradient px-6 py-16 text-center text-white sm:px-10 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <Heart className="mx-auto mb-4 fill-white/90" size={32} />
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
              {h.finalTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/80">{h.finalText}</p>
            <Link
              href={`/${locale}/studio`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-accent transition-transform hover:scale-[1.03]"
            >
              {h.ctaPrimary}
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

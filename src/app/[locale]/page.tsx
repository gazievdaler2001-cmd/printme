import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Upload,
  Brush,
  Shirt,
  ShoppingCart,
  ShieldCheck,
  Gift,
  Truck,
  Clock,
  Sparkles,
  Instagram,
  Send,
  ArrowRight,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { catalogData } from "@/lib/catalog-data";

const STEP_ICONS = [Upload, Brush, Shirt, ShoppingCart];
const FEATURE_ICONS = [ShieldCheck, Gift, Truck];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const isTg = locale === "tg";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {dict.home.heroTitle1}
              <br />
              <span className="accent-text">{dict.home.heroAccent}</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">
              {dict.home.heroSubtitle}
            </p>
            <Link
              href={`/${locale}/studio`}
              className="btn-primary mt-8 px-8 py-4 text-base"
            >
              {dict.common.createDesign}
              <Sparkles size={18} />
            </Link>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60">
              {[dict.common.fast, dict.common.simple, dict.common.unique].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <Clock size={16} className="text-accent" />
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-accent-gradient opacity-90 blur-2xl" />
            <Sparkles
              className="absolute left-4 top-2 text-accent"
              size={26}
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100 shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900"
                alt="Hoodie mockup"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating AI editor card */}
            <div className="absolute -bottom-6 -left-2 w-64 rounded-2xl border border-black/[.06] bg-white/95 p-4 shadow-float backdrop-blur sm:-left-6">
              <p className="text-sm font-semibold">{dict.home.aiEditorLabel}</p>
              <p className="mt-1 text-xs text-ink/50">
                {dict.home.aiEditorPlaceholder}
              </p>
              <div className="mt-2 rounded-lg border border-black/10 px-3 py-2 text-xs text-ink/70">
                {dict.home.aiEditorPrompt}
              </div>
              <button className="btn-primary mt-2 w-full py-2 text-xs shadow-none">
                {dict.home.generate}
                <Sparkles size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <h2 className="mb-12 text-3xl font-extrabold sm:text-4xl">
          {dict.home.howTitle} <span className="accent-text">{dict.home.howAccent}</span>
        </h2>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.steps.map((step, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <li key={i} className="relative text-center">
                {i < dict.home.steps.length - 1 && (
                  <span className="absolute left-[60%] top-9 hidden w-full border-t border-dashed border-black/15 lg:block" />
                )}
                <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-ink/55">{step.desc}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Inspiration gallery */}
      <section className="section pt-0">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {dict.home.inspireTitle}{" "}
            <span className="accent-text">{dict.home.inspireAccent}</span>
          </h2>
          <Link href={`/${locale}/catalog`} className="btn-ghost shrink-0">
            {dict.common.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {catalogData.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}/studio?prompt=${encodeURIComponent(
                isTg ? item.promptTg : item.promptRu,
              )}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100"
            >
              <Image
                src={item.mockupUrl}
                alt={item.title}
                fill
                sizes="(max-width:640px) 50vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {dict.home.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div key={i} className="card flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Social CTA */}
      <section className="section pt-0">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-accent-soft px-6 py-8 sm:flex-row sm:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent shadow-card">
              <Sparkles size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">{dict.home.socialTitle}</h3>
              <p className="text-sm text-ink/55">{dict.home.socialSubtitle}</p>
            </div>
          </div>
          <div className="flex gap-3">
            {[Instagram, Send, ArrowRight].map((Icon, i) => (
              <span
                key={i}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-accent shadow-card transition-transform hover:scale-105"
              >
                <Icon size={20} />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

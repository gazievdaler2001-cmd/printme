import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Rocket,
  Printer,
  Star,
  ChevronRight,
} from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const VALUE_ICONS = [Sparkles, ShieldCheck, Heart];
const TIMELINE_ICONS = [Rocket, Printer, Heart, Star];
const TEAM_PHOTOS = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
  "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500",
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const a = dict.about;

  return (
    <>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-5 pt-6 text-sm text-ink/45 sm:px-8">
        <Link href={`/${locale}`} className="hover:text-accent">
          {dict.nav.home}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink/70">{a.title}</span>
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:py-14">
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight">{a.title}</h1>
          <p className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
            {a.headline1} <span className="accent-text">{a.headlineAccent1}</span>{" "}
            {a.headline2} <span className="accent-text">{a.headlineAccent2}</span>{" "}
            {a.headline3}
          </p>
          <p className="mt-5 max-w-md text-ink/60">{a.description}</p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {a.values.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <div key={i}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-3 font-semibold">{v.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-900 shadow-card">
          <Image
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
            alt="PrintMe packaging"
            fill
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="rounded-3xl bg-accent-soft px-6 py-12 sm:px-10">
          <h2 className="mb-10 text-2xl font-extrabold sm:text-3xl">
            {a.timelineTitle}
          </h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {a.timeline.map((t, i) => {
              const Icon = TIMELINE_ICONS[i];
              return (
                <li key={i} className="relative text-center">
                  {i < a.timeline.length - 1 && (
                    <span className="absolute left-[60%] top-8 hidden w-full border-t border-dashed border-accent/25 lg:block" />
                  )}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-accent shadow-card">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <p className="mt-4 text-sm font-medium text-ink/45">{t.year}</p>
                  <h3 className="font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{t.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="section pt-0">
        <h2 className="text-2xl font-extrabold sm:text-3xl">{a.teamTitle}</h2>
        <p className="mt-2 text-ink/55">{a.teamSubtitle}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {a.team.map((m, i) => (
            <div key={i} className="card overflow-hidden">
              <div className="relative aspect-square bg-neutral-100">
                <Image
                  src={TEAM_PHOTOS[i]}
                  alt={m.name}
                  fill
                  sizes="(max-width:640px) 50vw, 20vw"
                  className="object-cover grayscale"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-accent">{m.role}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink/55">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-accent-soft px-6 py-8 sm:flex-row sm:px-10">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-accent shadow-card">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold">{a.ctaTitle}</h3>
              <p className="text-sm text-ink/55">{a.ctaSubtitle}</p>
            </div>
          </div>
          <Link href={`/${locale}/studio`} className="btn-primary shrink-0">
            {dict.common.createDesign}
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  const steps =
    locale === "tg"
      ? [
          "Идеяро тавсиф кунед",
          "СИ тасвир месозад",
          "Онро дар либос бинед",
          "Фармоиш диҳед",
        ]
      : [
          "Опишите идею",
          "ИИ создаёт изображение",
          "Смотрите на одежде",
          "Оформляете заказ",
        ];

  const advantages =
    locale === "tg"
      ? ["Тез", "Беназир", "Чопи DTF", "Расонидан"]
      : ["Быстро", "Уникально", "DTF-печать", "Доставка"];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="section flex flex-col items-center text-center">
          <span className="mb-5 rounded-full border border-black/10 px-4 py-1.5 text-xs font-medium text-ink/60">
            AI · DTF · {locale === "tg" ? "Кастомизатсия" : "Кастомизация"}
          </span>
          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            {dict.home.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg text-ink/60">
            {dict.home.heroSubtitle}
          </p>
          <Link
            href={`/${locale}/studio`}
            className="mt-8 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-transform hover:scale-[1.03]"
          >
            {dict.home.heroCta}
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          {dict.home.howItWorks}
        </h2>
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={i}
              className="rounded-2xl border border-black/5 bg-neutral-50 p-6"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                {i + 1}
              </div>
              <p className="font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Advantages */}
      <section className="section pt-0">
        <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
          {dict.home.advantages}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div
              key={a}
              className="rounded-2xl border border-black/5 p-6 text-center font-semibold"
            >
              {a}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="rounded-3xl bg-ink px-8 py-16 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-4xl">
            {dict.home.heroTitle}
          </h2>
          <Link
            href={`/${locale}/studio`}
            className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.03]"
          >
            {dict.home.heroCta}
          </Link>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { catalogData } from "@/lib/catalog-data";

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const isTg = locale === "tg";

  return (
    <section className="section">
      <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
        {dict.nav.catalog}
      </h1>
      <p className="mb-10 text-ink/60">{dict.home.examples}</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {catalogData.map((item) => {
          const prompt = isTg ? item.promptTg : item.promptRu;
          return (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <Image
                  src={item.mockupUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-ink/55">{prompt}</p>
                <Link
                  href={`/${locale}/studio?prompt=${encodeURIComponent(prompt)}`}
                  className="mt-4 inline-block rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
                >
                  {dict.common.createSimilar}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

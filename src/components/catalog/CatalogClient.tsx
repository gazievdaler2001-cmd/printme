"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronDown, Gift, ArrowRight, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import {
  products,
  catalogColors,
  catalogSizes,
  type ProductCategory,
} from "@/lib/products-data";

const CATEGORY_ORDER: ProductCategory[] = [
  "tshirt",
  "hoodie",
  "sweatshirt",
  "longsleeve",
  "oversize",
  "kids",
];

export function CatalogClient({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const c = dict.catalog;
  const isTg = locale === "tg";

  const [activeTab, setActiveTab] = useState(0); // 0 = all
  const [checked, setChecked] = useState<ProductCategory[]>([]);
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [activeSize, setActiveSize] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(1599);

  const counts = useMemo(() => {
    const m = {} as Record<ProductCategory, number>;
    for (const cat of CATEGORY_ORDER) m[cat] = 0;
    for (const p of products) m[p.category]++;
    return m;
  }, []);

  const filtered = useMemo(() => {
    const tabCat = activeTab === 0 ? null : CATEGORY_ORDER[activeTab - 1];
    const cats = checked.length > 0 ? checked : tabCat ? [tabCat] : null;
    return products.filter(
      (p) => (!cats || cats.includes(p.category)) && p.price <= maxPrice,
    );
  }, [activeTab, checked, maxPrice]);

  function toggleCheck(cat: ProductCategory) {
    setChecked((prev) =>
      prev.includes(cat) ? prev.filter((x) => x !== cat) : [...prev, cat],
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      {/* Header + promo */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-3 text-ink/55">{c.subtitle}</p>
        </div>
        <Link
          href={`/${locale}/studio`}
          className="flex items-center gap-4 rounded-2xl bg-accent-soft px-6 py-4 transition-colors hover:bg-accent-softer"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-accent shadow-card">
            <Gift size={22} />
          </div>
          <div className="flex-1">
            <p className="font-semibold">{c.promoTitle}</p>
            <p className="text-sm text-ink/55">{c.promoSubtitle}</p>
          </div>
          <ArrowRight size={20} className="text-accent" />
        </Link>
      </div>

      {/* Tabs + sort */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-black/[.06] pb-4">
        <div className="flex flex-wrap gap-2">
          {c.tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => {
                setActiveTab(i);
                setChecked([]);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === i
                  ? "bg-accent text-white"
                  : "text-ink/60 hover:bg-neutral-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-ink/70">
          {c.sort}
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        {/* Sidebar filters */}
        <aside className="space-y-8">
          <div>
            <h3 className="mb-3 text-sm font-bold">{c.filterType}</h3>
            <ul className="space-y-2.5">
              {CATEGORY_ORDER.map((cat, i) => (
                <li key={cat}>
                  <label className="flex cursor-pointer items-center justify-between text-sm text-ink/70">
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={checked.includes(cat)}
                        onChange={() => toggleCheck(cat)}
                        className="h-4 w-4 rounded border-black/20 accent-accent"
                      />
                      {c.tabs[i + 1]}
                    </span>
                    <span className="text-ink/35">{counts[cat]}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold">{c.filterColor}</h3>
            <div className="flex flex-wrap gap-2.5">
              {catalogColors.map((col) => (
                <button
                  key={col}
                  onClick={() => setActiveColor(activeColor === col ? null : col)}
                  style={{ backgroundColor: col }}
                  className={`h-7 w-7 rounded-full border transition-all ${
                    activeColor === col
                      ? "ring-2 ring-accent ring-offset-2"
                      : "border-black/15"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold">{c.filterSize}</h3>
            <div className="flex flex-wrap gap-2">
              {catalogSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSize(activeSize === s ? null : s)}
                  className={`h-9 w-9 rounded-lg border text-sm transition-colors ${
                    activeSize === s
                      ? "border-accent bg-accent text-white"
                      : "border-black/10 text-ink/70 hover:border-accent/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <button className="mt-3 text-sm font-medium text-accent">
              {c.sizeTable}
            </button>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold">{c.filterPrice}</h3>
            <input
              type="range"
              min={149}
              max={1599}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-accent"
            />
            <div className="mt-2 flex items-center gap-2 text-sm text-ink/60">
              <span className="rounded-lg border border-black/10 px-3 py-1.5">149</span>
              <span>—</span>
              <span className="rounded-lg border border-black/10 px-3 py-1.5">
                {maxPrice}
              </span>
              <span>{c.currency}</span>
            </div>
          </div>

          <div className="rounded-2xl bg-accent-soft p-5">
            <h3 className="font-semibold">{c.notFoundTitle}</h3>
            <p className="mt-1 text-sm text-ink/55">{c.notFoundSubtitle}</p>
            <button className="btn-outline mt-4 w-full py-2.5 text-sm">
              <MessageCircle size={16} />
              {dict.common.writeUs}
            </button>
          </div>
        </aside>

        {/* Product grid */}
        <div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <article key={p.id} className="card group overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src={p.image}
                    alt={isTg ? p.nameTg : p.nameRu}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    aria-label="favorite"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/50 shadow-card transition-colors hover:text-accent"
                  >
                    <Heart size={18} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{isTg ? p.nameTg : p.nameRu}</h3>
                  <p className="mt-1 line-clamp-1 text-sm text-ink/50">
                    {isTg ? p.descTg : p.descRu}
                  </p>
                  <p className="mt-3">
                    <span className="text-lg font-extrabold">{p.price}</span>{" "}
                    <span className="text-sm text-ink/45">{c.currency}</span>
                  </p>
                  <Link
                    href={`/${locale}/studio?product=${p.id}`}
                    className="btn-outline mt-3 w-full py-2.5 text-sm"
                  >
                    {dict.common.createDesign}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-ink/45">
              {c.notFoundSubtitle}
            </p>
          )}

          <div className="mt-10 flex justify-center">
            <button className="btn-ghost">
              {dict.common.showMore}
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

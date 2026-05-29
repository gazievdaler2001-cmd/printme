import { notFound } from "next/navigation";
import { Truck, Package, CreditCard, RefreshCcw } from "lucide-react";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

const ICONS = [Truck, Package, CreditCard, RefreshCcw];

export default async function ShippingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);
  const sh = dict.shipping;

  return (
    <section className="section min-h-[60vh]">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        {sh.title}
      </h1>
      <p className="mt-3 text-ink/55">{sh.subtitle}</p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {sh.blocks.map((b, i) => {
          const Icon = ICONS[i];
          return (
            <div key={i} className="card flex items-start gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon size={24} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold">{b.title}</h3>
                <p className="mt-1 text-sm text-ink/55">{b.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

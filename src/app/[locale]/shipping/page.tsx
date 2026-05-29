import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { notFound } from "next/navigation";

export default async function ShippingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <PagePlaceholder
      soonLabel={dict.common.soon}
      title={dict.nav.shipping}
      description={
        locale === "tg"
          ? "Шартҳои расонидан ва пардохт ин ҷо нишон дода мешаванд."
          : "Условия доставки и оплаты будут описаны здесь."
      }
    />
  );
}

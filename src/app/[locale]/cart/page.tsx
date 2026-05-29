import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { notFound } from "next/navigation";

export default async function CartPage({
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
      title={dict.nav.cart}
      description={
        locale === "tg"
          ? "Сабад ва расмиёти фармоиш дар фазаи навбатӣ илова мешаванд."
          : "Корзина и оформление заказа будут добавлены в следующей фазе."
      }
    />
  );
}

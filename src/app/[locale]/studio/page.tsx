import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { PagePlaceholder } from "@/components/PagePlaceholder";
import { notFound } from "next/navigation";

export default async function StudioPage({
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
      title={dict.nav.studio}
      description={
        locale === "tg"
          ? "Муҳаррири тарроҳӣ (Fabric.js), мокапҳо ва интегратсияи СИ дар фазаҳои навбатӣ илова мешаванд."
          : "Редактор дизайна (Fabric.js), реалистичные мокапы и интеграция ИИ будут добавлены в следующих фазах."
      }
    />
  );
}

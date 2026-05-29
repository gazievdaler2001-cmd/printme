// Supported locales for PrintMe (Russian + Tajik per TZ).
export const locales = ["ru", "tg"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  tg: "Тоҷикӣ",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="border-t border-black/5 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="text-lg font-bold">
            Print<span className="text-accent">Me</span>
          </div>
          <p className="mt-1 text-sm text-ink/60">
            © {new Date().getFullYear()} PrintMe
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/70">
          <Link href={`/${locale}/catalog`}>{dict.nav.catalog}</Link>
          <Link href={`/${locale}/studio`}>{dict.nav.studio}</Link>
          <Link href={`/${locale}/about`}>{dict.nav.about}</Link>
          <Link href={`/${locale}/shipping`}>{dict.nav.shipping}</Link>
        </nav>
      </div>
    </footer>
  );
}

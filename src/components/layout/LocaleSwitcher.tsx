"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    // Replace the leading /<locale> segment with the chosen one.
    const rest = pathname.replace(/^\/[^/]+/, "");
    router.push(`/${next}${rest}`);
  }

  return (
    <div className="flex items-center rounded-full border border-black/10 p-0.5 text-xs">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === current}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            l === current
              ? "bg-ink text-white"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {localeNames[l].slice(0, 3)}
        </button>
      ))}
    </div>
  );
}

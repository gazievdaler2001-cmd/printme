"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();

  const links = [
    { href: `/${locale}/studio`, label: dict.nav.studio },
    { href: `/${locale}/catalog`, label: dict.nav.catalog },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/shipping`, label: dict.nav.shipping },
  ];

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 border-b border-black/[.06] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href={`/${locale}`} className="text-xl font-extrabold tracking-tight">
          Print<span className="accent-text">Me</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative text-sm transition-colors hover:text-ink ${
                isActive(l.href) ? "font-semibold text-accent" : "text-ink/70"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher current={locale} />
          <Link
            href={`/${locale}/cart`}
            aria-label={dict.nav.cart}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-neutral-100 hover:text-ink"
          >
            <ShoppingBag size={20} strokeWidth={1.75} />
          </Link>
          <Link href={`/${locale}/studio`} className="btn-primary px-5 py-2.5 shadow-none">
            {dict.nav.login}
          </Link>
        </div>
      </div>
    </header>
  );
}

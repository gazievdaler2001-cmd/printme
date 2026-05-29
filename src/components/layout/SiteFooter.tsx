import Link from "next/link";
import { Instagram, Send } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

// Simple TikTok glyph (lucide has no TikTok icon).
function TikTok({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.5 3c.3 2 1.5 3.6 3.5 3.9v2.5c-1.3 0-2.5-.4-3.5-1v5.8a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.6a3.1 3.1 0 1 0 2.2 3V3h2.6z" />
    </svg>
  );
}

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const menu = [
    { href: `/${locale}/studio`, label: dict.nav.studio },
    { href: `/${locale}/catalog`, label: dict.nav.catalog },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/shipping`, label: dict.nav.shipping },
  ];
  const help = [dict.footer.faq, dict.footer.returns, dict.footer.terms, dict.footer.privacy];

  return (
    <footer className="border-t border-black/[.06] bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="text-xl font-extrabold">
            Print<span className="accent-text">Me</span>
          </div>
          <p className="mt-2 text-sm text-ink/55">{dict.footer.tagline}</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">{dict.footer.menu}</h4>
          <ul className="space-y-2 text-sm text-ink/60">
            {menu.map((m) => (
              <li key={m.href}>
                <Link href={m.href} className="hover:text-accent">{m.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">{dict.footer.help}</h4>
          <ul className="space-y-2 text-sm text-ink/60">
            {help.map((h) => (
              <li key={h}><span className="cursor-default hover:text-accent">{h}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">{dict.footer.socials}</h4>
          <div className="flex gap-3">
            {[Instagram, TikTok, Send].map((Icon, i) => (
              <span
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent transition-colors hover:bg-accent hover:text-white"
              >
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/[.06]">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-ink/45 sm:px-8">
          © {new Date().getFullYear()} PrintMe. {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconOm } from "./icons";

export function SiteFooter() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-950 px-6 py-8 text-cream/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-maroon-900/60 text-gold">
            <IconOm className="h-5 w-5" />
          </span>
          <div className="font-heading leading-tight">
            <p className="text-base font-semibold text-cream">{t.footer.brand}</p>
            <p className="text-xs text-cream/55">{t.footer.tagline}</p>
          </div>
        </div>

        <p className="max-w-xs font-heading text-sm text-gold-light">
          {t.footer.centerLine}
        </p>

        <div className="flex items-center gap-2 rounded-full border border-gold/25 px-4 py-2">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="3" y="6" width="18" height="14" rx="2" />
            <path d="M3 10h18M8 4v4M16 4v4" strokeLinecap="round" />
          </svg>
          <span className="text-xs leading-tight">
            <span className="block font-semibold text-cream">{t.footer.comingSoon1}</span>
            <span className="block text-cream/55">{t.footer.comingSoon2}</span>
          </span>
        </div>
      </div>

      <p className="mt-6 border-t border-cream/10 pt-4 text-center text-xs text-cream/40">
        © {year} {t.footer.brand}. {t.footer.rights}
      </p>
    </footer>
  );
}

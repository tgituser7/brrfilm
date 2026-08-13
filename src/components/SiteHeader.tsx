"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { IconOm } from "./icons";
import { socials } from "./socials";

export function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#top", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/#story", label: t.nav.bhakti },
    { href: "/#significance", label: t.nav.gauMata },
    { href: "/#gallery", label: t.nav.media },
    { href: "/#join", label: t.nav.join },
    { href: "/#join-form", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/95 shadow-md shadow-maroon-950/5 backdrop-blur-md"
          : "bg-ivory/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8">
        <Link href="/#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-devotional text-gold">
            <IconOm className="h-5 w-5" />
          </span>
          <span className="font-heading leading-tight">
            <span className="block text-sm font-semibold text-maroon-800">
              {t.hero.title1}
            </span>
            <span className="text-gold-gradient block text-lg font-bold">
              {t.hero.title2}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-maroon-950/75 transition-colors hover:text-crimson"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-maroon-900 text-cream/90 transition-colors hover:bg-maroon-800"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-maroon-900/20 text-maroon-900 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-maroon-900/10 bg-ivory/98 px-5 py-4 backdrop-blur-md xl:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-maroon-950/85 hover:text-crimson"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-maroon-900 text-cream/90"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

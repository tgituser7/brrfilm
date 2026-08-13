"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { IconDonate, IconShoppingBag } from "./icons";

export function SupportUs() {
  const { t } = useLanguage();

  return (
    <section id="support" className="relative bg-ivory py-20 sm:py-28">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
          {t.support.eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
          {t.support.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.support.description}
        </p>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-4xl gap-6 px-6 sm:grid-cols-2">
        <div className="card-lift flex flex-col items-center rounded-[1.75rem] border border-maroon-900/10 bg-cream px-8 py-12 text-center shadow-sm">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 text-maroon-800">
            <IconShoppingBag className="h-8 w-8" />
          </span>
          <h3 className="mt-5 font-heading text-xl font-semibold text-maroon-950">
            {t.support.merchTitle}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
            {t.support.merchDesc}
          </p>
          <Link
            href="/merchandise"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-maroon-900/30 px-7 py-3 text-sm font-semibold text-maroon-900 transition-colors hover:bg-maroon-900/5"
          >
            {t.support.merchCta}
          </Link>
        </div>

        <div className="card-lift flex flex-col items-center rounded-[1.75rem] border border-gold/25 bg-devotional px-8 py-12 text-center shadow-sm">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold-light">
            <IconDonate className="h-8 w-8" />
          </span>
          <h3 className="mt-5 font-heading text-xl font-semibold text-cream">
            {t.support.donateTitle}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-cream/70">
            {t.support.donateDesc}
          </p>
          <Link
            href="/donate"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-7 py-3 text-sm font-semibold text-maroon-950 shadow-md shadow-maroon-950/20 transition-all hover:bg-right"
          >
            {t.support.donateCta}
          </Link>
        </div>
      </div>
    </section>
  );
}

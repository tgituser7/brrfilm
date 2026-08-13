"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IconShoppingBag } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function MerchandisePage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-devotional px-6 pt-32 pb-20 sm:pt-40">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-xl text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light">
              <IconShoppingBag className="h-8 w-8" />
            </span>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              {t.merchPage.eyebrow}
            </p>
            <h1 className="text-gold-deep mt-4 py-1 font-heading text-5xl font-bold leading-[1.3] sm:text-6xl">
              {t.merchPage.heading}
            </h1>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              {t.merchPage.description}
            </p>

            <Link
              href="/"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-7 py-3 text-sm font-semibold text-maroon-950 shadow-lg shadow-maroon-950/20 transition-all hover:bg-right"
            >
              ← {t.merchPage.backHome}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FakeQR } from "@/components/FakeQR";
import { IconDonate } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";

export default function DonatePage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-devotional px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light">
              <IconDonate className="h-7 w-7" />
            </span>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              {t.donatePage.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
              {t.donatePage.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
              {t.donatePage.description}
            </p>
          </div>
        </section>

        <section className="relative bg-cream px-6 py-16 sm:py-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-4xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="mx-auto w-full max-w-xs">
              <div className="relative rounded-[1.75rem] border border-gold/30 bg-ivory p-5 shadow-2xl shadow-maroon-900/15">
                <div className="overflow-hidden rounded-2xl border border-maroon-900/10">
                  <FakeQR />
                </div>
                <p className="mt-4 text-center font-heading text-base font-semibold text-maroon-950">
                  {t.donatePage.qrCaption}
                </p>
                <p className="mt-1 text-center text-xs font-semibold uppercase tracking-wide text-crimson/70">
                  {t.donatePage.qrDemoLabel}
                </p>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-maroon-900/10 bg-ivory px-6 py-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maroon-800/70">
                  {t.donatePage.upiLabel}
                </p>
                <p className="mt-1 font-heading text-lg font-semibold text-maroon-950">
                  {t.donatePage.upiValue}
                </p>
              </div>

              <p className="mt-7 rounded-xl border border-dashed border-gold/40 bg-gold/5 px-4 py-3 text-xs leading-relaxed text-maroon-900/80">
                {t.donatePage.note}
              </p>

              <p className="mt-6 font-heading text-lg text-maroon-950">
                {t.donatePage.thankYou}
              </p>

              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-maroon-900/30 px-6 py-2.5 text-sm font-semibold text-maroon-900 transition-colors hover:bg-maroon-900/5"
              >
                ← {t.donatePage.backHome}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

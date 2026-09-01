"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const DISSOLVE_MASK = {
  maskImage: "radial-gradient(ellipse 70% 80% at center, black 45%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 70% 80% at center, black 45%, transparent 100%)",
};

export function SwamiQuote() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image src="/Gau_Mata_under.jpeg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/88 via-maroon-950/75 to-maroon-950/88" />
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 sm:grid-cols-[1fr_1.3fr] sm:gap-6">
        <div className="mr-auto w-full max-w-[340px]" style={DISSOLVE_MASK}>
          <Image
            src="/swami_gopalanand_ji.png"
            alt={t.swamiQuote.name}
            width={1024}
            height={1536}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
            {t.swamiQuote.eyebrow}
          </p>
          <svg
            viewBox="0 0 32 24"
            aria-hidden="true"
            className="mx-auto mt-5 h-8 w-10 text-gold/40 sm:mx-0"
          >
            <path
              fill="currentColor"
              d="M0 24V13.5C0 6 4.5 1 12 0l1 3.5C8 5 5.5 8 5.5 12H12v12H0Zm18 0V13.5C18 6 22.5 1 30 0l1 3.5C26 5 23.5 8 23.5 12H30v12H18Z"
            />
          </svg>
          <p className="mt-4 font-heading text-2xl font-semibold leading-snug text-cream sm:text-3xl">
            {t.swamiQuote.quote}
          </p>
          <p className="mt-6 text-base font-semibold text-gold-light sm:text-lg">
            — {t.swamiQuote.name}
          </p>
        </div>
      </div>

      <p className="relative mx-auto mt-12 max-w-3xl px-6 text-center text-lg leading-relaxed text-cream/80 sm:mt-16 sm:text-xl">
        {t.swamiQuote.description}
      </p>

      <div className="divider-ornament relative mx-auto mt-10 max-w-2xl px-6 text-center sm:mt-12">
        <div className="w-full">
          <p className="font-heading text-lg font-semibold text-gold-light sm:text-xl">
            {t.swamiQuote.credentialLine1}
          </p>
          <p className="mt-1.5 font-heading text-lg font-semibold text-gold-light sm:text-xl">
            {t.swamiQuote.credentialLine2}
          </p>
          <p className="mt-3 text-sm italic text-cream/60">{t.swamiQuote.credentialNote}</p>
        </div>
      </div>

      <div
        className="relative mx-auto mt-12 w-full max-w-[340px] px-6 sm:absolute sm:bottom-0 sm:right-6 sm:mt-0 sm:px-0 lg:right-16"
        style={DISSOLVE_MASK}
      >
        <Image
          src="/swami_sir.png"
          alt={t.swamiQuote.name}
          width={1024}
          height={1536}
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
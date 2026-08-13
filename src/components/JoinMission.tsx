"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { JOIN_FORM_URL } from "@/lib/links";
import { IconNamaste } from "./icons";

export function JoinMission() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="relative bg-cream px-6 py-20 sm:py-28">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-3xl rounded-[2rem] border border-gold/25 bg-devotional px-6 py-14 text-center shadow-2xl shadow-maroon-900/20 sm:px-14 sm:py-16">
        <h2 className="text-gold-deep py-1 font-heading text-4xl font-bold uppercase leading-[1.3] tracking-wide sm:text-5xl">
          {t.mission.eyebrow}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
          {t.mission.description}
        </p>

        <a
          href={JOIN_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-8 py-3.5 text-sm font-semibold tracking-wide text-maroon-950 shadow-lg shadow-maroon-950/20 transition-all hover:bg-right"
        >
          <IconNamaste className="h-4 w-4" />
          {t.mission.cta}
        </a>
      </div>
    </section>
  );
}

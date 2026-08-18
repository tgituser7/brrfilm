"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconClapperboard } from "./icons";

export function AboutRaveMedia() {
  const { t } = useLanguage();

  return (
    <section id="rave-media" className="relative overflow-hidden bg-devotional py-20 sm:py-28">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light">
            <IconClapperboard className="h-7 w-7" />
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-cream sm:text-4xl">
            {t.raveMedia.title}
          </h2>
        </div>
        <div className="mt-8 space-y-4 text-left">
          {t.raveMedia.paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-cream/70 sm:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

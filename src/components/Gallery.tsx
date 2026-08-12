"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconLotusDivider } from "./icons";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="relative overflow-hidden bg-devotional py-24 sm:py-32">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
          {t.gallery.eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
          {t.gallery.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/65 sm:text-lg">
          {t.gallery.intro}
        </p>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 sm:gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="card-lift group relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-xl border border-gold/15 bg-gradient-to-br from-maroon-900/60 via-maroon-800/40 to-transparent"
          >
            <IconLotusDivider className="h-10 w-10 text-gold/30 transition-transform duration-500 group-hover:scale-110" />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-gold/30 bg-maroon-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-light">
              {t.gallery.comingSoon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

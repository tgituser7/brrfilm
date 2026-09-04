"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export function IdeaBehindFilm() {
  const { t } = useLanguage();

  return (
    <section id="idea" className="relative overflow-hidden bg-maroon-950 py-20 sm:py-28">
      <Image src="/ideabtf.jpeg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/92 via-maroon-950/85 to-maroon-950/94" />
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.3fr] lg:items-center lg:gap-14">
        <div className="lg:sticky lg:top-28">
          <div className="mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-gold/25 shadow-2xl shadow-maroon-950/30">
            <Image
              src="/ri4.jpeg"
              alt={t.idea.title}
              width={1369}
              height={1149}
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-4 text-center font-heading text-base text-cream/80">
            {t.director.name}{" "}
            <span className="text-cream/50">({t.hero.directorLabel})</span>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
            {t.idea.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
            {t.idea.title}
          </h2>
          <div className="mt-8 space-y-4 text-left">
            {t.idea.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-cream/70 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconFeather } from "./icons";

export function AboutDirector() {
  const { t } = useLanguage();

  return (
    <section id="director" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <IconFeather className="mx-auto h-10 w-10 text-gold/70" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
            {t.director.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
            {t.director.name}
          </h2>
        </div>
        <div className="mt-8 space-y-4 text-left">
          {t.director.paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/75 sm:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

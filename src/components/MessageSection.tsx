"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconFeather, IconOm } from "./icons";

export function MessageSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-ivory px-6 py-16 sm:py-20">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-10 rounded-[2rem] border border-dashed border-gold/40 bg-cream/60 px-8 py-12 shadow-sm sm:grid-cols-[0.7fr_1.3fr] sm:px-14">
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <IconFeather className="h-16 w-16 text-gold/70" />
          <p className="font-heading text-2xl font-semibold text-maroon-950">
            {t.message.signature}
          </p>
        </div>

        <div className="text-center sm:text-left">
          <p className="divider-ornament justify-center text-sm font-semibold uppercase tracking-[0.3em] text-crimson sm:justify-start">
            <IconOm className="h-4 w-4" />
            {t.message.eyebrow}
          </p>
          {t.message.paragraphs.map((para, i) => (
            <p
              key={i}
              className="mt-5 font-heading text-xl leading-relaxed text-maroon-900 sm:text-2xl"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

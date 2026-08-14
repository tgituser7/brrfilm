"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Synopsis() {
  const { t } = useLanguage();

  return (
    <section id="synopsis" className="relative bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
            {t.synopsis.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
            {t.synopsis.title}
          </h2>
        </div>
        <div className="mt-8 space-y-4 text-center">
          {t.synopsis.paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/75 sm:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const NEWS_CLIPPINGS = ["/news/news1.jpeg", "/news/news2.jpeg", "/news/news3.jpeg", "/news/news4.jpeg"];

export function NewsCoverage() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-cream px-6 py-16 sm:py-20">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
          {t.newsCoverage.eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
          {t.newsCoverage.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
          {t.newsCoverage.intro}
        </p>
      </div>

      <div className="relative mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
        {NEWS_CLIPPINGS.map((src, i) => (
          <div
            key={src}
            className="card-lift overflow-hidden rounded-[1.75rem] border border-maroon-900/10 bg-white shadow-xl shadow-maroon-900/10"
          >
            <div className="relative aspect-[4/3] w-full bg-white">
              <Image
                src={src}
                alt={`${t.newsCoverage.title} ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const photos = [
  "/gallery-1.jpg",
  "/gallery-2.jpeg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
];

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
        {photos.map((src, i) => (
          <div
            key={src}
            className="card-lift group relative aspect-[4/5] overflow-hidden rounded-xl border border-gold/15"
          >
            <Image
              src={src}
              alt={`${t.hero.title1} ${t.hero.title2} — ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

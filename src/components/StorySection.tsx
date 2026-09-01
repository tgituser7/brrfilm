"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const CHAPTER_IMAGES = ["/the_origin.jpeg", "/The_village.jpeg", "/the_awakening.jpeg"];
const CHAPTER_IMAGE_POSITIONS = ["object-center", "object-center", "object-[50%_75%]"];

export function StorySection() {
  const { t } = useLanguage();

  return (
    <section id="story" className="relative overflow-hidden bg-devotional py-24 sm:py-32">
      <Image
        src="/ri2.jpeg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-maroon-950/90 via-maroon-950/85 to-maroon-950/95" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
          {t.story.eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
          {t.story.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream/65 sm:text-lg">
          {t.story.intro}
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {t.story.chapters.map((chapter, i) => (
            <div
              key={chapter.number}
              className="card-lift relative overflow-hidden rounded-2xl border border-gold/20 p-7 backdrop-blur-sm"
            >
              <Image
                src={CHAPTER_IMAGES[i]}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className={`object-cover ${CHAPTER_IMAGE_POSITIONS[i]}`}
              />
              <div className="absolute inset-0 bg-maroon-950/70" />

              <span className="relative font-heading text-4xl font-bold text-gold/40">
                {chapter.number}
              </span>
              <h3 className="relative mt-4 font-heading text-xl font-semibold text-cream">
                {chapter.title}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-cream/65">
                {chapter.description}
              </p>
              {i < t.story.chapters.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-gold/50 to-transparent sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

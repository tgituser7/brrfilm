"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { IconFeather } from "./icons";

export function AboutDirector() {
  const { t } = useLanguage();

  return (
    <section id="director" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-start lg:gap-14">
        <div>
          <IconFeather className="h-10 w-10 text-gold/70" />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
            {t.director.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
            {t.director.name}
          </h2>
          <div className="mt-8 space-y-4 text-left">
            {t.director.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-gold/25 shadow-2xl shadow-maroon-900/15">
            <Image
              src="/Director.png"
              alt={t.director.name}
              width={682}
              height={866}
              className="h-auto w-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

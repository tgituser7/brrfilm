"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export function Synopsis() {
  const { t } = useLanguage();

  return (
    <section id="synopsis" className="relative overflow-hidden bg-ivory py-20 sm:py-28">
      <Image src="/syno_bg.jpeg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-start lg:gap-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
            {t.synopsis.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
            {t.synopsis.title}
          </h2>
          <div className="mt-8 space-y-4 text-left">
            {t.synopsis.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-gold/25 shadow-2xl shadow-maroon-900/15">
            <Image
              src="/ri3.jpeg"
              alt={t.synopsis.title}
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

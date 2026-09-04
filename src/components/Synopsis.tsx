"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export function Synopsis() {
  const { t } = useLanguage();

  return (
    <section id="synopsis" className="relative overflow-hidden bg-ivory pt-20 pb-0 sm:pt-28">
      <Image src="/syno_bg.jpeg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-start lg:gap-14">
        <div className="lg:pb-10 lg:pt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
            {t.synopsis.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
            {t.synopsis.title}
          </h2>
          <div className="mt-8 space-y-4 text-left lg:mt-0">
            {t.synopsis.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:self-end">
          <div className="mx-auto max-w-sm overflow-hidden rounded-[1.75rem] border border-gold/25 shadow-2xl shadow-maroon-900/15">
            <Image
              src="/ri3.jpeg"
              alt={t.synopsis.title}
              width={1536}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mx-auto mt-6 w-full max-w-md sm:max-w-lg">
            <Image
              src="/filmstoryimage.png"
              alt={t.synopsis.title}
              width={1536}
              height={1024}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

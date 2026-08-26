"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export function AboutRaveMedia() {
  const { t } = useLanguage();

  return (
    <section id="rave-media" className="relative overflow-hidden bg-maroon-950 py-20 sm:py-28">
      <Image
        src="/about_media.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="bg-devotional pointer-events-none absolute inset-0 opacity-90" />
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-2xl border border-gold/30 bg-cream p-3 shadow-lg shadow-maroon-950/20">
            <Image
              src="/ravelogo.png"
              alt="Rave Media"
              width={12406}
              height={6476}
              className="h-auto w-full"
            />
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold text-cream sm:text-4xl">
            {t.raveMedia.title}
          </h2>
        </div>
        <div className="mt-8 space-y-4 text-left">
          {t.raveMedia.paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-cream/70 sm:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { IconFeather, IconOm } from "./icons";

export function MessageSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-ivory px-6 py-16 sm:py-20">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-dashed border-gold/40 bg-cream/60 px-8 py-12 shadow-sm sm:grid-cols-[1fr_1.1fr] sm:px-14">
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-gold/30 shadow-xl shadow-maroon-900/15">
            <Image
              src="/imagwgosewak.jpg"
              alt={`${t.hero.title1} ${t.hero.title2}`}
              width={4961}
              height={3508}
              className="h-auto w-full object-cover"
            />
          </div>
          {/* <div className="flex items-center gap-2">
            <IconFeather className="h-8 w-8 shrink-0 text-gold/70" />
            <p className="font-heading text-2xl font-semibold text-maroon-950">
              {t.message.signature}
            </p>
          </div> */}
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

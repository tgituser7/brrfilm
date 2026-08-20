"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { JOIN_FORM_URL } from "@/lib/links";
import { IconCalendar, IconNamaste, IconPlay } from "./icons";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[600px] items-center overflow-hidden py-14 sm:min-h-[680px] lg:min-h-[740px]"
    >
      <Image
        src="/topimage.jpeg"
        alt={`${t.hero.title1} ${t.hero.title2} — ${t.hero.directorName}`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_40%]"
      />
      <div className="bg-hero-scrim pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-xl">
          <p
            className="animate-fade-up divider-ornament font-heading text-lg text-crimson"
            style={{ justifyContent: "flex-start" }}
          >
            {t.hero.ornament}
          </p>

          {/* <h1
            className="animate-fade-up mt-4 font-heading text-6xl font-bold leading-[1.25] sm:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gold-deep block pb-1">{t.hero.title1}</span>
            <span className="block pb-1 text-maroon-900">{t.hero.title2}</span>
          </h1> */}

          <div
            className="animate-fade-up mt-6 space-y-1 text-base leading-relaxed text-ink/80 sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.tagline.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          {/* <div className="animate-fade-up mt-7" style={{ animationDelay: "0.3s" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson/70">
              {t.hero.directorLabel}
            </p>
            <p className="mt-1 font-heading text-2xl font-semibold text-maroon-950">
              {t.hero.directorName}
            </p>
          </div> */}

          <div
            className="animate-fade-up mt-9 flex flex-col items-start gap-4 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="https://youtube.com/@boloradheradheofficial-jj5xh?si=kdkMbB9w5MZYatU3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon-800 to-maroon-900 px-4 py-2 text-sm font-semibold tracking-wide text-cream shadow-lg shadow-maroon-900/25 transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-3.5"
            >
              <IconPlay className="h-4 w-4" />
              {t.hero.ctaTrailer}
            </a>
            <a
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-maroon-900/40 bg-cream/80 px-4 py-2 text-sm font-semibold tracking-wide text-maroon-900 backdrop-blur-sm transition-colors hover:bg-cream sm:px-7 sm:py-3.5"
            >
              <IconNamaste className="h-4 w-4" />
              {t.hero.ctaJoin}
            </a>
          </div>

          <div
            className="animate-fade-up mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/75 px-4 py-2 backdrop-blur-sm"
            style={{ animationDelay: "0.5s" }}
          >
            <IconCalendar className="h-4 w-4 text-crimson" />
            <span className="text-sm font-semibold text-maroon-900">
              {t.hero.releaseDate}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

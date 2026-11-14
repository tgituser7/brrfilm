"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { JOIN_FORM_URL } from "@/lib/links";
import { useNotifyModal } from "@/lib/NotifyModalContext";
import { formatCompactCount } from "@/lib/format";
import { SpiritualParticles } from "./SpiritualParticles";
import { IconBell, IconCalendar, IconNamaste, IconPlay } from "./icons";

export function Hero() {
  const { t, language } = useLanguage();
  const { openModal, notifiedCount } = useNotifyModal();

  const content = (
    <div className="mx-auto max-w-xl text-center sm:mx-0 sm:text-left">
      <p className="animate-fade-up divider-ornament justify-center font-heading text-lg text-crimson sm:justify-start sm:text-[2.4rem]">
        {t.hero.ornament}
      </p>

      <div
        className="animate-fade-up mt-6 space-y-1 text-base leading-relaxed text-ink/80 sm:mt-[3rem] sm:text-lg"
        style={{ animationDelay: "0.2s" }}
      >
        {t.hero.tagline.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div
        className={`animate-fade-up flex flex-col items-center gap-4 sm:flex-row sm:items-start ${
          language === "hi" ? "mt-5 sm:mt-[10.25rem]" : "mt-5 sm:mt-[12.25rem]"
        }`}
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
        className="animate-fade-up mt-6 flex flex-col items-center gap-3 sm:flex-row sm:items-start"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/75 px-4 py-2 backdrop-blur-sm">
          <IconCalendar className="h-4 w-4 text-crimson" />
          <span className="text-sm font-semibold text-maroon-900">{t.hero.releaseDate}</span>
        </div>
        <button
          type="button"
          onClick={openModal}
          className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-4 py-2 font-semibold text-maroon-950 shadow-lg shadow-gold/30 transition-all hover:bg-right hover:scale-105"
        >
          <span className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
            <IconBell className="animate-bell-ring-loop h-4 w-4 text-maroon-950" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 animate-ping rounded-full bg-crimson" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-crimson" />
          </span>
          <span className="text-sm">{t.hero.ctaNotify}</span>
          {notifiedCount !== null && notifiedCount > 0 && (
            <span className="rounded-full bg-maroon-950/15 px-2 py-0.5 text-xs font-bold">
              {formatCompactCount(notifiedCount)} {t.notify.fansShort}
            </span>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      {/* Mobile: a shorter, wide band framing the cow, fading into the text below it */}
      <div className="relative sm:hidden">
        <div className="relative h-[300px] w-full">
          <Image
            src="/topimage.png"
            alt={`${t.hero.title1} ${t.hero.title2} — ${t.hero.directorName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_40%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream to-transparent" />
        </div>
        <div className="px-6 pb-8 pt-4">{content}</div>
      </div>

      {/* Desktop/tablet: full-bleed background with content overlaid */}
      <div className="relative hidden min-h-[680px] items-center overflow-hidden py-14 sm:flex lg:min-h-[740px]">
        <Image
          src="/topimage.png"
          alt={`${t.hero.title1} ${t.hero.title2} — ${t.hero.directorName}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_40%]"
        />
        <div className="bg-hero-scrim pointer-events-none absolute inset-0" />
        <SpiritualParticles />
        <div className="relative w-full max-w-6xl px-6 lg:px-10">{content}</div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { IconPlay } from "./icons";

export function AboutFilm() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleVideoToggle() {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4">
            {t.about.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/75 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>

        <div className="group relative aspect-video overflow-hidden rounded-2xl border border-gold/25 bg-devotional shadow-2xl shadow-maroon-900/20">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/BRR_AboutFilm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />

          <button
            type="button"
            onClick={handleVideoToggle}
            aria-label={isPlaying ? "Pause video" : t.hero.ctaTrailer}
            className="absolute inset-0 flex items-center justify-center"
          >
            {!isPlaying && (
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-cream/10 text-gold-light backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                <IconPlay className="h-7 w-7 translate-x-0.5 sm:h-8 sm:w-8" />
              </span>
            )}
          </button>

          <p className="absolute bottom-4 left-5 font-heading text-lg text-gold-light">
            {t.about.videoCaption}
          </p>
        </div>
      </div>
    </section>
  );
}

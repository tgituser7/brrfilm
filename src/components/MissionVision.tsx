"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { IconEye, IconTarget } from "./icons";

export function MissionVision() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: IconTarget,
      title: t.missionVision.mission.title,
      paragraphs: [t.missionVision.mission.description],
    },
    {
      icon: IconEye,
      title: t.missionVision.vision.title,
      paragraphs: t.missionVision.vision.paragraphs,
    },
  ];

  return (
    <section id="mission-vision" className="relative overflow-hidden py-20 sm:py-28">
      <Image src="/mv_bg.jpeg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/70 via-maroon-950/40 to-maroon-950/70" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
          {t.missionVision.eyebrow}
        </p> */}
        <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
          {t.missionVision.title}
        </h2>
      </div>

      <div className="relative mx-auto mt-14 grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
        {cards.map(({ icon: Icon, title, paragraphs }) => (
          <div
            key={title}
            className="card-lift rounded-2xl border border-gold/25 bg-maroon-950/50 p-8 shadow-lg shadow-maroon-950/20 backdrop-blur-sm"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-center font-heading text-xl font-semibold text-cream">
              {title}
            </h3>
            <div className="mt-3 space-y-2.5 text-left">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-cream/70">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

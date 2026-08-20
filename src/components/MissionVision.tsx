"use client";

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
    <section id="mission-vision" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
          {t.missionVision.eyebrow}
        </p> */}
        <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
          {t.missionVision.title}
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
        {cards.map(({ icon: Icon, title, paragraphs }) => (
          <div
            key={title}
            className="card-lift rounded-2xl border border-maroon-900/10 bg-ivory p-8 shadow-sm"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 text-maroon-800">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-center font-heading text-xl font-semibold text-maroon-950">
              {title}
            </h3>
            <div className="mt-3 space-y-2.5 text-left">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink/70">
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

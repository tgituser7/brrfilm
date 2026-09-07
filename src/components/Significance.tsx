"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import {
  IconDrop,
  IconEarth,
  IconFlute,
  IconHandHeart,
  IconLotusHeart,
  IconSun,
} from "./icons";

const icons = [IconSun, IconEarth, IconLotusHeart, IconDrop, IconHandHeart, IconFlute];

const CARD_IMAGES = [
  "/Kamdhenu.jpeg",
  "/motherearth.jpeg",
  "/Ahimsa.jpeg",
  "/Ayurvedic.jpeg",
  "/GauSeva.jpeg",
  "/KrishnaHeard.jpeg",
];

export function Significance() {
  const { t } = useLanguage();

  return (
    <section id="significance" className="relative overflow-hidden bg-ivory py-24 sm:py-32">
      <Image src="/significance_bg.png" alt="" fill sizes="100vw" className="object-cover" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
          {t.significance.eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
          {t.significance.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.significance.intro}
        </p>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.significance.cards.map((card, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={card.title}
              className="card-lift relative overflow-hidden rounded-2xl border border-maroon-900/10 p-7 shadow-sm"
            >
              <Image
                src={CARD_IMAGES[i % CARD_IMAGES.length]}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-cream/60" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 text-maroon-800">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 font-heading text-lg font-semibold text-maroon-950">
                {card.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-ink/70">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

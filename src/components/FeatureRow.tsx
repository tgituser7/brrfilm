"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

const images = ["/the_cow.png", "/the_farmer.png", "/the_village.png", "/the_devotion.png"];

export function FeatureRow() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-24">
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-[1.75rem] border border-maroon-900/10 bg-cream px-6 py-9 shadow-sm sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-maroon-900/10">
        {t.features.map((feature, i) => (
          <div key={feature.title} className="flex flex-col items-center px-2 text-center">
            <span className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gold/40 shadow-md shadow-maroon-900/10">
              <Image
                src={images[i % images.length]}
                alt={feature.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </span>
            <h3 className="mt-3 font-heading text-base font-semibold text-maroon-950">
              {feature.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-ink/60">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

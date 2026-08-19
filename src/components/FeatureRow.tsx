"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { IconCow, IconEarth, IconFarmer, IconNamaste, IconVillage } from "./icons";

const icons = [IconCow, IconFarmer, IconVillage, IconNamaste, IconEarth];

export function FeatureRow() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-20 sm:pb-24">
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-[1.75rem] border border-maroon-900/10 bg-cream px-6 py-9 shadow-sm sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-maroon-900/10">
        {t.features.map((feature, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={feature.title} className="flex flex-col items-center px-2 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-saffron/15 to-gold/15 text-maroon-800">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-3 font-heading text-base font-semibold text-maroon-950">
                {feature.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-ink/60">
                {feature.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

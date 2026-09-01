"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const PHRASES = [
  { lang: "हिन्दी", text: "बोलो राधे राधे" },
  { lang: "छत्तीसगढ़ी", text: "बोलव राधे राधे" },
  { lang: "বাংলা", text: "বলো রাধে রাধে" },
  { lang: "ગુજરાતી", text: "બોલો રાધે રાધે" },
  { lang: "தமிழ்", text: "போலோ ராதே ராதே" },
  { lang: "తెలుగు", text: "బోలో రాధే రాధే" },
  { lang: "ಕನ್ನಡ", text: "ಬೋಲೋ ರಾಧೇ ರಾಧೇ" },
  { lang: "മലയാളം", text: "ബോലോ രാധേ രാധേ" },
  { lang: "ଓଡ଼ିଆ", text: "ବୋଲୋ ରାଧେ ରାଧେ" },
];

const HOLD_MS = 2000;
const FADE_MS = 450;

export function MultilingualChant() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % PHRASES.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS + FADE_MS);
    return () => clearInterval(interval);
  }, []);

  const current = PHRASES[index];

  return (
    <section className="relative overflow-hidden bg-devotional py-20 sm:py-28">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
          {t.multilingualChant.eyebrow}
        </p>

        <div className="mt-8 flex h-28 items-center justify-center sm:h-36">
          <p
            className={`font-heading text-4xl font-bold text-gold-light transition-all ease-out sm:text-6xl ${
              visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDuration: `${FADE_MS}ms` }}
          >
            {current.text}
          </p>
        </div>

        <p
          className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-cream/60 transition-opacity ease-out"
          style={{ transitionDuration: `${FADE_MS}ms`, opacity: visible ? 1 : 0 }}
        >
          {current.lang}
        </p>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
          {t.multilingualChant.description}
        </p>
      </div>
    </section>
  );
}

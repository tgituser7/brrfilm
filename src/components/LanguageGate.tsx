"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Language } from "@/lib/translations";
import { IconOm } from "./icons";

const CHANT_AUDIO_SRC = "/Bolo_Radhe.mp3";

export function LanguageGate() {
  const { setLanguage } = useLanguage();
  const [visible, setVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  function choose(lang: Language) {
    setLanguage(lang);
    audioRef.current?.play().catch(() => {});
    setVisible(false);
  }

  return (
    <>
      <audio ref={audioRef} src={CHANT_AUDIO_SRC} preload="auto" />
      {visible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-maroon-950/80 px-6 backdrop-blur-sm">
          <div className="bg-devotional relative w-full max-w-sm overflow-hidden rounded-[1.75rem] border border-gold/30 px-8 py-10 text-center shadow-2xl">
            <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
            <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light">
              <IconOm className="h-7 w-7" />
            </span>
            <p className="relative mt-5 font-heading text-xl font-semibold text-cream">
              अपनी भाषा चुनें
            </p>
            <p className="relative mt-1 text-sm text-cream/60">Choose Your Language</p>

            <div className="relative mt-7 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => choose("hi")}
                className="rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-6 py-3.5 text-base font-semibold text-maroon-950 shadow-lg shadow-maroon-950/20 transition-all hover:bg-right"
              >
                हिंदी
              </button>
              <button
                type="button"
                onClick={() => choose("en")}
                className="rounded-full border border-gold/40 px-6 py-3.5 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

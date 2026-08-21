"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { IconMusicNote } from "./icons";

const MUSIC_SRC = "/Bolo_Radhe.mp3";

type Status = "asking" | "playing" | "dismissed";

export function BackgroundMusicPrompt() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("asking");
  const audioRef = useRef<HTMLAudioElement>(null);

  function handleYes() {
    audioRef.current?.play().catch(() => {});
    setStatus("playing");
  }

  function handleNo() {
    setStatus("dismissed");
  }

  function toggleMute() {
    if (!audioRef.current) return;
    if (status === "playing") {
      audioRef.current.pause();
      setStatus("dismissed");
    } else {
      audioRef.current.play().catch(() => {});
      setStatus("playing");
    }
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />

      {status === "asking" && (
        <div className="animate-fade-up fixed bottom-5 left-5 z-50 w-[min(90vw,300px)] rounded-2xl border border-gold/30 bg-devotional px-5 py-4 shadow-2xl shadow-maroon-950/40">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-light">
              <IconMusicNote className="h-4 w-4" />
            </span>
            <p className="text-sm font-medium leading-snug text-cream">
              {t.musicPrompt.question}
            </p>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={handleYes}
              className="flex-1 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron px-4 py-2 text-xs font-semibold text-maroon-950 transition-transform hover:scale-[1.02]"
            >
              {t.musicPrompt.yes}
            </button>
            <button
              type="button"
              onClick={handleNo}
              className="flex-1 rounded-full border border-cream/25 px-4 py-2 text-xs font-semibold text-cream/75 transition-colors hover:bg-cream/10"
            >
              {t.musicPrompt.no}
            </button>
          </div>
        </div>
      )}

      {status !== "asking" && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label="Toggle background music"
          aria-pressed={status === "playing"}
          className={`fixed bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 shadow-lg shadow-maroon-950/30 transition-colors ${
            status === "playing"
              ? "bg-devotional text-gold-light"
              : "bg-cream text-maroon-900/50"
          }`}
        >
          <IconMusicNote className="h-5 w-5" />
        </button>
      )}
    </>
  );
}

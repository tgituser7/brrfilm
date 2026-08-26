"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { IconMusicNote } from "./icons";

function SongList({
  songs,
}: {
  songs: readonly { title: string; credit: string }[];
}) {
  return (
    <ul className="space-y-6">
      {songs.map((song) => (
        <li key={song.title} className="text-center sm:text-left">
          <p className="font-heading text-lg font-semibold text-gold-light sm:text-xl">
            {song.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-cream/70 sm:text-base">
            {song.credit}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function MusicCatalogue() {
  const { t } = useLanguage();

  return (
    <section id="music" className="relative overflow-hidden bg-maroon-950 py-20 sm:py-28">
      <Image src="/music_bg.jpeg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold">
            <IconMusicNote className="h-7 w-7" />
          </span>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            {t.music.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
            {t.music.title}
          </h2>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-8">
          <div>
            <h3 className="text-center font-heading text-xl font-semibold text-gold sm:text-left sm:text-2xl">
              {t.music.firstHalf}
            </h3>
            <div className="mt-6">
              <SongList songs={t.music.songsFirstHalf} />
            </div>
          </div>
          <div>
            <h3 className="text-center font-heading text-xl font-semibold text-gold sm:text-left sm:text-2xl">
              {t.music.secondHalf}
            </h3>
            <div className="mt-6">
              <SongList songs={t.music.songsSecondHalf} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

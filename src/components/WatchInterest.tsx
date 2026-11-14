"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { useNotifyModal } from "@/lib/NotifyModalContext";
import { formatCompactCount } from "@/lib/format";
import { Bell3D } from "./Bell3D";
import { IconBell } from "./icons";

export function WatchInterest() {
  const { t } = useLanguage();
  const { openModal, notifiedCount } = useNotifyModal();
  const [ringing, setRinging] = useState(false);

  function ringBell() {
    setRinging(true);
    setTimeout(() => setRinging(false), 800);
    setTimeout(() => openModal(), 500);
  }

  return (
    <section id="notify" className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <Image
        src="/ri1.jpeg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-[0.12]"
      />
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
          {t.notify.eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-maroon-950 sm:text-4xl">
          {t.notify.title}
        </h2>

        <button
          type="button"
          onClick={ringBell}
          aria-label={t.notify.title}
          className="group relative mx-auto mt-6 flex h-24 w-24 cursor-pointer items-center justify-center transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
          <Bell3D trigger={ringing} className="relative h-full w-full" />
        </button>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.notify.description}
        </p>

        {notifiedCount !== null && notifiedCount > 0 && (
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-cream/80 px-4 py-2">
            <IconBell className="h-4 w-4 text-crimson" />
            <span className="text-sm font-semibold text-maroon-900">
              {formatCompactCount(notifiedCount)} {t.notify.notifiedCount}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

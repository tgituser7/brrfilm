"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export function GomataSevaForum() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
          {t.gomataSevaForum.eyebrow}
        </p>
        <div className="mx-auto mt-6 w-full max-w-[170px] overflow-hidden rounded-2xl border border-gold/30 bg-white p-3 shadow-lg shadow-maroon-900/15">
          <Image
            src="/fomata_seva_forun.png"
            alt="Gomata Seva Forum"
            width={380}
            height={340}
            className="h-auto w-full"
          />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.gomataSevaForum.description}
        </p>
      </div>
    </section>
  );
}

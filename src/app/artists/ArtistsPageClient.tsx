"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";
import { LEAD_ARTISTS, FEATURED_CAST, EXPECTED_CAST } from "./data";

export function ArtistsPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-devotional px-6 pt-32 pb-20 sm:pt-40">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              {t.artistsPage.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
              {t.artistsPage.title}
            </h1>
          </div>
        </section>

        <section className="relative overflow-hidden bg-maroon-950 px-6 py-16 sm:py-20">
          <Image src="/artist_bg.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/55 via-maroon-950/40 to-maroon-950/60" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-6xl">
            <h2 className="text-center font-heading text-2xl font-bold text-cream sm:text-3xl">
              {t.artistsPage.leadTitle}
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {LEAD_ARTISTS.map((artist) => (
                <div
                  key={artist.character}
                  className="card-lift rounded-[1.75rem] border border-maroon-900/10 bg-ivory p-7 text-center shadow-xl shadow-maroon-900/10"
                >
                  <span className="relative mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-gold/50 shadow-lg shadow-maroon-950/20">
                    <Image src={artist.image} alt={artist.actor} fill sizes="128px" className="object-cover" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-maroon-950">
                    {artist.character}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-crimson">{artist.actor}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{artist.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-maroon-950 px-6 py-16 sm:py-20">
          <Image src="/artist_bg2.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/65 via-maroon-950/55 to-maroon-950/70" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
                {t.artistsPage.featuredTitle}
              </h2>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold/70">
                {t.artistsPage.featuredSubtitle}
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {FEATURED_CAST.map((artist) => (
                <div
                  key={artist.actor}
                  className="card-lift overflow-hidden rounded-[1.5rem] border border-gold/30 bg-maroon-900/50 text-center backdrop-blur-sm"
                >
                  <p className="pt-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold-light/80">
                    {t.artistsPage.featuredBadge}
                  </p>
                  <span className="relative mx-auto mt-3 flex aspect-[4/5] w-full items-center justify-center overflow-hidden border-y border-gold/30">
                    <Image
                      src={artist.image}
                      alt={artist.actor}
                      fill
                      sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </span>
                  <div className="px-5 py-5">
                    <h3 className="font-heading text-base font-semibold text-cream">{artist.actor}</h3>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-gold">
                      as {artist.role}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-cream/70">{artist.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="mt-16 text-center font-heading text-2xl font-bold text-cream sm:text-3xl">
              {t.artistsPage.castTitle}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {EXPECTED_CAST.map((member) => (
                <div key={`${member.actor}-${member.role}`} className="text-center">
                  <span className="relative mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-gold/40">
                    <Image src={member.image} alt={member.actor} fill sizes="96px" className="object-cover" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-cream">{member.actor}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wide text-gold/70">
                    as {member.role}
                  </p>
                  {member.note && (
                    <p className="mt-1.5 px-1 text-xs leading-snug text-cream/60">{member.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

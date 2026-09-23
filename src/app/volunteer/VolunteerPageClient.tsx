"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IconNamaste } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";
import { JOIN_FORM_URL } from "@/lib/links";
import { TESTIMONIALS, AVATAR_TINTS, SHORTS } from "./data";

export function VolunteerPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-devotional px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="relative inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-2 border-gold/50 shadow-lg shadow-maroon-950/25">
              <Image src="/the_cow.png" alt="" fill sizes="80px" className="object-cover" />
            </span>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              {t.volunteerPage.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
              {t.volunteerPage.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
              {t.volunteerPage.intro}
            </p>
          </div>
        </section>

        <section className="relative bg-cream px-6 py-16 sm:py-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((volunteer, i) => (
              <figure
                key={volunteer.name}
                className="card-lift flex items-stretch gap-5 rounded-[1.75rem] border border-maroon-900/10 bg-ivory p-7 shadow-xl shadow-maroon-900/10"
              >
                {volunteer.image ? (
                  <span className="relative h-56 w-36 flex-shrink-0 self-start overflow-hidden rounded-2xl border border-maroon-900/10 shadow-sm">
                    <Image
                      src={volunteer.image}
                      alt={volunteer.name}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span
                    className={`flex h-56 w-36 flex-shrink-0 self-start items-center justify-center rounded-2xl border font-heading text-lg font-semibold ${
                      AVATAR_TINTS[i % AVATAR_TINTS.length]
                    }`}
                  >
                    {volunteer.initials}
                  </span>
                )}
                <div className="flex flex-1 flex-col">
                  <div className="flex-1">
                    <span
                      aria-hidden="true"
                      className="font-heading text-4xl leading-none text-gold/50"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="mt-1 text-sm leading-relaxed text-ink/75 sm:text-[0.95rem]">
                      {volunteer.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-4">
                    <span className="block font-heading text-sm font-semibold text-maroon-950">
                      {volunteer.name}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold uppercase tracking-wide text-crimson/70">
                      {volunteer.role}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-maroon-950 px-6 py-16 sm:py-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              {t.volunteerPage.shortsEyebrow}
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-cream sm:text-3xl">
              {t.volunteerPage.shortsTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
              {t.volunteerPage.shortsIntro}
            </p>
          </div>

          <div className="relative mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SHORTS.map((short) => (
              <div key={short.videoId} className="group">
                <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.5rem] border-2 border-gold/40 bg-black shadow-xl shadow-maroon-950/40 transition-transform group-hover:-translate-y-1">
                  <iframe
                    src={`https://www.youtube.com/embed/${short.videoId}`}
                    title={short.name}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="block font-heading text-sm font-semibold text-gold">
                    {short.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-cream/60">{short.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-devotional px-6 py-16 sm:py-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light">
              <IconNamaste className="h-7 w-7" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-cream sm:text-3xl">
              {t.volunteerPage.ctaTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              {t.volunteerPage.ctaDescription}
            </p>
            <Link
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-7 py-3 text-sm font-semibold text-maroon-950 shadow-lg shadow-maroon-950/25 transition-all hover:bg-right"
            >
              <IconNamaste className="h-4 w-4" />
              {t.volunteerPage.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

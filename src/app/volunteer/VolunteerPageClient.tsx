"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IconHandHeart, IconNamaste } from "@/components/icons";
import { useLanguage } from "@/lib/LanguageContext";
import { JOIN_FORM_URL } from "@/lib/links";
import { TESTIMONIALS, AVATAR_TINTS } from "./data";

export function VolunteerPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-devotional px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-light">
              <IconHandHeart className="h-7 w-7" />
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
          <div className="relative mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((volunteer, i) => (
              <figure
                key={volunteer.name}
                className="card-lift flex flex-col rounded-[1.75rem] border border-maroon-900/10 bg-ivory p-7 shadow-xl shadow-maroon-900/10"
              >
                <span
                  aria-hidden="true"
                  className="font-heading text-5xl leading-none text-gold/50"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink/75 sm:text-[0.95rem]">
                  {volunteer.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border font-heading text-sm font-semibold ${
                      AVATAR_TINTS[i % AVATAR_TINTS.length]
                    }`}
                  >
                    {volunteer.initials}
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-maroon-950">
                      {volunteer.name}
                    </span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-crimson/70">
                      {volunteer.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-maroon-950 px-6 py-16 sm:py-20">
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

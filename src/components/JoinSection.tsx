"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { JOIN_FORM_URL } from "@/lib/links";
import { IconNamaste } from "./icons";
import { facebookFan, socials } from "./socials";

export function JoinSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", location: "", phone: "", email: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
    setForm({ name: "", location: "", phone: "", email: "" });
  }

  return (
    <section id="join" className="relative bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border border-maroon-900/10 bg-ivory p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
            {t.join.eyebrow}
          </p>
          <p className="mt-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            {t.join.description}
          </p>
          <a
            href={JOIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon-800 to-maroon-900 px-7 py-3 text-sm font-semibold text-cream shadow-md shadow-maroon-900/25 transition-transform hover:-translate-y-0.5"
          >
            <IconNamaste className="h-4 w-4" />
            {t.join.cta}
          </a>

          <div className="mt-10 border-t border-maroon-900/10 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-maroon-800/70">
              {t.join.followUs}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-maroon-900/15 text-maroon-800 transition-colors hover:border-gold/60 hover:bg-gold/10"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <a
                href={facebookFan.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center gap-2 rounded-full bg-[#1877F2] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1467d8]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d={facebookFan.path} />
                </svg>
                {facebookFan.name}
              </a>
            </div>
          </div>
        </div>

        <div
          id="join-form"
          className="rounded-[1.75rem] border border-maroon-900/10 bg-ivory p-8 shadow-sm sm:p-10"
        >
          <h3 className="font-heading text-xl font-semibold text-maroon-950">
            {t.join.formTitle}
          </h3>

          {submitted ? (
            <p className="mt-8 rounded-xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm font-medium text-maroon-900">
              {t.join.formSuccess}
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder={t.join.formName}
                className="w-full rounded-xl border border-maroon-900/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-maroon-700/50"
              />
              <input
                type="text"
                value={form.location}
                onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                placeholder={t.join.formLocation}
                className="w-full rounded-xl border border-maroon-900/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-maroon-700/50"
              />
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder={t.join.formPhone}
                className="w-full rounded-xl border border-maroon-900/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-maroon-700/50"
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder={t.join.formEmail}
                className="w-full rounded-xl border border-maroon-900/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-maroon-700/50"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-6 py-3.5 text-sm font-semibold text-maroon-950 transition-all hover:bg-right"
              >
                {t.join.formSubmit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

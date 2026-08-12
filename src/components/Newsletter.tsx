"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="news" className="relative bg-ivory px-6 py-20 sm:py-28">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl rounded-[2rem] border border-gold/25 bg-devotional px-6 py-14 text-center shadow-2xl shadow-maroon-900/20 sm:px-14 sm:py-16">
        <h2 className="font-heading text-2xl font-bold text-cream sm:text-3xl">
          {t.news.title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/70 sm:text-base">
          {t.news.description}
        </p>

        {submitted ? (
          <p className="mx-auto mt-8 max-w-sm rounded-full border border-gold/40 bg-cream/10 px-6 py-3 text-sm font-medium text-gold-light">
            🙏
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.news.placeholder}
              className="w-full flex-1 rounded-full border border-gold/30 bg-cream/10 px-5 py-3 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-gold/60"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-6 py-3 text-sm font-semibold text-maroon-950 transition-all hover:bg-right"
            >
              {t.news.button}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-cream/45">{t.news.disclaimer}</p>
      </div>
    </section>
  );
}

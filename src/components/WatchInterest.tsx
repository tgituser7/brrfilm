"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { IconBell } from "./icons";

const MOBILE_REGEX = /^(\+91[-\s]?)?[6-9]\d{9}$/;

export function WatchInterest() {
  const { t } = useLanguage();
  const [ringing, setRinging] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  function ringBell() {
    setRinging(true);
    setTimeout(() => setRinging(false), 800);
    setOpen(true);
  }

  function playBellSound() {
    const audio = new Audio("/temple_bell_single_ring.mp3");
    audio.play().catch(() => {});
    setRinging(true);
    setTimeout(() => setRinging(false), 1200);
  }

  function closeModal() {
    setOpen(false);
    setStatus("idle");
    setFieldError(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldError(null);

    if (!name.trim()) {
      setFieldError(t.notify.errorName);
      return;
    }
    if (!MOBILE_REGEX.test(mobile.trim())) {
      setFieldError(t.notify.errorMobile);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), mobile: mobile.trim() }),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      playBellSound();
      setName("");
      setMobile("");
    } catch {
      setStatus("error");
    }
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
          className="group relative mx-auto mt-6 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-saffron via-gold to-saffron shadow-xl shadow-maroon-900/25 transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/50" />
          <IconBell
            className={`relative h-9 w-9 text-maroon-950 ${ringing ? "animate-bell-ring" : ""}`}
          />
        </button>

        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.notify.description}
        </p>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-maroon-950/70 px-6 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-sm rounded-[1.75rem] border border-gold/25 bg-ivory p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label={t.notify.close}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-maroon-900/50 transition-colors hover:bg-maroon-900/5 hover:text-maroon-900"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="py-4 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <IconBell className={`h-7 w-7 ${ringing ? "animate-bell-ring" : ""}`} />
                </span>
                <p className="mt-5 font-heading text-lg font-semibold text-maroon-950">
                  {t.notify.formSuccess}
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-xl font-semibold text-maroon-950">
                  {t.notify.modalTitle}
                </h3>
                <p className="mt-1.5 text-sm text-ink/65">{t.notify.modalSubtitle}</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.notify.formName}
                    className="w-full rounded-xl border border-maroon-900/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-maroon-700/50"
                  />
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder={t.notify.formMobile}
                    className="w-full rounded-xl border border-maroon-900/15 bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-maroon-700/50"
                  />

                  {fieldError && <p className="text-xs font-medium text-crimson">{fieldError}</p>}
                  {status === "error" && (
                    <p className="text-xs font-medium text-crimson">{t.notify.errorGeneric}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-xl bg-gradient-to-r from-saffron via-gold to-saffron bg-[length:200%_auto] px-6 py-3.5 text-sm font-semibold text-maroon-950 transition-all hover:bg-right disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? t.notify.formSubmitting : t.notify.formSubmit}
                  </button>
                </form>

                <p className="mt-4 text-xs leading-relaxed text-ink/50">{t.notify.disclaimer}</p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

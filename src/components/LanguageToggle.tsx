"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function LanguageToggle({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { language, setLanguage } = useLanguage();

  const track =
    variant === "dark"
      ? "border-gold/40 bg-maroon-950/40"
      : "border-maroon-800/20 bg-white/70";

  return (
    <div
      className={`inline-flex items-center rounded-full border p-1 text-xs font-semibold tracking-wide backdrop-blur ${track}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage("hi")}
        aria-pressed={language === "hi"}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          language === "hi"
            ? "bg-gradient-to-r from-saffron to-gold text-maroon-950 shadow-sm"
            : variant === "dark"
              ? "text-cream/70 hover:text-cream"
              : "text-maroon-800/60 hover:text-maroon-900"
        }`}
      >
        हिंदी
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          language === "en"
            ? "bg-gradient-to-r from-saffron to-gold text-maroon-950 shadow-sm"
            : variant === "dark"
              ? "text-cream/70 hover:text-cream"
              : "text-maroon-800/60 hover:text-maroon-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}

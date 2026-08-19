"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useCountdown } from "@/lib/useCountdown";
import { IconCalendar } from "./icons";

export function CountdownWidget() {
  const { t } = useLanguage();
  const time = useCountdown();
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setVisitors(data.count))
      .catch(() => {});
  }, []);

  if (!time) return null;

  const units = [
    { value: time.days, label: t.countdown.days },
    { value: time.hours, label: t.countdown.hours },
    { value: time.minutes, label: t.countdown.minutes },
    { value: time.seconds, label: t.countdown.seconds },
  ];

  return (
    <div className="fixed right-5 top-24 z-40 w-[196px] rounded-2xl border border-gold/30 bg-devotional px-4 py-3.5 shadow-2xl shadow-maroon-950/40 sm:w-[220px]">
      <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-saffron-light">
        <IconCalendar className="h-3.5 w-3.5" />
        {t.countdown.label}
      </div>
      <div className="mt-2 grid grid-cols-4 gap-1.5 text-center">
        {units.map((u) => (
          <div key={u.label}>
            <p className="font-heading text-lg font-bold text-cream">
              {String(u.value).padStart(2, "0")}
            </p>
            <p className="text-[9px] uppercase tracking-wide text-cream/55">{u.label}</p>
          </div>
        ))}
      </div>
      {visitors !== null && (
        <div className="mt-3 flex items-center justify-between border-t border-cream/10 pt-2.5 text-[11px] text-cream/70">
          <span>{t.countdown.visitors}</span>
          <span className="font-heading font-semibold text-gold-light">
            {visitors.toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}

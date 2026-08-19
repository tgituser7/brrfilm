"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useCountdown } from "@/lib/useCountdown";
import { IconCalendar, IconEye } from "./icons";

export function CountdownSection() {
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
    <div className="relative overflow-hidden bg-devotional py-7">
      <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 px-6 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-saffron-light">
          <IconCalendar className="h-4 w-4" />
          {t.countdown.label}
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-center gap-3 sm:gap-5">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-cream sm:text-3xl">
                  {String(u.value).padStart(2, "0")}
                </p>
                <p className="text-[10px] uppercase tracking-wide text-cream/55">{u.label}</p>
              </div>
              {i < units.length - 1 && <span className="text-xl text-cream/20">:</span>}
            </div>
          ))}
        </div>

        {visitors !== null && (
          <div className="flex items-center gap-2.5 border-t border-cream/15 pt-4 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold-light">
              <IconEye className="h-4 w-4" />
            </span>
            <div>
              <p className="font-heading text-xl font-bold text-cream sm:text-2xl">
                {visitors.toLocaleString()}
              </p>
              <p className="text-[10px] uppercase tracking-wide text-cream/55">
                {t.countdown.visitors}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

const RELEASE_DATE = new Date("2027-08-20T00:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(0, RELEASE_DATE - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function useCountdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    // Initial value must come from the client's clock post-mount to avoid an
    // SSR/CSR mismatch (server and client would otherwise compute different times).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

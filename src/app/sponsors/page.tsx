import type { Metadata } from "next";
import { SponsorsPageClient } from "./SponsorsPageClient";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Sponsors | हमारे प्रायोजक";
const DESCRIPTION =
  "The spiritual, media, distribution, and social organisations proudly supporting Bolo Radhe Radhe — a devotional film for Gau Mata. बोलो राधे राधे फ़िल्म के प्रायोजक और सहयोगी संगठन।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sponsors" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/sponsors`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SponsorsPage() {
  return <SponsorsPageClient />;
}

import type { Metadata } from "next";
import { MerchandisePageClient } from "./MerchandisePageClient";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Merchandise | आधिकारिक मर्चेंडाइज़";
const DESCRIPTION =
  "Official Bolo Radhe Radhe merchandise — devotional, culture-inspired t-shirts, caps, and cups. Carry the spirit of Gau Mata and the film with you. बोलो राधे राधे का आधिकारिक मर्चेंडाइज़।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/merchandise" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/merchandise`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function MerchandisePage() {
  return <MerchandisePageClient />;
}

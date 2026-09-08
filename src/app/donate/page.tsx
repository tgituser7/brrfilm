import type { Metadata } from "next";
import { DonatePageClient } from "./DonatePageClient";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Donate | सहयोग करें";
const DESCRIPTION =
  "Support the making of Bolo Radhe Radhe, a Sanatani devotional film honouring Gau Mata, the farmer, and the village. Scan the QR or use UPI to contribute to this mission. सनातनी फ़िल्म बोलो राधे राधे के निर्माण में अपना सहयोग दें।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/donate" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/donate`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function DonatePage() {
  return <DonatePageClient />;
}

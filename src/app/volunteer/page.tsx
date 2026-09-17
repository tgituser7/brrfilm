import type { Metadata } from "next";
import { VolunteerPageClient } from "./VolunteerPageClient";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Volunteers | स्वयंसेवक";
const DESCRIPTION =
  "Meet the volunteers powering Bolo Radhe Radhe — real people giving their time to a devotional film for Gau Mata, the farmer, and the village. बोलो राधे राधे मिशन से जुड़े स्वयंसेवकों की आवाज़।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/volunteer" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/volunteer`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function VolunteerPage() {
  return <VolunteerPageClient />;
}

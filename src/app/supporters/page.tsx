import type { Metadata } from "next";
import { SupportersPageClient } from "./SupportersPageClient";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Supporters | हमारे समर्थक";
const DESCRIPTION =
  "The social organisations, gau raksha sansthans, and spiritual associations standing with Bolo Radhe Radhe across India. बोलो राधे राधे के साथ जुड़े सामाजिक संगठन और समर्थक।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/supporters" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/supporters`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function SupportersPage() {
  return <SupportersPageClient />;
}

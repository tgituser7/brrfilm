import type { Metadata } from "next";
import { ArtistsPageClient } from "./ArtistsPageClient";
import { LEAD_ARTISTS, EXPECTED_CAST } from "./data";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Cast & Artists | फ़िल्म के कलाकार";
const DESCRIPTION =
  "Meet the cast of Bolo Radhe Radhe — Ravi Bhatia as Bansi, Shravan Kumar as Madhav, Nayan Tara as Nirmala Devi, and the full ensemble bringing this devotional saga of Gau Mata to life. बोलो राधे राधे फ़िल्म के सभी कलाकार।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/artists" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/artists`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function ArtistsPage() {
  const actors = [
    ...LEAD_ARTISTS.map((a) => ({ "@type": "Person", name: a.actor, characterName: a.character })),
    ...EXPECTED_CAST.map((a) => ({ "@type": "Person", name: a.actor, characterName: a.role })),
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Movie",
          name: "Bolo Radhe Radhe",
          alternateName: "बोलो राधे राधे",
          url: `${SITE_URL}/artists`,
          director: { "@type": "Person", name: "Ravi Bhatia" },
          productionCompany: { "@type": "Organization", name: "Rave Media" },
          actor: actors,
        }}
      />
      <ArtistsPageClient />
    </>
  );
}

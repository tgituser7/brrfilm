import type { Metadata } from "next";
import { TeamPageClient } from "./TeamPageClient";
import { SITE_URL } from "@/lib/seo";

const TITLE = "Our Team | हमारी टीम";
const DESCRIPTION =
  "Meet the creative and production team behind Bolo Radhe Radhe — art direction, cinematography, editing, and the network of well-wishers and organisations supporting the film. बोलो राधे राधे फ़िल्म की टीम।";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/team" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/team`,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function TeamPage() {
  return <TeamPageClient />;
}

import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Noto_Sans_Devanagari,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";

const headingEn = Playfair_Display({
  variable: "--font-heading-en",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const bodyEn = Inter({
  variable: "--font-body-en",
  subsets: ["latin"],
});

const headingHi = Tiro_Devanagari_Hindi({
  variable: "--font-heading-hi",
  subsets: ["devanagari"],
  weight: "400",
});

const bodyHi = Noto_Sans_Devanagari({
  variable: "--font-body-hi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const DESCRIPTION =
  "बोलो राधे राधे — गौ माता, किसान और गांव की एक पवित्र सिनेमाई गाथा। Bolo Radhe Radhe — a sacred cinematic saga of Gau Mata, the farmer, and the village. A film by Ravi Bhatia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Bolo Radhe Radhe",
    "बोलो राधे राधे",
    "Gau Mata film",
    "गौ माता फिल्म",
    "Ravi Bhatia film",
    "Sanatani film",
    "Hindu devotional film",
    "Krishna devotion movie",
    "Radhe Radhe",
    "Indian devotional cinema",
  ],
  authors: [{ name: "Rave Media" }],
  creator: "Rave Media",
  publisher: "Rave Media",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    locale: "hi_IN",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
  category: "Entertainment",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      data-lang="hi"
      className={`${headingEn.variable} ${bodyEn.variable} ${headingHi.variable} ${bodyHi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

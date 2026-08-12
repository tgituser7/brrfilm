import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Noto_Sans_Devanagari,
  Tiro_Devanagari_Hindi,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

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

export const metadata: Metadata = {
  title: "बोलो राधे राधे | Bolo Radhe Radhe",
  description:
    "बोलो राधे राधे — गौ माता, किसान और गांव की एक पवित्र सिनेमाई गाथा। Bolo Radhe Radhe — a sacred cinematic saga of Gau Mata, the farmer, and the village.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      data-lang="hi"
      className={`${headingEn.variable} ${bodyEn.variable} ${headingHi.variable} ${bodyHi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { FeatureRow } from "@/components/FeatureRow";
import { AboutFilm } from "@/components/AboutFilm";
import { SwamiQuote } from "@/components/SwamiQuote";
import { IdeaBehindFilm } from "@/components/IdeaBehindFilm";
import { Synopsis } from "@/components/Synopsis";
import { StorySection } from "@/components/StorySection";
import { MultilingualChant } from "@/components/MultilingualChant";
import { Significance } from "@/components/Significance";
import { AboutDirector } from "@/components/AboutDirector";
import { GomataSevaForum } from "@/components/GomataSevaForum";
import { AboutRaveMedia } from "@/components/AboutRaveMedia";
import { MissionVision } from "@/components/MissionVision";
import { MessageSection } from "@/components/MessageSection";
import { MusicCatalogue } from "@/components/MusicCatalogue";
import { Gallery } from "@/components/Gallery";
import { NewsCoverage } from "@/components/NewsCoverage";
import { WatchInterest } from "@/components/WatchInterest";
import { JoinSection } from "@/components/JoinSection";
import { JoinMission } from "@/components/JoinMission";
import { SupportUs } from "@/components/SupportUs";
import { SiteFooter } from "@/components/SiteFooter";
import { BackgroundMusicPrompt } from "@/components/BackgroundMusicPrompt";
import { CountdownWidget } from "@/components/CountdownWidget";
import { CountdownSection } from "@/components/CountdownSection";
import { WelcomeIntro } from "@/components/WelcomeIntro";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Movie",
          name: "Bolo Radhe Radhe",
          alternateName: "बोलो राधे राधे",
          url: SITE_URL,
          image: `${SITE_URL}/topimage.png`,
          description:
            "Bolo Radhe Radhe — a sacred cinematic saga of Gau Mata, the farmer, and the village.",
          director: { "@type": "Person", name: "Ravi Bhatia" },
          productionCompany: { "@type": "Organization", name: "Rave Media" },
          inLanguage: "hi",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rave Media",
          url: SITE_URL,
          logo: `${SITE_URL}/ravelogo.png`,
          sameAs: [
            "https://www.youtube.com/@boloradheradheofficial-jj5xh",
            "https://www.instagram.com/brr_movie",
          ],
        }}
      />
      <WelcomeIntro />
      <BackgroundMusicPrompt />
      {/* <CountdownWidget /> */}
      <SiteHeader />
      <main>
        <Hero />
        <CountdownSection />
        <div className="relative overflow-hidden">
          <Image src="/introfimbg.jpeg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-cream/55" />
          <div className="relative">
            <FeatureRow />
            <AboutFilm />
          </div>
        </div>
        <SwamiQuote />
        <IdeaBehindFilm />
        <Synopsis />
        <StorySection />
        <MultilingualChant />
        <Significance />
        <AboutDirector />
        <GomataSevaForum />
        <AboutRaveMedia />
        <MissionVision />
        <MessageSection />
        <MusicCatalogue />
        <Gallery />
        <NewsCoverage />
        <WatchInterest />
        {/* <JoinSection /> */}
        <JoinMission />
        <SupportUs />
      </main>
      <SiteFooter />
    </>
  );
}

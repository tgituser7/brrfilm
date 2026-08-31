import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { FeatureRow } from "@/components/FeatureRow";
import { AboutFilm } from "@/components/AboutFilm";
import { SwamiQuote } from "@/components/SwamiQuote";
import { IdeaBehindFilm } from "@/components/IdeaBehindFilm";
import { Synopsis } from "@/components/Synopsis";
import { StorySection } from "@/components/StorySection";
import { Significance } from "@/components/Significance";
import { AboutDirector } from "@/components/AboutDirector";
import { GomataSevaForum } from "@/components/GomataSevaForum";
import { AboutRaveMedia } from "@/components/AboutRaveMedia";
import { MissionVision } from "@/components/MissionVision";
import { MessageSection } from "@/components/MessageSection";
import { MusicCatalogue } from "@/components/MusicCatalogue";
import { Gallery } from "@/components/Gallery";
import { WatchInterest } from "@/components/WatchInterest";
import { JoinSection } from "@/components/JoinSection";
import { JoinMission } from "@/components/JoinMission";
import { SupportUs } from "@/components/SupportUs";
import { SiteFooter } from "@/components/SiteFooter";
import { BackgroundMusicPrompt } from "@/components/BackgroundMusicPrompt";
import { CountdownWidget } from "@/components/CountdownWidget";
import { CountdownSection } from "@/components/CountdownSection";
import { WelcomeIntro } from "@/components/WelcomeIntro";

export default function Home() {
  return (
    <>
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
        <Significance />
        <AboutDirector />
        <GomataSevaForum />
        <AboutRaveMedia />
        <MissionVision />
        <MessageSection />
        <MusicCatalogue />
        <Gallery />
        <WatchInterest />
        {/* <JoinSection /> */}
        <JoinMission />
        <SupportUs />
      </main>
      <SiteFooter />
    </>
  );
}

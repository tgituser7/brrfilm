import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { FeatureRow } from "@/components/FeatureRow";
import { AboutFilm } from "@/components/AboutFilm";
import { IdeaBehindFilm } from "@/components/IdeaBehindFilm";
import { Synopsis } from "@/components/Synopsis";
import { StorySection } from "@/components/StorySection";
import { Significance } from "@/components/Significance";
import { AboutDirector } from "@/components/AboutDirector";
import { AboutRaveMedia } from "@/components/AboutRaveMedia";
import { MissionVision } from "@/components/MissionVision";
import { MessageSection } from "@/components/MessageSection";
import { Gallery } from "@/components/Gallery";
import { WatchInterest } from "@/components/WatchInterest";
import { JoinSection } from "@/components/JoinSection";
import { JoinMission } from "@/components/JoinMission";
import { SupportUs } from "@/components/SupportUs";
import { SiteFooter } from "@/components/SiteFooter";
import { LanguageGate } from "@/components/LanguageGate";
import { CountdownWidget } from "@/components/CountdownWidget";

export default function Home() {
  return (
    <>
      <LanguageGate />
      <CountdownWidget />
      <SiteHeader />
      <main>
        <Hero />
        <FeatureRow />
        <AboutFilm />
        <IdeaBehindFilm />
        <Synopsis />
        <StorySection />
        <Significance />
        <AboutDirector />
        <AboutRaveMedia />
        <MissionVision />
        <MessageSection />
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

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
import { JoinSection } from "@/components/JoinSection";
import { JoinMission } from "@/components/JoinMission";
import { SupportUs } from "@/components/SupportUs";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
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
        {/* <JoinSection /> */}
        <JoinMission />
        <SupportUs />
      </main>
      <SiteFooter />
    </>
  );
}

import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { FeatureRow } from "@/components/FeatureRow";
import { AboutFilm } from "@/components/AboutFilm";
import { StorySection } from "@/components/StorySection";
import { Significance } from "@/components/Significance";
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
        <StorySection />
        <Significance />
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

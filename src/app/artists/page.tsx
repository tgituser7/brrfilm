"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";

const LEAD_ARTISTS = [
  {
    character: "Bansi (Bhagat Ji)",
    actor: "Ravi Bhatia",
    image: "/artists/Bansi_Bhagat_Ji.png",
    description:
      'Bansi is a simple yet strong-hearted farmer from a small Indian village. He is a Krishna Devotee and believes that hard work is the true form of worship. Bansi finds strength in chanting "Radhe Krishna" during difficult times. Though life throws many challenges his way - drought, debt, and family responsibilities - his faith never shakes.',
  },
  {
    character: "Madhav",
    actor: "Shravan Kumar",
    image: "/artists/Madhav_Shravan_Kumar.png",
    description:
      "Madho, a simple village boy, lives with purity, humility, and deep devotion. He believes serving his parents is the highest duty and begins each day by seeking their blessings. A true devotee of Lord Krishna, he lovingly cares for Gau Mata Nandini, treating her as sacred and understanding her emotions.",
  },
  {
    character: "Nirmala Devi",
    actor: "Nayan Tara",
    image: "/artists/Nirmala_Devi_Nayan_Tara.png",
    description:
      "Nirmala Devi, a kind and devoted follower of Lord Krishna, lives with simplicity, patience, and faith. She sacrifices everything to raise her sons with values and education, but as they succeed, they drift away. Her life becomes a quiet struggle between a mother's unconditional love and the pain of neglect.",
  },
];

const EXPECTED_CAST = [
  { actor: "Rakesh Srivastav", role: "Mukhiya Ji", image: "/artists/Rakesh_Srivastav_MukhiyaJi.png" },
  { actor: "Sarthak Shukla", role: "Gopalan", image: "/artists/Sarthak_Shukla_Gopalan.png" },
  { actor: "Hitu Kanodia", role: "Roshan", image: "/artists/Hitu_Kanodia_Roshan.png" },
  { actor: "Akash Pandaya", role: "Sudarshan", image: "/artists/Akash_Pandaya_Sudarshan.png" },
  { actor: "Sharat Lohiya", role: "Manohar", image: "/artists/Sharat_Lohiya_Manohar.png" },
  { actor: "Banwari Jhol", role: "Jhunjhuna", image: "/artists/Banwari_Jhol_Jhunjhuna.png" },
  { actor: "Dipoo Shrivastav", role: "Damaru", image: "/artists/Dipoo_Shrivastav_Damaru.png" },
  { actor: "Rajendra Soni", role: "Manua", image: "/artists/Rajendra_Soni_Manua.png" },
  { actor: "Govind Namdev", role: "Abdul", image: "/artists/Govind_Namdev_Abdul.png" },
  { actor: "Vineeta Malik", role: "Nani", image: "/artists/Vineeta_Malik_Nani.png" },
  { actor: "Milind Joshi", role: "Rai Saheb", image: "/artists/Milind_Joshi_RaiSaheb.png" },
  { actor: "Vishal Anand", role: "Surya", image: "/artists/Vishal_Anand_Surya.png" },
  { actor: "Komalika", role: "Wife of Roshan", image: "/artists/Komalika_WifeOfRoshan.png" },
  { actor: "Ambrita Shandilya", role: "Gauri", image: "/artists/Ambrita_Shandilya_Gauri.png" },
  { actor: "Amit Jaiswal", role: "Pooran", image: "/artists/Amit_Jaiswal_Pooran.png" },
  { actor: "Devendra Modi", role: "Girdhari", image: "/artists/Devendra_Modi_Girdhari.png" },
  { actor: "Brijendra Kala", role: "Guruji", image: "/artists/Brijendra_Kala_Guruji.png" },
  { actor: "Ankit Mishra", role: "Bhanu", image: "/artists/Ankit_Mishra.jpeg" },
  { actor: "Pankaj Gupta", role: "Dhyaan Chand", image: "/artists/pankaj_gupta.jpeg" },
];

export default function ArtistsPage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-devotional px-6 pt-32 pb-20 sm:pt-40">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-saffron-light">
              {t.artistsPage.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold text-cream sm:text-4xl">
              {t.artistsPage.title}
            </h1>
          </div>
        </section>

        <section className="relative overflow-hidden bg-maroon-950 px-6 py-16 sm:py-20">
          <Image src="/artist_bg.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/55 via-maroon-950/40 to-maroon-950/60" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-6xl">
            <h2 className="text-center font-heading text-2xl font-bold text-cream sm:text-3xl">
              {t.artistsPage.leadTitle}
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {LEAD_ARTISTS.map((artist) => (
                <div
                  key={artist.character}
                  className="card-lift rounded-[1.75rem] border border-maroon-900/10 bg-ivory p-7 text-center shadow-xl shadow-maroon-900/10"
                >
                  <span className="relative mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-gold/50 shadow-lg shadow-maroon-950/20">
                    <Image src={artist.image} alt={artist.actor} fill sizes="128px" className="object-cover" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-wide text-maroon-950">
                    {artist.character}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-crimson">{artist.actor}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{artist.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-maroon-950 px-6 py-16 sm:py-20">
          <Image src="/artist_bg2.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/65 via-maroon-950/55 to-maroon-950/70" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-6xl">
            <h2 className="text-center font-heading text-2xl font-bold text-cream sm:text-3xl">
              {t.artistsPage.castTitle}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {EXPECTED_CAST.map((member) => (
                <div key={`${member.actor}-${member.role}`} className="text-center">
                  <span className="relative mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-gold/40">
                    <Image src={member.image} alt={member.actor} fill sizes="96px" className="object-cover" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-cream">{member.actor}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wide text-gold/70">
                    as {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

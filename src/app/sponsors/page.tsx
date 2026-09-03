"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";

type Sponsor = { name: string; image?: string };

type CategoryKey =
  | "spiritual"
  | "supporters"
  | "social"
  | "media"
  | "distribution"
  | "prPublicity"
  | "outdoorMedia"
  | "devotionalTv"
  | "educational"
  | "events"
  | "merchandise"
  | "appPartner";

const CATEGORIES: { key: CategoryKey; items: Sponsor[] }[] = [
  {
    key: "spiritual",
    items: [
      { name: "Go Spiritual", image: "/sponsors/co_spiritual.png" },
      { name: "Sanatan Samvadam", image: "/sponsors/kashi_vishwanath.png" },
      { name: "R.G.S.S", image: "/sponsors/dharma_yellow1.png" },
      { name: "GauTech", image: "/sponsors/gau_tech.png" },
      { name: "GCCI", image: "/sponsors/occi.png" },
      { name: "JISO", image: "/sponsors/jiso.png" },
      { name: "Devotional Partner", image: "/sponsors/om_shanti_dham.png" },
      { name: "Devotional Partner", image: "/sponsors/spiritual_brown.png" },
      { name: "Devotional Partner", image: "/sponsors/spiritual_circle1.png" },
      { name: "Devotional Partner", image: "/sponsors/spiritual_purple1.png" },
      { name: "Devotional Partner", image: "/sponsors/spiritual_white_swan.png" },
      { name: "Devotional Partner", image: "/sponsors/spiritual_yellow1.png" },
      { name: "Devotional Partner", image: "/sponsors/temple_flag.png" },
      { name: "Devotional Partner", image: "/sponsors/tribal_black.png" },
      { name: "Devotional Partner", image: "/sponsors/trishul_om.png" },
    ],
  },
  {
    key: "supporters",
    items: [
      { name: "IXACON", image: "/sponsors/ixacon.png" },
      { name: "Akshaya Patra", image: "/sponsors/aenlata_petra.png" },
      { name: "MUSKCON", image: "/sponsors/muskcon.png" },
      { name: "Divya Foundation", image: "/sponsors/divya_foundation.png" },
    ],
  },
  {
    key: "social",
    items: [
      { name: "Astha Jyoti", image: "/sponsors/stars_orange.png" },
      { name: "People & Nature Welfare Society", image: "/sponsors/earth_globe.png" },
      { name: "Dog Bless", image: "/sponsors/doo_bless.png" },
      { name: "NATA Foundation", image: "/sponsors/nata.png" },
    ],
  },
  {
    key: "media",
    items: [
      { name: "Films Today", image: "/sponsors/films_today.png" },
      { name: "Mayapuri", image: "/sponsors/nav_bharat.png" },
      { name: "Country Inside News", image: "/sponsors/cjn_news.png" },
      { name: "Yash Babu News", image: "/sponsors/yashobhoomi_news.png" },
      { name: "Star Report", image: "/sponsors/tara_times.png" },
      // { name: "Sandesh", image: "/sponsors/spiritual_logo_round.png" },
      { name: "Ek Sandesh", image: "/sponsors/ek_sandesh.png" },
      { name: "Media Partner", image: "/sponsors/media_s.jpeg"  },
      { name: "Dhenu TV", image: "/sponsors/DhenuTV (1).png" },
    ],
  },
  {
    key: "distribution",
    items: [
      { name: "INOX", image: "/sponsors/inox.png" },
      { name: "UFO", image: "/sponsors/ufo.png" },
      { name: "PVR Cinemas", image: "/sponsors/pvr_cinemas.png" },
      { name: "My School Movie Club", image: "/sponsors/my_school_movie_club.png"  },
      { name: "Chhotu Maharaj", image: "/sponsors/chhotu_maharaj.png" },
    ],
  },
  {
    key: "prPublicity",
    items: [
      { name: "Approach Bollywood.com", image: "/sponsors/approach_bollywood.png" },
      { name: "Spatz Media", image: "/sponsors/spatz_media.png" },
    ],
  },
  {
    key: "outdoorMedia",
    items: [
      { name: "Bright Outdoor Media", image: "/sponsors/bright_outdoor.png" },
      { name: "Minimax Ads Pvt. Ltd.", image: "/sponsors/minimax_ads.png" },
    ],
  },
  {
    key: "devotionalTv",
    items: [
      { name: "Sanskar TV", image: "/sponsors/sanskar_tv.png" },
      { name: "Sudarshan News", image: "/sponsors/sudarshan_news.png" },
      { name: "Ganga Gaur", image: "/sponsors/gangaur_tv.png" },
      { name: "Aastha", image: "/sponsors/aastha_tv.png" },
      { name: "Divya TV", image: "/sponsors/divya_tv.png" },
    ],
  },
  {
    key: "educational",
    items: [
      { name: "KPI - Since 1971", image: "/sponsors/kpi.png" },
      { name: "Sri Bharti International", image: "/sponsors/dit_university.png" },
    ],
  },
  {
    key: "events",
    items: [
      { name: "Zen Asia Foundation", image: "/sponsors/zen_asia_foundation.png" },
      { name: "SSD", image: "/sponsors/ssd.png" },
      { name: "Approach Entertainment", image: "/sponsors/approach_entertainment.png" },
      { name: "Yukti Film Production", image: "/sponsors/yukti_film.png" },
      { name: "PM Music News", image: "/sponsors/pd_music_news.png" },
    ],
  },
  {
    key: "merchandise",
    items: [
      { name: "Sharp - Redefining Education", image: "/sponsors/sharp.png" },
      { name: "Sticker Bazaar", image: "/sponsors/sticker_bazaar.png" },
      { name: "Fosterwa", image: "/sponsors/posterwa.png" },
    ],
  },
  {
    key: "appPartner",
    items: [{ name: "Gaubook App", image: "/sponsors/gaubookorg.jpeg" }],
  },
];

const TILE_TINTS = [
  "bg-crimson/15 border-crimson/30",
  "bg-gold/15 border-gold/35",
  "bg-saffron/15 border-saffron/35",
  "bg-maroon-800/25 border-gold/25",
];

function LogoTile({ sponsor, index }: { sponsor: Sponsor; index: number }) {
  if (sponsor.image) {
    return (
      <div className="card-lift flex min-h-[92px] items-center justify-center rounded-2xl border border-gold/20 bg-cream p-2 shadow-sm">
        <div className="relative h-16 w-full">
          <Image
            src={sponsor.image}
            alt={sponsor.name}
            fill
            unoptimized
            className="object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card-lift flex min-h-[92px] items-center justify-center rounded-2xl border p-3 text-center backdrop-blur-sm ${TILE_TINTS[index % TILE_TINTS.length]}`}
    >
      <span className="font-heading text-sm font-semibold leading-snug text-cream sm:text-[0.95rem]">
        {sponsor.name}
      </span>
    </div>
  );
}

export default function SponsorsPage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-maroon-950 px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Image src="/sponsor_bg.jpeg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="bg-devotional pointer-events-none absolute inset-0 opacity-90" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />

          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-3xl font-bold uppercase tracking-wide text-cream sm:text-5xl">
              {t.sponsorsPage.title}
            </h1>
          </div>

          <div className="relative mx-auto mt-16 grid max-w-6xl gap-14 lg:grid-cols-2 lg:gap-x-16">
            {CATEGORIES.map((category) => (
              <div key={category.key}>
                <h2 className="font-heading text-lg font-semibold uppercase tracking-wide text-gold sm:text-xl">
                  {t.sponsorsPage.categories[category.key]}
                </h2>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.items.map((sponsor, i) => (
                    <LogoTile key={sponsor.name + i} sponsor={sponsor} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

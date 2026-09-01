"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";

const COLUMN_1 = [
  "All Indian Bannu Biradari - Faridabad",
  "Asthashree Gou Raksha Sansthan, Chitrakoot",
  "Astha Jyoti Sewa Sansthan, Mumbai",
  "Aryavrat Vishwa Sanatan Vikas Board, Bulandshahr",
  "Brijendra Goushala Welfare Associations, Lucknow",
  "Dharam Jagran Manch, Lucknow Noida",
  "Dharam Raksha Yuva Vahini, Hindustan",
  "Geeta Shodh Sansthan, Mathura",
  "Go Spiritual Foundation, Uttrakhand",
  "Dog Bless Animal Care Foundation, New Delhi",
  "Goumata Sewa Fouram, Bhuvneshwar, Udisa",
  "Hindu Sena, New Delhi",
  "Muskcon Marvelous Society of Lord Krishna Conciliation, India",
  "International Krishna Janmbhoomi Sanatan Seva Foundation",
  "Jeevaashraya Trust, Lucknow",
  "Main Bharat Hun Ngo, Mumbai",
  "Nata Foundation Ngo, Mumbai",
  "People & Nature Welfare Society, Gorakhpur",
  "Rastriya Lodhi Mahasabha, Fatehpur, UP",
  "Real Foundation - New Delhi",
];

const COLUMN_2 = [
  "Shree Krishnay Foundation - Varanasi",
  "Sanatan Vikas Parishad, Bharat",
  "Sanatanam Samwadam Santha - Lucknow",
  "Sanatan Uthan Samiti, Uttar Pradesh",
  "Shri Sarvjeev Kalyan Trust, Katch, Gujarat",
  "Vrindavan Kunj Gali, Vrindavan Dham",
  "Vishwa Hindu Mahasangh Gouraksha Prakoshth, Gorakhpur",
  "Kashi Vikas Charitable Trust, Varanasi",
  "Zen Asia Foundation, Ulhasnagar",
  "Sant Seva Evam Gau Raksha Kalyan Parishad, Mumbai",
  "Vihim Gauraksha Prakoshth Samiti, Banda - Uttar Pradesh",
  "Shri Seva Evam Shuddh Sansthan - Ayodhya, Uttar Pradesh",
];

function SupportersColumn({ names }: { names: string[] }) {
  return (
    <ul className="space-y-4">
      {names.map((name) => (
        <li
          key={name}
          className="flex items-start gap-3 text-left text-sm leading-relaxed text-ink/80 sm:text-[0.95rem]"
        >
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-crimson" />
          {name}
        </li>
      ))}
    </ul>
  );
}

export default function SupportersPage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-ivory px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Image
            src="/Hand_supporting_glowing_butterfly.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover saturate-[1.6] contrast-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-ivory/25" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />

          {/* <svg
            viewBox="0 0 200 420"
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 h-[380px] w-[190px] text-maroon-900/[0.08] sm:h-[520px] sm:w-[260px]"
          >
            <ellipse cx="100" cy="70" rx="55" ry="68" fill="none" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="100" cy="70" rx="36" ry="46" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="100" cy="66" r="16" fill="currentColor" />
            <line x1="100" y1="138" x2="100" y2="400" stroke="currentColor" strokeWidth="2" />
            {Array.from({ length: 16 }).map((_, i) => {
              const y = 150 + i * 16;
              const len = 40 - i * 1.6;
              return (
                <g key={i}>
                  <path
                    d={`M100,${y} Q${100 - len / 2},${y + 10} ${100 - len},${y + 24}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d={`M100,${y} Q${100 + len / 2},${y + 10} ${100 + len},${y + 24}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}
          </svg> */}

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson">
              {t.supportersPage.eyebrow}
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase tracking-wide text-maroon-950 sm:text-5xl">
              {t.supportersPage.title}
            </h1>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-4xl gap-x-12 gap-y-4 sm:grid-cols-2">
            <SupportersColumn names={COLUMN_1} />
            <SupportersColumn names={COLUMN_2} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

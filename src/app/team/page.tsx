"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";

const PRODUCTION_TEAM_1 = [
  "Producer - Hriday Kumar Bhatia",
  "Co-producer - Bijay Kumar Tibrewal",
  "Creative Producer - Sonu Tyagi",
  "Executive Producer - Gautam Ailawadi",
  "Cultural Supervision - Rakesh Rantakar",
  "Production Designer - S. Satyam",
  "Line Producer, Uttar Pradesh - Pradeep Mishra",
  "Associate Director - Mann Mishra",
  "Assistant Director - Nilamber Puthal",
  "Assistant Director - Ketan Diwakar",
  "Creative Director - Suraj Tiwari",
  "Chief Assistant Director - Arunidhi Sharma",
  "Associate Art Director - Pitambar",
];

const PRODUCTION_TEAM_2 = [
  "Events Promotion - Pramod Singh",
  "Legal Advertiser - Saurabh Katiyar",
  "Traditional Costume Designer - Ankita Rai",
  "Styles & Grooming - Priya & Lucky",
  "Dress Men - Ashish Gautam",
  "Make-up Main Artist - Rajesh Kumar",
  "Hair Grooming - Rajesh Kumar, Rakesh Saini",
  "Musical Supervision - Ravi Jain",
  "Technical Supervision - Madhukar Pawar",
  "Action Master - Vikram Dahiya",
  "Team Leader, Office Communication - Yug Bhatia",
  "Worldwide Marketing - Inderjeet Majumdar (USA), Sandeep Sinha (UK)",
];

const FINANCIAL_CONSULTANT = ["Debu Raj Soni", "Pawan Sharma", "Pravesh Bhatia"];

const GRATITUDE = [
  "Shyam Singhania (Social Worker, Entrepreneur & Visionary)",
  "Dr. Satish Chand Dvivedi (Former State Minister, Uttar Pradesh)",
  "Dr. Rajender Pensiya - DM, Sambhal",
  "Dileep Dhanraj Gupta (Ex-Union Minister of State)",
  "Shyam Bihari Gupta (Gau Seva Ayog, Uttar Pradesh)",
];

const WELL_WISHERS_1 = [
  "Ajit Kumar Baid, Mangalam Audio World",
  "Anil Kumar Puri - Businessman, Kanpur",
  "Anil Mishra, Chandipur, UP",
  "Avinash Agarwal, Bhopal",
  "Ashok Sharma, Poet, NCR",
  "Ashok Bhatia, Faridabad",
  "Lalit Pujara, Media Expert, Ahmedabad",
  "Subash Ojha, Lok Bharti, Lucknow",
  "C.K. Arora alias Bhagat Lalu Ji",
  "Chatur Singh Khalsa - Ulhasnagar",
  "Dr. S.P. Goswami (P.E.S) - Mathura",
  "Deepak Sharma, Barabanki, Uttar Pradesh",
  "Jyotishacharya Madan Kaushik, Rajasthan",
  "Jagdish Thapliyal, Nagpur Darpan, Nagpur",
  "Manoj Kumar Saxena - VHP, Rampur",
  "Madhukar Pandey",
  "Manish Sahu - Radha Krishna Temple",
  "Neeraj Kumar (John), Sultanpur, UP",
  "Naresh Chandel - Moradabad, UP",
  "Vivek Shrivastava",
  "Ved Prakash Ahuja, BJP, Rampur",
];

const WELL_WISHERS_2 = [
  "Pawan Agarwal - Businessman, Lucknow",
  "Panchgavyacharya Dr. Manish Gupta",
  "Parveen Raghuraj Pandey - Janjgir, Chhattisgarh",
  "P.C. Yadav, Senior Marketing Expert",
  "Pandit Rakesh Sharma, Producer, Rudrapur",
  "Rahul Agarwal - Bhole Chature, Lucknow",
  "Rakesh Ratnakar - New Delhi",
  "Rashtriya Kavi Yuvraj Jain - Mumbai",
  "Raj Kumar Gupta, Gau Sewak, Kanpur",
  "Rajesh Bhatia - Press Reporter, Faridabad",
  "Raj Bhatia - Contractor, Kanpur",
  "Rajesh Vedant, Social Worker, Mumbai",
  "Ravindra Kulshreshtha - Promoter, Vrindavan",
  "Manoj Shrivastav - Bhopal, MP",
  "Ramesh Goenka - Music Producer, Kolkata",
  "Sachin Dharap, Kawachi Group, Maharashtra",
  "Sudhir Garg, Social Activist, Uttar Pradesh",
  "Van Bihari Rajput, Mathura",
  "Vikas Sharma - Vrindavan Kunj Gali",
  "Yogiraj Aachrya Satyawan - Uttrakhand",
];

const RESEARCH_DEVELOPMENT = [
  "Advocate Rakesh Kumar - Motivational",
  "Umesh Sharma, Geeta Shodh Sansthan, Mathura",
  "Radhe Shyam Dixit - Director, Society of Sustainable Development, Lucknow",
  "Laxmi Narayan Chandok",
  "Yogendra Nagda, Neemuch",
];

const SPIRITUAL_MENTORS = [
  "Akhand Swami - Surat, Gujarat",
  "Devi Chitralekha Ji - Vrindavan",
  "Shyam Bihari Gupta - Gau Sewa Ayog, UP",
  "Mahant Modini Bihari Sharan, Vrindavan",
  "Peetheshwar Swami Radha Prasad De Ju Maharaj",
  "Pandit Aditya Dwivedi Ji - Lucknow",
  "Om Prakash Yajurvedi - New Delhi",
  "Swami Rasraj Krishna, Akshaya Patra",
  "Swami Anant Veer Ji - ISKCON, Mathura",
  "Yogiraj Dushyant - Devas, Ujjain",
];

const WOMEN_VOLUNTEERS = [
  "Anuja Saha - Nata Foundation, Mumbai",
  "Anju Sinha - Social Worker",
  "Advocate Nita Mathur",
  "Bharti Srivastav - Bangalore",
  "Dr. Priyanka Upadhyay Shukla, Rampur",
  "Ishita Srivastav, IT Expert, Lucknow",
  "Kusum Srivastav, Social Activist, UP",
  "Jasmit Kour, Dog Bless Foundation, Delhi",
  "Poonam Singh - Varanasi",
  "Payal Kapoor - Mira Road, Mumbai",
  "Nirali Namdev, Social Worker, Mumbai",
  "Namrata Chaudhry - Indore",
  "Nidhi Mishra - Content Creator, Bhopal",
  "Sadhan Tulakia - Pune, Maharashtra",
  "Rekha Gupta - New Delhi",
  "Anamika Sahu - Sneh Foundation, Lucknow",
];

function NameList({ names, dark }: { names: string[]; dark: boolean }) {
  return (
    <ul className="space-y-3">
      {names.map((name) => (
        <li
          key={name}
          className={`flex items-start gap-3 text-left text-sm leading-relaxed ${
            dark ? "text-cream/80" : "text-ink/80"
          }`}
        >
          <span
            className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
              dark ? "bg-gold" : "bg-crimson"
            }`}
          />
          {name}
        </li>
      ))}
    </ul>
  );
}

function SubHeading({ children, dark }: { children: React.ReactNode; dark: boolean }) {
  return (
    <h3
      className={`font-heading text-lg font-semibold uppercase tracking-wide sm:text-xl ${
        dark ? "text-gold" : "text-crimson"
      }`}
    >
      {children}
    </h3>
  );
}

export default function TeamPage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-maroon-950 px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <Image
            src="/technical_team_bg.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/45 via-maroon-950/40 to-maroon-950/60" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />

          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-3xl font-bold uppercase tracking-wide text-cream sm:text-5xl">
              {t.teamPage.title}
            </h1>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl space-y-16">
            <div>
              <h2 className="text-center font-heading text-2xl font-bold text-cream sm:text-3xl">
                {t.teamPage.technicalTeam}
              </h2>

              <div className="mt-10 grid items-start gap-10 sm:grid-cols-[1fr_1fr_0.7fr]">
                <div>
                  <SubHeading dark>{t.teamPage.productionTeam}</SubHeading>
                  <div className="mt-5">
                    <NameList names={PRODUCTION_TEAM_1} dark />
                  </div>
                </div>
                <div>
                  <div aria-hidden="true" className="h-7 sm:h-8" />
                  <div className="mt-5">
                    <NameList names={PRODUCTION_TEAM_2} dark />
                  </div>
                </div>
                <div className="space-y-10">
                  <div>
                    <SubHeading dark>{t.teamPage.financialConsultant}</SubHeading>
                    <div className="mt-5">
                      <NameList names={FINANCIAL_CONSULTANT} dark />
                    </div>
                  </div>
                  <div>
                    <SubHeading dark>{t.teamPage.gratitude}</SubHeading>
                    <div className="mt-5">
                      <NameList names={GRATITUDE} dark />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-ivory px-6 py-20 sm:py-28">
          <Image src="/wellwisherbg.jpeg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-ivory/75" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-20" />

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-maroon-950 sm:text-3xl">
              {t.teamPage.wellWishersAssociates}
            </h2>
          </div>

          <div className="relative mx-auto mt-14 max-w-6xl">
            <SubHeading dark={false}>{t.teamPage.wellWishers}</SubHeading>
            <div className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              <NameList names={WELL_WISHERS_1} dark={false} />
              <NameList names={WELL_WISHERS_2} dark={false} />
            </div>
          </div>

          <div className="relative mx-auto mt-14 grid max-w-6xl gap-10 sm:grid-cols-3">
            <div>
              <SubHeading dark={false}>{t.teamPage.researchDevelopment}</SubHeading>
              <div className="mt-5">
                <NameList names={RESEARCH_DEVELOPMENT} dark={false} />
              </div>
            </div>
            <div>
              <SubHeading dark={false}>{t.teamPage.spiritualMentors}</SubHeading>
              <div className="mt-5">
                <NameList names={SPIRITUAL_MENTORS} dark={false} />
              </div>
            </div>
            <div>
              <SubHeading dark={false}>{t.teamPage.womenVolunteers}</SubHeading>
              <div className="mt-5">
                <NameList names={WOMEN_VOLUNTEERS} dark={false} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

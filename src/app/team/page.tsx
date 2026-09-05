"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useLanguage } from "@/lib/LanguageContext";

const KT_TEAM = [
  {
    name: "Raj Rahidas",
    role: "Art Director",
    image: "/raj_rahidas.png",
    description:
      "Transforming Visions into Reality. As a highly creative and dedicated Art Director, experienced in designing and delivering visually stunning environments for films, web series, and serials. With a strong work ethic and unwavering commitment to producers, he has a proven track record of delivering high-quality art direction that enhances the narrative while managing multiple projects and their execution for numerous web series and serials. This artistic man has expertise in team leadership, set design and construction, script interpretation and visualization, along with budget management and resource allocation.",
  },
  {
    name: "Sandeep Singh",
    role: "DOP",
    image: "/sandeep_singh.png",
    description:
      "Sandeep Singh is a young and dynamic Director of Photography, a professional master in lighting and camera techniques who always brings a fresh perspective and boundless energy to every project, with an eye for detail to create visually stunning narratives through innovative visual storytelling that captivates audiences. His expertise spans various formats, including films, commercials, and corporate projects. He has also worked closely with leading directors and production teams to bring their vision to life, promising to deliver high-quality content.",
  },
  {
    name: "Ashish Batra",
    role: "Film Editor",
    image: "/ashish_batra.png",
    description:
      "Transforming Visual Stories through Creativity. As a film editor with a keen analytical eye and expertise in advanced technical tools and AI-powered software, working with diverse formats including films, TV shows, and corporate videos. He has made a self-made journey since 2014, with extensive editing and post-production experience. His dedicated and detail-oriented approach ensures high-quality output across formats, excelling in crafting compelling narratives that captivate audiences. He works tirelessly to deliver exceptional results that exceed expectations.",
  },
];

const PRODUCTION_TEAM_1 = [
  "Producer - Hriday Kumar Bhatia",
  "Co-producer - Bijay Kumar Tibrewal",
  "Executive Producer - Gautam Ailawadi",
  "Cultural Supervision - Rakesh Rantakar",
  "Production Designer - S. Satyam",
  "Line Producer, Uttar Pradesh - Pradeep Mishra",
  "Creative Director - Mann Mishra",
  "Associate Art Director - Nilamber Puthal",
  "Assistant Director - Ketan Diwakar",
  "Creative Producer - Suraj Tiwari",
  "Chief Assistant Director - Arunidhi Sharma",
  "Associate Art Director - Pitambar",
  "Assistant Production - Binitha, Soni",
];

const PRODUCTION_TEAM_2 = [
  "Events Promotion - Pramod Singh",
  "Legal Advertiser - Saurabh Katiyar",
  "Traditional Costume Designer - Ankita Rai",
  "Styles & Grooming - Priya & Lucky",
  "Dress Men - Ashish Gautam",
  "Make-up Artist - Rajesh Kumar, Rakesh Saini",
  "Hair Grooming - Renu Chaudhary",
  "Musical Supervision - Ravi Jain",
  "Technical Supervision - Madhukar Pawar",
  "Action Master - Vikram Dahiya",
  "Team Leader, Office Communication - Yug Bhatia",
  "Worldwide Marketing - Inderjeet Majumdar (USA), Sandeep Sinha (UK)",
];

const FINANCIAL_CONSULTANT = ["Pawan Sharma", "Pravesh Bhatia"];

const GRATITUDE = [
  "Shyam Singhania (Social Worker, Entrepreneur & Visionary)",
  "Dr. Satish Chand Dvivedi (Former State Minister, Uttar Pradesh)",
  "Dr. Rajender Pensiya - DM, Moradabad",
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
        <section className="relative overflow-hidden bg-maroon-950 px-6 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />
          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="font-heading text-3xl font-bold uppercase tracking-wide text-cream sm:text-5xl">
              {t.teamPage.title}
            </h1>
            <h2 className="mt-10 font-heading text-lg font-semibold uppercase tracking-wide text-gold sm:mt-12 sm:text-xl">
              {t.teamPage.coreTeamTitle}
            </h2>
          </div>

          <div className="relative mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
            {KT_TEAM.map((member) => (
              <div
                key={member.name}
                className="card-lift rounded-[1.75rem] border border-gold/20 bg-maroon-900/40 p-7 text-center backdrop-blur-sm"
              >
                <span className="relative mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-gold/50 shadow-lg shadow-maroon-950/30">
                  <Image src={member.image} alt={member.name} fill sizes="112px" className="object-cover" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-cream">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-maroon-950 px-6 py-20 sm:py-28">
          <Image
            src="/technical_team_bg.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-maroon-950/45 via-maroon-950/40 to-maroon-950/60" />
          <div className="bg-mandala pointer-events-none absolute inset-0 opacity-10" />

          <div className="relative mx-auto max-w-6xl space-y-16">
            <div>
              <h2 className="text-center font-heading text-lg font-semibold uppercase tracking-wide text-gold sm:text-xl">
                {t.teamPage.teamMembersTitle}
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
            {/* <SubHeading dark={false}>{t.teamPage.wellWishers}</SubHeading> */}
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

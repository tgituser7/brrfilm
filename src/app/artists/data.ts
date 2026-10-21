export const LEAD_ARTISTS = [
  {
    character: "Bansi (Bhagat Ji)",
    actor: "Ravi Bhatia",
    image: "/artists/Bansi_Bhagat_Ji.png",
    description:
      'Bansi is a simple yet strong-hearted farmer from a small Indian village. He is a Krishna Devotee and believes that hard work is the true form of worship. Bansi finds strength in chanting "Radhe Krishna" during difficult times. Though life throws many challenges his way - drought, debt, and family responsibilities - his faith never shakes',
  },
  {
    character: "Madhav",
    actor: "Shravan Kumar",
    image: "/artists/Madhav_Shravan_Kumar.png",
    description:
      "Madho, a simple village boy, lives with purity, humility, and deep devotion. He believes serving his parents is the highest duty and begins each day by seeking their blessings. A true devotee of Lord Krishna, he lovingly cares for Gau Mata Nandini, treating her as sacred and understanding her emotions",
  },
  {
    character: "Nirmala Devi",
    actor: "Nayan Tara",
    image: "/artists/Nirmala_Devi_Nayan_Tara.png",
    description:
      "Nirmala Devi, a kind and devoted follower of Lord Krishna, lives with simplicity, patience, and faith. She sacrifices everything to raise her sons with values and education, but as they succeed, they drift away. Her life becomes a quiet struggle between a mother's unconditional love and the pain of neglect",
  },
];

export const FEATURED_CAST = [
  {
    actor: "Govind Namdev",
    role: "Abdul",
    image: "/artists/Govind_Namdev_Abdul.png",
    description:
      "Beneath Abdul's gentle smile lies a calculating mind. A butcher by trade and father to Sarfaraz, he wins the village's trust, then quietly turns it into authority and land",
  },
  {
    actor: "Brijendra Kala",
    role: "Guruji",
    image: "/artists/Brijendra_Kala_Guruji.png",
    description:
      "The village's spiritual anchor, Guruji is a gentle keeper of scripture and quiet wisdom, guiding the family back to the timeless teachings of the Gita",
  },
  {
    actor: "Rakesh Srivastav",
    role: "Mukhiya Ji",
    image: "/artists/Rakesh_Srivastav_MukhiyaJi.png",
    description:
      "The respected head of the village, Mukhiya Ji's word carries the weight of tradition in every household, standing firm between old customs and a changing world",
  },
  {
    actor: "Vineeta Malik",
    role: "Nani",
    image: "/artists/Vineeta_Malik_Nani.png",
    description:
      "The gentle matriarch of the household, Nani carries decades of memory, lullabies, and quiet sacrifice, anchoring the family to its roots as the world keeps changing",
  },
  {
    actor: "Banwari Jhol",
    role: "Jhunjhuna",
    image: "/artists/Banwari_Jhol_Jhunjhuna.png",
    description:
      "The village's beloved eccentric, Jhunjhuna's cheerful antics and hearty laughter lighten the heaviest of days, hiding a warm heart the whole village relies on",
  },
  {
    actor: "Milind Joshi",
    role: "Rai Saheb",
    image: "/artists/Milind_Joshi_RaiSaheb.png",
    description:
      "A man of standing and old-world influence, Rai Saheb carries himself like a landlord used to being heard, his presence stirring both respect and quiet tension",
  },
];

const FEATURED_ACTORS = new Set(FEATURED_CAST.map((artist) => artist.actor));

export const EXPECTED_CAST = [
  { actor: "Rakesh Srivastav", role: "Mukhiya Ji", image: "/artists/Rakesh_Srivastav_MukhiyaJi.png" },
  {
    actor: "Sarthak Shukla",
    role: "Gopalan",
    image: "/artists/Sarthak_Shukla_Gopalan.png",
    note: "A firm Sanatani believer, Gau Rakshak, and a dashing character",
  },
  {
    actor: "Hitu Kanodia",
    role: "Roshan",
    image: "/artists/Hitu_Kanodia_Roshan.png",
    note: "Bansi Lal's educated, well-established elder son",
  },
  { actor: "Akash Pandaya", role: "Sudarshan", image: "/artists/Akash_Pandaya_Sudarshan.png" },
  { actor: "Sharat Lohiya", role: "Manohar", image: "/artists/Sharat_Lohiya_Manohar.png" },
  { actor: "Banwari Jhol", role: "Jhunjhuna", image: "/artists/Banwari_Jhol_Jhunjhuna.png" },
  { actor: "Dipoo Shrivastav", role: "Damaru", image: "/artists/Dipoo_Shrivastav_Damaru.png" },
  { actor: "Rajendra Soni", role: "Manua", image: "/artists/Rajendra_Soni_Manua.png" },
  { actor: "Govind Namdev", role: "Abdul", image: "/artists/Govind_Namdev_Abdul.png" },
  { actor: "Milind Joshi", role: "Rai Saheb", image: "/artists/Milind_Joshi_RaiSaheb.png" },
  { actor: "Vineeta Malik", role: "Nani", image: "/artists/Vineeta_Malik_Nani.png" },
  { actor: "Komalika", role: "Wife of Roshan", image: "/artists/Komalika_WifeOfRoshan.png" },
  {
    actor: "Ambrita Shandilya",
    role: "Gauri",
    image: "/artists/Ambrita_Shandilya_Gauri.png",
    note: "A popular girl of the village",
  },
  {
    actor: "Prahavi Pathak",
    role: "Priyanka",
    image: "/artists/Prahavi_Pathak.jpeg",
    note: "Manohar's fiancée",
  },
  {
    actor: "Vishal Anand",
    role: "Surya",
    image: "/artists/Vishal_Anand_Surya.png",
    note: "Son of Mukhiya Ji",
  },
  { actor: "Amit Jaiswal", role: "Pooran", image: "/artists/Amit_Jaiswal_Pooran.png" },
  { actor: "Devendra Modi", role: "Girdhari", image: "/artists/Devendra_Modi_Girdhari.png" },
  { actor: "Brijendra Kala", role: "Guruji", image: "/artists/Brijendra_Kala_Guruji.png" },
  {
    actor: "Krishna Mishra",
    role: "Roshan",
    image: "/artists/KrishnaMishra.png",
    note: "Childhood years of Bansi Lal's elder son",
  },
  {
    actor: "Kunwar Labhanshu",
    role: "Manohar",
    image: "/artists/KunwarLabhanshu.png",
    note: "Childhood years of Bansi Lal's middle son",
  },
  {
    actor: "Samrat Katiyar",
    role: "Madhav",
    image: "/artists/SamratKatiyar.png",
    note: "Childhood years of Bansi Lal's youngest son",
  },
  { actor: "Ankit Mishra", role: "Bhanu", image: "/artists/Ankit_Mishra.jpeg" },
  { actor: "Keshav Sharma", role: "Pooran", image: "/artists/keshav_sharma.jpeg" },
  { actor: "Sundeep Sharma", role: "Pujari", image: "/artists/sandeep_sharma.jpg" },
  { actor: "Pankaj Gupta", role: "Dhyaan Chand", image: "/artists/pankaj_gupta.jpeg" },
].filter((member) => !FEATURED_ACTORS.has(member.actor));

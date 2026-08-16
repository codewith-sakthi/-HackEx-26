/**
 * Central sample content for HACKEX'26.
 * Everything here is designed to be replaced by admin-editable records
 * once the backend (Lovable Cloud) is wired up.
 */

export const event = {
  name: "HackEx'26",
  tagline: "National Level Hackathon",
  subline: "32 Hours Non Stop Innovation",
  club: "Techno Debuggers Club",
  department: "Department of Computer Science and Engineering",
  college: "Excel Engineering College (Autonomous)",
  /** Hackathon start date/time used by the live countdown. */
  startsAt: "2026-09-25T09:00:00+05:30",
  venue: "Excel Engineering College, Komarapalayam",
  email: "hackex26@excelcolleges.com",
  phone: "+91 98765 43210",
  mapsQuery: "Excel Engineering College Komarapalayam Namakkal",
};

export const stats = [
  { label: "Prize Pool", value: "₹1 Lakh+" },
  { label: "Registration", value: "FREE" },
  { label: "Mode", value: "Offline" },
  { label: "Team Size", value: "4 Members" },
  { label: "Duration", value: "32 Hours" },
  { label: "Venue", value: "Excel Engineering College" },
];

export type Theme = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
};

export const themes: Theme[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: "HeartPulse",
    blurb: "Diagnostics, triage and patient care reimagined with responsible machine intelligence.",
     
  },
  {
    slug: "edutech",
    title: "Edutech",
    icon: "GraduationCap",
    blurb: "Learning tools that adapt to every student, every language, every bandwidth.",
    
  },
  {
    slug: "fintech",
    title: "Fintech",
    icon: "Landmark",
    blurb: "Inclusive finance, fraud defence and frictionless payments at population scale.",
  
  },
  {
    slug: "industrial-5-0",
    title: "Industrial 5.0",
    icon: "Factory",
    blurb: "Smart factories, predictive maintenance and human-centric digital twins.",
    
  },
  {
    slug: "open-innovation",
    title: "Open Innovation",
    icon: "Lightbulb",
    blurb: "Any bold idea that does not fit a box — surprise the jury.",
    
   
  },
];


export const timeline = [
  {
    date: "01 Aug 2026",
    title: "Registration Opens",
    body: "Team leaders create an account and register their team. Registration is completely free.",
  },
  {
    date: "10 Sep 2026",
    title: "Idea Submission Closes",
    body: "Upload your abstract PDF through the submission portal before 11:59 PM.",
  },
  {
    date: "15 Sep 2026",
    title: "Shortlist Announcement",
    body: "Our review panel evaluates every idea on novelty, feasibility and impact, and the shortlist is announced.",
  },
  {
    date: "16 Sep 2026",
    title: "Confirmation Mail",
    body: "Shortlisted teams receive a confirmation mail with venue, travel and logistics details.",
  },
  {
    date: "25 Sep 2026 · 9:00 AM",
    title: "Hackathon Day 1",
    body: "Inauguration, problem briefing and the 32-hour build clock starts.",
  },
  {
    date: "25 Sep 2026 · 4:00 PM",
    title: "Mentoring Round",
    body: "Industry mentors visit every team for a guided review and course correction.",
  },
  {
    date: "26 Sep 2026 · 9:00 AM",
    title: "Evaluation Round",
    body: "Jury walks the floor for a technical deep dive into each prototype.",
  },
  {
    date: "26 Sep 2026 · 2:00 PM",
    title: "Final Pitch",
    body: "Top 10 teams pitch on the main stage — 6 minutes plus Q&A.",
  },
  {
    date: "26 Sep 2026 · 5:00 PM",
    title: "Winner Announcement",
    body: "Valedictory, prize distribution and certificates for all participants.",
  },
];

export const prizes = [
  { rank: "Champion", amount: "₹20,000", perks: ["Winner trophy", "Internship interviews", "Certificates"], featured: true },
  { rank: "Runner Up", amount: "₹15,000", perks: ["Trophy", "Goodies", "Certificates"], featured: false },
  { rank: "Second Runner Up", amount: "₹10,000", perks: ["Trophy", "Goodies", "Certificates"], featured: false },
];

 

export const faqs = [
  {
    q: "Who can participate in HackEx'26?",
    a: "Any student currently enrolled in an undergraduate or postgraduate programme at a recognised Indian institution. Cross-college and cross-department teams are welcome.",
  },
  {
    q: "Is there a registration fee?",
    a: "No. HackEx'26 is completely free. Food, workspace and internet for the full 32 hours are provided by the organisers.",
  },
  {
    q: "What is the team size?",
    a: "Between 2 and 4 members. The team leader occupies member slot 1 and registers the remaining members from the dashboard.",
  },
  {
    q: "Can we work on an existing project?",
    a: "You may bring prior research and open-source libraries, but all hackathon code must be written during the 32-hour window. Repositories are checked for commit history.",
  },
  {
    q: "Is accommodation provided?",
    a: "Yes. Separate dormitory accommodation for men and women is arranged on campus for outstation teams on request during registration.",
  },
  {
    q: "What should we bring?",
    a: "Laptops, chargers, extension boards, your college ID card and any hardware your prototype needs. Power and high-speed Wi-Fi are provided.",
  },
  {
    q: "How are submissions evaluated?",
    a: "Innovation, technical complexity, scalability, UI/UX, presentation and real-world impact — each scored by an independent jury panel.",
  },
  {
    q: "Do all participants get certificates?",
    a: "Yes. Every participant who completes the hackathon receives a digitally verifiable participation certificate.",
  },
];

/**
 * Sponsors / partners.
 * Leave this array empty to show the "Sponsors coming soon" placeholder.
 * Add entries like { name: "Zoho", tier: "Title" } to render the sponsor grid.
 */
export const sponsors: { name: string; tier: string }[] = [];


export const downloads = [
  { title: "Rule Book", desc: "Complete rules, code of conduct and evaluation rubric.", size: "PDF · 1.2 MB" },
  { title: "Brochure", desc: "Event overview, themes and sponsor deck.", size: "PDF · 3.4 MB" },
  { title: "Schedule", desc: "Hour-by-hour plan for both hackathon days.", size: "PDF · 480 KB" },
  { title: "Abstract Template", desc: "Mandatory format for idea submission.", size: "DOCX · 90 KB" },
];

export const socials = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "X", href: "https://x.com" },
  { name: "YouTube", href: "https://youtube.com" },
];

export const coordinators = [
  {
    role: "Faculty Coordinator",
    name: "Dr. A. Sample Faculty",
    phone: "+91 98765 12345",
    email: "faculty.coord@excelcolleges.com",
  },
  {
    role: "Faculty Coordinator",
    name: "Prof. B. Demo Mentor",
    phone: "+91 98765 67890",
    email: "mentor.coord@excelcolleges.com",
  },
  {
    role: "Student Coordinator",
    name: "R. Student Lead",
    phone: "+91 98765 11111",
    email: "student.lead@excelcolleges.com",
  },
  {
    role: "Student Coordinator",
    name: "K. Assistant Lead",
    phone: "+91 98765 22222",
    email: "student.asst@excelcolleges.com",
  },
];

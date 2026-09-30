// All site content lives here — swap names, copy and photos for your clinic.

const unsplash = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;

export const site = {
  name: "CarePoint",
  description:
    "Trusted, compassionate healthcare for families through clinic visits, pharmacy and telehealth services.",
  email: "hello@carepoint.clinic",
  phone: "+1 (555) 014-2290",
  hours: "10AM to 08:30PM",
};

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

export const pageLinks = [
  { label: "Our Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Appointment", href: "#appointment" },
];

export const hero = {
  titleBefore: "Trustworthy",
  titleHighlight: "Care",
  titleAfter: "for You and Your Family",
  text: "Thoughtful, compassionate healthcare built around your family's well-being — at every stage of life.",
  cards: [
    {
      image: unsplash("1628348068343-c6a848d2b6dd", 700),
      alt: "Doctor talking with a patient",
      value: "500K+",
      label: "Happy Patients",
      avatars: [
        unsplash("1507003211169-0a1dd7228f2d", 80),
        unsplash("1494790108377-be9c29b29330", 80),
        unsplash("1500648767791-00dcc994a43e", 80),
      ],
    },
    {
      image: unsplash("1631217868264-e5b90bb7e133", 800),
      alt: "Doctor consulting with an elderly patient",
      value: "24/7",
      label: "Emergency Support",
      avatars: [unsplash("1438761681033-6461ffad8d80", 80)],
    },
    {
      image: unsplash("1631815589968-fdb09a223b1e", 700),
      alt: "Nurse checking a patient's blood pressure",
      value: "20+ Years",
      label: "Trusted Healthcare Service",
      avatars: [],
    },
  ],
};

export const about = {
  title: "Dedicated to Your Health, Every Step of the Way",
  text: `At ${site.name}, we deliver caring, dependable medical services for individuals and families. Whether you visit in person or connect through telehealth, our experienced team makes quality care easy to access.`,
  stats: [
    { value: 24, suffix: "+", label: "Years Experience" },
    { value: 97, suffix: "%", label: "Client Satisfaction" },
    { value: 35, suffix: "+", label: "Certified Specialists" },
    { value: 12, suffix: "+", label: "Awards" },
  ],
};

export const services = [
  {
    title: "General Clinic Services",
    text: "Routine check-ups, diagnostics and same-day visits for the whole family, delivered by experienced physicians.",
    image: unsplash("1666214280557-f1b5022eb634", 600),
  },
  {
    title: "Pharmacy & Medication",
    text: "Fast, accurate prescriptions and expert guidance to manage your medications with confidence.",
    image: unsplash("1587854692152-cbe660dbde88", 600),
  },
  {
    title: "Dental Care",
    text: "Cleanings, exams and preventive treatments that keep your smile healthy and bright.",
    image: unsplash("1606811971618-4486d14f3f99", 600),
  },
  {
    title: "Telehealth Consultation",
    text: "See a licensed doctor from home — ideal for follow-ups and minor health concerns.",
    image: unsplash("1576091160399-112ba8d25d1d", 600),
  },
];

export const reasons = [
  {
    icon: "hourglass" as const,
    title: "Comprehensive Care in One Place",
    text: "Clinic visits, dental care and prescriptions — everything your family needs, seamlessly connected.",
  },
  {
    icon: "clover" as const,
    title: "Experienced Local Care Experts",
    text: "Our team delivers personal, compassionate care that has earned the trust of families across the community.",
  },
  {
    icon: "sparkle" as const,
    title: "Easy & Convenient Appointments",
    text: "Book online any time, skip the long waits and get care that fits your schedule — simple and stress-free.",
  },
];

export const booking = {
  image: unsplash("1629909613654-28e377c37b09", 1800),
  perks: ["Fast & secure booking", "Flexible time slots", "In-person or virtual options"],
};

export const testimonials = [
  {
    title: "Clean, Professional",
    text: "The clinic is spotless and the staff are true professionals. I always feel like I'm in good hands.",
    name: "Monica T.",
  },
  {
    title: "Genuinely Caring Staff",
    text: "Everyone made me feel comfortable and listened to. That kind of attentive care is rare these days.",
    name: "Emily Carter",
  },
  {
    title: "Fast, Easy Appointments",
    text: "I booked online in minutes and saw a doctor the same day — convenient and completely stress-free.",
    name: "David R.",
  },
  {
    title: "Trusted by Our Family",
    text: "We've been coming here for years. The doctors know us and the care is always consistent and thoughtful.",
    name: "Priya K.",
  },
  {
    title: "Great for Virtual Visits",
    text: "Telehealth is a lifesaver. I get expert advice without leaving home — perfect for a busy schedule.",
    name: "Jason L.",
  },
];

export const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Book online by choosing your preferred service and time, or call the clinic and our friendly team will schedule it for you.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Yes, walk-ins are welcome during regular hours, though booking ahead is the best way to avoid waiting.",
  },
  {
    q: "What insurance plans do you accept?",
    a: "We accept most major insurance plans. Call us or check with the front desk for the current list.",
  },
  {
    q: "Can I consult a doctor online?",
    a: "Yes — we offer virtual consultations. Book online or call to schedule a time that works for you.",
  },
  {
    q: "What services does your pharmacy offer?",
    a: "Prescriptions, refills, vaccinations and over-the-counter medication, all with expert pharmacist advice.",
  },
];

export const team = [
  { name: "Dr. Priya Roy", role: "Psychologist", image: unsplash("1594824476967-48c8b964273f", 600) },
  { name: "Dr. James Lee", role: "General Dentist", image: unsplash("1612349317150-e413f6a5b16d", 600) },
  { name: "Dr. Sarah Mills", role: "Family Physician", image: unsplash("1559839734-2b71ea197ec2", 600) },
  { name: "Dr. Arjun Das", role: "Assistant Psychologist", image: unsplash("1622253692010-333f2da6031d", 600) },
  { name: "Dr. Sinthiya", role: "Assistant Neurologist", image: unsplash("1651008376811-b90baee60c1f", 600) },
  { name: "Dr. Rahim Sultan", role: "General Neurologist", image: unsplash("1622902046580-2b47f47f5471", 600) },
];

export const posts = [
  {
    date: "July 24, 2025",
    title: "5 Everyday Habits for a Healthier Heart",
    read: "5 min read",
    image: unsplash("1512621776951-a57141f2eefd", 800),
    aspect: "aspect-[4/5.6]",
  },
  {
    date: "July 24, 2025",
    title: "Signs It's Time to Visit Your Family Doctor",
    read: "10 min read",
    image: unsplash("1638202993928-7267aad84c31", 800),
    aspect: "aspect-[4/4]",
  },
  {
    date: "July 24, 2025",
    title: "How Stress Affects Your Body and Mind",
    read: "7 min read",
    image: unsplash("1571019613454-1cb2f99b2d8b", 800),
    aspect: "aspect-[4/3]",
  },
];

export const cta = {
  images: [
    unsplash("1527613426441-4da17471b66d", 500),
    unsplash("1582750433449-648ed127bb54", 500),
    unsplash("1614608682850-e0d6ed316d47", 500),
  ],
};

export const footer = {
  quickLinks: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#appointment" },
  ],
  utilities: [
    { label: "Style Guide", href: "#" },
    { label: "Licenses", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "404", href: "/not-found" },
  ],
};

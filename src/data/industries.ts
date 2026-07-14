export type Industry = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
  gradientFrom: string;
  gradientTo: string;
  accent: string;
  h1?: string;
  metaTitle?: string;
  metaDescription?: string;
  intro?: string[];
  idealFor?: string[];
  relatedSlugs?: string[];
};

export const industries: Industry[] = [
  {
    slug: "jewellery",
    name: "Jewellery Brands",
    tag: "Jewellery",
    blurb: "Premium identity, catalogue photography and campaigns for jewellers.",
    gradientFrom: "#2A1E12",
    gradientTo: "#5C4423",
    accent: "#D9B98A",
    h1: "Jewellery Branding & Marketing Services in Chennai",
    metaTitle: "Jewellery Branding & Marketing Agency in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds helps jewellery showrooms and brands in Chennai with branding, logo design, product photography, campaign creatives and digital support.",
    intro: [
      "Jewellery businesses need more than attractive creatives. They need trust, premium perception, product presentation and campaign communication that feels aspirational while still being commercially effective.",
      "LeverageAds supports jewellery showrooms and jewellery brands with branding, logo design, launch communication, product photography, campaign creatives, brochures, festive promotions, websites and digital support.",
    ],
    relatedSlugs: ["creative-design", "ad-films-photography", "creative-advertising"],
  },
  {
    slug: "hospitality",
    name: "Resorts & Hospitality",
    tag: "Hospitality",
    blurb: "Guest-facing brand presentation, photography and booking-ready websites.",
    gradientFrom: "#241318",
    gradientTo: "#5A2A35",
    accent: "#F0B8A0",
    h1: "Resort & Hospitality Branding Services in Chennai",
    metaTitle: "Resort & Hospitality Branding Agency in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds helps resorts, boutique stays and hospitality brands with branding, photography, websites and guest-facing brand presentation.",
    intro: [
      "Resorts and hospitality brands sell not just rooms or facilities, but atmosphere, experience and trust.",
      "We help resorts, boutique stays and hospitality brands improve their visual communication, campaigns, websites, photography and guest-facing brand presentation.",
    ],
    relatedSlugs: ["creative-design", "websites-technology", "ad-films-photography"],
  },
  {
    slug: "education",
    name: "Schools & Colleges",
    tag: "Education",
    blurb: "Admissions-focused branding, campaigns and websites for institutions.",
    gradientFrom: "#131A2A",
    gradientTo: "#2C3F6B",
    accent: "#9FB6E8",
    h1: "School & College Branding Services in Chennai",
    metaTitle: "School & College Branding Agency in Chennai | Admissions Marketing | LeverageAds",
    metaDescription:
      "LeverageAds works with schools and colleges on branding, admissions campaigns, brochures, websites and digital communication.",
    intro: [
      "Educational institutions need communication that builds trust with parents, students and stakeholders while also supporting admissions visibility.",
      "LeverageAds works with schools and colleges on branding, admissions campaigns, brochures, websites, digital communication and launch materials.",
    ],
    relatedSlugs: ["creative-design", "creative-advertising", "websites-technology"],
  },
  {
    slug: "healthcare",
    name: "Clinics & Healthcare",
    tag: "Healthcare",
    blurb: "Trust-first brands and patient-friendly digital communication.",
    gradientFrom: "#0E1B24",
    gradientTo: "#1C5A74",
    accent: "#7FD4F0",
    h1: "Clinic & Healthcare Branding Services in Chennai",
    metaTitle: "Clinic & Healthcare Branding Agency in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds helps clinics, hospitals and healthcare professionals with branding, websites, patient communication and digital visibility.",
    intro: [
      "Healthcare brands need communication that feels trustworthy, clear and patient-friendly.",
      "We help clinics, hospitals and healthcare professionals with branding, websites, patient communication materials, digital visibility and reputation-supporting visual communication.",
    ],
    relatedSlugs: ["creative-design", "websites-technology", "digital-marketing"],
  },
  {
    slug: "retail",
    name: "Retail Brands",
    tag: "Retail",
    blurb: "Packaging, in-store branding and e-commerce that move products.",
    gradientFrom: "#1F1214",
    gradientTo: "#6B2530",
    accent: "#F4A8A0",
  },
  {
    slug: "startups",
    name: "Startups",
    tag: "Startups",
    blurb: "Identity, positioning and launch-ready websites built from day one.",
    gradientFrom: "#111A17",
    gradientTo: "#1F5C48",
    accent: "#7FE0B8",
  },
  {
    slug: "corporate",
    name: "Corporate Businesses",
    tag: "Corporate",
    blurb: "B2B brands, corporate communication and digital systems for enterprises.",
    gradientFrom: "#101216",
    gradientTo: "#33383F",
    accent: "#C9CDD4",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}

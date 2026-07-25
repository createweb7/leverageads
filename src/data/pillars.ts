import type { ServiceImage } from "@/data/services";

export type Pillar = {
  slug: string;
  navLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubcopy: string;
  intro: string;
  serviceList: string[];
  relatedSlugs: string[];
  ctaLabel: string;
  images?: ServiceImage[];
};

export const pillars: Pillar[] = [
  {
    slug: "branding",
    navLabel: "Branding",
    h1: "Build a Brand People Remember",
    metaTitle: "Branding Agency in Chennai | Brand Strategy, Identity & Creative | LeverageAds",
    metaDescription:
      "LeverageAds helps businesses build brands people remember — brand strategy, identity, logo design, packaging, advertising campaigns, ad films and commercial photography, all in Chennai.",
    heroSubcopy:
      "Your brand is more than a logo — it's the perception customers carry every time they interact with your business.",
    intro:
      "Your brand is more than a logo—it's the perception customers carry every time they interact with your business. We create brands that communicate clearly, differentiate powerfully and build long-term trust.",
    serviceList: [
      "Brand Strategy",
      "Brand Identity",
      "Logo Design",
      "Corporate Identity",
      "Packaging Design",
      "Marketing Collateral",
      "Advertising Campaigns",
      "Creative Design",
      "Ad Film Production",
      "Corporate Films",
      "Product Photography",
      "Commercial Photography",
      "Copywriting",
      "Campaign Planning",
    ],
    relatedSlugs: ["creative-advertising", "creative-design", "ad-films-photography", "print-production"],
    ctaLabel: "Talk to a Branding Expert",
    images: [
      { src: "/portfolio/jewellery/01.webp", alt: "Sovereign jewellery festive campaign photography", width: 827, height: 871 },
    ],
  },
  {
    slug: "digital",
    navLabel: "Digital",
    h1: "Build a Business That Works Online",
    metaTitle: "Digital Agency in Chennai | Websites, CRM, ERP & Digital Marketing | LeverageAds",
    metaDescription:
      "LeverageAds builds digital ecosystems that connect marketing, sales and operations — websites, e-commerce, mobile apps, CRM, ERP, WhatsApp automation and digital marketing in Chennai.",
    heroSubcopy:
      "Technology should simplify business, strengthen customer relationships and accelerate growth.",
    intro:
      "Technology should simplify business, strengthen customer relationships and accelerate growth. We build digital ecosystems that connect marketing, sales and operations.",
    serviceList: [
      "Website Design",
      "Website Development",
      "Landing Pages",
      "E-commerce Solutions",
      "Mobile App Development",
      "CRM Solutions",
      "ERP Solutions",
      "WhatsApp Business Automation",
      "AI Business Automation",
      "Digital Marketing",
      "SEO",
      "Performance Marketing",
      "Email Marketing",
    ],
    relatedSlugs: ["websites-technology", "digital-marketing"],
    ctaLabel: "Talk to a Digital Expert",
    images: [
      { src: "/portfolio/website/01.webp", alt: "RT magazine website design", width: 945, height: 1293 },
    ],
  },
  {
    slug: "media",
    navLabel: "Media",
    h1: "Put Your Brand in Front of the Right Audience",
    metaTitle: "Media Planning & Buying Agency in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds helps businesses reach customers through strategic media planning and intelligent media buying across traditional and digital platforms.",
    heroSubcopy:
      "Great brands deserve great visibility across traditional and digital platforms.",
    intro:
      "Great brands deserve great visibility. We help businesses reach customers through strategic media planning and intelligent media buying across traditional and digital platforms.",
    serviceList: [
      "Television Advertising",
      "FM Radio Advertising",
      "Newspaper Advertising",
      "Magazine Advertising",
      "Outdoor Advertising",
      "Transit Media",
      "Cinema Advertising",
      "Digital Media Buying",
      "Social Media Campaigns",
      "Influencer Marketing",
      "Media Planning",
      "Media Buying",
      "Campaign Analytics",
    ],
    relatedSlugs: ["media-planning-buying"],
    ctaLabel: "Talk to a Media Planner",
    images: [
      { src: "/portfolio/textile-fashion/09.webp", alt: "Rajendira's Women's Store outdoor hoarding advertising campaign", width: 1000, height: 1000 },
    ],
  },
  {
    slug: "growth-consultancy",
    navLabel: "Growth Consultancy",
    h1: "Build Better Businesses, Not Just Better Brands",
    metaTitle: "Business & Brand Growth Consultancy in Chennai | LeverageAds",
    metaDescription:
      "LeverageAds' growth consultancy services help organisations improve performance, customer experience and operational excellence — brand strategy, business process and leadership consulting.",
    heroSubcopy:
      "Long-term growth comes from clarity, systems and disciplined execution.",
    intro:
      "Long-term growth comes from clarity, systems and disciplined execution. Our consulting services help organisations improve performance, customer experience and operational excellence.",
    serviceList: [
      "Business Strategy",
      "Brand Strategy",
      "Marketing Strategy",
      "Media Consultancy",
      "Sales Strategy",
      "Business Process Consulting",
      "Work Process Optimisation",
      "Standard Operating Procedures (SOPs)",
      "Customer Experience Design",
      "Employee Training",
      "Leadership Development",
      "Organisational Development",
      "Performance Improvement",
      "Business Growth Consulting",
    ],
    relatedSlugs: ["brand-strategy-consulting", "corporate-training-consulting"],
    ctaLabel: "Request a Growth Consultation",
    images: [
      { src: "/team/suresh/leadership-01.webp", alt: "Leadership and business growth consulting session", width: 2000, height: 1333 },
    ],
  },
];

export function getPillarBySlug(slug: string) {
  return pillars.find((p) => p.slug === slug);
}

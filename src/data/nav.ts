export type NavLink = {
  label: string;
  href: string;
};

export type MegaMenuGroup = {
  title: string;
  href: string;
  links: NavLink[];
};

export const servicesMegaMenu: MegaMenuGroup[] = [
  {
    title: "Brand Strategy & Consulting",
    href: "/services/brand-strategy-consulting",
    links: [
      { label: "Brand Strategy", href: "/services/brand-strategy-consulting" },
      { label: "Brand Positioning", href: "/services/brand-strategy-consulting" },
      { label: "Branding & Rebranding", href: "/services/brand-strategy-consulting" },
      { label: "Business Consulting", href: "/services/brand-strategy-consulting" },
    ],
  },
  {
    title: "Creative & Advertising",
    href: "/services/creative-advertising",
    links: [
      { label: "Advertising Campaigns", href: "/services/creative-advertising" },
      { label: "Creative Concepts", href: "/services/creative-advertising" },
      { label: "Outdoor Advertising", href: "/services/creative-advertising" },
      { label: "Corporate Communication", href: "/services/creative-advertising" },
    ],
  },
  {
    title: "Digital Marketing",
    href: "/services/digital-marketing",
    links: [
      { label: "SEO", href: "/services/digital-marketing" },
      { label: "Google Ads", href: "/services/digital-marketing" },
      { label: "Social Media Marketing", href: "/services/digital-marketing" },
      { label: "Performance Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    title: "Websites & Technology",
    href: "/services/websites-technology",
    links: [
      { label: "Corporate Websites", href: "/services/websites-technology" },
      { label: "E-commerce Websites", href: "/services/websites-technology" },
      { label: "CRM & ERP", href: "/services/websites-technology" },
      { label: "WhatsApp Automation", href: "/services/websites-technology" },
    ],
  },
  {
    title: "Ad Films & Commercial Photography",
    href: "/services/ad-films-photography",
    links: [
      { label: "TV Commercials", href: "/services/ad-films-photography" },
      { label: "Product Videos", href: "/services/ad-films-photography" },
      { label: "Commercial Photography", href: "/services/ad-films-photography" },
      { label: "Product Photography", href: "/services/ad-films-photography" },
    ],
  },
  {
    title: "Creative Design",
    href: "/services/creative-design",
    links: [
      { label: "Logo Design", href: "/services/creative-design" },
      { label: "Brand Identity", href: "/services/creative-design" },
      { label: "Packaging Design", href: "/services/creative-design" },
      { label: "Brochures", href: "/services/creative-design" },
    ],
  },
  {
    title: "Print Production",
    href: "/services/print-production",
    links: [
      { label: "Offset Printing", href: "/services/print-production" },
      { label: "Business Cards", href: "/services/print-production" },
      { label: "Stationery", href: "/services/print-production" },
      { label: "Packaging", href: "/services/print-production" },
    ],
  },
  {
    title: "Media Planning & Buying",
    href: "/services/media-planning-buying",
    links: [
      { label: "Television Advertising", href: "/services/media-planning-buying" },
      { label: "Outdoor Media", href: "/services/media-planning-buying" },
      { label: "Media Planning", href: "/services/media-planning-buying" },
      { label: "Media Buying", href: "/services/media-planning-buying" },
    ],
  },
  {
    title: "Corporate Training & Consulting",
    href: "/services/corporate-training-consulting",
    links: [
      { label: "Corporate Training", href: "/services/corporate-training-consulting" },
      { label: "Branding & Marketing Workshops", href: "/services/corporate-training-consulting" },
      { label: "Leadership Development", href: "/services/corporate-training-consulting" },
      { label: "Soft Skills Training", href: "/services/corporate-training-consulting" },
    ],
  },
];

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

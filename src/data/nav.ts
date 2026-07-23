import { pillars } from "@/data/pillars";
import { services } from "@/data/services";

export type NavLink = {
  label: string;
  href: string;
};

export type PillarMenu = {
  slug: string;
  label: string;
  href: string;
  links: NavLink[];
};

export const pillarNav: PillarMenu[] = pillars.map((pillar) => ({
  slug: pillar.slug,
  label: pillar.navLabel,
  href: `/${pillar.slug}`,
  links: pillar.relatedSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` })),
}));

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

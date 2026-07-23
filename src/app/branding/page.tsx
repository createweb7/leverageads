import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { PillarIntro, PillarServiceList } from "@/components/sections/PillarContent";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABand } from "@/components/sections/CTABand";
import { getPillarBySlug } from "@/data/pillars";
import { breadcrumbSchema, pillarSchema } from "@/lib/schema";

const pillar = getPillarBySlug("branding")!;

export const metadata: Metadata = {
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  alternates: { canonical: "/branding" },
  openGraph: {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
  },
};

export default function BrandingPage() {
  return (
    <>
      <JsonLd data={pillarSchema(pillar)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Branding", path: "/branding" }])} />

      <ServiceHero
        breadcrumb={[{ label: "Branding" }]}
        eyebrow="Pillar 1 — Branding"
        h1={pillar.h1}
        subcopy={pillar.heroSubcopy}
        ctaLabel={pillar.ctaLabel}
        images={pillar.images}
      />
      <PillarIntro pillar={pillar} />
      <PillarServiceList pillar={pillar} />
      <RelatedServices
        slugs={pillar.relatedSlugs}
        eyebrow="Explore in Detail"
        title="Branding Services"
      />
      <CTABand
        title="Ready to Build a Brand People Remember?"
        subtitle="Book a consultation and we'll suggest the right next step for your brand."
        primaryLabel={pillar.ctaLabel}
        secondaryLabel="Share Your Brief on WhatsApp"
      />
    </>
  );
}

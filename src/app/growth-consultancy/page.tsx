import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { PillarIntro, PillarServiceList } from "@/components/sections/PillarContent";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABand } from "@/components/sections/CTABand";
import { getPillarBySlug } from "@/data/pillars";
import { breadcrumbSchema, pillarSchema } from "@/lib/schema";

const pillar = getPillarBySlug("growth-consultancy")!;

export const metadata: Metadata = {
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  alternates: { canonical: "/growth-consultancy" },
  openGraph: {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
  },
};

export default function GrowthConsultancyPage() {
  return (
    <>
      <JsonLd data={pillarSchema(pillar)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Growth Consultancy", path: "/growth-consultancy" },
        ])}
      />

      <ServiceHero
        breadcrumb={[{ label: "Growth Consultancy" }]}
        eyebrow="Pillar 4 — Growth Consultancy"
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
        title="Growth Consultancy Services"
      />
      <CTABand
        title="Ready to Build a Better Business?"
        subtitle="Book a consultation and we'll suggest the right next step for your organisation."
        primaryLabel={pillar.ctaLabel}
        secondaryLabel="Share Your Brief on WhatsApp"
      />
    </>
  );
}

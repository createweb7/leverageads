import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { PillarIntro, PillarServiceList } from "@/components/sections/PillarContent";
import { ServiceFramework } from "@/components/sections/ServiceFramework";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABand } from "@/components/sections/CTABand";
import { getPillarBySlug } from "@/data/pillars";
import { breadcrumbSchema, faqSchema, pillarSchema } from "@/lib/schema";

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
      {pillar.faqs && pillar.faqs.length > 0 && <JsonLd data={faqSchema(pillar.faqs)} />}
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
        heroGrid={pillar.heroGrid}
      />
      <PillarIntro pillar={pillar} />
      <PillarServiceList pillar={pillar} />
      <ServiceFramework framework={pillar.framework} />
      <RelatedServices
        slugs={pillar.relatedSlugs}
        eyebrow="Explore in Detail"
        title="Growth Consultancy Services"
      />
      <FAQAccordion faqs={pillar.faqs ?? []} title="FAQs — Growth Consultancy" />
      <CTABand
        title="Ready to Build a Better Business?"
        subtitle="Book a consultation and we'll suggest the right next step for your organisation."
        primaryLabel={pillar.ctaLabel}
        secondaryLabel="Share Your Brief on WhatsApp"
      />
    </>
  );
}

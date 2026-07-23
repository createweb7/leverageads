import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { PillarIntro, PillarServiceList } from "@/components/sections/PillarContent";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABand } from "@/components/sections/CTABand";
import { getPillarBySlug } from "@/data/pillars";
import { breadcrumbSchema, pillarSchema } from "@/lib/schema";

const pillar = getPillarBySlug("digital")!;

export const metadata: Metadata = {
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  alternates: { canonical: "/digital" },
  openGraph: {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
  },
};

export default function DigitalPage() {
  return (
    <>
      <JsonLd data={pillarSchema(pillar)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Digital", path: "/digital" }])} />

      <ServiceHero
        breadcrumb={[{ label: "Digital" }]}
        eyebrow="Pillar 2 — Digital"
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
        title="Digital Services"
      />
      <CTABand
        title="Ready to Build a Business That Works Online?"
        subtitle="Book a consultation and we'll suggest the right next step for your digital presence."
        primaryLabel={pillar.ctaLabel}
        secondaryLabel="Share Your Brief on WhatsApp"
      />
    </>
  );
}

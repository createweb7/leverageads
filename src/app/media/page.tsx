import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { PillarIntro, PillarServiceList } from "@/components/sections/PillarContent";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABand } from "@/components/sections/CTABand";
import { getPillarBySlug } from "@/data/pillars";
import { breadcrumbSchema, pillarSchema } from "@/lib/schema";

const pillar = getPillarBySlug("media")!;

export const metadata: Metadata = {
  title: pillar.metaTitle,
  description: pillar.metaDescription,
  alternates: { canonical: "/media" },
  openGraph: {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
  },
};

export default function MediaPage() {
  return (
    <>
      <JsonLd data={pillarSchema(pillar)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Media", path: "/media" }])} />

      <ServiceHero
        breadcrumb={[{ label: "Media" }]}
        eyebrow="Pillar 3 — Media"
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
        title="Media Services"
      />
      <CTABand
        title="Ready to Put Your Brand in Front of the Right Audience?"
        subtitle="Book a consultation and we'll suggest the right media mix for your budget and goals."
        primaryLabel={pillar.ctaLabel}
        secondaryLabel="Share Your Brief on WhatsApp"
      />
    </>
  );
}

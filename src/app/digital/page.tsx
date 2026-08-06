import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { PillarIntro, PillarServiceList, PillarWhyChoose } from "@/components/sections/PillarContent";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { getPillarBySlug } from "@/data/pillars";
import { breadcrumbSchema, faqSchema, pillarSchema } from "@/lib/schema";

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
      {pillar.faqs && pillar.faqs.length > 0 && <JsonLd data={faqSchema(pillar.faqs)} />}
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
      <PillarWhyChoose pillar={pillar} />
      <RelatedServices
        slugs={pillar.relatedSlugs}
        eyebrow="Explore in Detail"
        title="Digital Services"
      />
      {pillar.faqs && pillar.faqs.length > 0 && (
        <FAQAccordion faqs={pillar.faqs} title={`FAQs — ${pillar.navLabel}`} />
      )}
      <CTABand
        title="Ready to Build a Business That Works Online?"
        subtitle="Book a consultation and we'll suggest the right next step for your digital presence."
        primaryLabel={pillar.ctaLabel}
        secondaryLabel="Share Your Brief on WhatsApp"
      />
    </>
  );
}

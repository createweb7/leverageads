import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceIntro, ServiceIncluded, ServiceWhyChoose, ServiceIdealFor } from "@/components/sections/ServiceContent";
import { ServiceFramework } from "@/components/sections/ServiceFramework";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { RelatedCaseStudies } from "@/components/sections/RelatedCaseStudies";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { CTABand } from "@/components/sections/CTABand";
import { WhatsAppRequirementForm } from "@/components/sections/WhatsAppRequirementForm";
import { getServiceBySlug, services } from "@/data/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const adFilmsBts: { src: string; alt: string }[] = [
  { src: "/services/ad-films-photography/bts/bts-monitor-review.webp", alt: "Director reviewing the shot on a laptop with crew during a jewellery ad film shoot" },
  { src: "/services/ad-films-photography/bts/bts-models-briefing.webp", alt: "Models being briefed on set before a commercial shoot" },
  { src: "/services/ad-films-photography/bts/bts-laptop-review.webp", alt: "Crew reviewing footage on a laptop with a model on set" },
  { src: "/services/ad-films-photography/bts/bts-lighting-setup.webp", alt: "Crew adjusting studio lighting rig on a commercial shoot set" },
  { src: "/services/ad-films-photography/bts/bts-crew-monitor.webp", alt: "Production crew reviewing a shot on a director's monitor" },
  { src: "/services/ad-films-photography/bts/bts-playback-review.webp", alt: "Director and crew reviewing playback footage on set" },
  { src: "/services/ad-films-photography/bts/bts-suresh-model-portrait.webp", alt: "Suresh Ramakrishnan with a celebrity model for a jewellery campaign" },
  { src: "/services/ad-films-photography/bts/bts-crew-conversation.webp", alt: "Production crew discussing a scene between takes" },
];

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path: `/services/${service.slug}` },
        ])}
      />

      <ServiceHero
        breadcrumb={[{ label: "Services", href: "/services" }, { label: service.navLabel }]}
        eyebrow={service.navLabel}
        h1={service.h1}
        subcopy={service.heroSubcopy}
        ctaLabel={service.ctaLabel}
        images={service.images}
        heroGrid={service.heroGrid}
      />
      <ServiceIntro service={service} />
      <ServiceIncluded service={service} />
      <ServiceWhyChoose service={service} />
      <ServiceFramework framework={service.framework} />
      <RelatedCaseStudies serviceSlug={service.slug} />
      <ServiceIdealFor service={service} />

      {slug === "ad-films-photography" && (
        <section className="py-20 md:py-24 bg-brand-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Behind the Scenes"
                title="On Set With the Crew"
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <div className="mt-12">
              <GalleryLightbox images={adFilmsBts} />
            </div>
          </Container>
        </section>
      )}

      <ProcessSteps />
      <FAQAccordion faqs={service.faqs} title={`FAQs — ${service.navLabel}`} />

      {slug === "websites-technology" && (
        <section className="py-20 md:py-24 bg-brand-paper">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Get Started"
                title="Tell Us What You Want to Automate"
                subtitle="Share a few details about your enquiry volume and goals, and we'll recommend the right WhatsApp automation workflow."
                align="center"
                className="mx-auto"
              />
            </Reveal>
            <Reveal
              delay={100}
              className="mx-auto mt-10 max-w-2xl rounded-3xl border border-brand-line bg-white p-6 shadow-brand-sm sm:p-10"
            >
              <WhatsAppRequirementForm />
            </Reveal>
          </Container>
        </section>
      )}

      <RelatedServices slugs={service.relatedSlugs} />
      <CTABand
        title={`Ready to Talk About ${service.navLabel}?`}
        subtitle="Book a consultation and we'll suggest the right next step for your business."
        primaryLabel={service.ctaLabel}
        secondaryLabel="Share Your Brief on WhatsApp"
      />
    </>
  );
}

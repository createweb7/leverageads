import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceIntro, ServiceIncluded, ServiceIdealFor } from "@/components/sections/ServiceContent";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { CTABand } from "@/components/sections/CTABand";
import { WhatsAppRequirementForm } from "@/components/sections/WhatsAppRequirementForm";
import { getServiceBySlug, services } from "@/data/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

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
      />
      {service.draft && (
        <div className="bg-brand-paper">
          <Container>
            <div className="flex items-start gap-3 border-b border-brand-line py-4 text-sm text-brand-gray">
              <Info size={16} className="mt-0.5 shrink-0 text-brand-red" />
              This page is a first draft, newly added to our service menu — content is still being
              reviewed and will be refined.
            </div>
          </Container>
        </div>
      )}
      <ServiceIntro service={service} />
      <ServiceIncluded service={service} />
      <ServiceIdealFor service={service} />
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

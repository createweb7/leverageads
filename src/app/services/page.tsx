import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CoreServicesGrid } from "@/components/sections/CoreServicesGrid";
import { CTABand } from "@/components/sections/CTABand";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Branding, advertising, ad films, product photography, websites, e-commerce, CRM, ERP, WhatsApp automation, SEO and digital marketing — explore LeverageAds' full range of services.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <section
        className="border-b border-brand-line bg-brand-paper"
        style={{
          backgroundImage:
            "radial-gradient(1000px 500px at 90% -20%, rgba(237,50,55,.06), transparent 60%)",
        }}
      >
        <Container className="pt-8 pb-20 md:pt-10 md:pb-28">
          <div className="max-w-2xl">
            <Reveal>
              <Breadcrumbs items={[{ label: "Services" }]} className="mb-6" />
            </Reveal>
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
                What We Do
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight text-balance">
                Services Built Around What Your Business Actually Needs
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg text-brand-gray leading-relaxed">
                From brand strategy to WhatsApp automation, {siteConfig.name} brings strategy,
                creative, digital execution and business systems together under one roof.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
      <CoreServicesGrid />
      <CTABand
        title="Not Sure Which Service You Need?"
        subtitle="Start with a consultation and we'll point you to the right service — or combination of services."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
    </>
  );
}

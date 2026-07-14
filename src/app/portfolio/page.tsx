import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "LeverageAds works across branding, advertising, visual production, websites, digital communication and business systems. Our portfolio brings together selected work across these categories.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white pt-8 pb-10 md:pt-10 md:pb-12">
        <Container>
          <Breadcrumbs items={[{ label: "Portfolio" }]} />

          <h1 className="mt-5 font-display text-2xl font-bold text-brand-ink sm:text-[28px]">
            Portfolio
          </h1>
          <p className="mt-2 max-w-2xl text-[15px] text-brand-gray leading-relaxed">
            LeverageAds works across branding, advertising, visual production, websites, digital
            communication and business systems. Our portfolio brings together selected work
            across these categories to help you understand the breadth of our capabilities and
            the kind of thinking we bring to each brief.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <CTABand
        title="Like What You See?"
        subtitle="Let's discuss how we can build the right communication, platform or campaign for your brand."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real client work from LeverageAds — the brief, the thinking and the outcome behind each project.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white pt-8 pb-10 md:pt-10 md:pb-12">
        <Container>
          <Breadcrumbs items={[{ label: "Case Studies" }]} />

          <h1 className="mt-5 font-display text-2xl font-bold text-brand-ink sm:text-[28px]">
            The Thinking Behind the Work
          </h1>
          <p className="mt-2 max-w-xl text-[15px] text-brand-gray leading-relaxed">
            Not just what we made — the brief, the approach and the outcome behind each project.
            Pick a client below to read the full story.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <Container>
          <CaseStudiesGrid caseStudies={caseStudies} />
        </Container>
      </section>

      <CTABand
        title="Want to See What We Could Build for You?"
        subtitle="Book a consultation and let's talk about your project."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
    </>
  );
}

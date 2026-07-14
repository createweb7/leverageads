import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { CTABand } from "@/components/sections/CTABand";

const heroImages = [
  {
    src: "/team/suresh-ramakrishnan.jpeg",
    alt: "Suresh Ramakrishnan, Founder of LeverageAds, leading a corporate training session",
    width: 1204,
    height: 1240,
  },
];

export const metadata: Metadata = {
  title: "About LeverageAds",
  description:
    "LeverageAds is a full-service brand, creative, digital and business solutions company in Chennai. Learn who we are, what we bring to the table and why businesses work with us.",
  alternates: { canonical: "/about" },
};

const bring = [
  "Brand strategy and positioning clarity",
  "Identity design and premium brand communication",
  "Advertising, campaign ideation and launch support",
  "Commercial photography, ad films and visual storytelling",
  "Corporate websites, e-commerce platforms and landing pages",
  "Mobile apps, CRM, ERP and workflow systems",
  "SEO, digital marketing and lead generation support",
  "WhatsApp automation and conversational enquiry systems",
];

export default function AboutPage() {
  return (
    <>
      <section
        className="overflow-hidden border-b border-brand-line bg-brand-paper"
        style={{
          backgroundImage:
            "radial-gradient(1000px 500px at 90% -20%, rgba(237,50,55,.06), transparent 60%)",
        }}
      >
        <Container className="pt-8 pb-20 md:pt-10 md:pb-28">
          <Reveal>
            <Breadcrumbs items={[{ label: "About" }]} className="mb-6" />
          </Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="max-w-2xl">
              <Reveal>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
                  Who We Are
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight text-balance">
                  Branding Should Not Be Decoration. Marketing Should Not Be Disconnected From
                  Business Reality.
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-lg text-brand-gray leading-relaxed">
                  At LeverageAds, we believe a website should not behave like a brochure, and a
                  brand should not be reduced to a logo. Our role is to help businesses build
                  stronger identities, communicate with more clarity, create more persuasive visual
                  presence and support growth through digital platforms and business systems that
                  actually work.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <HeroVisual images={heroImages} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal className="max-w-3xl mx-auto space-y-5">
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              We work with startups, SMEs, family-run businesses, retail brands, institutions and
              growing companies that want a partner who understands both creative communication
              and commercial practicality.
            </p>
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              Over the years, our work has expanded from branding and advertising into a broader
              ecosystem of business-facing services including ad films, product photography,
              website development, e-commerce, mobile apps, CRM, ERP, WhatsApp automation and
              strategic consulting. This evolution reflects the way businesses actually grow
              today: not through isolated activities, but through connected systems of
              communication, digital presence, customer handling and operational support.
            </p>
            <p className="text-brand-ink font-semibold leading-relaxed text-base md:text-lg pt-2">
              Our approach is simple. We begin by understanding the business, the audience, the
              problem and the intended outcome. From there, we build the right combination of
              strategy, creativity, visual communication, technology and execution support.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core Promise"
              title="What We Bring to the Table"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal delay={100} className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {bring.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-5 transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-brand-ink leading-relaxed">{item}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Why Businesses Work With Us"
              title="More Than a Vendor"
              align="center"
              className="mx-auto"
            />
            <p className="mt-6 text-brand-gray leading-relaxed text-base md:text-lg">
              Clients come to LeverageAds when they want more than a vendor. They want someone
              who can understand the business challenge, recommend the right direction, execute
              the communication or system well, and keep the work commercially grounded. That
              combination of strategic thinking and practical execution is central to the way we
              work.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Let's Talk About Your Business"
        subtitle="Book a consultation and we'll help you figure out the right next step — branding, website, campaign, CRM, ERP or WhatsApp automation."
        primaryLabel="Book a Consultation"
        secondaryLabel="Share Your Requirement on WhatsApp"
      />
    </>
  );
}

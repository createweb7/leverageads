import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABand } from "@/components/sections/CTABand";
import { IndustryGraphic } from "@/components/sections/IndustryGraphic";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Work With",
  description:
    "LeverageAds works across jewellery, hospitality, education and healthcare — branding, campaigns, websites and digital support built around each industry's real challenges.",
  alternates: { canonical: "/industries" },
};

const builtIndustries = industries.filter((i) => i.intro);

export default function IndustriesPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-white pt-8 pb-10 md:pt-10 md:pb-12">
        <Container>
          <Breadcrumbs items={[{ label: "Industries" }]} />

          <h1 className="mt-5 font-display text-2xl font-bold text-brand-ink sm:text-[28px]">
            Industries We Work With
          </h1>
          <p className="mt-2 max-w-xl text-[15px] text-brand-gray leading-relaxed">
            Every industry has its own trust signals, buying triggers and communication style.
            Here&apos;s where we&apos;ve built the deepest experience.
          </p>
        </Container>
      </section>

      <section className="py-14 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {builtIndustries.map((industry, i) => (
              <Reveal key={industry.slug} delay={(i % 4) * 80}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group relative block aspect-4/5 overflow-hidden rounded-3xl shadow-brand-sm transition-all duration-300 ease-brand hover:-translate-y-1.5 hover:shadow-brand-lg"
                >
                  <div className="absolute inset-0 transition-transform duration-500 ease-brand group-hover:scale-105">
                    <IndustryGraphic
                      slug={industry.slug}
                      gradientFrom={industry.gradientFrom}
                      gradientTo={industry.gradientTo}
                      accent={industry.accent}
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/10" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span
                      className="mb-3 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                      style={{ backgroundColor: `${industry.accent}22`, color: industry.accent }}
                    >
                      {industry.tag}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">{industry.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{industry.blurb}</p>
                    <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
                      Explore
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 ease-brand group-hover:translate-x-1.5"
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        title="Don't See Your Industry Listed?"
        subtitle="We work with founder-led businesses, institutions and established companies across many categories — book a consultation and let's talk about yours."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
    </>
  );
}

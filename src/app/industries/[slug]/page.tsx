import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { industries, getIndustryBySlug } from "@/data/industries";
import { breadcrumbSchema } from "@/lib/schema";

const builtIndustries = industries.filter((i) => i.intro);

export function generateStaticParams() {
  return builtIndustries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry || !industry.intro) return {};

  return {
    title: industry.metaTitle ?? industry.h1,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry || !industry.intro) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${industry.slug}` },
        ])}
      />

      <section
        className="border-b border-brand-line bg-brand-paper"
        style={{
          backgroundImage: `radial-gradient(1000px 500px at 90% -20%, ${industry.accent}18, transparent 60%)`,
        }}
      >
        <Container className="pt-8 pb-16 md:pt-10 md:pb-24">
          <Reveal>
            <Breadcrumbs
              items={[{ label: "Industries", href: "/industries" }, { label: industry.name }]}
              className="mb-6"
            />
          </Reveal>
          <Reveal>
            <Link
              href="/industries"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-gray transition-colors hover:text-brand-red"
            >
              <ArrowLeft size={15} />
              All Industries
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
              {industry.tag}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="max-w-2xl font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-brand-ink leading-tight text-balance">
              {industry.h1}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl space-y-5">
            {industry.intro.map((p, i) => (
              <p key={i} className="text-brand-gray leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>

          {industry.idealFor && (
            <Reveal delay={100} className="mx-auto mt-12 max-w-3xl">
              <h2 className="font-display text-xl font-bold text-brand-ink">Ideal For</h2>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {industry.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm text-brand-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </Container>
      </section>

      <RelatedServices slugs={industry.relatedSlugs ?? []} />

      <CTABand
        title={`Ready to Talk About ${industry.name}?`}
        subtitle="Book a consultation and we'll walk through what's possible for your business."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
    </>
  );
}

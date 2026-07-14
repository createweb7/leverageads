import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import { CTABand } from "@/components/sections/CTABand";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: `${cs.client} Case Study`,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: `${cs.client} Case Study`,
      description: cs.summary,
      images: [{ url: cs.coverImage }],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: cs.client, path: `/case-studies/${cs.slug}` },
        ])}
      />

      <section
        className="border-b border-brand-line bg-brand-paper"
        style={{
          backgroundImage:
            "radial-gradient(1000px 500px at 90% -20%, rgba(237,50,55,.06), transparent 60%)",
        }}
      >
        <Container className="pt-8 pb-16 md:pt-10 md:pb-24">
          <Reveal>
            <Breadcrumbs
              items={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.client }]}
              className="mb-6"
            />
          </Reveal>
          <Reveal>
            <Link
              href="/case-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-gray transition-colors hover:text-brand-red"
            >
              <ArrowLeft size={15} />
              All Case Studies
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Reveal delay={40} className="relative mb-8 h-32 w-full max-w-80 overflow-hidden rounded-xl">
                <Image
                  src={cs.logo ?? cs.coverImage}
                  alt={cs.logo ? `${cs.client} logo` : cs.client}
                  fill
                  sizes="320px"
                  className="object-contain object-left"
                />
              </Reveal>
              <Reveal delay={80}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
                  {cs.category}
                </p>
              </Reveal>
              <Reveal delay={140}>
                <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-brand-ink leading-tight text-balance">
                  {cs.client}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 text-lg text-brand-gray leading-relaxed">{cs.subtitle}</p>
              </Reveal>
            </div>
            <Reveal
              delay={200}
              className="relative h-[420px] overflow-hidden rounded-3xl bg-white shadow-brand-lg md:h-[520px]"
            >
              <Image
                src={cs.coverImage}
                alt={cs.client}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                priority
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {cs.gallery.length > 0 && (
        <section className="py-16 md:py-20 bg-brand-paper">
          <Container>
            <Reveal>
              <h2 className="mb-10 text-center font-display text-2xl font-bold text-brand-ink">
                Gallery
              </h2>
            </Reveal>
            <GalleryLightbox images={cs.gallery} />
          </Container>
        </section>
      )}

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl space-y-5">
            {cs.intro.map((p, i) => (
              <p key={i} className="text-brand-gray leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-14">
            {cs.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60}>
                <h2 className="font-display text-2xl font-bold text-brand-ink">
                  {section.heading}
                </h2>
                {section.paragraphs.length > 0 && (
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} className="text-brand-gray leading-relaxed text-base md:text-lg">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        <span className="text-sm text-brand-gray leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>

          {cs.closing && (
            <Reveal className="mx-auto mt-14 max-w-3xl border-l-2 border-brand-red pl-6">
              {cs.closing.map((p, i) => (
                <p
                  key={i}
                  className="font-display text-lg md:text-xl font-semibold text-brand-ink leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          )}
        </Container>
      </section>

      <RelatedServices slugs={cs.relatedSlugs} />

      <CTABand
        title={`Want Something Like This for Your Brand?`}
        subtitle="Book a consultation and we'll talk through what's possible for you."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
        showPhoneNote={false}
      />
    </>
  );
}

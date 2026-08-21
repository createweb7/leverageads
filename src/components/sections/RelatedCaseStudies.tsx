import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/caseStudies";

export function RelatedCaseStudies({
  serviceSlug,
  eyebrow = "Proof of Work",
  title = "Related Case Studies",
}: {
  serviceSlug: string;
  eyebrow?: string;
  title?: string;
}) {
  const related = caseStudies.filter((cs) => cs.relatedSlugs.includes(serviceSlug));
  if (!related.length) return null;

  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} align="center" className="mx-auto" />
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((cs, i) => (
            <Reveal key={cs.slug} delay={(i % 3) * 80}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-md"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-brand-ink">
                  <Image
                    src={cs.teaserImage ?? cs.coverImage}
                    alt={cs.client}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-brand group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[12px] font-semibold uppercase tracking-[.12em] text-brand-red">
                    {cs.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-brand-ink">
                    {cs.client}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-gray">
                    {cs.summary}
                  </p>
                  <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-ink transition-transform duration-300 ease-brand group-hover:translate-x-1">
                    Read Case Study
                    <ArrowRight size={15} className="text-brand-red" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

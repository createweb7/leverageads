import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/caseStudies";

const featuredSlugs = [
  "branding-photography-celebrity-campaigns",
  "hadron-homes",
  "meston-college",
  "relishpro-brand-naming",
];
const featured = featuredSlugs
  .map((slug) => caseStudies.find((cs) => cs.slug === slug))
  .filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

export function FeaturedWork() {
  return (
    <section id="work" className="py-20 md:py-28 bg-brand-paper">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red">
              Featured Case Studies
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-balance text-brand-ink md:text-4xl">
              Brands We&apos;ve Transformed
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-brand-line px-6 py-3 font-display text-sm font-semibold text-brand-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:border-brand-red hover:text-brand-red"
          >
            View All Case Studies
            <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-14 flex flex-col gap-7">
          {featured.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className={`group grid grid-cols-1 overflow-hidden rounded-3xl border border-brand-line bg-white transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-lg lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="relative min-h-70 overflow-hidden bg-brand-ink lg:min-h-95 lg:[direction:ltr]">
                  <Image
                    src={cs.teaserImage ?? cs.coverImage}
                    alt={cs.client}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12 lg:[direction:ltr]">
                  <span className="mb-4 text-[12.5px] font-semibold uppercase tracking-[.14em] text-brand-red">
                    {cs.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-brand-ink md:text-[28px]">
                    {cs.client}
                  </h3>
                  <p className="mt-3.5 text-[16px] leading-relaxed text-brand-gray">
                    {cs.summary}
                  </p>
                  <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-brand-ink px-6 py-3 font-display text-sm font-semibold text-white transition-all duration-300 ease-brand group-hover:-translate-y-0.5 group-hover:bg-brand-ink-3">
                    Read Case Study
                    <ArrowRight size={16} />
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

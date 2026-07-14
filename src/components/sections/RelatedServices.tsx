import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { getServiceBySlug } from "@/data/services";

export function RelatedServices({ slugs }: { slugs: string[] }) {
  const related = slugs.map(getServiceBySlug).filter((s): s is NonNullable<typeof s> => Boolean(s));
  if (!related.length) return null;

  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Related" title="You May Also Need" align="center" className="mx-auto" />
        </Reveal>
        <Reveal delay={100} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-brand-line px-6 py-5 transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-transparent hover:shadow-brand-md"
            >
              <span>
                <span className="block text-sm font-bold text-brand-ink">{service.navLabel}</span>
                <span className="block text-xs text-brand-gray mt-1">{service.h1}</span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-brand-red transition-transform duration-300 ease-brand group-hover:translate-x-1.5" />
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

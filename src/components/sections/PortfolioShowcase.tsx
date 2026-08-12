import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function PortfolioShowcase() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Explore Our Work"
            title="Model Photography & Campaign Creative"
            subtitle="A look at the model photography behind our client brands — browse by category to see the full body of work."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          <Reveal className="flex flex-col">
            <Link
              href="/portfolio?category=model-photography"
              className="group relative block aspect-3/4 overflow-hidden rounded-2xl bg-brand-ink sm:aspect-auto sm:h-full sm:min-h-90"
            >
              <Image
                src="/home/showcase/sri-lakshmi-white-saree.webp"
                alt="Sri Lakshmi Jewellery bridal model photography"
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-brand group-hover:scale-108"
              />
            </Link>
          </Reveal>

          <div className="flex flex-col gap-4 sm:gap-5">
            <Reveal delay={80} className="flex flex-col">
              <Link
                href="/portfolio?category=model-photography"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-brand-ink"
              >
                <Image
                  src="/home/showcase/sri-lakshmi-garden.webp"
                  alt="Sri Lakshmi Jewellery garden model photography"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-brand group-hover:scale-108"
                />
              </Link>
            </Reveal>

            <Reveal delay={160} className="flex flex-col">
              <Link
                href="/portfolio?category=model-photography"
                className="group relative block aspect-16/10 overflow-hidden rounded-2xl bg-brand-ink"
              >
                <Image
                  src="/home/showcase/sri-lakshmi-temple.webp"
                  alt="Sri Lakshmi Jewellery temple heritage model photography"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-brand group-hover:scale-108"
                />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={240} className="flex flex-col">
            <Link
              href="/portfolio?category=model-photography"
              className="group relative block aspect-3/4 overflow-hidden rounded-2xl bg-brand-ink sm:aspect-auto sm:h-full sm:min-h-90"
            >
              <Image
                src="/home/showcase/lakshmi-bridal.webp"
                alt={'Lakshmi Jewellery "Antique Bridal Collection" model photography'}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-brand group-hover:scale-108"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={300} className="mt-12 flex justify-center">
          <Link
            href="/portfolio?category=model-photography"
            className="inline-flex items-center gap-2 rounded-full border border-brand-line px-7 py-3.5 font-display text-sm font-semibold text-brand-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:border-brand-red hover:text-brand-red"
          >
            View Full Portfolio
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

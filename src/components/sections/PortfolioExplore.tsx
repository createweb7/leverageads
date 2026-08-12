import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    src: "/home/showcase/slj-necklace-box.webp",
    alt: "Sri Lakshmi Jewellery necklace and bangles product photography",
  },
  {
    src: "/home/showcase/slj-bangles.webp",
    alt: "Sri Lakshmi Jewellery gold and silver bangles product photography",
  },
  {
    src: "/home/showcase/slj-pendant-ruby.webp",
    alt: "Sri Lakshmi Jewellery ruby gold pendant product photography",
  },
  {
    src: "/home/showcase/slj-pendant-diamond.webp",
    alt: "Sri Lakshmi Jewellery diamond pendant product photography",
  },
  {
    src: "/home/showcase/slj-pendant-red.webp",
    alt: "Sri Lakshmi Jewellery ruby and emerald pendant product photography",
  },
  {
    src: "/home/showcase/slj-turquoise-pendant.webp",
    alt: "Sri Lakshmi Jewellery turquoise and gold pendant product photography",
  },
];

export function PortfolioExplore() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Product Photography"
            title="More From Our Portfolio"
            subtitle="Close-up product photography for necklaces, bangles and pendants — shot for catalogues, e-commerce and social campaigns."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {products.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 80}>
              <Link
                href="/portfolio?category=product-photography"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-brand-ink"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-brand group-hover:scale-108"
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-12 flex justify-center">
          <Link
            href="/portfolio?category=product-photography"
            className="inline-flex items-center gap-2 rounded-full border border-brand-line px-7 py-3.5 font-display text-sm font-semibold text-brand-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:border-brand-red hover:text-brand-red"
          >
            Discover More
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

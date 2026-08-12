import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  {
    name: "Jewellery Campaigns",
    src: "/home/showcase/sri-lakshmi-necklace-braid.webp",
    alt: "Sri Lakshmi Jewellery necklace campaign photography",
    tall: false,
  },
  {
    name: "Festive Campaigns",
    src: "/home/showcase/sri-lakshmi-akshaya-kaalam.webp",
    alt: "Sri Lakshmi Jewellery \"Akshaya Kaalam\" festive campaign photography",
    tall: true,
  },
  {
    name: "Bridal Collections",
    src: "/home/showcase/sri-lakshmi-layered-necklace.webp",
    alt: "Sri Lakshmi Jewellery layered necklace campaign photography",
    tall: false,
  },
];

export function CampaignHighlights() {
  return (
    <section className="py-20 md:py-28 bg-brand-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Work That Speaks"
            title="Real Campaigns, Real Results"
            subtitle="A closer look at finished creative — celebrity campaigns, jewellery collections and bridal stories — designed and produced end to end by LeverageAds."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-end gap-5 sm:grid-cols-3 sm:gap-6">
          {highlights.map((item, i) => (
            <Reveal key={item.src} delay={i * 100}>
              <Link
                href="/portfolio?category=jewellery"
                className={`group block ${item.tall ? "sm:-translate-y-6" : ""}`}
              >
                <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-brand-ink shadow-brand-sm transition-shadow duration-300 ease-brand group-hover:shadow-brand-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-brand group-hover:scale-108"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 flex justify-center">
          <Link
            href="/portfolio?category=jewellery"
            className="inline-flex items-center gap-2 rounded-full bg-brand-ink px-7 py-3.5 font-display text-sm font-semibold text-white transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:bg-brand-ink-3"
          >
            View Full Portfolio
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

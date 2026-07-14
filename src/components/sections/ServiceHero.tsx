import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { whatsappHref } from "@/data/site";
import type { ServiceImage } from "@/data/services";

export function ServiceHero({
  breadcrumb,
  eyebrow,
  h1,
  subcopy,
  ctaLabel,
  images,
}: {
  breadcrumb: Crumb[];
  eyebrow: string;
  h1: string;
  subcopy: string;
  ctaLabel: string;
  images?: ServiceImage[];
}) {
  return (
    <section
      className="overflow-hidden border-b border-brand-line bg-brand-paper"
      style={{
        backgroundImage:
          "radial-gradient(1000px 500px at 90% -20%, rgba(237,50,55,.06), transparent 60%)",
      }}
    >
      <Container className="pt-8 pb-16 md:pt-10 md:pb-20">
        <Reveal>
          <Breadcrumbs items={breadcrumb} className="mb-6" />
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="max-w-2xl">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display text-3xl font-extrabold leading-tight text-balance text-brand-ink sm:text-4xl md:text-5xl">
                {h1}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-lg leading-relaxed text-brand-gray">{subcopy}</p>
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                {ctaLabel}
                <ArrowRight size={18} />
              </Button>
              <Button
                href={whatsappHref(`Hi LeverageAds, I'd like to discuss: ${h1}`)}
                size="lg"
                variant="ghost"
              >
                Discuss on WhatsApp
              </Button>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroVisual images={images} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

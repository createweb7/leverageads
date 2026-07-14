import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export function CoreServicesGrid() {
  return (
    <section id="services" className="bg-brand-ink py-20 text-white md:py-28">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red">
              Core Services
            </p>
            <h2 className="max-w-2xl font-display text-3xl font-bold text-balance md:text-4xl">
              Everything Your Brand Needs to Grow — Under One Roof
            </h2>
          </div>
          <Button href="/services" variant="white">
            Explore All Services
            <ArrowRight size={16} />
          </Button>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4.5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 90}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-brand-ink-2 p-7 transition-all duration-300 ease-brand hover:-translate-y-1.5 hover:bg-brand-ink-3"
              >
                <span className="mb-6 block font-display text-[13px] font-bold tracking-wide text-brand-red">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-white">{service.navLabel}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/55">
                  {service.heroSubcopy}
                </p>
                <span className="mt-6 flex items-center gap-2 font-display text-sm font-semibold text-white transition-colors group-hover:text-brand-red">
                  Learn more
                  <ArrowRight size={15} className="transition-transform duration-300 ease-brand group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

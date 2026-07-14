import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { ServicePage } from "@/data/services";

export function ServiceIntro({ service }: { service: ServicePage }) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal className="max-w-3xl mx-auto space-y-5">
          {service.intro.map((paragraph, i) => (
            <p key={i} className="text-brand-gray leading-relaxed text-base md:text-lg">
              {paragraph}
            </p>
          ))}
          <p className="text-brand-ink font-semibold leading-relaxed text-base md:text-lg pt-2">
            {service.whyItMatters}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function ServiceIncluded({ service }: { service: ServicePage }) {
  return (
    <section
      id={service.slug === "creative-design" ? "logo-design" : undefined}
      className="py-20 md:py-24 bg-brand-paper"
    >
      <Container>
        <Reveal>
          <SectionHeading eyebrow="What's Included" title="What This Service Covers" align="center" className="mx-auto" />
        </Reveal>
        <Reveal
          delay={100}
          className={
            service.included.length > 1
              ? "mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
              : "mt-12 grid grid-cols-1 gap-6 max-w-md mx-auto"
          }
        >
          {service.included.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-brand-line bg-white p-7 transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-md"
            >
              <h3 className="font-display text-lg font-bold text-brand-ink mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-sm text-brand-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export function ServiceIdealFor({ service }: { service: ServicePage }) {
  if (!service.idealFor?.length) return null;
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Who It's For" title="Ideal For" align="center" className="mx-auto" />
        </Reveal>
        <Reveal delay={100} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {service.idealFor.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-brand-line bg-brand-paper px-5 py-4 text-sm font-medium text-brand-ink transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:shadow-brand-sm"
            >
              {item}
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Pillar } from "@/data/pillars";

export function PillarIntro({ pillar }: { pillar: Pillar }) {
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal className="max-w-3xl mx-auto space-y-5">
          {pillar.intro.map((paragraph, i) => (
            <p key={i} className="text-brand-gray leading-relaxed text-base md:text-lg">
              {paragraph}
            </p>
          ))}
          {pillar.whyItMatters && (
            <p className="text-brand-ink font-semibold leading-relaxed text-base md:text-lg pt-2">
              {pillar.whyItMatters}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

export function PillarServiceList({ pillar }: { pillar: Pillar }) {
  return (
    <section className="py-20 md:py-24 bg-brand-paper">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title={`What's Covered Under ${pillar.navLabel}`}
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <Reveal
          delay={100}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {pillar.serviceList.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-4 transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-sm"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
                <Check size={13} strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-brand-ink leading-relaxed">{item}</span>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

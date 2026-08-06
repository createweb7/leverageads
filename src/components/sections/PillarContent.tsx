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

        {pillar.serviceGroups ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {pillar.serviceGroups.map((group, i) => (
              <Reveal
                key={group.title}
                delay={i * 60}
                className="rounded-2xl border border-brand-line bg-white p-7"
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
              </Reveal>
            ))}
          </div>
        ) : (
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
        )}
      </Container>
    </section>
  );
}

export function PillarWhyChoose({ pillar }: { pillar: Pillar }) {
  if (!pillar.whyChoose?.length) return null;
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title={`Why Choose ${pillar.navLabel === "Digital" ? "Leverage Digital" : pillar.navLabel}?`}
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <Reveal
          delay={100}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto"
        >
          {pillar.whyChoose.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-brand-line bg-brand-paper p-4 transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-sm"
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

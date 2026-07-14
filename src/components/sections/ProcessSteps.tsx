import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/data/services";

export function ProcessSteps() {
  return (
    <section className="py-20 md:py-24 bg-brand-ink">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Process"
            align="center"
            className="mx-auto [&_h2]:text-white [&_p]:text-white/60"
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-brand-ink-2 p-7 transition-all duration-300 ease-brand hover:-translate-y-1.5 hover:bg-brand-ink-3">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceFramework({
  framework,
}: {
  framework?: { title: string; steps: { title: string; body: string }[] };
}) {
  if (!framework?.steps.length) return null;
  const { title, steps } = framework;
  return (
    <section className="py-20 md:py-24 bg-white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Our Approach" title={title} align="center" className="mx-auto" />
        </Reveal>
        <div
          className={
            steps.length > 4
              ? "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
              : "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-brand-line bg-brand-paper p-7 transition-all duration-300 ease-brand hover:-translate-y-1.5 hover:shadow-brand-md">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display text-base font-bold text-brand-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { value: 24, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 1000, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Industries" },
];

export function AboutSnapshot() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-brand-lg">
            <Image
              src="/team/suresh-ramakrishnan.jpeg"
              alt="Suresh Ramakrishnan, Founder of LeverageAds"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "64% 25%" }}
              priority
            />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-85 w-85 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(237,50,55,.28), transparent 65%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
              style={{
                background: "linear-gradient(to top, rgba(12,13,16,.92) 0%, rgba(12,13,16,.35) 55%, transparent 100%)",
              }}
            />
            <div className="absolute inset-x-10 bottom-11 text-white">
              <div className="font-display text-2xl font-bold leading-tight sm:text-[28px]">
                Suresh Ramakrishnan
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[.25em] text-brand-red">
                Founder, LeverageAds
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-11 animate-float rounded-2xl border border-brand-line bg-white px-6 py-4.5 shadow-brand-md">
            <strong className="block font-display text-2xl font-extrabold text-brand-red">24+</strong>
            <span className="text-[13px] text-brand-gray">Years of Brand Building</span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              eyebrow="About LeverageAds"
              title="More Than an Agency. A Growth Partner for Your Business."
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-brand-gray leading-relaxed">
              At LeverageAds, we do not see branding, advertising, websites, photography or
              software as isolated services. We see them as connected parts of one larger
              business goal: to help a brand become{" "}
              <strong className="font-semibold text-brand-ink">
                more visible, more trusted, more memorable and more effective
              </strong>{" "}
              in the market.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-brand-gray leading-relaxed">
              Whether you are a startup shaping your identity, a jewellery brand planning a
              launch, a resort refreshing its communication, a college improving admissions
              visibility, or a growing business looking for CRM, ERP or WhatsApp automation
              support — we translate business goals into{" "}
              <strong className="font-semibold text-brand-ink">
                communication, platforms and systems that work
              </strong>
              .
            </p>
          </Reveal>

          <Reveal delay={250} className="mt-11 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-brand-line bg-brand-paper px-3 py-6 text-center transition-transform duration-300 ease-brand hover:-translate-y-1"
              >
                <b className="block font-display text-2xl font-extrabold tracking-tight text-brand-ink sm:text-3xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </b>
                <span className="text-[13px] text-brand-gray">{stat.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            <Button href="/about" variant="dark">
              More About LeverageAds
            </Button>
            <Button href="/services" variant="ghost">
              Our Services
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

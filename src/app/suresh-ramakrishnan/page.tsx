import type { Metadata } from "next";
import Image from "next/image";
import { Award, Check, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { HeroVisual } from "@/components/ui/HeroVisual";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { CTABand } from "@/components/sections/CTABand";
import { whatsappHref } from "@/data/site";

const heroImages = [
  {
    src: "/team/suresh/hero-primary.webp",
    alt: "Suresh Ramakrishnan, Founder and Creative Director of Leverage Advertising",
    width: 640,
    height: 640,
  },
  {
    src: "/team/suresh/hero-secondary.webp",
    alt: "Suresh Ramakrishnan shooting a commercial photography campaign",
    width: 2574,
    height: 1881,
  },
];

const stats = [
  { value: 26, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Brands & Organisations Served" },
  { value: 200, suffix: "+", label: "Advertising Film Projects" },
];

const howIHelp = [
  "Business & Brand Strategy",
  "Brand Positioning & Rebranding",
  "Advertising Campaigns",
  "Ad Film Direction",
  "Commercial & Product Photography",
  "Digital Marketing Strategy",
  "Customer Experience Consulting",
  "Corporate Training",
  "Leadership & Communication",
  "Entrepreneur Mentoring",
  "Marketing Systems & Business Growth",
];

const galleryImages = [
  { src: "/team/suresh/gallery-01.webp", alt: "Suresh Ramakrishnan with a celebrity brand ambassador at a commercial photoshoot" },
  { src: "/team/suresh/gallery-02.webp", alt: "Suresh Ramakrishnan directing an ad film production on set" },
  { src: "/team/suresh/gallery-03.webp", alt: "Behind the scenes of a jewellery ad film shoot with the lead actress and crew" },
  { src: "/team/suresh/gallery-04.webp", alt: "Suresh Ramakrishnan briefing a celebrity model on set for a commercial shoot" },
  { src: "/team/suresh/gallery-05.webp", alt: "Suresh Ramakrishnan coordinating a fashion commercial shoot with models" },
  { src: "/team/suresh/gallery-06.webp", alt: "Behind the scenes of a jewellery commercial photoshoot" },
];

const philosophy = [
  "Think Strategically.",
  "Create Meaningfully.",
  "Execute Consistently.",
];

const whyClients = [
  "I combine business thinking with creative excellence.",
  "I focus on measurable outcomes rather than attractive campaigns alone.",
  "I bring experience across branding, advertising, consulting and training.",
  "I believe long-term partnerships create stronger businesses than one-time projects.",
];

export const metadata: Metadata = {
  title: "Suresh Ramakrishnan — Business & Brand Growth Strategist",
  description:
    "Suresh Ramakrishnan is a Business & Brand Growth Strategist and Founder & Creative Director of Leverage Advertising, with 26+ years of experience helping businesses build brands customers trust.",
  alternates: { canonical: "/suresh-ramakrishnan" },
};

export default function SureshProfilePage() {
  return (
    <>
      <section
        className="overflow-hidden border-b border-brand-line bg-brand-paper"
        style={{
          backgroundImage:
            "radial-gradient(1000px 500px at 90% -20%, rgba(237,50,55,.06), transparent 60%)",
        }}
      >
        <Container className="pt-8 pb-16 md:pt-10 md:pb-20">
          <Reveal>
            <Breadcrumbs items={[{ label: "Suresh Ramakrishnan" }]} className="mb-6" />
          </Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="max-w-2xl">
              <Reveal>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
                  Business & Brand Growth Strategist
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-3xl font-extrabold leading-tight text-balance text-brand-ink sm:text-4xl md:text-5xl">
                  Suresh Ramakrishnan
                </h1>
                <p className="mt-2 text-lg font-semibold text-brand-gray">
                  Founder & Creative Director, Leverage Advertising
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-lg font-semibold leading-relaxed text-brand-ink">
                  Helping businesses build brands that customers remember and businesses that
                  customers trust.
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-gray">
                  Businesses don&apos;t grow because they advertise more. They grow because
                  customers trust them more. For over 26 years I have helped organisations
                  transform ideas into memorable brands through strategy, creativity and
                  execution. Whether you are launching a startup, scaling an established business
                  or reinventing your brand, my mission is to help you build a business that
                  people recognise, trust and recommend.
                </p>
              </Reveal>
              <Reveal delay={240} className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Book a Consultation
                </Button>
                <Button
                  href={whatsappHref(
                    "Hi Suresh, I'd like to discuss branding and business growth for my company.",
                  )}
                  size="lg"
                  variant="ghost"
                >
                  Discuss on WhatsApp
                </Button>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <HeroVisual images={heroImages} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <SectionHeading eyebrow="My Story" title="From Creativity to Business Impact" />
              </Reveal>
              <Reveal delay={100} className="mt-8 max-w-xl space-y-5">
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  My journey began with a passion for creativity, but over the years I realised
                  that design alone never builds a successful business. The strongest brands are
                  created when business strategy, customer understanding, marketing and consistent
                  execution work together.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  As Founder of Leverage Advertising, I have worked across branding, advertising,
                  ad films, commercial photography, digital marketing and business consulting,
                  serving organisations across industries. Today I work closely with founders,
                  institutions and leadership teams to solve business challenges through branding
                  and communication.
                </p>
              </Reveal>

              <Reveal
                delay={150}
                className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-line pt-10 max-w-xl"
              >
                {stats.map((item) => (
                  <div key={item.label}>
                    <strong className="block font-display text-3xl font-extrabold tracking-tight text-brand-ink">
                      <AnimatedCounter target={item.value} suffix={item.suffix} />
                    </strong>
                    <span className="text-sm text-brand-gray">{item.label}</span>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div
                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(237,50,55,.12), transparent 65%)" }}
                aria-hidden
              />
              <Image
                src="/team/suresh/training-02.webp"
                alt="Suresh Ramakrishnan leading a team briefing"
                width={1500}
                height={2000}
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="relative mx-auto h-auto max-h-125 w-auto max-w-full rounded-3xl object-contain shadow-brand-lg"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How I Help"
              title="Strategy, Creativity & Execution — Under One Roof"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal
            delay={100}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
          >
            {howIHelp.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white p-5 transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-sm"
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

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Media & On Set"
              title="Campaigns, Ad Films & Celebrity Shoots"
              subtitle="A look behind the scenes of commercial photography and ad film productions I have directed and been part of."
            />
          </Reveal>
          <div className="mt-12">
            <GalleryLightbox images={galleryImages} />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
                Leadership Beyond Business
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-ink text-balance">
                Giving Back, Beyond the Boardroom
              </h2>
              <p className="mt-6 text-brand-gray leading-relaxed text-base md:text-lg">
                I believe success carries a responsibility to give back. As a Mentor with BYST I
                guide aspiring entrepreneurs in building sustainable ventures. As an active
                Rotarian I contribute to leadership, youth empowerment and community initiatives.
                These experiences have strengthened my belief that businesses thrive when they
                create value for society as well as shareholders.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink">
                  <Award size={16} className="text-brand-red" />
                  Corporate Trainer
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink">
                  <Users size={16} className="text-brand-red" />
                  Mentor — BYST
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-ink">
                  <Award size={16} className="text-brand-red" />
                  Active Rotarian
                </span>
              </div>
            </Reveal>

            <Reveal delay={150} className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 h-64 overflow-hidden rounded-3xl shadow-brand-md md:h-80">
                <Image
                  src="/team/suresh/leadership-01.webp"
                  alt="Suresh Ramakrishnan being honoured at a Rotary Club event"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 h-56 overflow-hidden rounded-3xl shadow-brand-md md:h-72">
                <Image
                  src="/team/suresh/leadership-02.webp"
                  alt="Suresh Ramakrishnan at a Rotary Club membership ceremony"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Working Philosophy"
              title="Every Campaign Must Create Business Value"
              align="center"
              className="mx-auto"
            />
            <p className="mt-6 text-brand-gray leading-relaxed text-base md:text-lg">
              Every logo, campaign, advertisement or training programme must ultimately create
              business value. My consulting approach is built on three principles. The goal is
              never to produce attractive marketing alone — it is to create measurable business
              growth.
            </p>
          </Reveal>
          <Reveal
            delay={100}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {philosophy.map((item, i) => (
              <div
                key={item}
                className="rounded-2xl border border-brand-line bg-brand-paper p-7 text-center transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-md"
              >
                <span className="font-display text-2xl font-extrabold text-brand-red">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-ink">{item}</h3>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Clients Choose Me"
              title="More Than a Consultant"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal delay={100} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whyClients.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-brand-line bg-white px-5 py-4 text-sm font-medium text-brand-ink leading-relaxed transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:shadow-brand-sm"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red-tint text-brand-red">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <CTABand
        title="Let's Build Your Brand"
        subtitle="Whether you need a complete brand transformation, a growth strategy, a corporate training programme or a creative partner, I would be delighted to explore how we can help your business move to its next level."
        primaryLabel="Book a Consultation"
        secondaryLabel="Share Your Requirement on WhatsApp"
      />
    </>
  );
}

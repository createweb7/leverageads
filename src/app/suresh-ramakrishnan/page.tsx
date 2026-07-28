import type { Metadata } from "next";
import Image from "next/image";
import { Award, Check, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHeroGrid, type ServiceHeroGridCell } from "@/components/ui/ServiceHeroGrid";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { whatsappHref } from "@/data/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { FAQ } from "@/data/services";

const heroGrid: [ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell] = [
  {
    src: "/team/suresh/hero-primary.webp",
    alt: "Suresh Ramakrishnan (SRK), Founder of Leverage Branding & Consultancy",
    badgeLabel: "Founder & Director",
    badgeIcon: "strategy",
  },
  {
    src: "/team/suresh/hero-secondary.webp",
    alt: "Suresh Ramakrishnan shooting a commercial photography campaign",
    badgeLabel: "30+ · Years Experience",
    badgeVariant: "dark",
  },
  {
    src: "/team/suresh/leadership-01.webp",
    alt: "Suresh Ramakrishnan being honoured at a Rotary Club event",
    badgeLabel: "Community Leadership",
    badgeIcon: "leadership",
  },
  {
    src: "/team/suresh/gallery-03.webp",
    alt: "Suresh Ramakrishnan reviewing a jewellery product photography shoot",
    badgeLabel: "Product Photography",
    badgeIcon: "studio",
  },
];

const stats = [
  { value: 30, suffix: "+", label: "Years in Branding & Advertising" },
  { value: 1000, suffix: "+", label: "Businesses Served Across Diverse Industries" },
  { value: 200, suffix: "+", label: "Advertising & Corporate Films" },
];

const highlights = [
  "30+ Years in Branding & Advertising",
  "1,000+ Businesses Served Across Diverse Industries",
  "Hundreds of Brands Created, Revamped and Repositioned",
  "200+ Advertising & Corporate Films Associated With",
  "40+ Advertising Films Directed",
  "800+ Commercial & Branding Photoshoots",
  "3,500+ Products Professionally Photographed",
  "Hundreds of Integrated Advertising & Marketing Campaigns Successfully Executed",
  "Numerous Celebrity Branding Campaigns Conceptualised and Directed",
  "Trusted by Organisations Across Education, Healthcare, Hospitality, Manufacturing, Retail, Jewellery, Real Estate and Professional Services",
];

const galleryImages = [
  { src: "/team/suresh/gallery-01.webp", alt: "Suresh Ramakrishnan with a celebrity brand ambassador at a commercial photoshoot" },
  { src: "/team/suresh/gallery-02.webp", alt: "Suresh Ramakrishnan directing an ad film production on set" },
  { src: "/team/suresh/gallery-03.webp", alt: "Behind the scenes of a jewellery ad film shoot with the lead actress and crew" },
  { src: "/team/suresh/gallery-04.webp", alt: "Suresh Ramakrishnan briefing a celebrity model on set for a commercial shoot" },
  { src: "/team/suresh/gallery-05.webp", alt: "Suresh Ramakrishnan coordinating a fashion commercial shoot with models" },
  { src: "/team/suresh/gallery-06.webp", alt: "Behind the scenes of a jewellery commercial photoshoot" },
  { src: "/team/suresh/gallery-07.webp", alt: "Suresh Ramakrishnan briefing a celebrity brand ambassador before a jewellery shoot" },
  { src: "/team/suresh/gallery-08.webp", alt: "Suresh Ramakrishnan reviewing shots on location during a celebrity campaign shoot" },
];

const faqs: FAQ[] = [
  {
    q: "Who is Suresh Ramakrishnan (SRK)?",
    a: "Suresh Ramakrishnan (SRK) is a Brand Strategist • Advertising Professional • Business Growth Consultant with over 30 years of experience in branding, advertising, commercial photography, ad film direction, celebrity branding and strategic business communication.",
  },
  {
    q: "What is Suresh Ramakrishnan (SRK) known for?",
    a: "Suresh Ramakrishnan (SRK) is recognised for creating memorable brands, directing advertising campaigns, producing commercial photography, conceptualising celebrity branding initiatives and helping businesses build stronger market presence through strategic communication.",
  },
  {
    q: "How many businesses has Suresh Ramakrishnan (SRK) worked with?",
    a: "Over the past three decades, Suresh Ramakrishnan (SRK) has partnered with 1,000+ businesses across industries including education, healthcare, hospitality, manufacturing, jewellery, retail, real estate, professional services and corporate enterprises.",
  },
  {
    q: "What experience does Suresh Ramakrishnan (SRK) have in branding?",
    a: "Suresh Ramakrishnan (SRK) has created, revitalised and repositioned hundreds of brands, helping organisations build distinctive identities, strengthen customer trust and achieve sustainable business growth through strategic branding and integrated marketing communication.",
  },
  {
    q: "What experience does Suresh Ramakrishnan (SRK) have in advertising?",
    a: "With more than 30 years of experience in advertising, Suresh Ramakrishnan (SRK) has planned and executed campaigns across print, television, outdoor, digital and integrated media, delivering communication that combines creativity with measurable business outcomes.",
  },
  {
    q: "What experience does Suresh Ramakrishnan (SRK) have in advertising films?",
    a: "Suresh Ramakrishnan (SRK) has been associated with 200+ advertising and corporate films and has personally directed 40+ advertising films, producing visual stories that effectively communicate products, services and brand values.",
  },
  {
    q: "What experience does Suresh Ramakrishnan (SRK) have in commercial photography?",
    a: "With 800+ commercial and branding photoshoots and over 3,500 products professionally photographed, Suresh Ramakrishnan (SRK) has extensive experience in corporate, industrial, product, hospitality, healthcare, educational and retail photography.",
  },
  {
    q: "Has Suresh Ramakrishnan (SRK) worked on celebrity branding campaigns?",
    a: "Yes. Suresh Ramakrishnan (SRK) has conceptualised and executed numerous celebrity branding campaigns featuring leading actors, television personalities, sports personalities and public figures, ensuring every campaign strengthens the client's brand identity and communication objectives.",
  },
  {
    q: "What industries has Suresh Ramakrishnan (SRK) worked with?",
    a: "Suresh Ramakrishnan (SRK) has worked with organisations across education, healthcare, hospitality, manufacturing, retail, jewellery, real estate, automotive, FMCG, startups, SMEs and corporate enterprises, delivering branding, advertising and strategic communication solutions.",
  },
  {
    q: "Why do businesses choose Suresh Ramakrishnan (SRK)?",
    a: "Businesses choose Suresh Ramakrishnan (SRK) because of his ability to combine brand strategy, advertising expertise, creative direction and commercial insight. Every branding initiative, advertising campaign, commercial photoshoot and ad film is developed with one objective—to create stronger brands, better customer engagement and measurable business growth.",
  },
];

export const metadata: Metadata = {
  title: "Suresh Ramakrishnan (SRK) — Brand Strategist & Business Growth Consultant",
  description:
    "Suresh Ramakrishnan (SRK) is a Brand Strategist, Advertising Professional and Business Growth Consultant with 30+ years of experience, and Founder of Leverage Branding & Consultancy.",
  alternates: { canonical: "/suresh-ramakrishnan" },
};

export default function SureshProfilePage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Suresh Ramakrishnan", path: "/suresh-ramakrishnan" },
        ])}
      />

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
                  Brand Strategist • Advertising Professional • Business Growth Consultant
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-3xl font-extrabold leading-tight text-balance text-brand-ink sm:text-4xl md:text-5xl">
                  Suresh Ramakrishnan (SRK)
                </h1>
                <p className="mt-2 text-lg font-semibold text-brand-gray">
                  30+ Years of Transforming Brands, Businesses and People
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-lg font-semibold leading-relaxed text-brand-ink">
                  For over 30 years, SRK has been helping businesses build memorable brands,
                  create impactful advertising and develop marketing communication that drives
                  business growth. As the Founder of Leverage Branding & Consultancy, SRK has
                  established a reputation for transforming business ideas into strong brands
                  through strategic thinking, creative excellence and commercial insight.
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-gray">
                  What began as a career in advertising has evolved into a remarkable
                  professional journey spanning Brand Strategy, Advertising, Commercial
                  Photography, Ad Film Direction, Celebrity Branding, Digital Marketing and
                  Business Growth. This unique combination of creative expertise and business
                  understanding enables SRK to deliver solutions that are not only visually
                  compelling but also commercially effective.
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
              <ServiceHeroGrid cells={heroGrid} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <Reveal>
                <SectionHeading eyebrow="About SRK" title="Three Decades of Building Brands" />
              </Reveal>
              <Reveal delay={100} className="mt-8 max-w-xl space-y-5">
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Throughout his career, SRK has partnered with startups, SMEs, family-owned
                  businesses, educational institutions, healthcare organisations, hospitality
                  brands, manufacturing companies, retail businesses and corporate enterprises,
                  helping them strengthen their brand identity, improve customer perception and
                  achieve sustainable business growth.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  For SRK, branding has never been about creating attractive logos or campaigns
                  alone. It is about building trust, influencing customer perception and creating
                  meaningful experiences that contribute directly to business success.
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
                src="/team/suresh/portrait-studio.webp"
                alt="Suresh Ramakrishnan (SRK), Founder of Leverage Branding & Consultancy"
                width={1024}
                height={1024}
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="relative mx-auto h-auto max-h-125 w-auto max-w-full rounded-3xl object-contain shadow-brand-lg"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <Reveal className="mx-auto max-w-3xl space-y-5">
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              Over the past three decades, SRK has successfully delivered thousands of branding,
              advertising and visual communication assignments across diverse industries.
            </p>
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              From launching new brands to repositioning established organisations, directing
              advertising campaigns, producing commercial photography and executing celebrity
              branding initiatives, every project has been guided by one simple philosophy:
            </p>
          </Reveal>
          <Reveal
            delay={80}
            className="mx-auto mt-8 max-w-3xl border-l-2 border-brand-red pl-6"
          >
            <p className="font-display text-xl md:text-2xl font-semibold text-brand-ink leading-relaxed">
              Great creativity should always create business value.
            </p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-8 max-w-3xl">
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              Every assignment begins with understanding the client&apos;s business, market,
              customers and long-term vision before developing communication that is original,
              relevant and commercially effective.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Experience That Speaks for Itself"
              title="Professional Highlights"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <Reveal
            delay={100}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-brand-line bg-brand-paper p-5 transition-all duration-300 ease-brand hover:-translate-y-1 hover:shadow-brand-sm"
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

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <SectionHeading eyebrow="Brand Strategy" title="A Brand Is Much More Than a Logo or a Tagline" />
            <p className="mt-6 text-lg font-semibold leading-relaxed text-brand-ink">
              It is the perception customers carry about a business.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed text-base md:text-lg">
              SRK believes that every successful brand begins with a clear strategy, a compelling
              value proposition and consistent communication. Every branding project is developed
              to create a distinct market position, strengthen customer trust and build long-term
              brand equity.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed text-base md:text-lg">
              Whether launching a startup, revitalising an established business or repositioning
              a legacy brand, the objective remains the same—to create brands that customers
              recognise, remember and recommend.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Advertising"
              title="Advertising That Drives Business Growth"
            />
            <p className="mt-6 text-brand-gray leading-relaxed text-base md:text-lg">
              Advertising has always been at the heart of SRK&apos;s professional journey.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed text-base md:text-lg">
              From newspaper campaigns and magazine advertisements to television commercials,
              outdoor media, digital campaigns and integrated marketing communication, SRK has
              helped businesses communicate with creativity and commercial purpose.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed text-base md:text-lg">
              Every campaign is designed around a single question:
            </p>
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-6 max-w-3xl border-l-2 border-brand-red pl-6">
            <p className="font-display text-xl md:text-2xl font-semibold text-brand-ink leading-relaxed">
              &ldquo;How will this communication help the client&apos;s business grow?&rdquo;
            </p>
          </Reveal>
          <Reveal delay={120} className="mx-auto mt-6 max-w-3xl">
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              This business-first approach has enabled organisations across industries to improve
              visibility, generate enquiries, strengthen customer engagement and build lasting
              brand recall.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Commercial Photography"
                title="Commercial Photography That Builds Brands"
              />
              <div className="mt-6 max-w-xl space-y-4">
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Professional photography has been one of SRK&apos;s defining strengths
                  throughout his career.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Having completed 800+ commercial and branding photoshoots, SRK has created
                  original visual assets for manufacturing companies, hospitality brands,
                  educational institutions, healthcare organisations, jewellery retailers,
                  industrial businesses, food brands, fashion labels, architects and corporate
                  organisations.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Every photoshoot is professionally planned—from concept development and
                  creative direction to lighting, styling, production management and
                  post-production—ensuring every image reflects the brand&apos;s personality and
                  marketing objectives.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Rather than relying on generic visuals, SRK believes in creating original
                  commercial photography that communicates authenticity, builds trust and
                  supports long-term brand value.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="relative h-80 overflow-hidden rounded-3xl shadow-brand-lg md:h-[420px]">
              <Image
                src="/team/suresh/commercial-photography-camera.webp"
                alt="Suresh Ramakrishnan shooting a commercial photography campaign on a cinema camera"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal delay={150} className="relative order-2 h-80 overflow-hidden rounded-3xl shadow-brand-lg md:h-[420px] lg:order-1">
              <Image
                src="/team/suresh/celebrity-campaign-portrait.webp"
                alt="Suresh Ramakrishnan with a celebrity brand ambassador during a jewellery campaign shoot"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-top"
              />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <SectionHeading
                eyebrow="Celebrity Branding"
                title="Celebrity Branding & Ad Films"
              />
              <div className="mt-6 max-w-xl space-y-4">
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Celebrity endorsements create real value only when they strengthen the brand.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Over the years, SRK has conceptualised and executed numerous celebrity branding
                  campaigns involving leading film personalities, television artists, sports
                  personalities and public figures. Every campaign is strategically planned to
                  create credibility, improve recall and build meaningful emotional connections
                  with customers.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  SRK has also been associated with more than 200 advertising and corporate films
                  and has personally directed over 40 advertising films, combining storytelling,
                  creative direction and production expertise to create communication that is
                  memorable, persuasive and commercially effective.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading eyebrow="Beyond Creativity" title="A Broader Role in Business Growth" />
              <div className="mt-6 max-w-xl space-y-4">
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Three decades of working closely with business owners have naturally expanded
                  SRK&apos;s role beyond advertising.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Today, businesses also seek SRK&apos;s guidance on Brand Strategy, Marketing
                  Strategy, Business Growth and Organisational Development, helping them align
                  branding, customer experience and business objectives for sustainable success.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  This broader perspective enables SRK to look beyond individual campaigns and
                  contribute to the long-term growth of the organisations he partners with.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="relative h-80 overflow-hidden rounded-3xl shadow-brand-lg md:h-[420px]">
              <Image
                src="/team/suresh/consulting-training-session.webp"
                alt="Suresh Ramakrishnan leading a business growth and branding training session"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Media & On Set"
              title="Campaigns, Ad Films & Celebrity Shoots"
              subtitle="A look behind the scenes of commercial photography and ad film productions SRK has directed and been part of."
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
                SRK believes success carries a responsibility to give back. As a Mentor with BYST
                he guides aspiring entrepreneurs in building sustainable ventures. As an active
                Rotarian he contributes to leadership, youth empowerment and community
                initiatives. These experiences have strengthened his belief that businesses
                thrive when they create value for society as well as shareholders.
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
              <div className="relative h-40 overflow-hidden rounded-3xl shadow-brand-md md:h-56">
                <Image
                  src="/team/suresh/leadership-02.webp"
                  alt="Suresh Ramakrishnan at a Rotary Club membership ceremony"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative h-40 overflow-hidden rounded-3xl shadow-brand-md md:h-56">
                <Image
                  src="/team/suresh/mentoring-certificate.webp"
                  alt="Suresh Ramakrishnan mentoring an entrepreneur with BYST"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
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
              eyebrow="Personal Philosophy"
              title="Great Brands Are Not Created by Chance"
              align="center"
              className="mx-auto"
            />
            <p className="mt-6 font-display text-xl md:text-2xl font-semibold text-brand-ink leading-relaxed">
              &ldquo;They are built through original thinking, compelling storytelling, strategic
              communication and consistent execution.&rdquo;
            </p>
            <p className="mt-6 text-brand-gray leading-relaxed text-base md:text-lg">
              Every project undertaken by Leverage Branding & Consultancy reflects this
              philosophy.
            </p>
            <p className="mt-4 text-brand-gray leading-relaxed text-base md:text-lg">
              The objective is never simply to create attractive designs or successful campaigns.
              The objective is to build brands that inspire trust, influence decisions and
              contribute to measurable business growth.
            </p>
          </Reveal>
        </Container>
      </section>

      <FAQAccordion faqs={faqs} title="FAQs — Suresh Ramakrishnan (SRK)" />

      <CTABand
        title="Let's Build Your Brand"
        subtitle="Whether you need a complete brand transformation, a growth strategy, a corporate training programme or a creative partner, we would be delighted to explore how we can help your business move to its next level."
        primaryLabel="Book a Consultation"
        secondaryLabel="Share Your Requirement on WhatsApp"
      />
    </>
  );
}

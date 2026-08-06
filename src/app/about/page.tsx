import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceHeroGrid, type ServiceHeroGridCell } from "@/components/ui/ServiceHeroGrid";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GalleryLightbox } from "@/components/sections/GalleryLightbox";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { FAQ } from "@/data/services";

const heroGrid: [ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell, ServiceHeroGridCell] = [
  {
    src: "/team/cam.webp",
    alt: "Suresh Ramakrishnan directing a commercial ad film shoot",
    badgeLabel: "Creative Direction",
    badgeIcon: "creative",
  },
  {
    src: "/team/suresh/gallery-05.webp",
    alt: "Suresh Ramakrishnan briefing a celebrity model on set for a jewellery commercial",
    badgeLabel: "1000+ · Brands Served",
    badgeVariant: "dark",
  },
  {
    src: "/team/suresh/training-01.webp",
    alt: "Suresh Ramakrishnan leading a corporate training session",
    badgeLabel: "Business Consulting",
    badgeIcon: "training",
  },
  {
    src: "/team/suresh/leadership-02.webp",
    alt: "Suresh Ramakrishnan at a Rotary Club membership ceremony",
    badgeLabel: "Community Leadership",
    badgeIcon: "leadership",
  },
];

const stats = [
  { value: 30, suffix: "+", label: "Years of Industry Experience" },
  { value: 1000, suffix: "+", label: "Businesses Served Across Multiple Industries" },
  { value: 200, suffix: "+", label: "Advertising & Corporate Films Directed" },
];

const journeyHighlights = [
  "Nearly 30 Years of Industry Experience",
  "1,000+ Businesses Served Across Multiple Industries",
  "Hundreds of Brands Created, Revamped and Repositioned",
  "200+ Advertising & Corporate Films Directed",
  "800+ Commercial & Branding Photoshoots",
  "3,500+ Products Professionally Photographed",
  "Hundreds of Marketing Campaigns Successfully Executed",
  "Numerous Business Consulting Assignments Delivered Across Branding, Marketing, Organisational Development and Business Growth",
];

const expertise = [
  "Brand Strategy & Positioning",
  "Business Consulting",
  "Organisational Development Consulting",
  "Marketing Strategy",
  "Corporate Training & Emotional Intelligence",
  "Total Quality Management (TQM)",
  "Advertising Campaigns",
  "Commercial Photography",
  "Celebrity Branding",
  "Ad Film Production",
  "Website Design & Development",
  "E-Commerce Solutions",
  "CRM & ERP Consulting",
  "WhatsApp Business Automation",
  "Digital Marketing",
  "SEO & Content Strategy",
];

const campaignGallery = [
  { src: "/about/campaigns/01-jenixcloud.webp", alt: "JenixCloud style-sharing platform advertising campaign creative" },
  { src: "/about/campaigns/02-cholams-family-cover.webp", alt: "Chola MS General Insurance family health cover advertising campaign" },
  { src: "/about/campaigns/03-cholams-personal-accident.webp", alt: "Chola MS Personal Accident insurance advertising campaign" },
  { src: "/about/campaigns/04-sai-travel-solutions.webp", alt: "Sai Travel Solutions corporate transport advertising campaign" },
  { src: "/about/campaigns/05-alphasystems.webp", alt: "AlphaSystems ERP and PLM solutions advertising campaign" },
  { src: "/about/campaigns/06-tpcs-erp.webp", alt: "TPCS ERP enterprise software advertising campaign" },
  { src: "/about/campaigns/07-cholams-healthy-heart.webp", alt: "Chola MS healthy heart preventive care campaign" },
  { src: "/about/campaigns/08-neyveli-lignite.webp", alt: "Neyveli Lignite Corporation corporate advertising campaign" },
  { src: "/about/spotlights/jenixcloud-styleshare.webp", alt: "JenixCloud style-sharing platform campaign creative" },
  { src: "/about/spotlights/alphasystems-erp.webp", alt: "AlphaSystems ERP and PLM solutions campaign creative" },
  { src: "/about/spotlights/tpcs-office.webp", alt: "TPCS ERP enterprise software campaign creative" },
  { src: "/about/spotlights/sai-travel-solutions-poster.webp", alt: "Sai Travel Solutions corporate transport campaign creative" },
  { src: "/about/spotlights/cholams-personal-accident.webp", alt: "Chola MS Personal Accident insurance campaign creative" },
  { src: "/about/spotlights/cholams-murugappa.webp", alt: "Chola MS and Murugappa Group brand campaign creative" },
  { src: "/about/spotlights/cholams-healthy-heart.webp", alt: "Chola MS Healthy Heart preventive care campaign creative" },
  { src: "/about/spotlights/neyveli-lignite-balance.webp", alt: "Neyveli Lignite Corporation corporate campaign creative" },
];

const faqs: FAQ[] = [
  {
    q: "What does Leverage Branding & Consultancy do?",
    a: "Leverage Branding & Consultancy is a business consulting, branding and advertising firm in Chennai that helps organisations improve brand positioning, marketing, organisational performance, customer experience and business growth.",
  },
  {
    q: "How many years of experience does Leverage have?",
    a: "Leverage has nearly 30 years of experience in branding, advertising, commercial photography, business consulting, marketing strategy and organisational development.",
  },
  {
    q: "Who is Suresh Ramakrishnan (SRK)?",
    a: "Suresh Ramakrishnan (SRK) is the Founder and Principal Consultant of Leverage Branding & Consultancy, bringing over 26 years of experience in branding, advertising, marketing and business consulting. He has partnered with 1,000+ businesses across diverse industries, helping organisations build stronger brands, improve business performance and achieve sustainable growth through strategic branding, marketing and business transformation. A creative strategist, ad film director and commercial photographer, he has worked on numerous cinema projects, collaborating with and directing many renowned film personalities in advertising and media productions — his portfolio includes 200+ commercial films, 800+ commercial photography assignments and 3,500+ product shoots. Beyond consulting, SRK is a corporate trainer, mentor and speaker, empowering entrepreneurs, business leaders and students through programmes on branding, leadership, communication and business excellence.",
  },
  {
    q: "What industries do you work with?",
    a: "We work with startups, SMEs, educational institutions, healthcare providers, hospitality businesses, manufacturing companies, retailers, service organisations, family-owned businesses and corporate enterprises.",
  },
  {
    q: "Do you only provide branding services?",
    a: "No. We provide an integrated range of services including Brand Strategy, Business Consulting, Marketing Strategy, Organisational Development, Emotional Intelligence, Corporate Training, TQM, Commercial Photography, Ad Film Production, Website Development, SEO, CRM, ERP and Digital Marketing.",
  },
  {
    q: "How does your consulting approach differ from traditional agencies?",
    a: "We begin with business objectives rather than creative execution. Our recommendations align branding, marketing, people, processes and technology to deliver measurable business outcomes.",
  },
  {
    q: "Can you help businesses undergoing transformation?",
    a: "Yes. We help businesses with brand revamping, repositioning, organisational development, digital transformation, customer experience improvement and long-term business growth strategies.",
  },
  {
    q: "Why do clients continue working with Leverage?",
    a: "Clients value our strategic thinking, original ideas, practical implementation and commitment to measurable results. Many partnerships continue over several years because we focus on building businesses—not just completing projects.",
  },
  {
    q: "Where is Leverage Branding & Consultancy based?",
    a: "We are based in Chennai, Tamil Nadu, and work with organisations across India and international markets through consulting, branding and digital transformation services.",
  },
  {
    q: "How can we start working with Leverage?",
    a: "The process begins with an initial business consultation where we understand your organisation, objectives and challenges before recommending a customised strategy and implementation roadmap.",
  },
];

export const metadata: Metadata = {
  title: "About Leverage Branding & Consultancy",
  description:
    "Leverage Branding & Consultancy is a Chennai-based branding, advertising, business consulting and digital transformation firm led by Suresh Ramakrishnan (SRK), with nearly three decades of experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section
        className="overflow-hidden border-b border-brand-line bg-brand-paper"
        style={{
          backgroundImage:
            "radial-gradient(1000px 500px at 90% -20%, rgba(237,50,55,.06), transparent 60%)",
        }}
      >
        <Container className="pt-8 pb-20 md:pt-10 md:pb-28">
          <Reveal>
            <Breadcrumbs items={[{ label: "About" }]} className="mb-6" />
          </Reveal>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="max-w-2xl">
              <Reveal>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-red">
                  About Leverage Branding & Consultancy
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight text-balance">
                  Building Brands. Strengthening Businesses. Creating Lasting Growth.
                </h1>
                <p className="mt-3 text-lg font-semibold text-brand-gray">
                  Branding, Advertising, Business Consulting & Digital Transformation in Chennai
                </p>
              </Reveal>
              <Reveal delay={160} className="space-y-4">
                <p className="mt-5 text-brand-gray leading-relaxed text-base md:text-lg">
                  For nearly three decades, Leverage Branding & Consultancy has been helping
                  businesses build stronger brands, improve business performance and create
                  meaningful customer experiences. What began as a creative advertising agency has
                  evolved into a comprehensive business consulting and branding firm, partnering
                  with organisations to solve real business challenges through strategy,
                  creativity, technology and organisational development.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Founded and led by Suresh Ramakrishnan (SRK), Leverage believes that successful
                  businesses are built on more than attractive designs or marketing campaigns.
                  Sustainable growth happens when Brand Strategy, Marketing, People, Processes and
                  Technology work together towards a common business objective.
                </p>
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Over the years, we have partnered with startups, SMEs, family-owned businesses,
                  educational institutions, healthcare organisations, hospitality brands,
                  manufacturing companies, retail businesses and corporate organisations across
                  diverse industries. Every engagement is driven by one objective—to help
                  businesses grow with clarity, confidence and measurable results.
                </p>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <ServiceHeroGrid cells={heroGrid} />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Our Journey"
                  title="Nearly Three Decades of Business Transformation"
                />
              </Reveal>
              <Reveal delay={100} className="mt-6 max-w-2xl">
                <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                  Our experience extends far beyond advertising. We have worked on thousands of
                  creative and strategic assignments that have helped businesses strengthen their
                  market presence, improve customer engagement and build lasting brand value.
                </p>
              </Reveal>

              <Reveal delay={150} className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-line pt-10 max-w-xl">
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

            <Reveal delay={120} className="relative h-80 overflow-hidden rounded-3xl shadow-brand-lg md:h-100">
              <Image
                src="/team/suresh/portrait-studio.webp"
                alt="Suresh Ramakrishnan (SRK), Founder and Principal Consultant of Leverage Branding & Consultancy"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </Reveal>
          </div>

          <Reveal
            delay={100}
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl"
          >
            {journeyHighlights.map((item) => (
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

          <Reveal delay={100} className="mt-10 max-w-3xl border-l-2 border-brand-red pl-6">
            <p className="font-display text-lg md:text-xl font-semibold text-brand-ink leading-relaxed">
              Every project has contributed to one mission—helping clients build businesses that
              are stronger, more visible and better positioned for long-term success.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Our Services"
              title="More Than an Advertising Agency"
              align="center"
              className="mx-auto"
            />
            <p className="mt-6 text-brand-gray leading-relaxed text-base md:text-lg">
              Leverage Branding & Consultancy offers an integrated ecosystem of services designed
              to support every stage of business growth. Our expertise includes:
            </p>
          </Reveal>
          <Reveal
            delay={100}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
          >
            {expertise.map((item) => (
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
          <Reveal delay={150} className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              Rather than offering isolated services, we create connected business solutions that
              improve customer experience, strengthen internal systems and drive sustainable
              growth.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-paper">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Our Approach"
              title="Our Consulting Philosophy"
              align="center"
              className="mx-auto"
            />
            <p className="mt-6 text-brand-gray leading-relaxed text-base md:text-lg">
              Every organisation has two equally important dimensions.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <div className="rounded-2xl border border-brand-line bg-white p-8">
              <span className="font-display text-2xl font-extrabold text-brand-red">01</span>
              <h3 className="mt-3 font-display text-xl font-bold text-brand-ink">The Outer Core</h3>
              <p className="mt-3 text-brand-gray leading-relaxed text-base">
                How customers see your business—your brand identity, communication, advertising,
                digital presence and customer experience.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-line bg-white p-8">
              <span className="font-display text-2xl font-extrabold text-brand-red">02</span>
              <h3 className="mt-3 font-display text-xl font-bold text-brand-ink">The Inner Core</h3>
              <p className="mt-3 text-brand-gray leading-relaxed text-base">
                What keeps your business growing—your people, leadership, organisational culture,
                business systems, operational excellence and emotional intelligence.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="mx-auto mt-10 max-w-3xl space-y-4 text-center">
            <p className="text-brand-ink font-semibold leading-relaxed text-base md:text-lg">
              True business transformation happens only when both are developed together.
            </p>
            <p className="text-brand-gray leading-relaxed text-base md:text-lg">
              This philosophy has become the foundation of every consulting assignment we
              undertake.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Why Businesses Choose Leverage"
              title="Not a Conventional Agency"
              align="center"
              className="mx-auto"
            />
            <div className="mt-6 space-y-4 text-left">
              <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                Businesses choose Leverage Branding & Consultancy because we don&apos;t work like
                a conventional agency.
              </p>
              <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                We begin by understanding your business, your industry, your customers and your
                long-term vision before recommending solutions. Every strategy is built around
                your business goals—not generic templates.
              </p>
              <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                Our work combines strategic thinking, original creative ideas, practical
                implementation and measurable business outcomes. We work with an ownership
                mindset, becoming an extension of your leadership team rather than simply
                delivering projects.
              </p>
              <p className="text-brand-gray leading-relaxed text-base md:text-lg">
                Whether it&apos;s building a new brand, repositioning an established business,
                improving organisational performance or strengthening customer experience, our
                objective remains the same—to create solutions that deliver long-term business
                value.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-brand-ink">
        <Container>
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">
              Our Mission
            </p>
            <p className="mt-5 font-display text-xl md:text-2xl font-semibold text-white leading-relaxed">
              To help organisations build stronger brands, develop better leaders, improve
              business systems and achieve sustainable growth through strategic consulting,
              creative excellence and practical implementation.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Work"
              title="Campaigns Across Industries"
              subtitle="A sample of the advertising and marketing campaigns Leverage has created for clients across insurance, technology, travel, manufacturing and more."
            />
          </Reveal>
          <div className="mt-12">
            <GalleryLightbox images={campaignGallery} />
          </div>
        </Container>
      </section>

      <FAQAccordion faqs={faqs} title="FAQs — About Leverage Branding & Consultancy" />

      <CTABand
        title="Let's Talk About Your Business"
        subtitle="Book a consultation and we'll help you figure out the right next step — branding, business consulting, website, campaign, CRM, ERP or WhatsApp automation."
        primaryLabel="Book a Consultation"
        secondaryLabel="Share Your Requirement on WhatsApp"
      />
    </>
  );
}

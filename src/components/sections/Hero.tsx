import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { whatsappHref } from "@/data/site";

const proof = [
  { value: 26, suffix: "+", label: "Years of Experience" },
  { value: 3200, suffix: "+", label: "Projects Delivered" },
  { value: 1000, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Industries" },
];

const heroCarouselImages = [
  { src: "/hero/hero1.webp", alt: "Lakshmi Jewellery antique jewellery collection campaign photography" },
  { src: "/hero/hero2.webp", alt: "Ripon Building heritage calendar design" },
  { src: "/hero/hero3.webp", alt: "Celebrity saree campaign photography" },
  { src: "/hero/hero4.webp", alt: "RelishPro beverage brand campaign photography" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-brand-paper py-10 short:py-6"
      style={{
        backgroundImage:
          "radial-gradient(1200px 600px at 85% -10%, rgba(237,50,55,.07), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(12,13,16,.04), transparent 55%)",
      }}
    >
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <Reveal className="mb-6 short:mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-brand-line bg-white px-4.5 py-2 short:px-3.5 short:py-1.5 text-sm short:text-[13px] font-medium text-brand-gray shadow-brand-sm">
            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse-ring" />
            Business Growth Partner · Chennai, India
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display text-[2.5rem] short:text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-brand-ink sm:text-5xl md:text-6xl short:md:text-[3rem]">
              Building Brands.
              <br />
              Creating Demand.
              <br />
              <span className="text-brand-red">Driving Business Growth.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 short:mt-4 max-w-xl short:max-w-lg text-lg short:text-base leading-relaxed text-brand-gray">
              LeverageAds helps you move from scattered effort to structured growth — branding,
              advertising, websites, photography, CRM, ERP and WhatsApp automation, under one
              roof.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-9 short:mt-6 flex flex-wrap gap-3.5 short:gap-2.5">
            <Button href="/contact" size="lg" className="short:px-5.5 short:py-3 short:text-sm">
              Talk to a Branding Expert
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="dark"
              className="short:px-5.5 short:py-3 short:text-sm"
            >
              Book a Consultation
            </Button>
            <Button
              href={whatsappHref("Hi LeverageAds, I'd like to view your work.")}
              size="lg"
              variant="ghost"
              className="short:px-5.5 short:py-3 short:text-sm"
            >
              View Our Work
            </Button>
          </Reveal>

          <Reveal
            delay={400}
            className="mt-10 short:mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-brand-line pt-6 short:pt-4 sm:flex sm:flex-wrap sm:gap-9 short:gap-6"
          >
            {proof.map((item) => (
              <div key={item.label}>
                <strong className="block font-display text-2xl short:text-xl font-extrabold tracking-tight text-brand-ink">
                  <AnimatedCounter target={item.value} suffix={item.suffix} />
                </strong>
                <span className="text-[13.5px] short:text-xs text-brand-gray">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          delay={200}
          className="relative h-full min-h-83 overflow-hidden sm:min-h-90 lg:min-h-135 lg:overflow-visible"
          aria-hidden
        >
        <div className="absolute left-1/2 top-0 h-110 w-120 origin-top -translate-x-1/2 scale-[0.75] sm:scale-[0.82] lg:static lg:h-full lg:w-full lg:translate-x-0 lg:scale-100">
          <div className="absolute left-[38%] top-[2%] h-30 w-30 short:h-22 short:w-22 rounded-full border border-dashed border-brand-red/35 animate-spin-slow">
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brand-red" />
          </div>

          <HeroCarousel images={heroCarouselImages} />

          {/* Growth stat card */}
          <div
            className="animate-float absolute right-0 top-0 w-56.25 short:w-47 rounded-3xl border border-brand-line bg-white p-5 short:p-4 shadow-brand-md"
            style={{ animationDelay: ".8s" }}
          >
            <h5 className="mb-1 font-display text-xs font-bold uppercase tracking-wide text-brand-gray">
              Revenue Growth
            </h5>
            <div className="font-display text-2xl short:text-xl font-extrabold tracking-tight text-brand-ink">
              3.4× <em className="text-sm font-bold not-italic text-[#17A852]">▲ YoY</em>
            </div>
            <div className="mt-3.5 flex h-16 short:h-12 items-end gap-1.5">
              {[28, 40, 52, 68, 84, 100].map((h, i) => (
                <i
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h}%`,
                    background: i < 2 ? "var(--color-brand-line)" : "var(--color-brand-red)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Brand identity card */}
          <div
            className="animate-float absolute bottom-[2%] left-[-3%] w-57.5 short:w-48 rounded-3xl border border-brand-line bg-white p-5 short:p-4 shadow-brand-md"
            style={{ animationDelay: "1.6s" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 short:h-9 w-11 short:w-9 shrink-0 items-center justify-center rounded-xl bg-brand-red font-display text-xl short:text-base font-extrabold text-white">
                L
              </span>
              <div>
                <h5 className="font-display text-sm font-bold text-brand-ink">Brand Identity</h5>
                <p className="text-xs text-brand-gray">Logo · Colors · Voice</p>
              </div>
            </div>
            <div className="mt-3.5 short:mt-2.5 flex gap-2">
              <i className="h-5.5 short:h-4.5 flex-1 rounded-md bg-brand-red" />
              <i className="h-5.5 short:h-4.5 flex-1 rounded-md bg-brand-ink" />
              <i className="h-5.5 short:h-4.5 flex-1 rounded-md bg-brand-grey" />
              <i className="h-5.5 short:h-4.5 flex-1 rounded-md border border-brand-line bg-brand-paper" />
            </div>
          </div>

          {/* SEO stat card */}
          <div
            className="animate-float absolute bottom-0 right-[2%] w-51.25 short:w-43 rounded-3xl border border-brand-line bg-white px-5 py-4.5 short:px-4 short:py-3.5 shadow-brand-md"
            style={{ animationDelay: "2.4s" }}
          >
            {[
              ["Google Rank", "#1"],
              ["Organic Traffic", "+212%"],
              ["Leads / month", "480"],
            ].map(([label, value], i, arr) => (
              <div
                key={label}
                className={`flex items-center justify-between py-1.5 short:py-1 font-display text-[12.5px] short:text-[11.5px] font-semibold ${
                  i < arr.length - 1 ? "border-b border-dashed border-brand-line" : ""
                }`}
              >
                <span className="text-brand-ink">{label}</span>
                <span className="text-[#17A852]">{value}</span>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}

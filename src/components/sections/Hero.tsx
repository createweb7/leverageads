import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { whatsappHref } from "@/data/site";

const proof = [
  { value: 24, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 1000, suffix: "+", label: "Clients Served" },
  { value: 15, suffix: "+", label: "Industries" },
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
            className="mt-10 short:mt-6 flex flex-wrap gap-9 short:gap-6 border-t border-brand-line pt-6 short:pt-4"
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
          className="relative h-full min-h-70 overflow-hidden sm:min-h-80 lg:min-h-110 lg:overflow-visible"
          aria-hidden
        >
        <div className="absolute left-1/2 top-0 h-110 w-120 origin-top -translate-x-1/2 scale-[0.62] sm:scale-[0.72] lg:static lg:h-full lg:w-full lg:translate-x-0 lg:scale-100">
          <div className="absolute left-[38%] top-[2%] h-30 w-30 short:h-22 short:w-22 rounded-full border border-dashed border-brand-red/35 animate-spin-slow">
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brand-red" />
          </div>

          {/* Browser mockup card */}
          <div
            className="animate-float absolute inset-y-[3%] left-0 right-[11%] flex flex-col rounded-3xl border border-brand-line bg-white p-7 short:p-5.5 shadow-brand-md"
            style={{ animationDuration: "9s" }}
          >
            <div className="flex items-center gap-2 border-b border-brand-line pb-4.5 short:pb-3.5">
              <i className="h-2.5 w-2.5 rounded-full bg-brand-red" />
              <i className="h-2.5 w-2.5 rounded-full bg-brand-line" />
              <i className="h-2.5 w-2.5 rounded-full bg-brand-line" />
              <span className="ml-3 flex h-6.5 flex-1 items-center rounded-full border border-brand-line bg-brand-paper px-3.5 text-[11px] font-medium text-brand-gray-2">
                yourbrand.com
              </span>
            </div>
            <div className="mt-6 short:mt-5 h-4 short:h-3.5 w-[78%] rounded-md bg-brand-ink" />
            <div className="mt-2.5 h-4 short:h-3.5 w-[52%] rounded-md bg-brand-ink" />
            <div className="mt-4 short:mt-3 h-2 w-[88%] rounded bg-brand-line" />
            <div className="mt-2 h-2 w-[70%] rounded bg-brand-line" />
            <div className="mt-5 short:mt-4 flex gap-2.5">
              <span className="h-8 short:h-7 w-28 rounded-full bg-brand-red" />
              <span className="h-8 short:h-7 w-22 rounded-full border border-brand-line bg-brand-paper" />
            </div>
            <div className="relative mt-6 short:mt-4 flex-1 overflow-hidden rounded-xl border border-brand-line bg-linear-to-br from-[#F6F5F1] to-[#EFEDE8]">
              <div
                className="absolute inset-x-[-5%] bottom-[-12%] h-[70%]"
                style={{
                  background: "linear-gradient(to top, rgba(237,50,55,.12), transparent)",
                  clipPath:
                    "polygon(0 100%,0 78%,18% 62%,38% 70%,58% 42%,78% 30%,100% 8%,100% 100%)",
                }}
              />
              <div className="absolute right-[14%] top-[22%] h-9.5 w-9.5 rounded-full border-2 border-brand-red/50 bg-brand-red/8" />
            </div>
            <div className="mt-5 short:mt-3.5 grid grid-cols-3 gap-3 short:gap-2.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative h-16 short:h-13 rounded-xl border border-brand-line bg-brand-paper">
                  <span className="absolute left-2.5 top-2.5 h-4 w-4 rounded-[5px] bg-brand-red-tint" />
                  <span className="absolute bottom-2.5 left-2.5 right-[35%] h-1.5 rounded bg-brand-line" />
                </div>
              ))}
            </div>
          </div>

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

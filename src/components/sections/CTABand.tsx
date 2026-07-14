import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { siteConfig, whatsappHref } from "@/data/site";

export function CTABand({
  eyebrow,
  title,
  subtitle,
  primaryLabel = "Book a Consultation",
  primaryHref = "/contact",
  secondaryLabel = "Discuss on WhatsApp",
  showPhoneNote = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  showPhoneNote?: boolean;
}) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <Reveal
          className="relative overflow-hidden rounded-4xl bg-brand-ink px-8 py-16 text-center text-white sm:px-16 md:py-24"
        >
          <div
            className="pointer-events-none absolute left-1/2 -top-80 h-160 w-160 -translate-x-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(237,50,55,.28), transparent 62%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage: "radial-gradient(ellipse at center,#000 30%,transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center,#000 30%,transparent 75%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-2xl">
            {eyebrow && (
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-red">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-2xl font-extrabold text-balance sm:text-3xl md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-5 max-w-xl text-white/70 leading-relaxed">{subtitle}</p>
            )}
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              <Button
                href={whatsappHref("Hi LeverageAds, I'd like to share my requirement.")}
                size="lg"
                variant="wa"
              >
                <WhatsAppIcon size={18} />
                {secondaryLabel}
              </Button>
            </div>
            {showPhoneNote && (
              <p className="mt-7 text-sm text-white/60">
                Or call us directly:{" "}
                <a href={siteConfig.phoneHref} className="font-semibold text-white">
                  {siteConfig.phone}
                </a>
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

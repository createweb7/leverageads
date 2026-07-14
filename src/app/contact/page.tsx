import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to LeverageAds about branding, a website, product photography, advertising support, CRM, ERP, WhatsApp automation or a broader business communication consultation.",
  alternates: { canonical: "/contact" },
};

const reasons = [
  "branding and launch discussions",
  "website and e-commerce requirements",
  "product photography and ad film briefs",
  "CRM, ERP and workflow system discussions",
  "WhatsApp automation planning",
  "digital marketing and lead generation support",
];

export default function ContactPage() {
  return (
    <section
      className="pt-8 pb-20 md:pt-10 md:pb-28 bg-white"
      style={{
        backgroundImage:
          "radial-gradient(1000px 500px at 90% -20%, rgba(237,50,55,.06), transparent 60%)",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <Breadcrumbs items={[{ label: "Contact" }]} className="mb-6" />
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-red mb-4">
              Get In Touch
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-ink leading-tight text-balance">
              Let&apos;s Figure Out the Right Next Step
            </h1>
            <p className="mt-5 text-brand-gray leading-relaxed">
              Whether you need branding, a website, product photography, advertising support,
              CRM, ERP, WhatsApp automation or a broader business communication consultation,
              we&apos;d be happy to understand your requirement and suggest the right next step.
            </p>

            <p className="mt-6 text-sm font-bold text-brand-ink">You can contact us for:</p>
            <ul className="mt-3 space-y-2">
              {reasons.map((reason) => (
                <li key={reason} className="text-sm text-brand-gray capitalize">
                  · {reason}
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3 border-t border-brand-line pt-8">
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-brand-ink hover:text-brand-red">
                <Phone size={17} className="text-brand-red" />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm font-semibold text-brand-ink hover:text-brand-red">
                <Mail size={17} className="text-brand-red" />
                {siteConfig.email}
              </a>
              <p className="flex items-start gap-3 text-sm font-semibold text-brand-ink">
                <MapPin size={17} className="text-brand-red mt-0.5 shrink-0" />
                {siteConfig.address}
              </p>
              <a
                href={whatsappHref("Hi LeverageAds, I'd like to share my requirement.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-dark"
              >
                Share Your Requirement on WhatsApp →
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-3xl border border-brand-line bg-brand-paper p-6 shadow-brand-sm sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

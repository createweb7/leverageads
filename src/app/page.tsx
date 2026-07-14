import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { ServiceSelectorGrid } from "@/components/sections/ServiceSelectorGrid";
import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { CoreServicesGrid } from "@/components/sections/CoreServicesGrid";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABand } from "@/components/sections/CTABand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { generalFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "LeverageAds | Branding, Advertising, Websites, Photography, CRM, ERP & WhatsApp Automation in Chennai",
  description:
    "LeverageAds is a full-service brand, creative, digital and business solutions company in Chennai offering branding, ad films, product photography, websites, CRM, ERP, digital marketing and WhatsApp automation.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <FeaturedWork />
      <ServiceSelectorGrid />
      <AboutSnapshot />
      <CoreServicesGrid />
      <Testimonials />
      <CTABand
        eyebrow="Not Sure Where to Start?"
        title="Not sure whether your requirement needs branding, a website, advertising, photography, CRM or WhatsApp automation?"
        subtitle="Start with a structured consultation and we'll guide you to the right next step."
        primaryLabel="Book a Consultation"
        secondaryLabel="Discuss on WhatsApp"
      />
      <FAQAccordion faqs={generalFaqs} title="Frequently Asked Questions" />
      <CTABand
        title="Ready to Build Something That Actually Works for Your Business?"
        subtitle="Talk to a branding expert, book a consultation, or share your requirement on WhatsApp — we'll take it from there."
        primaryLabel="Talk to an Expert"
        secondaryLabel="Request a Proposal"
      />
    </>
  );
}

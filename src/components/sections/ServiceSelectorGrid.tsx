import Link from "next/link";
import {
  Camera,
  GraduationCap,
  Globe,
  Printer,
  Rocket,
  Sparkles,
  Megaphone,
  Tv,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const cards = [
  {
    icon: Rocket,
    title: "Launching a New Business?",
    body: "From naming and positioning to launch strategy — build your brand right from day one.",
    href: "/services/brand-strategy-consulting",
  },
  {
    icon: Sparkles,
    title: "Need a Stronger Brand Identity?",
    body: "Logo, identity and design that make your brand recognised, trusted and remembered.",
    href: "/services/creative-design",
  },
  {
    icon: Megaphone,
    title: "Want Better Advertising & Campaign Ideas?",
    body: "Campaigns, print, outdoor and launch communication that create recall and response.",
    href: "/services/creative-advertising",
  },
  {
    icon: Camera,
    title: "Need Product Photography or Ad Films?",
    body: "Product shoots, model photography, drone shoots and ad films that sell your story.",
    href: "/services/ad-films-photography",
  },
  {
    icon: Globe,
    title: "Need a Website, CRM or Business App?",
    body: "Websites, e-commerce, CRM, ERP and WhatsApp automation that organise leads and enquiries.",
    href: "/services/websites-technology",
  },
  {
    icon: TrendingUp,
    title: "Need More Leads from Digital?",
    body: "SEO, Google Ads, Meta Ads and social media that turn visibility into enquiries.",
    href: "/services/digital-marketing",
  },
  {
    icon: Printer,
    title: "Need Brochures, Cards or Packaging Printed?",
    body: "Offset and digital printing for stationery, packaging and promotional material.",
    href: "/services/print-production",
  },
  {
    icon: Tv,
    title: "Planning a TV, Print or Outdoor Campaign?",
    body: "Media planning and buying across television, print, radio, outdoor and cinema.",
    href: "/services/media-planning-buying",
  },
  {
    icon: GraduationCap,
    title: "Want to Train or Upskill Your Team?",
    body: "SOPs, induction, branding workshops and leadership or soft-skills training.",
    href: "/services/corporate-training-consulting",
  },
];

export function ServiceSelectorGrid() {
  return (
    <section id="needs" className="py-20 md:py-28 bg-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Start Here"
            title="What Does Your Business Need Right Now?"
            subtitle="Whether you're launching a new brand, upgrading your website, planning an ad campaign, printing your next brochure run, buying media or training your team — LeverageAds helps you move from scattered effort to structured growth."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body, href }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <Link
                href={href}
                className="group relative block h-full overflow-hidden rounded-2xl border border-brand-line bg-brand-paper p-7 transition-all duration-300 ease-brand hover:-translate-y-1.5 hover:scale-[1.02] hover:border-transparent hover:bg-white hover:shadow-brand-md"
              >
                <span className="absolute inset-x-0 top-0 h-0.75 origin-left scale-x-0 bg-brand-red transition-transform duration-300 ease-brand group-hover:scale-x-100" />
                <span className="absolute right-6 top-7 -translate-x-2 text-brand-red opacity-0 transition-all duration-300 ease-brand group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </span>
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl border border-brand-line bg-white text-brand-red transition-all duration-300 ease-brand group-hover:-rotate-6 group-hover:border-transparent group-hover:bg-brand-red-tint">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-brand-ink leading-snug">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-gray">{body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

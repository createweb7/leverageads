import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { servicesMegaMenu } from "@/data/nav";
import { siteConfig } from "@/data/site";

const socials = ["Facebook", "Instagram", "LinkedIn", "YouTube"] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 md:mt-32 bg-brand-ink pt-20 text-white md:pt-24">
      <Container>
        <div className="grid grid-cols-1 gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Link href="/">
              <Image
                src="/brand/logo.png"
                alt="LeverageAds"
                width={200}
                height={58}
                className="h-13 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
              LeverageAds is a full-service branding, advertising, visual production, digital and
              business solutions company in Chennai helping businesses build stronger brand
              presence, sharper communication, better websites, compelling visual content and
              smarter customer-facing systems.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-0.5 hover:border-brand-red hover:bg-brand-red"
                >
                  <SocialIcon name={label} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Services
            </h4>
            <ul className="mt-6 space-y-3">
              {servicesMegaMenu.map((group) => (
                <li key={group.title}>
                  <Link
                    href={group.href}
                    className="text-[15px] text-white/60 transition-all hover:pl-1.5 hover:text-white"
                  >
                    {group.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-[15px] leading-relaxed text-white/60">
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand-red" />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-3 text-[15px] font-medium text-white hover:text-brand-red"
                >
                  <Phone size={16} className="shrink-0 text-brand-red" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-[15px] font-medium text-white hover:text-brand-red"
                >
                  <Mail size={16} className="shrink-0 text-brand-red" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-7 text-sm text-white/50 sm:flex-row">
          <span>© {year} LeverageAds. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
            <Link href="/industries" className="hover:text-white">
              Industries
            </Link>
            <Link href="/portfolio" className="hover:text-white">
              Portfolio
            </Link>
            <Link href="/case-studies" className="hover:text-white">
              Case Studies
            </Link>
            <Link href="/insights" className="hover:text-white">
              Insights
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <a href="#top" className="hover:text-white">
              Back to Top ↑
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { servicesMegaMenu } from "@/data/nav";
import { siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const showSolid = scrolled || mobileOpen;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        showSolid
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_var(--color-brand-line)]"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center shrink-0 z-10" onClick={() => setMobileOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt="LeverageAds"
            width={220}
            height={64}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5 font-display text-[14px] font-medium whitespace-nowrap">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-8 text-brand-ink transition-colors hover:text-brand-red"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown size={15} className={clsx("transition-transform", servicesOpen && "rotate-180")} />
            </button>

            <div
              onClick={() => setServicesOpen(false)}
              className={clsx(
                "fixed inset-x-0 top-20 bottom-0 z-40 bg-brand-ink/25 backdrop-blur-sm transition-opacity duration-200",
                servicesOpen ? "visible opacity-100" : "invisible opacity-0",
              )}
            />

            <div
              onClick={() => setServicesOpen(false)}
              className={clsx(
                "absolute left-1/2 top-full z-50 w-210 -translate-x-1/2 whitespace-normal rounded-3xl border border-brand-line bg-white p-6 shadow-brand-lg transition-all duration-200",
                servicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
              )}
            >
              <div className="grid grid-cols-3 gap-x-7 gap-y-6">
                {servicesMegaMenu.map((group) => (
                  <div key={group.title}>
                    <Link
                      href={group.href}
                      className="mb-2 block text-sm font-bold leading-snug text-brand-ink hover:text-brand-red"
                    >
                      {group.title}
                    </Link>
                    <ul className="space-y-1.5">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="block text-sm text-brand-gray transition-colors hover:text-brand-red"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between rounded-xl bg-brand-paper px-4 py-3">
                <p className="text-sm text-brand-gray">Not sure what your business needs?</p>
                <Link href="/contact" className="text-sm font-semibold text-brand-red hover:text-brand-red-dark">
                  Book a Consultation →
                </Link>
              </div>
            </div>
          </div>

          <NavLink href="/industries">Industries</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/case-studies">Case Studies</NavLink>
          <NavLink href="/insights">Insights</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="hidden xl:flex items-center gap-5 z-10">
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 font-display text-sm font-semibold text-brand-ink transition-colors hover:text-brand-red"
          >
            <Phone size={15} className="text-brand-red" />
            {siteConfig.phone}
          </a>
          <Button href="/contact" size="md">
            Book a Consultation
          </Button>
        </div>

        <button
          className="xl:hidden z-10 flex h-11 w-11 items-center justify-center text-brand-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Mobile full-screen nav */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-0 z-0 h-dvh overflow-y-auto bg-brand-paper px-6 pb-10 pt-24">
          <nav className="flex flex-col">
            <MobileLink href="/" index={0} onClick={() => setMobileOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/about" index={1} onClick={() => setMobileOpen(false)}>
              About
            </MobileLink>

            <button
              className="flex items-center justify-between gap-4 border-b border-brand-line py-4 text-left font-display text-2xl font-bold text-brand-ink"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              <span className="flex items-baseline gap-4">
                <span className="text-xs font-bold tracking-wide text-brand-red">03</span>
                Services
              </span>
              <ChevronDown
                size={20}
                className={clsx("transition-transform", mobileServicesOpen && "rotate-180")}
              />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-5 border-b border-brand-line py-5 pl-9">
                {servicesMegaMenu.map((group) => (
                  <div key={group.title}>
                    <Link
                      href={group.href}
                      className="text-sm font-bold text-brand-red"
                      onClick={() => setMobileOpen(false)}
                    >
                      {group.title}
                    </Link>
                    <ul className="mt-1.5 space-y-1.5">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="block py-0.5 text-sm text-brand-gray"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            <MobileLink href="/industries" index={3} onClick={() => setMobileOpen(false)}>
              Industries
            </MobileLink>
            <MobileLink href="/portfolio" index={4} onClick={() => setMobileOpen(false)}>
              Portfolio
            </MobileLink>
            <MobileLink href="/case-studies" index={5} onClick={() => setMobileOpen(false)}>
              Case Studies
            </MobileLink>
            <MobileLink href="/insights" index={6} onClick={() => setMobileOpen(false)}>
              Insights
            </MobileLink>
            <MobileLink href="/contact" index={7} onClick={() => setMobileOpen(false)}>
              Contact
            </MobileLink>
          </nav>

          <Button href="/contact" className="mt-8 w-full" onClick={() => setMobileOpen(false)}>
            Book a Consultation
          </Button>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group relative py-2 text-brand-ink transition-colors hover:text-brand-red">
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-red transition-all duration-300 ease-brand group-hover:w-full" />
    </Link>
  );
}

function MobileLink({
  href,
  index,
  onClick,
  children,
}: {
  href: string;
  index: number;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex transform-[translateY(1rem)] items-baseline gap-4 border-b border-brand-line py-4 font-display text-2xl font-bold text-brand-ink opacity-0 animate-[menuLink_.55s_var(--ease-brand)_forwards]"
      style={{ animationDelay: `${index * 60 + 50}ms` }}
    >
      <span className="text-xs font-bold tracking-wide text-brand-red">0{index + 1}</span>
      {children}
    </Link>
  );
}

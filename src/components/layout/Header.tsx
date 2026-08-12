"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/layout/SocialIcon";
import { pillarNav } from "@/data/nav";
import { siteConfig } from "@/data/site";

const socials = ["Facebook", "Instagram", "LinkedIn", "YouTube"] as const;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPillar, setOpenPillar] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenPillar(null);
    setMobileOpen(false);
    setMobileSubOpen(null);
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
    <>
      <div className="hidden border-b border-white/10 bg-brand-ink sm:block">
        <Container className="flex h-10 items-center justify-between text-[13px]">
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 text-white/70 transition-colors hover:text-white"
            >
              <Phone size={13} />
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden items-center gap-1.5 text-white/70 transition-colors hover:text-white lg:flex"
            >
              <Mail size={13} />
              {siteConfig.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((label) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white/50 transition-colors hover:text-white"
              >
                <SocialIcon name={label} size={13} />
              </a>
            ))}
          </div>
        </Container>
      </div>

      <header
        className={clsx(
          "sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300",
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

          <div
            className="relative"
            onMouseEnter={() => setOpenPillar("about")}
            onMouseLeave={() => setOpenPillar((v) => (v === "about" ? null : v))}
          >
            <span className="flex items-center gap-1 py-8">
              <Link href="/about" className="text-brand-ink transition-colors hover:text-brand-red">
                About
              </Link>
              <button
                type="button"
                aria-label="Toggle About menu"
                aria-expanded={openPillar === "about"}
                onClick={() => setOpenPillar((v) => (v === "about" ? null : "about"))}
              >
                <ChevronDown
                  size={15}
                  className={clsx("transition-transform", openPillar === "about" && "rotate-180")}
                />
              </button>
            </span>

            <div
              onClick={() => setOpenPillar(null)}
              className={clsx(
                "absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 whitespace-normal rounded-2xl border border-brand-line bg-white p-5 shadow-brand-lg transition-all duration-200",
                openPillar === "about" ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
              )}
            >
              <ul className="space-y-1.5">
                <li>
                  <Link
                    href="/about"
                    className="block rounded-lg px-3 py-2 text-sm text-brand-gray transition-colors hover:bg-brand-paper hover:text-brand-red"
                  >
                    About Leverage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/suresh-ramakrishnan"
                    className="block rounded-lg px-3 py-2 text-sm text-brand-gray transition-colors hover:bg-brand-paper hover:text-brand-red"
                  >
                    About SRK
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {pillarNav.map((pillar) => (
            <div
              key={pillar.slug}
              className="relative"
              onMouseEnter={() => setOpenPillar(pillar.slug)}
              onMouseLeave={() => setOpenPillar((v) => (v === pillar.slug ? null : v))}
            >
              <span className="flex items-center gap-1 py-8">
                <Link
                  href={pillar.href}
                  className="text-brand-ink transition-colors hover:text-brand-red"
                >
                  {pillar.label}
                </Link>
                {pillar.links.length > 0 && (
                  <button
                    type="button"
                    aria-label={`Toggle ${pillar.label} menu`}
                    aria-expanded={openPillar === pillar.slug}
                    onClick={() => setOpenPillar((v) => (v === pillar.slug ? null : pillar.slug))}
                  >
                    <ChevronDown
                      size={15}
                      className={clsx("transition-transform", openPillar === pillar.slug && "rotate-180")}
                    />
                  </button>
                )}
              </span>

              {pillar.links.length > 0 && (
                <div
                  onClick={() => setOpenPillar(null)}
                  className={clsx(
                    "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 whitespace-normal rounded-2xl border border-brand-line bg-white p-5 shadow-brand-lg transition-all duration-200",
                    openPillar === pillar.slug ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0",
                  )}
                >
                  <ul className="space-y-1.5">
                    {pillar.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm text-brand-gray transition-colors hover:bg-brand-paper hover:text-brand-red"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/case-studies">Case Studies</NavLink>
        </nav>

        <div className="hidden xl:flex items-center gap-5 z-10">
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
      </header>

      {/* Mobile full-screen nav */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-0 z-40 h-dvh overflow-y-auto bg-brand-paper px-6 pb-10 pt-24 sm:pt-36">
          <nav className="flex flex-col">
            <MobileLink href="/" index={0} onClick={() => setMobileOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/about" index={1} onClick={() => setMobileOpen(false)}>
              About Leverage
            </MobileLink>
            <MobileLink href="/suresh-ramakrishnan" index={2} onClick={() => setMobileOpen(false)}>
              About SRK
            </MobileLink>

            {pillarNav.map((pillar, i) => (
              <div
                key={pillar.slug}
                className="transform-[translateY(1rem)] border-b border-brand-line opacity-0 animate-[menuLink_.55s_var(--ease-brand)_forwards]"
                style={{ animationDelay: `${(3 + i) * 60 + 50}ms` }}
              >
                <div className="flex items-center justify-between gap-4 py-4">
                  <Link
                    href={pillar.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-baseline gap-4 font-display text-2xl font-bold text-brand-ink"
                  >
                    <span className="text-xs font-bold tracking-wide text-brand-red">
                      {String(3 + i + 1).padStart(2, "0")}
                    </span>
                    {pillar.label}
                  </Link>
                  {pillar.links.length > 0 && (
                    <button
                      type="button"
                      aria-label={`Toggle ${pillar.label} submenu`}
                      aria-expanded={mobileSubOpen === pillar.slug}
                      onClick={() =>
                        setMobileSubOpen((v) => (v === pillar.slug ? null : pillar.slug))
                      }
                      className="flex h-9 w-9 shrink-0 items-center justify-center text-brand-ink"
                    >
                      <ChevronDown
                        size={20}
                        className={clsx(
                          "transition-transform duration-300 ease-brand",
                          mobileSubOpen === pillar.slug && "rotate-180",
                        )}
                      />
                    </button>
                  )}
                </div>

                {pillar.links.length > 0 && (
                  <div
                    className={clsx(
                      "grid overflow-hidden transition-all duration-300 ease-brand",
                      mobileSubOpen === pillar.slug
                        ? "grid-rows-[1fr] pb-4 opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="flex flex-col gap-1 overflow-hidden pl-11">
                      {pillar.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg py-2 text-base font-medium text-brand-gray transition-colors hover:text-brand-red"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <MobileLink href="/portfolio" index={3 + pillarNav.length} onClick={() => setMobileOpen(false)}>
              Portfolio
            </MobileLink>
            <MobileLink href="/case-studies" index={4 + pillarNav.length} onClick={() => setMobileOpen(false)}>
              Case Studies
            </MobileLink>
          </nav>

          <Button href="/contact" className="mt-8 w-full" onClick={() => setMobileOpen(false)}>
            Book a Consultation
          </Button>
        </div>
      )}
    </>
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
      <span className="text-xs font-bold tracking-wide text-brand-red">
        {String(index + 1).padStart(2, "0")}
      </span>
      {children}
    </Link>
  );
}

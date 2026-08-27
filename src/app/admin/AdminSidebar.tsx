"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { LayoutDashboard, Building2, Image as ImageIcon, Newspaper, MessageSquare, Menu, X } from "lucide-react";
import { LogoutButton } from "./LogoutButton";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/clients", label: "Client Logos", icon: Building2 },
  { href: "/admin/portfolio", label: "Portfolio", icon: ImageIcon },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/enquiries", label: "Enquiries", icon: MessageSquare },
];

export function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <>
      <div className="flex h-16 items-center justify-between border-b border-brand-line bg-white px-4 lg:hidden">
        <Link href="/admin" className="flex items-center">
          <Image src="/brand/logo.png" alt="LeverageAds" width={220} height={64} className="h-8 w-auto" />
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-brand-ink hover:bg-brand-paper"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 flex h-screen w-64 shrink-0 flex-col border-r border-brand-line bg-white transition-transform duration-300 ease-brand lg:sticky lg:top-0 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-brand-line px-6 lg:h-20">
          <Link href="/admin" className="flex items-center">
            <Image
              src="/brand/logo.png"
              alt="LeverageAds"
              width={220}
              height={64}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-brand-gray hover:bg-brand-paper lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-5">
          {navItems.map((item) => {
            const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "bg-brand-red-tint text-brand-red"
                    : "text-brand-gray hover:bg-brand-paper hover:text-brand-ink"
                )}
              >
                <Icon size={17} strokeWidth={2.25} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-brand-line px-4 py-4">
          <p className="truncate px-2 text-xs text-brand-gray-2">{email}</p>
          <div className="mt-1 px-2">
            <LogoutButton />
          </div>
        </div>
      </aside>
    </>
  );
}

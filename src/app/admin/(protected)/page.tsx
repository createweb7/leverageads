import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Image as ImageIcon, Newspaper, ArrowUpRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = { title: "Dashboard" };

async function getCounts() {
  const supabase = await createClient();
  const [clients, portfolio, blog] = await Promise.all([
    supabase.from("client_logos").select("*", { count: "exact", head: true }),
    supabase.from("portfolio_items").select("*", { count: "exact", head: true }),
    supabase.from("blog_posts").select("*", { count: "exact", head: true }),
  ]);

  return {
    clients: clients.count ?? 0,
    portfolio: portfolio.count ?? 0,
    blog: blog.count ?? 0,
  };
}

export default async function AdminDashboard() {
  const counts = await getCounts();

  const cards = [
    {
      href: "/admin/clients",
      label: "Client Logos",
      count: counts.clients,
      icon: Building2,
      accent: "bg-blue-50 text-blue-600",
    },
    {
      href: "/admin/portfolio",
      label: "Portfolio Items",
      count: counts.portfolio,
      icon: ImageIcon,
      accent: "bg-amber-50 text-amber-600",
    },
    {
      href: "/admin/blog",
      label: "Blog Posts",
      count: counts.blog,
      icon: Newspaper,
      accent: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-ink">Dashboard</h1>
      <p className="mt-1.5 text-sm text-brand-gray">
        Manage the content shown on the public site.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-brand-line bg-white p-6 shadow-brand-sm transition-all duration-300 ease-brand hover:-translate-y-0.5 hover:shadow-brand-md"
            >
              <div className="flex items-start justify-between">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.accent}`}>
                  <Icon size={20} />
                </span>
                <ArrowUpRight
                  size={17}
                  className="text-brand-gray-2 transition-transform duration-300 ease-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-red"
                />
              </div>
              <p className="mt-5 font-display text-3xl font-bold text-brand-ink">{card.count}</p>
              <p className="mt-1 text-sm font-semibold text-brand-gray">{card.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { createAdminClient } from "@/lib/supabase/admin";
import { portfolioCategories } from "@/data/portfolio";
import { PortfolioCategoryView } from "./PortfolioCategoryView";
import type { PortfolioItem } from "@/lib/data/portfolio";

export const metadata: Metadata = { title: "Portfolio" };

export default async function AdminPortfolioPage() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("portfolio_items")
    .select("id, src, alt, category_slug, width, height, sort_order")
    .order("category_slug", { ascending: true })
    .order("sort_order", { ascending: true });

  const items: PortfolioItem[] = (data ?? []).map((row) => ({
    id: row.id,
    src: row.src,
    alt: row.alt,
    categorySlug: row.category_slug,
    width: row.width,
    height: row.height,
    sort_order: row.sort_order,
  }));

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-ink">Portfolio</h1>
      <p className="mt-1.5 text-sm text-brand-gray">
        Shown on the /portfolio page, grouped by category. Edit the description or category, then
        click the check mark to save.
      </p>

      <div className="mt-6">
        <PortfolioCategoryView items={items} categories={portfolioCategories} />
      </div>
    </div>
  );
}

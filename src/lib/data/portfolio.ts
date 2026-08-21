import { createPublicClient } from "@/lib/supabase/public";

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  categorySlug: string;
  width: number;
  height: number;
  sort_order: number;
};

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("portfolio_items")
    .select("id, src, alt, category_slug, width, height, sort_order")
    .order("category_slug", { ascending: true })
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to load portfolio items", error);
    return [];
  }

  return data.map((row) => ({
    id: row.id,
    src: row.src,
    alt: row.alt,
    categorySlug: row.category_slug,
    width: row.width,
    height: row.height,
    sort_order: row.sort_order,
  }));
}

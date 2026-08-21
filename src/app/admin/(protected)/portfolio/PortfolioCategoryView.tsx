"use client";

import { useState } from "react";
import { Select, Label } from "@/components/admin/Field";
import { PortfolioItemCard } from "./PortfolioItemCard";
import { AddPortfolioItemForm } from "./AddPortfolioItemForm";
import type { PortfolioItem } from "@/lib/data/portfolio";
import type { PortfolioCategory } from "@/data/portfolio";

export function PortfolioCategoryView({
  items,
  categories,
}: {
  items: PortfolioItem[];
  categories: PortfolioCategory[];
}) {
  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    count: items.filter((item) => item.categorySlug === cat.slug).length,
  }));

  const firstNonEmpty = categoriesWithCounts.find((c) => c.count > 0)?.slug ?? categories[0]?.slug;
  const [activeCategory, setActiveCategory] = useState(firstNonEmpty);

  const categoryItems = items.filter((item) => item.categorySlug === activeCategory);

  return (
    <div>
      {/* Defaults to whichever category is currently being viewed, so a new
          item shows up immediately without needing to switch categories.
          key forces a remount when the filter changes, since defaultValue
          only applies on a select's initial mount. */}
      <AddPortfolioItemForm
        key={activeCategory}
        categories={categories}
        defaultCategory={activeCategory}
      />

      <div className="mt-8 max-w-xs">
        <Label htmlFor="category-filter">Category</Label>
        <Select
          id="category-filter"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categoriesWithCounts.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name} ({cat.count})
            </option>
          ))}
        </Select>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {categoryItems.map((item, i) => (
          <PortfolioItemCard
            key={item.id}
            item={item}
            categories={categories}
            isFirst={i === 0}
            isLast={i === categoryItems.length - 1}
          />
        ))}
      </div>

      {categoryItems.length === 0 && (
        <p className="mt-6 rounded-2xl border border-brand-line bg-white p-8 text-center text-sm text-brand-gray">
          No items in this category yet.
        </p>
      )}
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState, useTransition } from "react";
import { ArrowUp, ArrowDown, Trash2, Check, Pencil } from "lucide-react";
import { Input, Select } from "@/components/admin/Field";
import {
  deletePortfolioItem,
  movePortfolioItem,
  updatePortfolioItem,
  replacePortfolioItemImage,
} from "./actions";
import type { PortfolioItem } from "@/lib/data/portfolio";
import type { PortfolioCategory } from "@/data/portfolio";

export function PortfolioItemCard({
  item,
  categories,
  isFirst,
  isLast,
}: {
  item: PortfolioItem;
  categories: PortfolioCategory[];
  isFirst: boolean;
  isLast: boolean;
}) {
  const [pending, startTransition] = useTransition();
  const [alt, setAlt] = useState(item.alt);
  const [categorySlug, setCategorySlug] = useState(item.categorySlug);
  const dirty = alt !== item.alt || categorySlug !== item.categorySlug;
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleReplaceImage(file: File) {
    const formData = new FormData();
    formData.append("image", file);
    startTransition(() =>
      replacePortfolioItemImage(item.id, item.src, item.categorySlug, formData)
    );
  }

  return (
    <div className={`rounded-xl border border-brand-line bg-white p-3 ${pending ? "opacity-50" : ""}`}>
      <div className="group relative mb-3 aspect-square overflow-hidden rounded-lg bg-brand-paper">
        <Image src={item.src} alt={item.alt} fill className="object-cover" />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/webp,image/png,image/jpeg"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleReplaceImage(file);
            e.target.value = "";
          }}
        />
        <button
          type="button"
          disabled={pending}
          onClick={() => fileInputRef.current?.click()}
          className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100"
          aria-label="Replace image"
        >
          <span className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-ink">
            <Pencil size={12} /> Replace
          </span>
        </button>
      </div>

      <Input
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
        className="mb-2 text-xs"
        placeholder="Description"
      />

      <Select
        value={categorySlug}
        onChange={(e) => setCategorySlug(e.target.value)}
        className="mb-2 text-xs"
      >
        {categories.map((cat) => (
          <option key={cat.slug} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </Select>

      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <button
            type="button"
            disabled={isFirst || pending}
            onClick={() => startTransition(() => movePortfolioItem(item.id, item.categorySlug, "up"))}
            className="rounded p-1.5 text-brand-gray hover:bg-brand-paper disabled:opacity-30"
            aria-label="Move up"
          >
            <ArrowUp size={14} />
          </button>
          <button
            type="button"
            disabled={isLast || pending}
            onClick={() => startTransition(() => movePortfolioItem(item.id, item.categorySlug, "down"))}
            className="rounded p-1.5 text-brand-gray hover:bg-brand-paper disabled:opacity-30"
            aria-label="Move down"
          >
            <ArrowDown size={14} />
          </button>
          {dirty && (
            <button
              type="button"
              disabled={pending}
              onClick={() => startTransition(() => updatePortfolioItem(item.id, alt, categorySlug))}
              className="rounded p-1.5 text-brand-red hover:bg-brand-red-tint"
              aria-label="Save changes"
            >
              <Check size={14} />
            </button>
          )}
        </div>
        <button
          type="button"
          disabled={pending}
          onClick={() => {
            if (confirm("Delete this image?")) {
              startTransition(() => deletePortfolioItem(item.id, item.src));
            }
          }}
          className="rounded p-1.5 text-brand-gray hover:bg-red-50 hover:text-red-600"
          aria-label="Delete"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}

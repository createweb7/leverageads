"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { portfolioCategories, portfolioItems } from "@/data/portfolio";

export function PortfolioGrid() {
  const [active, setActive] = useState("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    active === "all" ? portfolioItems : portfolioItems.filter((item) => item.categorySlug === active);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2.5">
        <button
          type="button"
          onClick={() => {
            setActive("all");
            setActiveIndex(null);
          }}
          className={pillClass(active === "all")}
        >
          All Work
        </button>
        {portfolioCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => {
              setActive(cat.slug);
              setActiveIndex(null);
            }}
            className={pillClass(active === cat.slug)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {filtered.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative mb-4 block w-full break-inside-avoid rounded-2xl bg-brand-line p-1.5 shadow-brand-sm [clip-path:inset(0_round_1rem)]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="block h-auto w-full rounded-xl transition-transform duration-500 ease-brand group-hover:scale-105 [clip-path:inset(0_round_0.75rem)]"
            />
            <div className="absolute inset-1.5 flex items-center justify-center rounded-xl bg-black/0 opacity-0 transition-all duration-300 ease-brand group-hover:bg-black/25 group-hover:opacity-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-ink">
                <ZoomIn size={20} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/92 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[activeIndex].src}
              alt={filtered[activeIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
          >
            <ChevronRight size={24} />
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
            {activeIndex + 1} / {filtered.length}
          </span>
        </div>
      )}
    </>
  );
}

function pillClass(isActive: boolean) {
  return clsx(
    "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ease-brand",
    isActive
      ? "border-brand-red bg-brand-red text-white"
      : "border-brand-line text-brand-gray hover:border-brand-red hover:text-brand-red",
  );
}

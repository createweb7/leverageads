"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import type { CaseStudy } from "@/data/caseStudies";

const SHORT_LABELS: Record<string, string> = {
  "creative-design": "Creative Design",
  "creative-advertising": "Advertising",
  "websites-technology": "Websites & Tech",
  "digital-marketing": "Digital Growth",
  "ad-films-photography": "Ad Films & Photography",
  "print-production": "Print Production",
  "brand-strategy-consulting": "Brand Strategy",
};

function primaryCategory(cs: CaseStudy) {
  return cs.relatedSlugs[0];
}

function primaryTag(cs: CaseStudy) {
  const slug = primaryCategory(cs);
  return slug ? (SHORT_LABELS[slug] ?? services.find((s) => s.slug === slug)?.navLabel) : undefined;
}

export function CaseStudiesGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const categories = useMemo(
    () =>
      services
        .filter((service) => caseStudies.some((cs) => primaryCategory(cs) === service.slug))
        .map((service) => ({ slug: service.slug, label: service.navLabel })),
    [caseStudies],
  );

  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? caseStudies : caseStudies.filter((cs) => primaryCategory(cs) === active);

  return (
    <>
      {categories.length > 1 && (
        <div className="mb-10 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setActive("all")}
            className={pillClass(active === "all")}
          >
            All Work
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActive(cat.slug)}
              className={pillClass(active === cat.slug)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {filtered.map((cs, i) => (
          <Reveal key={cs.slug} delay={(i % 3) * 70}>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-brand-line bg-brand-paper p-4 transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-brand-md"
            >
              {primaryTag(cs) && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-brand-ink/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {primaryTag(cs)}
                </span>
              )}
              <div className="relative w-full flex-1">
                <Image
                  src={cs.logo ?? cs.coverImage}
                  alt={cs.client}
                  fill
                  sizes="280px"
                  className="object-contain"
                />
              </div>
              <span className="text-center text-[15px] font-semibold text-brand-ink">
                {cs.client}
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
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

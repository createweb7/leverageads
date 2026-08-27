"use client";

import { useState } from "react";
import { EnquiryRow } from "./EnquiryRow";
import type { Enquiry } from "./types";

const TABS = [
  { key: "all", label: "All" },
  { key: "new", label: "New" },
  { key: "contacted", label: "Contacted" },
  { key: "closed", label: "Closed" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export function EnquiriesView({ enquiries }: { enquiries: Enquiry[] }) {
  const [tab, setTab] = useState<TabKey>("all");

  const counts = {
    all: enquiries.length,
    new: enquiries.filter((e) => e.status === "new").length,
    contacted: enquiries.filter((e) => e.status === "contacted").length,
    closed: enquiries.filter((e) => e.status === "closed").length,
  };

  const filtered = tab === "all" ? enquiries : enquiries.filter((e) => e.status === tab);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              tab === t.key
                ? "bg-brand-red text-white"
                : "border border-brand-line text-brand-gray hover:bg-brand-paper"
            }`}
          >
            {t.label} ({counts[t.key]})
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {filtered.map((enquiry) => (
          <EnquiryRow key={enquiry.id} enquiry={enquiry} />
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-brand-line bg-white p-8 text-center text-sm text-brand-gray">
            No enquiries here yet.
          </p>
        )}
      </div>
    </div>
  );
}

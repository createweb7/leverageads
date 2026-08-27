"use client";

import { useState, useTransition } from "react";
import { ChevronDown, ChevronUp, Mail, Phone, Trash2 } from "lucide-react";
import { updateEnquiryStatus, deleteEnquiry, type EnquiryStatus } from "./actions";
import type { Enquiry } from "./types";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

const statusStyles: Record<EnquiryStatus, string> = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  contacted: "bg-amber-50 text-amber-700 border-amber-200",
  closed: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

const detailLabels: Record<string, string> = {
  service: "Service",
  industry: "Industry",
  enquirySource: "Enquiry Source",
  monthlyVolume: "Monthly Volume",
  crmIntegration: "CRM Integration",
  humanHandover: "Human Handover",
};

export function EnquiryRow({ enquiry }: { enquiry: Enquiry }) {
  const [pending, startTransition] = useTransition();
  const [expanded, setExpanded] = useState(false);

  const title = enquiry.form_type === "whatsapp-automation" ? enquiry.business_name : enquiry.name;

  return (
    <div className={`rounded-2xl border border-brand-line bg-white p-5 ${pending ? "opacity-50" : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold text-brand-ink">{title || "—"}</p>
            <span className="rounded-full border border-brand-line px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-gray">
              {enquiry.form_type === "whatsapp-automation" ? "WhatsApp Automation" : "General"}
            </span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-brand-gray">
            <a href={`mailto:${enquiry.email}`} className="flex items-center gap-1.5 hover:text-brand-red">
              <Mail size={13} /> {enquiry.email}
            </a>
            <a href={`tel:${enquiry.phone}`} className="flex items-center gap-1.5 hover:text-brand-red">
              <Phone size={13} /> {enquiry.phone}
            </a>
            <span>{dateFormatter.format(new Date(enquiry.created_at))}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={enquiry.status}
            disabled={pending}
            onChange={(e) =>
              startTransition(() =>
                updateEnquiryStatus(enquiry.id, e.target.value as EnquiryStatus)
              )
            }
            className={`rounded-full border px-3 py-1.5 text-sm font-semibold outline-none ${statusStyles[enquiry.status]}`}
          >
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed</option>
          </select>
          <button
            type="button"
            disabled={pending}
            onClick={() => {
              if (confirm("Delete this enquiry?")) {
                startTransition(() => deleteEnquiry(enquiry.id));
              }
            }}
            className="rounded p-1.5 text-brand-gray hover:bg-red-50 hover:text-red-600"
            aria-label="Delete"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 flex items-center gap-1 text-sm font-medium text-brand-red"
      >
        {expanded ? "Hide details" : "View details"}
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {expanded && (
        <div className="mt-3 space-y-2 border-t border-brand-line pt-3 text-sm">
          {enquiry.message && (
            <p className="text-brand-ink whitespace-pre-wrap">{enquiry.message}</p>
          )}
          {Object.keys(enquiry.details ?? {}).length > 0 && (
            <dl className="grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-2">
              {Object.entries(enquiry.details).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <dt className="font-semibold text-brand-gray">
                    {detailLabels[key] ?? key}:
                  </dt>
                  <dd className="text-brand-ink">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}
    </div>
  );
}

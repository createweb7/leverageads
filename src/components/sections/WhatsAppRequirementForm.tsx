"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { industries } from "@/data/industries";

type Status = "idle" | "submitting" | "success" | "error";

const enquirySources = ["Website", "Ads", "Social Media", "Walk-ins", "Referrals", "Mixed / Not Sure"];
const volumeBuckets = ["Under 20", "20–50", "50–100", "100+"];

export function WhatsAppRequirementForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "whatsapp-automation" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-line bg-white p-10 text-center">
        <CheckCircle2 className="mx-auto text-brand-red" size={40} />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">
          Thank you — we&apos;ve received your requirement.
        </h3>
        <p className="mt-2 text-sm text-brand-gray leading-relaxed max-w-sm mx-auto">
          We&apos;ll review the details and recommend the right WhatsApp automation workflow for
          your business. If it&apos;s urgent, please message us directly on WhatsApp.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setStatus("idle")}>
          Submit Another Requirement
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Business Name" name="businessName" required />
        <div>
          <label htmlFor="industry" className="mb-1.5 block text-sm font-semibold text-brand-ink">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            required
            className="w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-red"
          >
            <option value="">Select your industry</option>
            {industries.map((i) => (
              <option key={i.slug} value={i.name}>
                {i.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="enquirySource" className="mb-1.5 block text-sm font-semibold text-brand-ink">
            Main Source of Enquiries
          </label>
          <select
            id="enquirySource"
            name="enquirySource"
            required
            className="w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-red"
          >
            <option value="">Select a source</option>
            {enquirySources.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="monthlyVolume" className="mb-1.5 block text-sm font-semibold text-brand-ink">
            Approximate Monthly Enquiry Volume
          </label>
          <select
            id="monthlyVolume"
            name="monthlyVolume"
            required
            className="w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-red"
          >
            <option value="">Select a range</option>
            {volumeBuckets.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="automationGoal" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          What Do You Want to Automate?
        </label>
        <textarea
          id="automationGoal"
          name="automationGoal"
          rows={4}
          required
          className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none focus:border-brand-red"
          placeholder="e.g. website leads, ad responses, catalogue enquiries, appointments, admissions or follow-ups"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <RadioGroup label="Need CRM Integration?" name="crmIntegration" />
        <RadioGroup label="Need Human Handover?" name="humanHandover" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Phone / WhatsApp Number" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-brand-red">
          Something went wrong sending your requirement. Please try WhatsApp or call us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          "Plan My WhatsApp Workflow"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-brand-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-red"
      />
    </div>
  );
}

function RadioGroup({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <span className="mb-1.5 block text-sm font-semibold text-brand-ink">{label}</span>
      <div className="flex gap-5 rounded-lg border border-brand-line bg-white px-4 py-2.5">
        {["Yes", "No"].map((option) => (
          <label key={option} className="flex items-center gap-2 text-sm text-brand-ink">
            <input
              type="radio"
              name={name}
              value={option}
              required
              className="accent-brand-red"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

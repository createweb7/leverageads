"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
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
        body: JSON.stringify(data),
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
      <div className="rounded-2xl border border-brand-line bg-brand-paper p-10 text-center">
        <CheckCircle2 className="mx-auto text-brand-red" size={40} />
        <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">
          Thank you — your enquiry has been received.
        </h3>
        <p className="mt-2 text-sm text-brand-gray leading-relaxed max-w-sm mx-auto">
          Our team will review your requirement and get back to you shortly. If it&apos;s urgent,
          please message us directly on WhatsApp.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setStatus("idle")}>
          Submit Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required />
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-ink">
            What do you need help with?
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-red"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.navLabel}>
                {s.navLabel}
              </option>
            ))}
            <option value="Not Sure – Need Guidance">Not Sure – Need Guidance</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-ink">
          Tell us about your requirement
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none focus:border-brand-red"
          placeholder="Tell us a little about your requirement and we'll suggest the right next step."
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-brand-red">
          Something went wrong sending your enquiry. Please try WhatsApp or call us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending...
          </>
        ) : (
          "Request a Proposal"
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

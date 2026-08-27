"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { pillarNav } from "@/data/nav";
import { getRecaptchaToken } from "@/lib/recaptcha-client";
import { RecaptchaNotice } from "@/components/sections/RecaptchaNotice";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<string, string>>;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setFieldErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const recaptchaToken = await getRecaptchaToken("contact_form");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "general", recaptchaToken }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFieldErrors(result.fieldErrors ?? {});
        setStatus("error");
        return;
      }
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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required minLength={2} error={fieldErrors.name} />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          required
          pattern="^\+?[0-9()\-\s]{7,20}$"
          error={fieldErrors.phone}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required error={fieldErrors.email} />
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
            {pillarNav.map((pillar) => (
              <optgroup key={pillar.slug} label={pillar.label}>
                {pillar.links.map((link) => (
                  <option key={link.href} value={link.label}>
                    {link.label}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="Not Sure – Need Guidance">Not Sure – Need Guidance</option>
          </select>
          {fieldErrors.service && (
            <p className="mt-1 text-xs font-medium text-brand-red">{fieldErrors.service}</p>
          )}
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
          minLength={10}
          className="w-full rounded-lg border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none focus:border-brand-red"
          placeholder="Tell us a little about your requirement and we'll suggest the right next step."
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs font-medium text-brand-red">{fieldErrors.message}</p>
        )}
      </div>

      {status === "error" && !Object.keys(fieldErrors).length && (
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

      <RecaptchaNotice />
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  minLength,
  pattern,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  minLength?: number;
  pattern?: string;
  error?: string;
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
        minLength={minLength}
        pattern={pattern}
        className="w-full rounded-lg border border-brand-line bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-red"
      />
      {error && <p className="mt-1 text-xs font-medium text-brand-red">{error}</p>}
    </div>
  );
}

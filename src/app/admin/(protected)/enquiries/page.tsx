import type { Metadata } from "next";
import { createAdminClient } from "@/lib/supabase/admin";
import { EnquiriesView } from "./EnquiriesView";
import type { Enquiry } from "./types";

export const metadata: Metadata = { title: "Enquiries" };

export default async function AdminEnquiriesPage() {
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("enquiries")
    .select("id, form_type, name, business_name, email, phone, message, details, status, created_at")
    .order("created_at", { ascending: false });

  const enquiries = (data ?? []) as Enquiry[];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-brand-ink">Enquiries</h1>
      <p className="mt-1.5 text-sm text-brand-gray">
        Submissions from the contact form and WhatsApp automation requirement form.
      </p>

      <div className="mt-6">
        <EnquiriesView enquiries={enquiries} />
      </div>
    </div>
  );
}

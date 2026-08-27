import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendEnquiryNotification } from "@/lib/email";
import { verifyRecaptcha } from "@/lib/recaptcha-server";
import { enquirySchema, flattenZodErrors } from "@/lib/validation/enquiry";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const formType = raw.formType === "whatsapp-automation" ? "whatsapp-automation" : "general";

  const parsed = enquirySchema.safeParse({ ...raw, formType });
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please fix the highlighted fields.", fieldErrors: flattenZodErrors(parsed.error) },
      { status: 400 }
    );
  }

  const recaptcha = await verifyRecaptcha(raw.recaptchaToken as string | undefined);
  if (!recaptcha.success) {
    return NextResponse.json(
      { error: "We couldn't verify your submission. Please refresh the page and try again." },
      { status: 400 }
    );
  }

  const enquiry = parsed.data;

  const isWhatsapp = enquiry.formType === "whatsapp-automation";
  const row = {
    form_type: enquiry.formType,
    name: isWhatsapp ? null : enquiry.name,
    business_name: isWhatsapp ? enquiry.businessName : null,
    email: enquiry.email,
    phone: enquiry.phone,
    message: isWhatsapp ? enquiry.automationGoal : enquiry.message,
    details: isWhatsapp
      ? {
          industry: enquiry.industry,
          enquirySource: enquiry.enquirySource,
          monthlyVolume: enquiry.monthlyVolume,
          crmIntegration: enquiry.crmIntegration,
          humanHandover: enquiry.humanHandover,
        }
      : { service: enquiry.service },
  };

  const supabase = createAdminClient();
  const { error } = await supabase.from("enquiries").insert(row);

  if (error) {
    console.error("Failed to save enquiry:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }

  await sendEnquiryNotification(enquiry);

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";

type ContactPayload = {
  formType?: "whatsapp-automation";
  // General enquiry form
  name?: string;
  service?: string;
  message?: string;
  // WhatsApp automation requirement form
  businessName?: string;
  industry?: string;
  enquirySource?: string;
  monthlyVolume?: string;
  automationGoal?: string;
  crmIntegration?: string;
  humanHandover?: string;
  // Shared
  phone?: string;
  email?: string;
};

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();

  const missingRequired =
    body.formType === "whatsapp-automation"
      ? !body.businessName || !body.automationGoal || !body.phone || !body.email
      : !body.name || !body.phone || !body.email || !body.message;

  if (missingRequired) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire this up to a real destination before launch — e.g. Resend/SMTP email,
  // a CRM webhook, or a Google Sheet. For now the enquiry is only logged server-side.
  console.log("New enquiry received:", body);

  return NextResponse.json({ ok: true });
}

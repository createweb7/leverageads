import "server-only";
import { Resend } from "resend";
import type { EnquiryInput } from "@/lib/validation/enquiry";

function escapeHtml(input: string) {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderRows(pairs: [string, string][]) {
  return pairs
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#6b7280;font-size:13px;white-space:nowrap;vertical-align:top">${escapeHtml(
          label
        )}</td><td style="padding:6px 12px;font-size:13px;color:#111827">${escapeHtml(value)}</td></tr>`
    )
    .join("");
}

export async function sendEnquiryNotification(enquiry: EnquiryInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ENQUIRY_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    console.warn("Resend not configured — skipping enquiry notification email.");
    return;
  }

  const resend = new Resend(apiKey);

  const rows =
    enquiry.formType === "whatsapp-automation"
      ? renderRows([
          ["Form", "WhatsApp Automation Requirement"],
          ["Business Name", enquiry.businessName],
          ["Industry", enquiry.industry],
          ["Enquiry Source", enquiry.enquirySource],
          ["Monthly Volume", enquiry.monthlyVolume],
          ["Automation Goal", enquiry.automationGoal],
          ["Needs CRM Integration", enquiry.crmIntegration],
          ["Needs Human Handover", enquiry.humanHandover],
          ["Phone", enquiry.phone],
          ["Email", enquiry.email],
        ])
      : renderRows([
          ["Form", "General Enquiry"],
          ["Name", enquiry.name],
          ["Service", enquiry.service],
          ["Message", enquiry.message],
          ["Phone", enquiry.phone],
          ["Email", enquiry.email],
        ]);

  const subject =
    enquiry.formType === "whatsapp-automation"
      ? `New WhatsApp automation enquiry — ${enquiry.businessName}`
      : `New enquiry — ${enquiry.name}`;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: enquiry.email,
      subject,
      html: `<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif">${rows}</table>`,
    });
  } catch (err) {
    console.error("Failed to send enquiry notification email:", err);
  }
}

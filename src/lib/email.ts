import "server-only";
import { Resend } from "resend";
import type { EnquiryInput } from "@/lib/validation/enquiry";
import { siteConfig } from "@/data/site";

const COLORS = {
  ink: "#0c0d10",
  red: "#ed3237",
  redTint: "#fdedec",
  paper: "#fafaf8",
  gray: "#5f646c",
  gray2: "#9da2aa",
  line: "#e8e6e1",
};

const LOGO_URL = "https://www.leverageads.com/brand/logo.png";

function escapeHtml(input: string) {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderDetailRows(pairs: [string, string][]) {
  return pairs
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid ${COLORS.line}">
            <div style="font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:${COLORS.gray2};margin-bottom:3px">${escapeHtml(label)}</div>
            <div style="font-size:14px;color:${COLORS.ink};font-weight:600">${escapeHtml(value)}</div>
          </td>
        </tr>`
    )
    .join("");
}

function renderEmailHtml({
  eyebrow,
  heading,
  detailRows,
  messageLabel,
  message,
  replyName,
  replyEmail,
}: {
  eyebrow: string;
  heading: string;
  detailRows: string;
  messageLabel: string;
  message: string;
  replyName: string;
  replyEmail: string;
}) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background-color:${COLORS.paper};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${COLORS.paper};padding:32px 16px">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${COLORS.line}">
            <tr>
              <td style="background-color:#ffffff;border-top:3px solid ${COLORS.red};border-bottom:1px solid ${COLORS.line};padding:24px 32px">
                <img src="${LOGO_URL}" alt="${escapeHtml(siteConfig.name)}" height="32" style="display:block;height:32px;width:auto;border:0" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px">
                <div style="font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;color:${COLORS.red};margin-bottom:8px">${escapeHtml(eyebrow)}</div>
                <div style="font-size:22px;font-weight:800;color:${COLORS.ink};margin-bottom:24px;line-height:1.3">${escapeHtml(heading)}</div>

                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px">
                  ${detailRows}
                </table>

                <div style="font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:${COLORS.gray2};margin-bottom:6px">${escapeHtml(messageLabel)}</div>
                <div style="background-color:${COLORS.paper};border-left:3px solid ${COLORS.red};border-radius:8px;padding:14px 16px;font-size:14px;color:${COLORS.ink};line-height:1.6;white-space:pre-wrap;margin-bottom:28px">${escapeHtml(message)}</div>

                <a href="mailto:${escapeHtml(replyEmail)}" style="display:inline-block;background-color:${COLORS.red};color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:8px">Reply to ${escapeHtml(replyName)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;border-top:1px solid ${COLORS.line};background-color:${COLORS.paper}">
                <div style="font-size:12px;color:${COLORS.gray};line-height:1.6">
                  ${escapeHtml(siteConfig.name)} &middot; ${escapeHtml(siteConfig.phone)}<br />
                  ${escapeHtml(siteConfig.address)}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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
  const isWhatsapp = enquiry.formType === "whatsapp-automation";

  const html = isWhatsapp
    ? renderEmailHtml({
        eyebrow: "New WhatsApp Automation Enquiry",
        heading: enquiry.businessName,
        detailRows: renderDetailRows([
          ["Industry", enquiry.industry],
          ["Enquiry Source", enquiry.enquirySource],
          ["Monthly Volume", enquiry.monthlyVolume],
          ["Needs CRM Integration", enquiry.crmIntegration],
          ["Needs Human Handover", enquiry.humanHandover],
          ["Phone", enquiry.phone],
          ["Email", enquiry.email],
        ]),
        messageLabel: "What They Want to Automate",
        message: enquiry.automationGoal,
        replyName: enquiry.businessName,
        replyEmail: enquiry.email,
      })
    : renderEmailHtml({
        eyebrow: "New Enquiry",
        heading: enquiry.name,
        detailRows: renderDetailRows([
          ["Service", enquiry.service],
          ["Phone", enquiry.phone],
          ["Email", enquiry.email],
        ]),
        messageLabel: "Message",
        message: enquiry.message,
        replyName: enquiry.name,
        replyEmail: enquiry.email,
      });

  const subject = isWhatsapp
    ? `New WhatsApp automation enquiry — ${enquiry.businessName}`
    : `New enquiry — ${enquiry.name}`;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: enquiry.email,
      subject,
      html,
    });
  } catch (err) {
    console.error("Failed to send enquiry notification email:", err);
  }
}

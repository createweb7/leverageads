import { z } from "zod";

// Loose but real phone validation: digits, spaces, dashes, parens, optional
// leading +, 7-15 digits total (covers Indian mobile/landline plus intl).
const phoneRegex = /^\+?[0-9()\-\s]{7,20}$/;

const sharedFields = {
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required.")
    .regex(phoneRegex, "Enter a valid phone number.")
    .refine((v) => v.replace(/\D/g, "").length >= 7, "Enter a valid phone number."),
};

export const generalEnquirySchema = z.object({
  formType: z.literal("general"),
  name: z.string().trim().min(2, "Enter your full name."),
  service: z.string().trim().min(1, "Select what you need help with."),
  message: z.string().trim().min(10, "Tell us a bit more about your requirement (10+ characters)."),
  ...sharedFields,
});

export const whatsappAutomationEnquirySchema = z.object({
  formType: z.literal("whatsapp-automation"),
  businessName: z.string().trim().min(2, "Enter your business name."),
  industry: z.string().trim().min(1, "Select your industry."),
  enquirySource: z.string().trim().min(1, "Select your main source of enquiries."),
  monthlyVolume: z.string().trim().min(1, "Select an approximate monthly volume."),
  automationGoal: z.string().trim().min(10, "Describe what you'd like to automate (10+ characters)."),
  crmIntegration: z.enum(["Yes", "No"], { message: "Select an option." }),
  humanHandover: z.enum(["Yes", "No"], { message: "Select an option." }),
  ...sharedFields,
});

export const enquirySchema = z.discriminatedUnion("formType", [
  generalEnquirySchema,
  whatsappAutomationEnquirySchema,
]);

export type EnquiryInput = z.infer<typeof enquirySchema>;
export type EnquiryFieldErrors = Partial<Record<string, string>>;

export function flattenZodErrors(error: z.ZodError): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

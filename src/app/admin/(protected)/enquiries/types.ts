export type Enquiry = {
  id: string;
  form_type: "general" | "whatsapp-automation";
  name: string | null;
  business_name: string | null;
  email: string;
  phone: string;
  message: string | null;
  details: Record<string, string>;
  status: "new" | "contacted" | "closed";
  created_at: string;
};

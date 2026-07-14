import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappHref } from "@/data/site";

export function WhatsAppBar() {
  return (
    <a
      href={whatsappHref("Hi LeverageAds, I need help with branding, website, photography, CRM or WhatsApp automation.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LeverageAds on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,.4)] transition-transform duration-300 ease-brand hover:scale-110"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

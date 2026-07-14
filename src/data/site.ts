export const siteConfig = {
  name: "LeverageAds",
  tagline: "Building Brands. Creating Demand. Driving Business Growth.",
  url: "https://leverageads.com",
  description:
    "LeverageAds is a full-service brand, creative, digital and business solutions company in Chennai offering branding, ad films, product photography, websites, CRM, ERP, digital marketing and WhatsApp automation.",
  phone: "+91 95000 16622",
  phoneHref: "tel:+919500016622",
  whatsappNumber: "919500016622",
  email: "leverageadvertising@gmail.com",
  address:
    "Raasi Business Centre, New No 37A, Old No 31/1, Puliyur 2nd Main Road, (Off Puliyur 1st Lane), Trustpuram, Kodambakkam, Chennai - 600 024",
  locality: "Chennai",
  region: "Tamil Nadu",
  postalCode: "600024",
};

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

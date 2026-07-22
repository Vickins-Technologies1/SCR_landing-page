export const site = {
  name: "Sorana Property Managers Limited",
  shortName: "Sorana Property Managers",
  description:
    "All-in-one property management for landlords, tenants, and Airbnb owners with real-time updates, secure payments, and smart reporting.",
  url: "https://www.soranapropertymanagers.com",
  portal: {
    signIn: "https://app.soranapropertymanagers.com/",
    signUp: "https://app.soranapropertymanagers.com/sign-up",
    marketplace: "https://app.soranapropertymanagers.com/market-place",
  },
  contact: {
    email: "soranapropertymanagers@gmail.com",
    phones: ["+254117649850", "+254745963183"],
    address: "Kerugoya, Kenya",
    whatsapp: "+254745963183",
  },
  social: {
    facebook: "https://www.facebook.com/share/18Fx8TFFCZ/",
    x: "https://tinyurl.com/2p4hkmsv",
    instagram: "https://www.instagram.com/sorana_2026?igsh=ZzdpZXpneHBpa3Z1",
    tiktok: "https://www.tiktok.com/@soranapropertymanagers?_r=1&_t=ZS-95UtLwUR8Dw",
  },
} as const;

export function whatsappHref(message: string) {
  const number = site.contact.whatsapp.replace(/[^\d]/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}

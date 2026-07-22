import type { Metadata } from "next";
import { site } from "@/lib/site";
import { ContactUsPage } from "@/components/pages/contact/ContactUsPage";

export const metadata: Metadata = {
  title: `Contact Us | ${site.shortName}`,
  description: "Contact Sorana for onboarding, pricing, and setup support for landlords, tenants, and Airbnb owners.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Contact Us | ${site.shortName}`,
    description: "Contact Sorana for onboarding, pricing, and setup support for landlords, tenants, and Airbnb owners.",
    url: `${site.url}/contact-us`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return <ContactUsPage />;
}

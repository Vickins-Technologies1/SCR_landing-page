import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PricingPage } from "@/components/pages/pricing/PricingPage";

export const metadata: Metadata = {
  title: `Pricing | ${site.shortName}`,
  description:
    "Clear, transparent pricing for rent collection and full property management in Kenya. Estimate your monthly fee in seconds.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Pricing | ${site.shortName}`,
    description:
      "Clear, transparent pricing for rent collection and full property management in Kenya. Estimate your monthly fee in seconds.",
    url: `${site.url}/pricing`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return <PricingPage />;
}


import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PricingPage } from "@/components/pages/pricing/PricingPage";

export const metadata: Metadata = {
  title: `Pricing | ${site.shortName}`,
  description:
    "Sorana pricing for Free, Premium, and Full Management plans for landlords, tenants, and Airbnb owners.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Pricing | ${site.shortName}`,
    description:
      "Sorana pricing for Free, Premium, and Full Management plans for landlords, tenants, and Airbnb owners.",
    url: `${site.url}/pricing`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return <PricingPage />;
}

import type { Metadata } from "next";
import { site } from "@/lib/site";
import { HowItWorksPage } from "@/components/pages/how-it-works/HowItWorksPage";

export const metadata: Metadata = {
  title: `How It Works | ${site.shortName}`,
  description: "See how Sorana connects properties, tenants, payments, reports, and Airbnb operations in one platform.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `How It Works | ${site.shortName}`,
    description: "See how Sorana connects properties, tenants, payments, reports, and Airbnb operations in one platform.",
    url: `${site.url}/how-it-works`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return <HowItWorksPage />;
}

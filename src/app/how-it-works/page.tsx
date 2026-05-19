import type { Metadata } from "next";
import { site } from "@/lib/site";
import { HowItWorksPage } from "@/components/pages/how-it-works/HowItWorksPage";

export const metadata: Metadata = {
  title: `How It Works | ${site.shortName}`,
  description: "A structured, premium process for hands‑off ownership—assessment, onboarding, operations, reporting.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `How It Works | ${site.shortName}`,
    description: "A structured, premium process for hands‑off ownership—assessment, onboarding, operations, reporting.",
    url: `${site.url}/how-it-works`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return <HowItWorksPage />;
}


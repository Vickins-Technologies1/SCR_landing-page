import type { Metadata } from "next";
import { site } from "@/lib/site";
import { HomePage } from "@/components/pages/home/HomePage";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}


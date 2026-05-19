import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/contact-us`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/download-app`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}


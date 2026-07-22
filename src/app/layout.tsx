import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const manrope = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const cormorantGaramond = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/cormorant-garamond/files/cormorant-garamond-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
      weight: "100 800",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.url),
  applicationName: site.shortName,
  keywords: [
    "property management Kenya",
    "landlord portal",
    "tenant portal",
    "Airbnb management",
    "property software",
    "rent collection",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: `${site.url}/opengraph-image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [`${site.url}/twitter-image`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <script
          type="application/ld+json"
          // LocalBusiness schema for SEO rich results
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: site.name,
              url: site.url,
              description: site.description,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kerugoya",
                addressCountry: "KE",
              },
              email: site.contact.email,
              telephone: site.contact.phones,
              sameAs: [site.social.facebook, site.social.x, site.social.instagram, site.social.tiktok],
            }),
          }}
        />
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}

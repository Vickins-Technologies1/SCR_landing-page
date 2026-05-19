import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.url),
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
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
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
      <body className="antialiased">
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

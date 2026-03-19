import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";
import ScrollReveal from "./components/ScrollReveal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const sora = Sora({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sorana Property Managers Limited",
  description: "Caring for your property, Protecting your investment.",
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
    <html lang="en" className={`${sora.variable} ${cormorant.variable} ${jetbrains.variable}`}>
      <body className="antialiased">
        <Preloader />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

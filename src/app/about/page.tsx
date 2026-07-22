import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Building2, ShieldCheck, Users } from "lucide-react";
import heroImage from "../../../public/property.jpg";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: `About Us | ${site.shortName}`,
  description:
    "Sorana is an all-in-one property management platform for landlords, tenants, and Airbnb owners across Kenya.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `About Us | ${site.shortName}`,
    description:
      "Sorana is an all-in-one property management platform for landlords, tenants, and Airbnb owners across Kenya.",
    url: `${site.url}/about`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function About() {
  const values = [
    {
      title: "Trust & Transparency",
      desc: "Clear reporting, honest communication, and reliable fee structures.",
      icon: ShieldCheck,
    },
    {
      title: "Local Expertise",
      desc: "Deep insight into Kenyan markets, tenant expectations, and compliance.",
      icon: Building2,
    },
    {
      title: "Client-First Service",
      desc: "Dedicated managers who treat every property like a flagship asset.",
      icon: Users,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <Reveal>
              <p className="eyebrow">About Sorana</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">
                All-in-one property management for modern Kenyan portfolios.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
                Sorana Property Managers Limited, headquartered in Kerugoya, Kenya, gives landlords, tenants, and Airbnb
                owners a single secure platform for payments, reports, messaging, and daily operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2"
                >
                  Schedule a consultation
                </Link>
                <Link
                  href="/how-it-works"
                  className="border border-border/60 text-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2"
                >
                  See our process
                </Link>
              </div>
            </Reveal>

            <Reveal className="relative" delay={0.06}>
              <div className="surface-card rounded-3xl overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <Image
                    src={heroImage}
                    alt="Managed property"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel rounded-2xl p-4 border border-white/60">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Based in</p>
                <p className="text-lg font-semibold">Kerugoya, Kenya</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <Reveal>
              <p className="eyebrow">Our Story</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Built on clear operations and shared visibility.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                We started with a commitment to simplify property management for busy owners. Today, our platform blends
                real-time updates, reporting, and role-based access so every property stays organized.
              </p>
            </Reveal>
            <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-4" delay={0.06}>
              {[
                { label: "Core Modules", value: "9" },
                { label: "User Roles", value: "Multiple" },
                { label: "Real-time Updates", value: "Live" },
                { label: "Device Support", value: "Mobile" },
              ].map((item) => (
                <div key={item.label} className="surface-card rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.label}</p>
                  <p className="mt-3 text-2xl font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal className="surface-card rounded-3xl p-7">
              <p className="eyebrow">Mission</p>
              <h3 className="text-xl md:text-2xl font-semibold mt-3">To make property management simpler for every role.</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-4">
                We deliver dependable rental performance through attentive service, smart technology, and uncompromising
                transparency.
              </p>
            </Reveal>
            <Reveal className="surface-card rounded-3xl p-7" delay={0.06}>
              <p className="eyebrow">Vision</p>
              <h3 className="text-xl md:text-2xl font-semibold mt-3">To be Kenya&apos;s most trusted property management platform.</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-4">
                We set premium standards for operational excellence, client care, and market-leading innovation.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Reveal
                  key={value.title}
                  className="surface-card rounded-3xl p-6"
                  delay={0.05 * index}
                >
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <Reveal>
              <p className="eyebrow">Service Coverage</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">A full-service platform for landlords and tenants.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                From tenant onboarding to maintenance, payments, and reporting, Sorana connects the whole workflow in one
                place.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  "Property and unit management",
                  "Rent collection and balance tracking",
                  "Maintenance coordination and requests",
                  "Financial reports and notifications",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="glass-panel rounded-3xl p-8 border border-white/60" delay={0.06}>
              <h3 className="text-xl font-semibold">Connect with our team</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Ready to move your properties onto Sorana? We can help you choose the right plan and onboarding path.
              </p>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Office:</strong> Kerugoya, Kenya
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong> +254 117 649 850 / +254 745 963 183
                </p>
                <p>
                  <strong className="text-foreground">Email:</strong> soranapropertymanagers@gmail.com
                </p>
              </div>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
              >
                Speak with us
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

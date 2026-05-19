import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Building2, ShieldCheck, Users } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: `About Us | ${site.shortName}`,
  description: "Premium property stewardship rooted in trust, transparency, and modern systems.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `About Us | ${site.shortName}`,
    description: "Premium property stewardship rooted in trust, transparency, and modern systems.",
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
                Premium property stewardship rooted in trust and modern systems.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
                Sorana Property Managers Limited, headquartered in Kerugoya, Kenya, delivers strategic management for residential, commercial, and mixed-use properties. We pair meticulous care with technology-driven reporting to protect your investment.
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
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1800&q=75"
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Built on reliable operations and owner confidence.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                We started with a commitment to simplify ownership for busy investors. Today, our team blends premium customer care with modern management systems to deliver consistent, transparent performance for every property we manage.
              </p>
            </Reveal>
            <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-4" delay={0.06}>
              {[
                { label: "Properties Managed", value: "25+" },
                { label: "Rent Collected", value: "KSH 1M+" },
                { label: "Owner Retention", value: "98%" },
                { label: "Response Time", value: "24/7" },
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
              <h3 className="text-xl md:text-2xl font-semibold mt-3">To simplify ownership and elevate tenant experience.</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-4">
                We deliver dependable rental performance through attentive service, smart technology, and uncompromising transparency.
              </p>
            </Reveal>
            <Reveal className="surface-card rounded-3xl p-7" delay={0.06}>
              <p className="eyebrow">Vision</p>
              <h3 className="text-xl md:text-2xl font-semibold mt-3">To be Kenya&apos;s most trusted property management partner.</h3>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">A full-service portfolio partner.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                From tenant acquisition to maintenance oversight and financial reporting, we handle every stage so you can focus on growth.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {[
                  "Rental marketing & tenant acquisition",
                  "Lease administration & compliance",
                  "Maintenance coordination & inspections",
                  "Financial reporting & owner updates",
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
                Ready for a premium property management partner? Let us build a tailored strategy for your assets.
              </p>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Office:</strong> Kerugoya, Kenya
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong> +254 117 649 850 / +254 702 036 837
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

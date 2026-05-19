"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Building2, FileText, LineChart, ShieldCheck, Users, Wrench } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";

const heroImage =
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2400&q=75";

const secondaryImage =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=75";

export function HomePage() {
  const stats = [
    { label: "Properties Under Care", value: 25, suffix: "+" },
    { label: "Owner Retention", value: 98, suffix: "%" },
    { label: "On‑Time Collections", value: 99, suffix: "%" },
    { label: "Response SLA", value: 24, suffix: "/7" },
  ];

  const services = [
    {
      icon: ShieldCheck,
      title: "Asset Protection",
      desc: "Inspections, maintenance oversight, and vendor governance that protect long‑term value.",
    },
    {
      icon: Users,
      title: "Tenant Quality",
      desc: "Screening, onboarding, and clear communication that reduce churn and disputes.",
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      desc: "Monthly statements and owner updates designed for confidence and clarity.",
    },
    {
      icon: LineChart,
      title: "Performance Strategy",
      desc: "Pricing guidance and occupancy planning aligned to Kenya’s rental market dynamics.",
    },
  ];

  const steps = [
    { icon: BadgeCheck, title: "Assess & Align", desc: "We review your asset, goals, and preferred level of involvement." },
    { icon: Users, title: "Place Tenants", desc: "We market, screen, and onboard tenants with clear lease controls." },
    { icon: Wrench, title: "Operate & Maintain", desc: "We coordinate repairs, inspections, and vendor quality assurance." },
    { icon: Building2, title: "Report & Improve", desc: "You receive statements, insights, and next‑step recommendations." },
  ];

  const testimonials = [
    {
      quote:
        "Sorana gave us structure and visibility. We now receive clear statements, proactive maintenance updates, and predictable collections.",
      name: "N. Mugo",
      title: "Diaspora Owner (Nairobi)",
    },
    {
      quote:
        "From tenant onboarding to repairs, everything is handled professionally. The communication is consistent and dependable.",
      name: "A. Wanjiru",
      title: "Landlord (Kiambu)",
    },
    {
      quote:
        "Their team treats our units like premium assets. Vendor management is solid, and the reporting helps us plan ahead.",
      name: "J. Kariuki",
      title: "Investor (Central Kenya)",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative pt-28 pb-16 md:pb-20">
        <div className="absolute inset-0 -z-10">
          <Image src={heroImage} alt="Premium Kenyan property" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/65 to-background" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
            <Reveal>
              <p className="eyebrow text-white/80">Premium Property Management • Kenya</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-4 text-white leading-[1.05]">
                Ultra‑premium stewardship for owners who value clarity, care, and performance.
              </h1>
              <p className="mt-5 text-sm md:text-base text-white/80 max-w-2xl">
                Sorana Property Managers delivers modern operations, trustworthy reporting, and tenant excellence—so you
                can own confidently from anywhere.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3.5 px-6 rounded-full text-sm md:text-base shadow-[0_20px_40px_-30px_rgba(66,199,117,0.85)] transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={site.portal.signIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-full text-sm md:text-base border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                >
                  Owner Portal
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/how-it-works"
                  className="text-white/90 hover:text-white font-semibold py-3.5 px-6 rounded-full text-sm md:text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  How It Works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={20}>
              <div className="glass-panel rounded-3xl p-6 md:p-7 border border-white/60">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Why owners choose Sorana</p>
                <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-white/80">
                  {[
                    "Monthly reporting that’s easy to understand",
                    "Vetted vendors and maintenance governance",
                    "Tenant screening and proactive issue resolution",
                    "Digital owner access via secure portal",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, idx) => (
              <Reveal key={s.label} delay={0.06 * idx}>
                <div className="surface-card rounded-3xl p-5 md:p-6 text-center">
                  <p className="text-2xl md:text-3xl font-semibold text-foreground">
                    <AnimatedNumber value={s.value} />
                    <span className="text-primary">{s.suffix}</span>
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Services</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
                Everything you need for hands‑off, high‑trust ownership.
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Built for Kenyan property owners and diaspora investors who want consistent results, protected assets, and
                transparent management.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={0.05 * idx}>
                  <div className="surface-card rounded-3xl p-6 hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <Reveal>
              <p className="eyebrow">How It Works</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
                A clear process—built for speed, standards, and accountability.
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
                From onboarding to reporting, we run a structured workflow that protects your investment and keeps tenants
                supported.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/how-it-works"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2"
                >
                  Explore the timeline
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={site.portal.marketplace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border/60 text-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2 hover:bg-muted/60 transition"
                >
                  Market Place
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {steps.map((st) => {
                  const Icon = st.icon;
                  return (
                    <div key={st.title} className="glass-panel rounded-3xl p-6 border border-white/60">
                      <div className="flex items-center gap-3">
                        <span className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </span>
                        <p className="text-sm font-semibold">{st.title}</p>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{st.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Testimonials</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
                Trusted by owners who want premium outcomes.
              </h2>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={0.05}>
              <TestimonialCarousel items={testimonials} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <Reveal>
              <p className="eyebrow">Pricing</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
                Transparent fees aligned to performance and workload.
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
                Choose streamlined rent collection or full-service management. Fees are designed to stay fair—and fully
                transparent.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2"
                >
                  View pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border/60 text-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2 hover:bg-muted/60 transition"
                >
                  Get started
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="surface-card rounded-3xl overflow-hidden">
                <div className="relative h-72 md:h-96">
                  <Image src={secondaryImage} alt="Professional property management" fill className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/60 text-center">
              <p className="eyebrow">Next Step</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Get a tailored plan for your property.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Tell us what you own and what you want handled. We’ll reply with a clear onboarding plan, expected timelines,
                and fee guidance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact-us"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3.5 px-6 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border/60 text-foreground font-semibold py-3.5 px-6 rounded-full text-sm md:text-base hover:bg-muted/60 transition inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}


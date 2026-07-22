"use client";

import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import heroImage from "../../../../public/property.jpg";
import dashboardImage from "../../../../public/bg.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  Building2,
  CircleDollarSign,
  Home,
  LayoutDashboard,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Users,
  Wrench,
  Phone,
} from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

type Item = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  title: string;
  desc: string;
};

const heroFeatures = [
  { icon: Home, label: "Multiple Properties" },
  { icon: Users, label: "Multiple Users & Roles" },
  { icon: Bell, label: "Real-time Updates" },
  { icon: ShieldCheck, label: "Secure & Reliable" },
];

const dashboardItems = [
  "Properties",
  "Tenants",
  "Payments",
  "Expenses",
  "Reports",
  "Marketplace",
  "Users",
  "Messages",
  "Settings",
];

const portals: Item[] = [
  {
    icon: Building2,
    label: "Landlord Portal",
    title: "Run every property from one control center.",
    desc: "Manage property and unit data, money in and money out, and the day-to-day details that keep your portfolio moving.",
  },
  {
    icon: Smartphone,
    label: "Tenant Portal",
    title: "Give tenants a simple place to pay, request help, and stay informed.",
    desc: "Tenants can review balances, download receipts, and track communication without chasing manual updates.",
  },
  {
    icon: Home,
    label: "Airbnb Portal",
    title: "Handle short-stay operations with the same system.",
    desc: "Bookings, check-ins, revenue, and maintenance all stay connected for smooth hospitality operations.",
  },
];

const landlordFeatures = [
  "Property & unit management",
  "Income tracking",
  "Rent collection",
  "Vacancies",
  "Deposits",
  "Utilities",
  "Tenant management",
  "Manual & bank payments",
  "Reports",
  "Multi-user roles",
  "WhatsApp, SMS, and Email notifications",
  "Marketplace listing",
  "Expense tracking",
  "Bank-style financial reports",
];

const tenantFeatures = [
  "Payment history",
  "Balance tracking",
  "Maintenance requests",
  "Vacation notices",
  "Statements & receipts",
  "Direct rent payments",
  "Notifications",
];

const airbnbFeatures = [
  "Property management",
  "Bookings",
  "Check-in/out",
  "Revenue tracking",
  "Dynamic pricing",
  "Expenses",
  "Maintenance",
  "Multi-user support",
  "Reports",
];

const pricingPlans = [
  {
    name: "Free",
    price: "KSH 0",
    note: "Great for getting started",
    summary: "Core tools for basic portfolio tracking and manual operation.",
    features: ["Properties", "Units", "Tenants", "Manual payments", "Basic reports"],
  },
  {
    name: "Premium",
    price: "1% of monthly revenue",
    note: "For growing portfolios",
    summary: "Everything in Free plus automation, notifications, and Airbnb tools.",
    featured: true,
    features: [
      "Everything in Free",
      "Automated payments",
      "Advanced reports",
      "Notifications",
      "Marketplace",
      "Airbnb bookings",
      "Multi-user",
      "Priority support",
    ],
  },
  {
    name: "Full Management",
    price: "8% of monthly income",
    note: "Hands-off property management",
    summary: "Designed for owners who want Sorana to handle the work end to end.",
    features: [
      "Tenant sourcing",
      "Rent collection",
      "Maintenance",
      "Financial reports",
      "Vacancy management",
      "Dedicated property manager",
      "Priority support",
    ],
  },
];

const whySorana = [
  { icon: ShieldCheck, title: "Secure", desc: "Built for dependable access and trusted operations." },
  { icon: BadgeCheck, title: "Reliable", desc: "Designed to keep property workflows consistent and accurate." },
  { icon: Sparkles, title: "Easy to Use", desc: "Clean workflows that reduce admin for every user role." },
  { icon: MonitorSmartphone, title: "Cloud Based", desc: "Access your portfolio anywhere with a browser or mobile device." },
  { icon: Bell, title: "Real-time", desc: "Stay on top of changes, payments, and requests as they happen." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Responsive by default for teams that work on the move." },
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
            <CheckMark />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckMark() {
  return <span className="h-2.5 w-2.5 rounded-full bg-primary" />;
}

export function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden pt-28 pb-16 md:pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Sorana property management platform"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/84 via-[#1E3A8A]/66 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <Reveal>
              <p className="eyebrow text-white/80">All-in-one property management platform</p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[1.06] max-w-3xl">
                One System. All You Need.
              </h1>
              <p className="mt-5 max-w-2xl text-sm md:text-base text-white/82">
                Complete Property Management Solution for Landlords, Tenants & Airbnb Owners. Sorana brings payments,
                reporting, messaging, and operations into one secure dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_40px_-30px_rgba(66,199,117,0.85)] transition hover:scale-[1.02] hover:bg-primary-hover"
                >
                  Get Started
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={site.portal.signIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Open Platform
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white/92 transition hover:text-white"
                >
                  View Pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.label} className="rounded-2xl border border-white/14 bg-white/10 px-4 py-4 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" />
                      <p className="mt-3 text-sm font-semibold text-white">{feature.label}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.08} y={18}>
              <div className="surface-card overflow-hidden rounded-[2rem] border border-white/20 bg-black/20 shadow-[0_30px_80px_-60px_rgba(0,0,0,0.75)]">
                <div className="relative h-[28rem]">
                  <Image
                    src={dashboardImage}
                    alt="Sorana dashboard preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#071827]/70 via-[#0F1C2E]/35 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="rounded-3xl border border-white/15 bg-white/12 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15">
                          <LayoutDashboard className="h-5 w-5 text-white" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-white/70">Dashboard</p>
                          <p className="text-sm font-semibold text-white">Manage everything in one place</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-3">
                        {dashboardItems.map((item) => (
                          <div key={item} className="rounded-2xl border border-white/12 bg-white/8 px-3 py-2 text-center text-xs font-semibold text-white/92">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/35">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] gap-10 items-center">
              <div>
                <p className="eyebrow">Dashboard</p>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">
                  Everything runs from one dashboard.
                </h2>
                <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
                  Properties, Tenants, Payments, Expenses, Reports, Marketplace, Users, Messages and Settings stay in
                  sync so teams can move quickly without losing control.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {dashboardItems.map((item) => (
                    <div key={item} className="surface-card rounded-2xl px-4 py-4 text-sm font-semibold text-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="surface-card rounded-[2rem] overflow-hidden">
                <div className="relative h-72 md:h-[30rem]">
                  <Image
                    src={dashboardImage}
                    alt="Unified property dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Portals</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">Built for every role in the workflow.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
                Sorana gives each user a clear experience, while keeping the same financial and operational backbone
                underneath.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {portals.map((portal, index) => {
              const Icon = portal.icon;
              const features =
                portal.label === "Landlord Portal"
                  ? landlordFeatures
                  : portal.label === "Tenant Portal"
                    ? tenantFeatures
                    : airbnbFeatures;

              return (
                <Reveal key={portal.label} delay={0.05 * index}>
                  <div className="surface-card h-full rounded-[2rem] p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{portal.label}</p>
                        <h3 className="mt-1 text-xl font-semibold">{portal.title}</h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">{portal.desc}</p>
                    <FeatureList items={features} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/35">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">Simple plans that scale with your portfolio.</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={0.05 * index}>
                <div
                  className={`h-full rounded-[2rem] p-7 ${
                    plan.featured ? "glass-panel border border-white/60" : "surface-card"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{plan.name}</p>
                  <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{plan.note}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{plan.summary}</p>
                  <FeatureList items={plan.features} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-10 items-center">
              <div className="surface-card rounded-[2rem] p-7 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Store className="h-6 w-6 text-primary" />
                  </span>
                  <div>
                    <p className="eyebrow">Marketplace</p>
                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">List your property free.</h2>
                  </div>
                </div>
                <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground">
                  Promote available properties at no listing cost and reach the right audience through Sorana&apos;s
                  marketplace.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.portal.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
                  >
                    Open Marketplace
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/60"
                  >
                    Ask a question
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Store,
                    title: "Free property listing",
                    desc: "Add available units and showcase them from one place.",
                  },
                  {
                    icon: MessageSquare,
                    title: "Real-time inquiries",
                    desc: "Keep leads and communication connected to the listing.",
                  },
                  {
                    icon: CircleDollarSign,
                    title: "Revenue visibility",
                    desc: "Track performance alongside your other Sorana data.",
                  },
                  {
                    icon: Wrench,
                    title: "Ready for handover",
                    desc: "Move from listing to maintenance and onboarding without gaps.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="surface-card rounded-[1.5rem] p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/35">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Why Sorana</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">A platform built for modern property teams.</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whySorana.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={0.04 * index}>
                  <div className="surface-card h-full rounded-[1.75rem] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="glass-panel rounded-[2rem] p-8 md:p-12 text-center border border-white/60">
              <p className="eyebrow">Contact</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">Ready to move your portfolio onto Sorana?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
                Visit {site.url}, email {site.contact.email}, or call +254 117 649 850 and +254 745 963 183 to get
                started with the right setup for your properties.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted/60"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
                <a
                  href={`tel:+254117649850`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted/60"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  Star,
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

const heroMotion = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden pt-28 pb-20 md:pb-28 [font-family:var(--font-sans)]">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(66,199,117,0.16),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef6ff_54%,#ffffff_100%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_-15%,rgba(255,255,255,0.95),transparent_32%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.02fr] gap-14 lg:gap-16 items-center">
            <motion.div
              className="max-w-2xl"
              variants={heroMotion}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                custom={0}
                variants={heroMotion}
                className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-900 shadow-[0_12px_40px_-24px_rgba(30,58,138,0.35)] backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                All-in-one property management platform
              </motion.div>

              <motion.h1
                custom={0.06}
                variants={heroMotion}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.05em] text-slate-950 leading-[0.96]"
              >
                One system for landlords, tenants, and Airbnb owners.
              </motion.h1>

              <motion.p
                custom={0.12}
                variants={heroMotion}
                className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-slate-600"
              >
                Sorana brings payments, reporting, messaging, maintenance, and marketplace tools into one secure
                dashboard so every portfolio stays organized and easy to manage.
              </motion.p>

              <motion.div
                custom={0.18}
                variants={heroMotion}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-26px_rgba(66,199,117,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
                >
                  Start Free
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={site.portal.signIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_14px_35px_-26px_rgba(30,58,138,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50"
                >
                  Book Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div custom={0.24} variants={heroMotion} className="mt-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
                {heroFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.label}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.25)] backdrop-blur"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100">
                        <Icon className="h-5 w-5 text-sky-900" />
                      </span>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Included</p>
                        <p className="text-sm font-semibold text-slate-900">{feature.label}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                custom={0.3}
                variants={heroMotion}
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600"
              >
                <div className="flex items-center gap-2">
                  <span className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <span
                        key={item}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-sky-100 text-[11px] font-semibold text-sky-900 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </span>
                  <span className="font-medium text-slate-700">Trusted by growing property teams</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1 text-slate-600">Premium property experience</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-[34rem]"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(66,199,117,0.12),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(59,130,246,0.14),transparent_28%)] blur-2xl" />

              <div className="relative rounded-[2rem] border border-slate-200/80 bg-white p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] sm:p-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Sorana Dashboard</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">Portfolio overview</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium text-slate-500">Live</span>
                  </div>
                </div>

                <div className="relative mt-5 overflow-hidden rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
                  <Image
                    src={dashboardImage}
                    alt="Sorana dashboard preview"
                    width={1400}
                    height={980}
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="h-auto w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent" />

                  <motion.div
                    className="absolute left-4 top-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_12px_28px_-20px_rgba(30,58,138,0.4)] backdrop-blur"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.45 }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Monthly Revenue</p>
                    <p className="mt-1 text-lg font-bold text-slate-950">KSH 824,500</p>
                  </motion.div>

                  <motion.div
                    className="absolute right-4 top-6 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_12px_28px_-20px_rgba(30,58,138,0.4)] backdrop-blur"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.45 }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Occupancy</p>
                    <p className="mt-1 text-lg font-bold text-slate-950">98.4%</p>
                  </motion.div>

                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-52%]"
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="relative w-[9.25rem] rounded-[2rem] border border-slate-200 bg-slate-950 p-2 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.55)]">
                      <div className="overflow-hidden rounded-[1.5rem] bg-white">
                        <Image
                          src={heroImage}
                          alt="Sorana mobile app mockup"
                          width={520}
                          height={980}
                          sizes="(max-width: 1024px) 34vw, 14rem"
                          className="h-auto w-full object-cover"
                        />
                      </div>
                      <div className="absolute bottom-3 left-1/2 w-[82%] -translate-x-1/2 rounded-[1.1rem] bg-slate-950/92 px-3 py-2 text-center text-[11px] font-medium text-white shadow-lg">
                        Real-time notifications
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-5 left-6 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-[0_12px_30px_-20px_rgba(30,58,138,0.35)] backdrop-blur"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.45 }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Pending Tasks</p>
                    <p className="mt-1 text-base font-bold text-slate-950">12 items</p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 right-6 rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-[0_12px_30px_-20px_rgba(30,58,138,0.35)] backdrop-blur"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.45 }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Payments</p>
                    <p className="mt-1 text-base font-bold text-slate-950">92% collected</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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

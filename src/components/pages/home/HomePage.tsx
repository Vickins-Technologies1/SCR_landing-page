"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ComponentType } from "react";
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

const heroTrustIndicators = [
  "Unlimited Properties",
  "Real-time Reports",
  "Secure Cloud Platform",
  "Mobile Friendly",
];

const floatingMetrics = [
  { label: "Monthly Revenue", value: "KES 2.8M" },
  { label: "Occupancy", value: "124 / 136 Units" },
  { label: "Rent Collection", value: "95%" },
  { label: "Active Properties", value: "48" },
  { label: "Pending Maintenance", value: "12" },
  { label: "Airbnb Bookings", value: "38 This Month" },
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

function MetricBubble({
  label,
  value,
  className,
  delay = 0,
}: {
  label: string;
  value: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="rounded-2xl border border-slate-200/80 bg-white/92 px-3.5 py-2.5 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.22)] backdrop-blur-xl">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">{label}</p>
        <p className="mt-1 text-[0.95rem] font-bold text-slate-950">{value}</p>
      </div>
    </motion.div>
  );
}

function DashboardScreen() {
  const navItems = ["Overview", "Properties", "Tenants", "Payments", "Reports", "Messages"];
  const stats = [
    { label: "Rent Collected", value: "95%", tone: "bg-primary/10 text-primary" },
    { label: "Airbnb Revenue", value: "KES 1.2M", tone: "bg-sky-500/10 text-sky-700" },
    { label: "Open Requests", value: "12", tone: "bg-amber-500/10 text-amber-700" },
  ] as const;

  return (
    <div className="bg-white text-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200/80 px-3 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-sky-500 text-white shadow-[0_12px_30px_-20px_rgba(66,199,117,0.8)]">
            <LayoutDashboard className="h-4.5 w-4.5" />
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Sorana Dashboard</p>
            <p className="text-[0.95rem] font-semibold text-slate-950">Portfolio overview</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[0.75rem] font-medium text-slate-500">Cloud sync live</span>
        </div>
      </div>

      <div className="grid gap-3 p-3 md:grid-cols-[10.25rem_minmax(0,1fr)]">
        <aside className="hidden rounded-[1.5rem] border border-slate-200/90 bg-slate-50/90 p-3 md:block">
          <div className="space-y-1">
            {navItems.map((item, index) => {
              const active = index === 0;
              return (
                <div
                  key={item}
                  className={`flex items-center gap-2.5 rounded-2xl px-3 py-2 text-[0.82rem] transition ${
                    active ? "bg-primary/10 text-slate-950" : "text-slate-500 hover:bg-white/80"
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${active ? "bg-primary" : "bg-slate-300"}`} />
                  <span className="font-medium">{item}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-3 rounded-[1.25rem] border border-slate-200 bg-white p-3 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">Property snapshot</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                { label: "Properties", value: "48" },
                { label: "Units", value: "136" },
                { label: "Occupied", value: "124" },
                { label: "Alerts", value: "12" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1rem] bg-slate-50 p-2.5">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                  <p className="mt-1 text-[0.9rem] font-semibold text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -2 }}
                className="rounded-[1.15rem] border border-slate-200 bg-white p-3 shadow-[0_14px_35px_-28px_rgba(15,23,42,0.28)]"
              >
                <div className={`inline-flex rounded-full px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${stat.tone}`}>
                  Live
                </div>
                <p className="mt-2.5 text-[0.98rem] font-bold text-slate-950">{stat.value}</p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[1.4rem] border border-slate-200 bg-white p-3.5 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Revenue trend</p>
                  <h3 className="mt-1 text-[0.92rem] font-semibold text-slate-950">Monthly performance</h3>
                </div>
                <div className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.72rem] font-semibold text-primary">+14.2%</div>
              </div>

              <div className="mt-3 rounded-[1.15rem] bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-2.5">
                <svg viewBox="0 0 640 220" className="h-32 w-full">
                  <defs>
                    <linearGradient id="soranaLine" x1="0" x2="1">
                      <stop offset="0%" stopColor="#42C775" />
                      <stop offset="100%" stopColor="#1E3A8A" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="currentColor" className="text-slate-200">
                    {[40, 90, 140, 190].map((y) => (
                      <path key={y} d={`M20 ${y} H620`} strokeWidth="1" />
                    ))}
                  </g>
                  <motion.path
                    d="M20 170C72 158 86 118 126 128C164 138 186 92 230 96C270 100 298 62 336 70C375 78 395 128 438 116C478 104 506 56 550 62C588 67 602 92 620 84"
                    stroke="url(#soranaLine)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0.5 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M20 170C72 158 86 118 126 128C164 138 186 92 230 96C270 100 298 62 336 70C375 78 395 128 438 116C478 104 506 56 550 62C588 67 602 92 620 84V200H20Z"
                    fill="url(#soranaLine)"
                    opacity="0.12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.12 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </svg>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {[
                  { label: "Collected", value: "KES 1.9M" },
                  { label: "Expenses", value: "KES 240K" },
                  { label: "Balance", value: "KES 380K" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1rem] bg-slate-50 p-2.5">
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-[0.9rem] font-semibold text-slate-950">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-3.5 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Recent activity</p>
                    <h3 className="mt-1 text-[0.92rem] font-semibold text-slate-950">Live updates</h3>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    3 min ago
                  </span>
                </div>

                <div className="mt-3 space-y-2.5">
                  {[
                    "Rent payment received from Block A",
                    "Maintenance request opened for Unit 14",
                    "Airbnb booking confirmed for this weekend",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-[0.95rem] border border-slate-200/80 bg-slate-50 px-3 py-2.5 text-[0.85rem] text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-3.5 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)]">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-500">Next action</p>
                <p className="mt-2 text-[0.92rem] font-semibold text-slate-950">12 maintenance items awaiting approval</p>
                <p className="mt-1 text-[0.78rem] leading-5 text-slate-500">
                  Stay ahead of maintenance, collections, and tenant communication with one secure platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileScreen() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-2.5 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)]">
      <div className="flex items-center justify-between px-2 pb-2.5">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-slate-500">Sorana</p>
          <p className="text-[0.85rem] font-semibold text-slate-950">Dashboard</p>
        </div>
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-sky-500" />
      </div>

      <div className="space-y-2.5 rounded-[1.15rem] bg-slate-50 p-2.5">
        <div className="rounded-[0.95rem] bg-white p-2.5">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Monthly Revenue</p>
          <p className="mt-1 text-[0.95rem] font-bold text-slate-950">KES 2.8M</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Occupancy", value: "124 / 136" },
            { label: "Rent", value: "95%" },
            { label: "Pending", value: "12" },
            { label: "Bookings", value: "38" },
          ].map((item) => (
            <div key={item.label} className="rounded-[0.85rem] bg-white p-2">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
              <p className="mt-1 text-[0.88rem] font-semibold text-slate-950">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="rounded-[0.95rem] border border-slate-200 bg-white p-2.5">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-slate-500">Today</p>
          <div className="mt-2 space-y-1.5">
            {[
              "12 maintenance items waiting",
              "8 payments received today",
              "3 Airbnb bookings confirmed",
            ].map((item) => (
              <div key={item} className="rounded-[0.8rem] bg-slate-50 px-2.5 py-2 text-[0.8rem] text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden pt-24 pb-14 md:pt-28 md:pb-16 lg:min-h-[88vh] lg:flex lg:items-center [font-family:var(--font-sans)] [&_*]:font-sans">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(66,199,117,0.14),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f6fbff_52%,#eff6ff_100%)]" />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/90 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_110%,rgba(255,255,255,0.8),transparent_35%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:gap-10">
            <motion.div className="max-w-[35rem]" variants={heroMotion} initial="hidden" animate="visible">
              <motion.div
                custom={0}
                variants={heroMotion}
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/90 px-3.5 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-sky-900 shadow-[0_16px_40px_-28px_rgba(30,58,138,0.3)] backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                Property Management Software
              </motion.div>

              <motion.h1
                custom={0.06}
                variants={heroMotion}
                className="mt-5 max-w-[34rem] text-[2rem] font-extrabold tracking-[-0.04em] leading-[1.05] text-slate-950 sm:text-[2.5rem] md:text-[2.6rem] lg:text-[3rem] xl:text-[3.5rem]"
              >
                Manage Every Property From One Intelligent Dashboard
              </motion.h1>

              <motion.p
                custom={0.12}
                variants={heroMotion}
                className="mt-5 max-w-[35rem] text-[0.9rem] leading-7 text-slate-600 sm:text-[0.95rem] md:text-[1rem]"
              >
                Manage properties, tenants, rent collection, Airbnb bookings, expenses, reports and payments from one
                secure cloud platform built for landlords, property managers and Airbnb hosts.
              </motion.p>

              <motion.div custom={0.18} variants={heroMotion} className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-[0.9rem] font-semibold text-primary-foreground shadow-[0_18px_40px_-26px_rgba(66,199,117,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover sm:w-auto md:h-12 md:px-7 md:text-[0.95rem]"
                >
                  Start Free
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-[0.9rem] font-semibold text-slate-900 shadow-[0_16px_34px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 sm:w-auto md:h-12 md:px-7 md:text-[0.95rem]"
                >
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div custom={0.24} variants={heroMotion} className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                {heroTrustIndicators.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2.5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.22)] backdrop-blur"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10">
                      <BadgeCheck className="h-4.5 w-4.5 text-primary" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">Trust</p>
                      <p className="text-[0.85rem] font-semibold text-slate-900">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div custom={0.3} variants={heroMotion} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
                <div className="flex items-center gap-2 text-[0.85rem] text-slate-600">
                  <span className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <span
                        key={item}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white bg-sky-100 text-[0.68rem] font-semibold text-sky-900 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </span>
                  <span className="font-medium">Trusted by growing property teams</span>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                  <span className="ml-1 text-[0.85rem] text-slate-600">Premium property experience</span>
                </div>
              </motion.div>
            </motion.div>

            <div className="relative mx-auto w-full max-w-[42rem] lg:-translate-y-6 lg:origin-top lg:scale-[0.88]">
              <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_30%_18%,rgba(66,199,117,0.16),transparent_28%),radial-gradient(circle_at_70%_22%,rgba(59,130,246,0.16),transparent_30%)] blur-3xl" />

              <div className="hidden lg:block">
                <MetricBubble label={floatingMetrics[0].label} value={floatingMetrics[0].value} className="absolute -left-6 top-8 z-20 w-[11.5rem]" delay={0.15} />
                <MetricBubble label={floatingMetrics[1].label} value={floatingMetrics[1].value} className="absolute -right-4 top-3 z-20 w-[12rem]" delay={0.2} />
                <MetricBubble label={floatingMetrics[2].label} value={floatingMetrics[2].value} className="absolute -left-10 bottom-24 z-20 w-[10.5rem]" delay={0.25} />
                <MetricBubble label={floatingMetrics[3].label} value={floatingMetrics[3].value} className="absolute -right-7 top-[44%] z-20 w-[10.75rem]" delay={0.3} />
                <MetricBubble label={floatingMetrics[4].label} value={floatingMetrics[4].value} className="absolute left-8 -bottom-6 z-20 w-[11rem]" delay={0.35} />
                <MetricBubble label={floatingMetrics[5].label} value={floatingMetrics[5].value} className="absolute right-10 -bottom-2 z-20 w-[12rem]" delay={0.4} />
              </div>

              <motion.div
                className="relative z-10 mx-auto w-full max-w-[44.5rem]"
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -3 }}
              >
                <div className="rounded-[2.35rem] bg-gradient-to-b from-slate-200 to-slate-400 p-2.5 pb-3 shadow-[0_32px_80px_-48px_rgba(15,23,42,0.35)]">
                  <div className="rounded-[1.95rem] bg-white/92 p-2.5 backdrop-blur">
                    <div className="mx-auto mb-2.5 h-1.5 w-24 rounded-full bg-slate-300" />
                    <DashboardScreen />
                  </div>
                  <div className="mx-auto mt-2.5 h-3 w-[40%] rounded-b-full bg-gradient-to-b from-slate-300 to-slate-500" />
                </div>
              </motion.div>

              <motion.div
                className="relative z-20 mx-auto mt-5 w-[16.75rem] sm:w-[17rem] lg:absolute lg:-right-3 lg:-bottom-5 lg:mt-0 lg:w-[17.5rem]"
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.72, delay: 0.16, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -3 }}
              >
                <div className="rounded-[2.15rem] bg-gradient-to-b from-slate-100 to-slate-300 p-1.5 shadow-[0_28px_70px_-46px_rgba(15,23,42,0.35)]">
                  <div className="rounded-[2rem] bg-white p-2">
                    <MobileScreen />
                  </div>
                </div>
              </motion.div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:hidden">
                {floatingMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2.5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.22)] backdrop-blur">
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
                    <p className="mt-1 text-[0.9rem] font-semibold text-slate-950">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
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

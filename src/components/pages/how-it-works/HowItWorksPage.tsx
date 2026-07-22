"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, CircleDollarSign, LayoutDashboard, MessageSquare, ShieldCheck, Smartphone, Users } from "lucide-react";
import heroImage from "../../../../public/property.jpg";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { useState } from "react";

type Step = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  outcomes: string[];
};

const steps: Step[] = [
  {
    icon: BadgeCheck,
    title: "Create your account",
    desc: "Sign up once and set up the properties, units, and roles you want to manage.",
    outcomes: ["Add properties and units", "Assign landlord, tenant, or staff roles", "Set up your portal access"],
  },
  {
    icon: LayoutDashboard,
    title: "Use one dashboard",
    desc: "Everything flows into one workspace so you can manage properties, tenants, payments, expenses, and messages.",
    outcomes: ["Track payments and balances", "Review expenses and reports", "Move between modules quickly"],
  },
  {
    icon: CircleDollarSign,
    title: "Collect and communicate",
    desc: "Handle manual and automated payments while sending real-time notifications through the channels you prefer.",
    outcomes: ["WhatsApp, SMS, and Email alerts", "Receipts and statements", "Role-based approvals"],
  },
  {
    icon: ShieldCheck,
    title: "Monitor performance",
    desc: "Use financial reports, vacancy tracking, and maintenance workflows to keep the portfolio healthy.",
    outcomes: ["Bank-style reporting", "Maintenance and vacancy tracking", "Marketplace and Airbnb support"],
  },
];

export function HowItWorksPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = steps[activeIndex];
  const Icon = current.icon;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image src={heroImage} alt="Sorana platform workflow" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/82 via-[#1E3A8A]/58 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-end">
            <Reveal>
              <p className="eyebrow text-white/80">How It Works</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-white">
                A simple workflow for landlords, tenants, and Airbnb owners.
              </h1>
              <p className="mt-5 text-sm md:text-base text-white/80 max-w-xl">
                Sorana gives every user role a clean way to act, while the dashboard keeps all operational and financial
                data connected.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
                >
                  Start the journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-full text-sm border border-white/30 backdrop-blur-sm transition"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-3xl p-6 border border-white/20 bg-black/25 backdrop-blur-xl shadow-[0_26px_70px_-50px_rgba(0,0,0,0.7)]">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">What you get</p>
                <div className="mt-4 space-y-3 text-sm text-white/90">
                  {[
                    "Role-based access for different users",
                    "Real-time updates and notifications",
                    "Payments, reports, and expenses in one place",
                    "Support for property, tenant, and Airbnb workflows",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Timeline</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Everything starts with the dashboard.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Select a step to see how Sorana moves from setup to day-to-day operations.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <Reveal>
              <div className="surface-card rounded-[2rem] p-4">
                {steps.map((step, index) => {
                  const StepIcon = step.icon;
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={step.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left rounded-2xl px-4 py-4 transition flex items-start gap-3 ${
                        isActive ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/60"
                      }`}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <span className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                        <StepIcon className="h-5 w-5 text-primary" />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold">{step.title}</span>
                          <span className="text-xs text-muted-foreground">Step {index + 1}</span>
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">{step.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-[2rem] p-7 md:p-9 border border-white/60">
                <div className="flex items-center gap-3">
                  <span className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected step</p>
                    <h3 className="text-xl font-semibold">{current.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{current.desc}</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {current.outcomes.map((outcome) => (
                    <div key={outcome} className="surface-card rounded-2xl p-4 text-sm text-muted-foreground">
                      {outcome}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-border/60 bg-muted/40 p-5">
                  <p className="text-sm font-semibold text-foreground">Want us to set this up for you?</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Start onboarding and we will help configure your properties, users, and workflow.
                  </p>
                  <a
                    href={site.portal.signUp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <Reveal>
              <p className="eyebrow">Standards</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Built for secure, mobile-friendly operations.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
                Sorana keeps your team aligned with secure access, simple workflows, and reporting that works on the
                move.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Secure and reliable access",
                  "Multi-user roles and permissions",
                  "Real-time updates and notifications",
                  "Mobile-friendly dashboard",
                ].map((item) => (
                  <div key={item} className="surface-card rounded-2xl p-4 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-[2rem] p-8 border border-white/60">
                <p className="eyebrow">Next Step</p>
                <h3 className="text-xl font-semibold mt-3">Ready to simplify ownership?</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Sorana helps you move from scattered spreadsheets to one secure property platform.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 border border-border/60 rounded-full px-6 py-3 text-sm font-semibold hover:bg-muted/60 transition"
                  >
                    View pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={site.portal.signUp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 py-3 text-sm font-semibold transition"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

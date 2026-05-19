"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, FileText, Shield, Wrench } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

const heroImage =
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=75";

type Step = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  outcomes: string[];
};

const steps: Step[] = [
  {
    icon: ClipboardCheck,
    title: "Discovery & Strategy",
    desc: "We assess your property, align expectations, and define the right management scope.",
    outcomes: ["Asset review & risk scan", "Scope alignment and SLA expectations", "Onboarding timeline and requirements"],
  },
  {
    icon: FileText,
    title: "Tenant Placement",
    desc: "We market, screen, and onboard quality tenants with clear lease controls.",
    outcomes: ["Screening & verification", "Lease preparation and signing", "Move‑in checklist and handover"],
  },
  {
    icon: Wrench,
    title: "Operational Oversight",
    desc: "Maintenance workflows, inspections, and vendor governance keep units performing.",
    outcomes: ["Vetted vendor coordination", "Inspection cadence", "Issue resolution and documentation"],
  },
  {
    icon: Shield,
    title: "Reporting & Compliance",
    desc: "You receive statements, insights, and documentation with full visibility.",
    outcomes: ["Monthly owner statements", "Compliance documentation tracking", "Performance recommendations"],
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
          <Image src={heroImage} alt="Property operations" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/80 via-[#1E3A8A]/55 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-end">
            <Reveal>
              <p className="eyebrow text-white/80">How It Works</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 text-white">
                A structured, premium process for hands‑off ownership.
              </h1>
              <p className="mt-5 text-sm md:text-base text-white/80 max-w-xl">
                Our workflow blends people, technology, and market expertise into a seamless management experience for Kenyan
                property owners.
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
              <div className="glass-panel rounded-3xl p-6 border border-white/60">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">What you get</p>
                <div className="mt-4 space-y-3 text-sm text-white/80">
                  {[
                    "Clear onboarding checklist",
                    "Dedicated account manager",
                    "Vendor governance and documentation",
                    "Monthly owner reporting",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Step‑by‑step, fully transparent.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Select a step to see the outcomes and what we deliver at that stage.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <Reveal>
              <div className="surface-card rounded-3xl p-4">
                {steps.map((s, i) => {
                  const StepIcon = s.icon;
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={s.title}
                      type="button"
                      onClick={() => setActiveIndex(i)}
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
                          <span className="text-sm font-semibold">{s.title}</span>
                          <span className="text-xs text-muted-foreground">Step {i + 1}</span>
                        </span>
                        <span className="mt-1 block text-sm text-muted-foreground">{s.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-3xl p-7 md:p-9 border border-white/60">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
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
                      {current.outcomes.map((o) => (
                        <div key={o} className="surface-card rounded-2xl p-4 text-sm text-muted-foreground">
                          {o}
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 rounded-2xl border border-border/60 bg-muted/40 p-5">
                      <p className="text-sm font-semibold text-foreground">Want us to handle this for you?</p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Start onboarding today and get a dedicated manager assigned to your property.
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
                  </motion.div>
                </AnimatePresence>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Built for premium service outcomes.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
                We pair hands-on oversight with digital reporting so you can track every decision, cost, and result with
                confidence.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Dedicated account manager",
                  "Monthly performance brief",
                  "Emergency response coverage",
                  "Tenant satisfaction tracking",
                ].map((item) => (
                  <div key={item} className="surface-card rounded-2xl p-4 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-3xl p-8 border border-white/60">
                <p className="eyebrow">Next Step</p>
                <h3 className="text-xl font-semibold mt-3">Ready to simplify ownership?</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Join property owners across Kenya who rely on Sorana for dependable collections, tenant care, and portfolio
                  performance.
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

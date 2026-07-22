"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

type Plan = {
  name: string;
  price: string;
  subtitle: string;
  featured?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "KSH 0",
    subtitle: "Core tools for getting started",
    features: ["Properties", "Units", "Tenants", "Manual payments", "Basic reports"],
  },
  {
    name: "Premium",
    price: "1% of monthly revenue",
    subtitle: "Automation for growing portfolios",
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
    subtitle: "End-to-end property management",
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

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-3.5 w-3.5 text-primary" />
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">Pricing</p>
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
                Straightforward pricing for every stage of growth.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground">
                Sorana keeps the model simple: start free, move into automation with Premium, or hand the work to our
                team with Full Management.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.portal.signUp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/60"
              >
                Talk to an advisor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/35">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Plans</p>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">Choose the plan that matches your workflow.</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={0.05 * index}>
                <div
                  className={`h-full rounded-[2rem] p-7 ${
                    plan.featured ? "glass-panel border border-white/60" : "surface-card"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{plan.name}</p>
                  <p className="mt-4 text-2xl sm:text-3xl font-semibold">{plan.price}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{plan.subtitle}</p>
                  <FeatureList features={plan.features} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-start">
              <div className="surface-card rounded-[2rem] p-7 md:p-8">
                <p className="eyebrow">What to expect</p>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold">The right tier for the right job.</h2>
                <p className="mt-4 text-sm md:text-base text-muted-foreground">
                  Free covers your essentials. Premium adds automation, marketplace reach, and Airbnb workflows. Full
                  Management is for owners who want Sorana to handle the portfolio on their behalf.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "No hidden fee structures",
                    "Clear role-based access",
                    "Reports built into every tier",
                    "Easy upgrade path as you grow",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-border/60 bg-background/60 px-4 py-4 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-[2rem] p-7 md:p-8 border border-white/60">
                <p className="eyebrow">Need help choosing?</p>
                <h3 className="mt-3 text-xl font-semibold">We can recommend the right setup.</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Tell us whether you manage long-term rentals, mixed portfolios, or Airbnb units, and we will point you
                  to the plan that fits best.
                </p>
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Landlords managing one or more properties",
                    "Teams that need multi-user access and reporting",
                    "Owners who want rent collection or full management",
                  ].map((item) => (
                    <div key={item} className="surface-card rounded-2xl px-4 py-4">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
                  >
                    Contact Us
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={site.portal.marketplace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/60"
                  >
                    Open Marketplace
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

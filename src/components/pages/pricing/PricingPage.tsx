"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Minus, Plus } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

type Plan = "rent_collection" | "full_management" | "custom";

const formatKsh = (value: number) =>
  `KSH ${Math.round(value).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

export function PricingPage() {
  const [expectedIncome, setExpectedIncome] = useState<number>(250000);
  const [plan, setPlan] = useState<Plan>("rent_collection");

  const estimate = useMemo(() => {
    const income = Math.max(0, expectedIncome || 0);
    const rentCollectionRate = 0.015;
    const fullMin = 0.05;
    const fullMax = 0.15;

    if (plan === "rent_collection") return { label: "Estimated fee", value: formatKsh(income * rentCollectionRate) };
    if (plan === "full_management")
      return { label: "Estimated range", value: `${formatKsh(income * fullMin)} – ${formatKsh(income * fullMax)}` };
    return { label: "Custom quote", value: "Talk to an advisor" };
  }, [expectedIncome, plan]);

  const tiers = [
    {
      key: "rent_collection" as const,
      name: "Rent Collection",
      price: "1.5%",
      note: "of expected monthly income",
      highlight: "Best for owners who want consistent collections and reporting.",
      bullets: ["Rent invoicing & follow‑ups", "Monthly owner statements", "Tenant payment tracking", "Owner support"],
    },
    {
      key: "full_management" as const,
      name: "Full Management",
      price: "5% – 15%",
      note: "after physical assessment",
      featured: true,
      highlight: "For hands‑off owners who want end‑to‑end operations handled professionally.",
      bullets: ["Tenant placement & onboarding", "Maintenance oversight & inspections", "Compliance documentation", "Performance reporting"],
    },
    {
      key: "custom" as const,
      name: "Portfolio / Commercial",
      price: "Custom",
      note: "tailored scope",
      highlight: "Multi‑unit and commercial management with tailored SLAs and reporting.",
      bullets: ["Custom vendor governance", "Portfolio reporting cadence", "Site visits & audits", "Dedicated escalation path"],
    },
  ];

  const featureRows = [
    { name: "Monthly owner statements", rent: true, full: true, custom: true },
    { name: "Rent invoicing & follow‑ups", rent: true, full: true, custom: true },
    { name: "Tenant placement & onboarding", rent: false, full: true, custom: true },
    { name: "Maintenance coordination", rent: false, full: true, custom: true },
    { name: "Routine inspections", rent: false, full: true, custom: true },
    { name: "Compliance documentation", rent: false, full: true, custom: true },
    { name: "Portfolio SLAs", rent: false, full: false, custom: true },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <Reveal>
              <p className="eyebrow">Pricing</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                Transparent fees—built for trust and performance.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
                Rent collection is charged at <strong className="text-foreground">1.5% of expected monthly income</strong>
                . Full management ranges from <strong className="text-foreground">5% – 15%</strong> after a physical
                property assessment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2"
                >
                  Get Started
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="border border-border/60 text-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2 hover:bg-muted/60 transition"
                >
                  Talk to an advisor
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-3xl p-6 border border-white/60">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">What’s included</p>
                <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-muted-foreground">
                  {[
                    "Monthly reporting and owner support",
                    "Transparent fees, no hidden charges",
                    "Vetted vendor workflows (Full Management)",
                    "Secure Owner Portal access",
                  ].map((item) => (
                    <div key={item} className="surface-card rounded-2xl p-4">
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
              <p className="eyebrow">Tiers</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Choose the level of support you want.</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {tiers.map((t, idx) => (
              <Reveal key={t.key} delay={0.05 * idx}>
                <div
                  className={`rounded-3xl p-7 border transition-all ${
                    t.featured ? "glass-panel border-white/60" : "surface-card border-border/60"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.name}</p>
                  <p className="mt-4 text-3xl font-semibold text-foreground">
                    {t.price} <span className="text-base font-normal text-muted-foreground">{t.note}</span>
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{t.highlight}</p>

                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3.5 w-3.5 text-primary" />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={() => setPlan(t.key)}
                      className={`w-full rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                        plan === t.key
                          ? "bg-primary text-primary-foreground"
                          : "border border-border/60 hover:bg-muted/60"
                      }`}
                    >
                      {plan === t.key ? "Selected" : "Select tier"}
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <Reveal>
              <div className="surface-card rounded-3xl p-7 md:p-9">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                  <div>
                    <p className="eyebrow">Estimator</p>
                    <h3 className="text-xl md:text-2xl font-semibold mt-3">Estimate your monthly management fee.</h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Use this quick estimator for planning. Final pricing may vary based on property condition, scope, and
                      compliance requirements.
                    </p>

                    <div className="mt-7">
                      <label className="block text-sm font-semibold mb-2">Expected Monthly Income (KSH)</label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setExpectedIncome((v) => Math.max(0, v - 5000))}
                          className="p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all"
                          aria-label="Decrease income"
                        >
                          <Minus className="w-5 h-5 text-primary" />
                        </button>
                        <input
                          type="number"
                          value={expectedIncome}
                          onChange={(e) => setExpectedIncome(Math.max(0, parseInt(e.target.value) || 0))}
                          min="0"
                          className="w-full text-center px-5 py-3.5 rounded-2xl bg-white/80 border border-border text-base font-semibold focus:outline-none focus:ring-4 focus:ring-primary/30"
                          placeholder="250000"
                        />
                        <button
                          type="button"
                          onClick={() => setExpectedIncome((v) => v + 5000)}
                          className="p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all"
                          aria-label="Increase income"
                        >
                          <Plus className="w-5 h-5 text-primary" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="glass-panel rounded-3xl p-7 border border-white/60">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{estimate.label}</p>
                    <p className="mt-4 text-3xl font-semibold text-primary">{estimate.value}</p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Full management rates are confirmed after a physical property assessment.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={site.portal.signUp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-5 rounded-full text-sm inline-flex items-center justify-center gap-2"
                      >
                        Get Started
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <Link
                        href="/contact-us"
                        className="border border-border/60 text-foreground font-semibold py-3 px-5 rounded-full text-sm inline-flex items-center justify-center gap-2 hover:bg-muted/60 transition"
                      >
                        Ask a question
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Comparison</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">What’s included in each tier.</h2>
            </div>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border/60 bg-background">
            <div className="grid grid-cols-4 gap-0 bg-muted/40 text-sm font-semibold">
              <div className="p-5">Feature</div>
              <div className="p-5 text-center">Rent Collection</div>
              <div className="p-5 text-center">Full Management</div>
              <div className="p-5 text-center">Portfolio / Commercial</div>
            </div>
            {featureRows.map((row) => (
              <div key={row.name} className="grid grid-cols-4 gap-0 border-t border-border/60 text-sm">
                <div className="p-5 text-muted-foreground">{row.name}</div>
                <div className="p-5 flex justify-center">{row.rent ? <Check className="h-5 w-5 text-primary" /> : "—"}</div>
                <div className="p-5 flex justify-center">{row.full ? <Check className="h-5 w-5 text-primary" /> : "—"}</div>
                <div className="p-5 flex justify-center">
                  {row.custom ? <Check className="h-5 w-5 text-primary" /> : "—"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


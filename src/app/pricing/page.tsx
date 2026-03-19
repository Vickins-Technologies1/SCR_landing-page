"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";

export default function Pricing() {
  const [expectedIncome, setExpectedIncome] = useState<number>(0);
  const [managementType, setManagementType] = useState<"RentCollection" | "FullManagement">("RentCollection");
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);

  const rentCollectionRate = 0.015;
  const fullManagementMin = 0.05;
  const fullManagementMax = 0.15;

  const estimatedRentCollectionFee = expectedIncome * rentCollectionRate;
  const estimatedFullMin = expectedIncome * fullManagementMin;
  const estimatedFullMax = expectedIncome * fullManagementMax;

  const handleGetStarted = () => {
    window.location.href = "https://app.smartchoicerentalmanagement.com/sign-up";
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div data-reveal="left">
              <p className="eyebrow">Pricing</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                Transparent fees aligned with your expected income.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
                Rent collection is charged at <strong className="text-foreground">1.5% of expected monthly income</strong>. Full management ranges from <strong className="text-foreground">5% - 15%</strong> after a physical property assessment.
              </p>
              <button
                onClick={handleGetStarted}
                className="mt-8 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
              >
                Get started free
              </button>
            </div>
            <div data-reveal="right" className="glass-panel rounded-3xl p-6 border border-white/60">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Pricing Snapshot</p>
              <div className="mt-4 grid grid-cols-1 gap-4 text-sm text-muted-foreground">
                <div className="surface-card rounded-2xl p-4">
                  Rent Collection: 1.5% of expected monthly income
                </div>
                <div className="surface-card rounded-2xl p-4">
                  Full Management: 5% - 15% after physical assessment
                </div>
                <div className="surface-card rounded-2xl p-4">Monthly owner reporting included</div>
                <div className="surface-card rounded-2xl p-4">Transparent, no hidden charges</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center" data-reveal>
            <p className="eyebrow">Estimator</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">
              Estimate your monthly management fee.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8">
            <div className="surface-card rounded-3xl p-7 md:p-9" data-reveal="left">
              <div className="mb-7">
                <label className="block text-sm font-semibold mb-2">Expected Monthly Income (KSH)</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setExpectedIncome((value) => Math.max(0, value - 5000))}
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
                    onClick={() => setExpectedIncome((value) => value + 5000)}
                    className="p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all"
                    aria-label="Increase income"
                  >
                    <Plus className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>

              <div className="mb-7">
                <label className="block text-sm font-semibold mb-3">Management Plan</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setManagementType("RentCollection")}
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                      managementType === "RentCollection"
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border/50 bg-white/70 hover:border-primary/50"
                    }`}
                  >
                    <p className="text-sm font-semibold">Rent Collection</p>
                    <p className="text-xs text-muted-foreground mt-1">1.5% of expected income</p>
                  </button>
                  <button
                    onClick={() => setManagementType("FullManagement")}
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                      managementType === "FullManagement"
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border/50 bg-white/70 hover:border-primary/50"
                    }`}
                  >
                    <p className="text-sm font-semibold">Full Management</p>
                    <p className="text-xs text-muted-foreground mt-1">5% - 15% after assessment</p>
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/15 to-primary/5 rounded-2xl p-6 text-center border border-primary/20">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Estimated fee</p>
                {expectedIncome > 0 ? (
                  <p className="mt-3 text-3xl font-semibold text-primary">
                    {managementType === "RentCollection"
                      ? `KSH ${estimatedRentCollectionFee.toLocaleString()}`
                      : `KSH ${estimatedFullMin.toLocaleString()} - ${estimatedFullMax.toLocaleString()}`}
                    <span className="text-base font-normal text-foreground/80"> / month</span>
                  </p>
                ) : (
                  <p className="mt-3 text-xl font-semibold text-foreground">Enter expected income to calculate</p>
                )}
                <p className="mt-3 text-xs text-muted-foreground">
                  Full management rates are confirmed after a physical property assessment.
                </p>
                <button
                  onClick={handleGetStarted}
                  className="mt-5 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
                >
                  Get started now
                </button>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-7 md:p-9 border border-white/60" data-reveal="right">
              <p className="eyebrow">Plan Highlights</p>
              <h3 className="text-xl font-semibold mt-3">Every plan includes premium reporting and support.</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Choose rent collection for streamlined cash flow management, or full management for end-to-end operational oversight.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Monthly owner statements",
                  "Rent reminders & collections",
                  "Maintenance coordination",
                  "Compliance documentation",
                ].map((item) => (
                  <div key={item} className="surface-card rounded-2xl p-4 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <button
            onClick={() => setIsComparisonOpen(!isComparisonOpen)}
            className="w-full flex items-center justify-between surface-card p-5 rounded-2xl transition-all duration-500 border border-border/50"
            aria-expanded={isComparisonOpen}
          >
            <h3 className="text-lg font-semibold">Pricing Details</h3>
            {isComparisonOpen ? <ChevronUp className="w-7 h-7 text-primary" /> : <ChevronDown className="w-7 h-7 text-primary" />}
          </button>

          {isComparisonOpen && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="surface-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Rent Collection</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Charged at <strong className="text-foreground">1.5% of expected monthly income</strong>. Ideal for owners who want professional rent handling and reporting without full operational oversight.
                </p>
              </div>
              <div className="surface-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Full Management</p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Ranges from <strong className="text-foreground">5% - 15%</strong> after a physical property assessment, covering tenant management, maintenance, inspections, and performance reporting.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

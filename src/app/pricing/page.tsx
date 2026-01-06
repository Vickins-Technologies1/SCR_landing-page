"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";
import { getManagementFee, UnitType } from "@/lib/pricingUtils";
import Navbar from "../components/Navbar";

export default function Pricing() {
  const [selectedUnitType, setSelectedUnitType] = useState<string>(UnitType[0].type);
  const [quantity, setQuantity] = useState<number>(1);
  const [managementType, setManagementType] = useState<"RentCollection" | "FullManagement">("RentCollection");
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);

  const fee = getManagementFee({ type: selectedUnitType, managementType, quantity });

  const handleGetStarted = () => {
    window.location.href = "https://app.smartchoicerentalmanagement.com/sign-up";
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
     <Navbar />
      {/* Hero Section - Consistent with other pages */}
      <section className="relative h-[70vh] min-h-[500px] md:h-[80vh] flex items-center justify-center overflow-hidden bg-hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2138&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-50 max-w-3xl mx-auto mb-10 opacity-95 leading-relaxed">
            Simple, fair, and scalable fees with no hidden costs — designed for property owners in Kenya.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
          >
            Get Started Free
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Calculate Your Monthly Fee
          </h2>

          <div className="max-w-3xl mx-auto bg-card/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Unit Type */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-3">Unit Type</label>
                <select
                  value={selectedUnitType}
                  onChange={(e) => setSelectedUnitType(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-lg transition-all"
                >
                  {UnitType.map((unit) => (
                    <option key={unit.type} value={unit.type}>
                      {unit.type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Units */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-3">Number of Units</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    className="p-4 rounded-xl bg-primary/10 hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-6 h-6 text-primary" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setQuantity(val >= 1 ? val : 1);
                    }}
                    min="1"
                    className="w-full max-w-32 text-center px-6 py-4 rounded-xl bg-background/70 border border-border text-xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/30"
                  />
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-6 h-6 text-primary" />
                  </button>
                </div>
              </div>

              {/* Management Type */}
              <div className="mb-10">
                <label className="block text-lg font-semibold mb-4">Management Plan</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setManagementType("RentCollection")}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      managementType === "RentCollection"
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border/50 bg-card hover:border-primary/50"
                    }`}
                  >
                    <p className="text-xl font-bold">Rent Collection</p>
                    <p className="text-muted-foreground mt-1">Basic rent handling</p>
                  </button>
                  <button
                    onClick={() => setManagementType("FullManagement")}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      managementType === "FullManagement"
                        ? "border-primary bg-primary/10 shadow-lg"
                        : "border-border/50 bg-card hover:border-primary/50"
                    }`}
                  >
                    <p className="text-xl font-bold">Full Management</p>
                    <p className="text-muted-foreground mt-1">Complete hands-off service</p>
                  </button>
                </div>
              </div>

              {/* Fee Display */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-8 text-center border border-primary/30">
                <p className="text-lg text-muted-foreground mb-2">Your Estimated Monthly Fee</p>
                <p className="text-4xl md:text-5xl font-extrabold text-primary">
                  {typeof fee === "number" ? `KSH ${fee.toLocaleString()}` : fee}
                  <span className="text-xl font-normal text-foreground/80"> / month</span>
                </p>
                <button
                  onClick={handleGetStarted}
                  className="mt-8 bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Table - Collapsible */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <button
            onClick={() => setIsComparisonOpen(!isComparisonOpen)}
            className="w-full max-w-4xl mx-auto flex items-center justify-between bg-card/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-border/50"
            aria-expanded={isComparisonOpen}
          >
            <h3 className="text-2xl md:text-3xl font-bold">Detailed Pricing Comparison</h3>
            {isComparisonOpen ? (
              <ChevronUp className="w-8 h-8 text-primary" />
            ) : (
              <ChevronDown className="w-8 h-8 text-primary" />
            )}
          </button>

          {isComparisonOpen && (
            <div className="mt-8 max-w-5xl mx-auto overflow-x-auto rounded-2xl shadow-2xl border border-border/50">
              <table className="w-full text-left bg-card">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="px-6 py-5 text-lg font-bold">Unit Type</th>
                    <th className="px-6 py-5 text-lg font-bold text-center">Rent Collection<br />(5–20 units)</th>
                    <th className="px-6 py-5 text-lg font-bold text-center">Rent Collection<br />(21–50 units)</th>
                    <th className="px-6 py-5 text-lg font-bold text-center">Rent Collection<br />(50–100 units)</th>
                    <th className="px-6 py-5 text-lg font-bold text-center">Full Management</th>
                  </tr>
                </thead>
                <tbody>
                  {UnitType.map((unit) => (
                    <tr key={unit.type} className="border-t border-border/30 hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-5 font-semibold">{unit.type}</td>
                      <td className="px-6 py-5 text-center">
                        {unit.pricing.RentCollection[0]?.fee
                          ? typeof unit.pricing.RentCollection[0].fee === "number"
                            ? `KSH ${unit.pricing.RentCollection[0].fee.toLocaleString()}`
                            : unit.pricing.RentCollection[0].fee
                          : "N/A"}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {unit.pricing.RentCollection[1]?.fee
                          ? typeof unit.pricing.RentCollection[1].fee === "number"
                            ? `KSH ${unit.pricing.RentCollection[1].fee.toLocaleString()}`
                            : unit.pricing.RentCollection[1].fee
                          : "N/A"}
                      </td>
                      <td className="px-6 py-5 text-center">
                        {unit.pricing.RentCollection[2]?.fee
                          ? typeof unit.pricing.RentCollection[2].fee === "number"
                            ? `KSH ${unit.pricing.RentCollection[2].fee.toLocaleString()}`
                            : unit.pricing.RentCollection[2].fee
                          : "Contact Us"}
                      </td>
                      <td className="px-6 py-5 text-center font-semibold text-primary">
                        {unit.pricing.FullManagement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
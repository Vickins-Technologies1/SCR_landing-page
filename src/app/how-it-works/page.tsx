"use client";

import React from "react";
import { CheckCircle, FileText, Wrench, Shield } from "lucide-react";
import Navbar from "../components/Navbar";

export default function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Initial Consultation",
      desc: "We begin with a free expert assessment of your property and goals, tailored to the Kenyan market.",
    },
    {
      icon: FileText,
      title: "Tenant Screening & Leasing",
      desc: "Thorough background checks, credit verification, and professional lease drafting for secure tenancy.",
    },
    {
      icon: Wrench,
      title: "Proactive Maintenance",
      desc: "24/7 emergency response, scheduled inspections, and trusted local vendors to keep your property in top condition.",
    },
    {
      icon: Shield,
      title: "Ongoing Support & Reporting",
      desc: "Monthly financial statements, rent collection, legal compliance, and dedicated owner support for complete peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
     <Navbar />
      {/* Hero Section - Matches Home & About */}
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
              How It Works
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-50 max-w-3xl mx-auto opacity-95 leading-relaxed">
            A simple, transparent, and tech-powered process designed for stress-free property management in Kenya.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Our Proven Process
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 border border-border/50 text-center"
                  >
                    {/* Step Number Circle */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-xl">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex p-5 bg-primary/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {step.desc}
                    </p>

                    {/* Connector Line (hidden on mobile, visible on lg+) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-primary/30 -translate-y-1/2" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile-friendly connector alternative */}
            <div className="lg:hidden flex justify-center mt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-primary/30" />
                <div className="w-4 h-4 bg-primary rounded-full" />
                <div className="w-16 h-0.5 bg-primary/30" />
                <div className="w-4 h-4 bg-primary rounded-full" />
                <div className="w-16 h-0.5 bg-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Simplify Your Property Management?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Join hundreds of property owners across Kenya who trust Smart Choice for reliable, hands-off rental income.
          </p>
          <a
            href="https://app.soranapropertymanagers.com/sign-up"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Today
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
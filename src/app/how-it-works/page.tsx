import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, Shield, Wrench } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Discovery & Strategy",
      desc: "We assess your property, map owner goals, and define the right management plan for your assets.",
    },
    {
      icon: FileText,
      title: "Tenant Placement",
      desc: "Rigorous screening, lease preparation, and smooth onboarding aligned with Kenyan rental standards.",
    },
    {
      icon: Wrench,
      title: "Operational Oversight",
      desc: "Maintenance workflows, inspections, and vendor coordination keep every unit performing.",
    },
    {
      icon: Shield,
      title: "Reporting & Compliance",
      desc: "Monthly statements, compliance tracking, and dedicated owner support keep you informed.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-12 items-center">
            <div data-reveal="left">
              <p className="eyebrow">How It Works</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                A structured, premium process for hands-off ownership.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
                Our workflow blends people, technology, and market expertise into a seamless management experience for Kenyan property owners.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
              >
                Start the journey
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div data-reveal="right" className="surface-card rounded-3xl overflow-hidden">
              <div className="relative h-72 md:h-96">
                <Image src="/property.jpg" alt="Property management" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center" data-reveal>
            <p className="eyebrow">Process</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Four clear stages, fully transparent.</h2>
          </div>

          <ol className="mt-12 space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} data-reveal style={{ "--reveal-delay": `${80 + index * 70}ms` } as CSSProperties}>
                  <div className="relative overflow-visible">
                    <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold shadow-lg">
                      {index + 1}
                    </div>
                    <div className="surface-card rounded-3xl p-6 pt-10">
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </span>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <div data-reveal="left">
              <p className="eyebrow">Standards</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Built for premium service outcomes.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                We pair hands-on oversight with digital reporting so you can track every decision, cost, and result with confidence.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Dedicated account manager", "Monthly performance brief", "Emergency response coverage", "Tenant satisfaction tracking"].map((item) => (
                  <div key={item} className="surface-card rounded-2xl p-4 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal="right" className="glass-panel rounded-3xl p-8 border border-white/60">
              <h3 className="text-xl font-semibold">Ready to simplify ownership?</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Join property owners across Kenya who rely on Sorana for dependable rent collection, tenant care, and portfolio performance.
              </p>
              <a
                href="https://app.soranapropertymanagers.com/sign-up"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
              >
                Get started today
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

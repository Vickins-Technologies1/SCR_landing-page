"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CheckCircle,
  ClipboardCheck,
  CreditCard,
  FileText,
  LineChart,
  Mail,
  Monitor,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";

const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let frame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = progress * progress * (3 - 2 * progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return count;
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setEmail("");
    setIsSubmitting(false);
    alert("Thank you for subscribing! Stay tuned for property insights.");
  };

  const rentCollected = useCounter(isStatsVisible ? 1000000 : 0, 2500);
  const propertiesManaged = useCounter(isStatsVisible ? 25 : 0, 2200);
  const happyClients = useCounter(isStatsVisible ? 20 : 0, 2000);
  const onTimePayments = useCounter(isStatsVisible ? 99 : 0, 1800);

  const stats = [
    { label: "Total Rent Collected", value: rentCollected, suffix: "+ KSH" },
    { label: "Properties Managed", value: propertiesManaged, suffix: "+" },
    { label: "Happy Clients", value: happyClients, suffix: "+" },
    { label: "On-Time Payments", value: onTimePayments, suffix: "%" },
  ];

  const bento = [
    {
      title: "Owner-First Strategy",
      desc: "Tailored pricing and occupancy planning that keeps your yield ahead of market shifts.",
      icon: BarChart3,
      span: "lg:col-span-3",
    },
    {
      title: "Premium Tenant Experience",
      desc: "Fast onboarding, transparent communication, and digital support channels that retain quality tenants.",
      icon: Users,
      span: "lg:col-span-3",
    },
    {
      title: "Maintenance Governance",
      desc: "Vetted vendors, scheduled inspections, and cost control on every work order.",
      icon: Wrench,
      span: "lg:col-span-2",
    },
    {
      title: "Compliance Assurance",
      desc: "Lease discipline, documentation, and audit-ready reporting for peace of mind.",
      icon: ShieldCheck,
      span: "lg:col-span-2",
    },
    {
      title: "Payments & Disbursements",
      desc: "Automated collections, reconciled payouts, and transparent owner statements.",
      icon: CreditCard,
      span: "lg:col-span-2",
    },
    {
      title: "Smart Portfolio Control",
      desc: "Unified dashboard with vacancy tracking, inspection logs, and financial snapshots.",
      icon: Monitor,
      span: "lg:col-span-4",
    },
    {
      title: "Localized Expertise",
      desc: "Kenya-focused market intelligence paired with modern service standards.",
      icon: Building2,
      span: "lg:col-span-2",
    },
  ];

  const testimonials = [
    {
      quote: "Smart Choice transformed our property management with their seamless processes and exceptional support.",
      author: "Jane Doe",
      role: "Property Owner, Seattle",
    },
    {
      quote: "The tenant screening and communication are outstanding. Renting has never been easier.",
      author: "John Smith",
      role: "Tenant, Austin",
    },
    {
      quote: "Professional, transparent, and tech-savvy. They truly care about maximizing returns.",
      author: "Emily Brown",
      role: "Multi-Property Landlord",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden pt-28 pb-20 bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/75 to-foreground/95" />
        <div className="absolute -top-32 right-10 h-[420px] w-[420px] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-[320px] w-[320px] rounded-full bg-primary/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div data-reveal="left" style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/80">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Premium Property Operations
              </div>

              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                The sleek, transparent way to manage rental assets in Kenya.
              </h1>
              <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-xl">
                Sorana Property Managers delivers owner-focused performance, tenant care, and operational clarity through a modern, concierge-level approach.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.soranapropertymanagers.com/sign-up"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3.5 px-6 rounded-full text-sm md:text-base shadow-[0_20px_40px_-24px_rgba(66,199,117,0.7)] transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                >
                  Start a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/how-it-works"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-full text-sm md:text-base border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                >
                  Explore the Process
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-4 text-xs sm:text-sm text-white/80">
                {["Owner dashboard", "Verified tenant screening", "Monthly performance insights"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div data-reveal="right" style={{ "--reveal-delay": "140ms" } as React.CSSProperties} className="space-y-6">
              <div className="surface-card rounded-3xl p-6 text-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Owner Portal</p>
                    <h3 className="text-xl font-semibold">Live Portfolio Pulse</h3>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Occupancy rate</span>
                    <span className="font-semibold text-primary">96%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Maintenance tickets</span>
                    <span className="font-semibold text-primary">Tracked</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Monthly statements</span>
                    <span className="font-semibold text-primary">Automated</span>
                  </div>
                </div>
              </div>

              <div className="surface-card rounded-3xl p-6 border border-white/30 bg-white/90">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Signature Care</p>
                    <h4 className="text-lg font-semibold">Concierge Workflow</h4>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground">
                  {["Digital inspections", "Vendor governance", "Owner approvals", "Rent compliance"].map((item) => (
                    <div key={item} className="rounded-2xl border border-border/60 bg-white/70 px-3 py-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="surface-card rounded-2xl px-4 py-3 flex items-center gap-3">
                  <Star className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Client rating</p>
                    <p className="text-sm font-semibold">4.9 average</p>
                  </div>
                </div>
                <div className="surface-card rounded-2xl px-4 py-3 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Reports</p>
                    <p className="text-sm font-semibold">Monthly + on demand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" data-reveal>
            <div>
              <p className="eyebrow">Signature Advantage</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">A premium operating system for property owners.</h2>
              <p className="text-sm md:text-base text-muted-foreground mt-4 max-w-2xl">
                We blend market intelligence, attentive service, and modern automation so you stay informed and profitable without daily management.
              </p>
            </div>
            <a
              href="https://app.soranapropertymanagers.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Visit the owner portal
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {bento.map(({ title, desc, icon: Icon, span }, index) => (
              <div
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${80 + index * 60}ms` } as React.CSSProperties}
                className={`surface-card rounded-3xl p-6 ${span}`}
              >
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats-section" className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`surface-card rounded-3xl p-6 text-center transition-all duration-1000 ${
                  isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold text-foreground">
                  {stat.value.toLocaleString()}
                  <span className="text-lg text-primary ml-1">{stat.suffix}</span>
                </p>
                <div className="mt-5 h-1 w-full rounded-full bg-primary/10">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, (index + 1) * 22)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
            <div data-reveal="left">
              <p className="eyebrow">Service Blueprint</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Operations built for clarity and control.</h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                Every stage is structured, transparent, and driven by KPIs. Owners stay informed while tenants receive responsive, premium care.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { title: "Onboard & position", desc: "Market analysis, pricing strategy, and property readiness." },
                  { title: "Screen & secure", desc: "Rigorous tenant vetting with documented verification." },
                  { title: "Operate & optimize", desc: "Maintenance, reporting, and performance reviews." },
                ].map((item) => (
                  <div key={item.title} className="surface-card rounded-2xl p-4 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal="right" className="relative">
              <div className="surface-card rounded-3xl overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image src="/property.jpg" alt="Managed property" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Reporting</p>
                      <h3 className="text-lg font-semibold">Owner Intelligence Brief</h3>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <LineChart className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Monthly reports unify rent performance, maintenance history, and occupancy trends in a single concise view.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center" data-reveal>
            <p className="eyebrow">Client Stories</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Results that feel effortless.</h2>
          </div>

          <div className="mt-10 surface-card rounded-3xl border border-border/60 overflow-hidden" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <div className="p-8 md:p-12 text-center relative min-h-72">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ${
                    i === currentTestimonial ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-base md:text-lg lg:text-xl italic font-medium leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </p>
                  <div className="mt-8">
                    <p className="text-base md:text-lg font-semibold text-primary">{t.author}</p>
                    <p className="text-muted-foreground text-xs md:text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-3 pb-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? "bg-primary w-10" : "bg-muted-foreground/30 w-2 hover:w-6"
                  }`}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/60" data-reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
              <div>
                <p className="eyebrow">Owner Intelligence</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-3">Stay ahead with curated market insights.</h2>
                <p className="text-sm md:text-base text-muted-foreground mt-4">
                  Receive periodic updates on rental trends, compliance changes, and strategies to maximize performance.
                </p>
              </div>
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3.5 rounded-full bg-white/80 border border-border/60 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-hover disabled:opacity-70 text-primary-foreground font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                  {!isSubmitting && <Mail className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

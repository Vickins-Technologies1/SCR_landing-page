"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Shield,
  Users,
  Mail,
  FileText,
  Wrench,
  Scale,
  BarChart3,
  CheckCircle,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testimonials = [
    { quote: "Smart Choice transformed our property management with their seamless processes and exceptional support.", author: "Jane Doe", role: "Property Owner, Seattle" },
    { quote: "The tenant screening and communication are outstanding. Renting has never been easier.", author: "John Smith", role: "Tenant, Austin" },
    { quote: "Professional, transparent, and tech-savvy. They truly care about maximizing returns.", author: "Emily Brown", role: "Multi-Property Landlord" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
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

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero Section - Responsive height, mobile-optimized */}
      <section className="relative h-[85vh] min-h-[600px] md:h-screen flex items-center justify-center overflow-hidden bg-hero">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2138&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent">
              Smart Property
            </span>
            <br className="sm:hidden" />
            <span className="text-white"> Management</span>
            <br />
            <span className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl block mt-2">
              Made Simple
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-50 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed opacity-95">
            Professional, transparent, tech-powered rental management that maximizes returns and minimizes stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch max-w-md mx-auto">
            <button
              onClick={() => router.push("https://app.smartchoicerentalmanagement.com/sign-up")}
              className="group relative overflow-hidden bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-4 px-8 rounded-full text-base md:text-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              onClick={() => router.push("/how-it-works")}
              className="bg-transparent hover:bg-white/10 text-white font-medium py-4 px-8 rounded-full text-base md:text-lg border border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              See How It Works
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Compact & responsive grid */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted expertise with innovation and full transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Local Market Mastery", desc: "Optimal pricing and occupancy with deep US market knowledge." },
              { title: "Full Transparency", desc: "Real-time dashboards, clear fees, zero hidden costs." },
              { title: "Advanced Technology", desc: "Modern portal for payments, maintenance, and reports." },
              { title: "Dedicated Support", desc: "Personal manager + 24/7 emergency coordination." },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-card p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">{title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Responsive 1-2-3 column layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Comprehensive Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful property ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Full Property Management", desc: "End-to-end oversight from marketing to move-out." },
              { icon: Users, title: "Premium Tenant Screening", desc: "Thorough credit, background, and history checks." },
              { icon: BarChart3, title: "Financial Excellence", desc: "Timely rent collection and detailed reporting." },
              { icon: Wrench, title: "Proactive Maintenance", desc: "Fast response with licensed, cost-effective vendors." },
              { icon: FileText, title: "Lease Administration", desc: "Custom leases, renewals, and compliance." },
              { icon: Scale, title: "Legal Protection", desc: "Full compliance with all federal and local laws." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="text-center bg-card/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-border/30"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Compact mobile-friendly */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Client Success Stories
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border/50">
              <div className="p-8 md:p-12 lg:p-16 text-center min-h-72 flex flex-col justify-center">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-1000 ${
                      i === currentTestimonial
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 absolute inset-0"
                    }`}
                  >
                    <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-medium leading-relaxed">
                      "{t.quote}"
                    </blockquote>
                    <footer className="mt-8 md:mt-10">
                      <p className="text-lg md:text-xl font-bold text-primary">{t.author}</p>
                      <p className="text-sm md:text-base text-muted-foreground">{t.role}</p>
                    </footer>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-3 pb-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === currentTestimonial
                        ? "bg-primary w-12"
                        : "bg-muted-foreground/40 w-2 hover:w-6"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Compact & mobile-optimized */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-black/95 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Stay Ahead
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-blue-100 opacity-90">
            Get market insights and expert tips delivered to your inbox.
          </p>

          <form onSubmit={handleNewsletterSignup} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full text-foreground bg-white/10 backdrop-blur-md placeholder:text-white/50 text-base focus:outline-none focus:ring-2 focus:ring-primary/50 border border-white/20"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-hover disabled:opacity-80 text-primary-foreground font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
              {!isSubmitting && <Mail className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
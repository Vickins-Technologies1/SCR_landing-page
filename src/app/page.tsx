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
  DollarSign,
  House,
  Award,
} from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Smooth counter hook
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
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  // Intersection Observer for stats
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

  // Auto-rotate testimonials
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

  // Counters
  const rentCollected = useCounter(740000, 2500);
  const propertiesManaged = useCounter(25, 2200);
  const happyClients = useCounter(20, 2000);
  const onTimePayments = useCounter(99, 1800);

  const HomeIcon = House;

  const stats = [
    { icon: DollarSign, label: "Total Rent Collected", value: rentCollected, suffix: "+ KSH", color: "from-cyan-400 to-cyan-300" },
    { icon: HomeIcon, label: "Properties Managed", value: propertiesManaged, suffix: "+", color: "from-emerald-400 to-teal-400" },
    { icon: Users, label: "Happy Clients", value: happyClients, suffix: "+", color: "from-blue-500 to-indigo-400" },
    { icon: Award, label: "On-Time Payments", value: onTimePayments, suffix: "%", color: "from-purple-500 to-pink-400" },
  ];

  const testimonials = [
    { quote: "Smart Choice transformed our property management with their seamless processes and exceptional support.", author: "Jane Doe", role: "Property Owner, Seattle" },
    { quote: "The tenant screening and communication are outstanding. Renting has never been easier.", author: "John Smith", role: "Tenant, Austin" },
    { quote: "Professional, transparent, and tech-savvy. They truly care about maximizing returns.", author: "Emily Brown", role: "Multi-Property Landlord" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-200 bg-clip-text text-transparent">
              Effortless Property
            </span>
            <br className="sm:hidden" />
            <span className="text-white"> Management</span>
            <br />
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-10 opacity-95">
            Professional, transparent, tech-powered rental management that maximizes returns and minimizes stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            {/* Primary Button - White text on colored background */}
            <button
              onClick={() => window.open("https://app.smartchoicerentalmanagement.com/sign-up", "_blank")}
              className="group bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-full text-base md:text-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Secondary Button - White text with transparent background */}
            <button
              onClick={() => router.push("/how-it-works")}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full text-base md:text-lg border border-white/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              See How It Works
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`text-center transition-all duration-1000 delay-${i * 100} ${isStatsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <div className="relative group">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${stat.color} opacity-30 blur-xl group-hover:opacity-50 transition duration-700 rounded-3xl`}
                    />
                    <div className="relative bg-card/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg mb-5`}>
                        <Icon className="w-8 h-8 md:w-10 md:h-10" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                        {stat.value.toLocaleString()}
                        <span className="text-xl md:text-2xl text-primary ml-1">{stat.suffix}</span>
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Trusted expertise with innovation and full transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Local Market Mastery", desc: "Optimal pricing and occupancy with deep market knowledge." },
              { title: "Full Transparency", desc: "Real-time dashboards, clear fees, zero hidden costs." },
              { title: "Advanced Technology", desc: "Modern portal for payments, maintenance, and reports." },
              { title: "Dedicated Support", desc: "Personal manager + 24/7 emergency coordination." },
            ].map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border/30 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm md:text-base text-center leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Comprehensive Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
              Everything you need for successful property ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/30 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            Client Success Stories
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-xl border border-border/50 overflow-hidden">
              <div className="p-8 md:p-12 lg:p-16 text-center relative min-h-80">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ${i === currentTestimonial ? "opacity-100" : "opacity-0"
                      }`}
                  >
                    <blockquote className="text-lg md:text-xl lg:text-2xl italic font-medium leading-relaxed text-foreground/90">
                      "{t.quote}"
                    </blockquote>
                    <footer className="mt-10">
                      <p className="text-lg md:text-xl font-bold text-primary">{t.author}</p>
                      <p className="text-muted-foreground text-sm md:text-base">{t.role}</p>
                    </footer>
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-3 pb-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? "bg-primary w-10" : "bg-muted-foreground/30 w-2 hover:w-6"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Stay Ahead</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Get market insights and expert tips delivered to your inbox.
          </p>

          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full bg-card/70 border border-border/50 backdrop-blur-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 disabled:opacity-70 text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
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
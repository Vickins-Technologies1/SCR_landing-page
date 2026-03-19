"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Thank you for your message! We will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div data-reveal="left">
              <p className="eyebrow">Contact</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                A dedicated team ready to support your portfolio.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
                Speak with a Sorana advisor to explore management options, pricing, or property onboarding. We respond quickly and transparently.
              </p>
            </div>
            <div data-reveal="right" className="glass-panel rounded-3xl p-6 border border-white/60">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Quick Contacts</p>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:soranapropertymanagers@gmail.com" className="hover:text-primary transition-colors break-all">
                      soranapropertymanagers@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p>+254 117 649 850</p>
                    <p>+254 702 036 837</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Office</p>
                    <p>Kerugoya, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border/60 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Office Hours</p>
                <p className="mt-2">Monday - Friday: 8:00 AM - 5:00 PM EAT</p>
                <p>Saturday: 9:00 AM - 1:00 PM EAT</p>
                <p className="text-primary font-medium">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-10">
            <div className="surface-card rounded-3xl p-7 md:p-9" data-reveal="left">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                    className="w-full px-5 py-3.5 rounded-2xl bg-white/80 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-sm resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover disabled:opacity-80 disabled:cursor-not-allowed text-primary-foreground font-semibold py-4 px-8 rounded-full text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="glass-panel rounded-3xl p-7 md:p-9 border border-white/60" data-reveal="right">
              <h3 className="text-xl font-semibold">What you can expect</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                We respond within one business day with a tailored plan, pricing guidance, and recommended next steps for your property.
              </p>
              <div className="mt-6 space-y-4">
                {["Initial consult & asset review", "Performance roadmap and fee guidance", "Onboarding timeline and next steps"].map((item) => (
                  <div key={item} className="surface-card rounded-2xl p-4 flex items-center gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Send className="w-5 h-5 text-primary" />
                    </span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Thank you for your message! We will get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
     <Navbar />
      {/* Hero Section - Consistent with all pages */}
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
              Get in Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-50 max-w-3xl mx-auto opacity-95 leading-relaxed">
            We're here to answer your questions and help you get started with hassle-free property management.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Email</p>
                    <a
                      href="mailto:soranapropertymanagers@gmail.com"
                      className="text-lg text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      soranapropertymanagers@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Phone</p>
                    <div className="text-lg text-muted-foreground space-y-1">
                      <a href="tel:+254117649850" className="block hover:text-primary transition-colors">
                        +254 117 649 850
                      </a>
                      <a href="tel:+254702036837" className="block hover:text-primary transition-colors">
                        +254 702 036 837
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Office Location</p>
                    <p className="text-lg text-muted-foreground">Kerugoya, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border/50">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2 text-lg text-muted-foreground">
                  <p>Monday – Friday: 8:00 AM – 5:00 PM EAT</p>
                  <p>Saturday: 9:00 AM – 1:00 PM EAT</p>
                  <p className="text-primary font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold mb-10">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold mb-3">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-lg transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold mb-3">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-lg transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold mb-3">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                    className="w-full px-6 py-4 rounded-xl bg-background/70 border border-border focus:border-primary focus:ring-4 focus:ring-primary/20 text-lg resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-hover disabled:opacity-80 disabled:cursor-not-allowed text-primary-foreground font-bold py-5 px-10 rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
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
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function About() {
  return (

    <div className="min-h-screen bg-background text-foreground">
    <Navbar />
      {/* Hero Section - Matching Home page style */}
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
              About Us
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-blue-50 max-w-3xl mx-auto opacity-95">
            Excellence in property management, built on trust, technology, and local expertise.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Our Story
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                Sorana Property Managers Limited, headquartered in <strong>Kerugoya, Kenya</strong>, is a premier property management firm dedicated to delivering seamless rental solutions for residential, commercial, and mixed-use properties.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mt-6">
                We combine professional expertise with innovative technology to ensure reliable returns, hassle-free ownership, and exceptional tenant experiences.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/property.png"
                  alt="Beautiful managed property in Kenya"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Side by side on larger screens */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To simplify property ownership and deliver exceptional rental experiences through dedicated service, cutting-edge technology, and unwavering trust.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted and innovative property management leader across Kenya, setting the highest standards in client care and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "Rental Property Marketing & Tenant Acquisition",
              "Lease Agreement Management",
              "Tenant Screening & Onboarding",
              "Rent Collection & Monthly Statements",
              "Property Maintenance & 24/7 Repair Response",
              "Regular Property Inspections",
              "Owner Reporting & Updates",
            ].map((service, i) => (
              <div
                key={i}
                className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-3 transition-all duration-500 border border-border/50 text-center"
              >
                <p className="text-base md:text-lg font-medium text-foreground">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
            Get in Touch
          </h2>

          <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-xl p-8 md:p-10 border border-border/50">
            <ul className="space-y-6 text-lg md:text-xl">
              <li>
                <strong className="text-primary">Office Location:</strong>
                <br />
                Kerugoya, Kenya
              </li>
              <li>
                <strong className="text-primary">Phone:</strong>
                <br />
                <a href="tel:+254117649850" className="hover:text-primary transition-colors">
                  +254 117 649-850
                </a>{" "}
                or{" "}
                <a href="tel:+254702036837" className="hover:text-primary transition-colors">
                  +254 702 036-837
                </a>
              </li>
              <li>
                <strong className="text-primary">Email:</strong>
                <br />
                <a
                  href="mailto:soranapropertymanagers@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  soranapropertymanagers@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
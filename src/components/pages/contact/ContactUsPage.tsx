"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactUsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">
                A dedicated team ready to support your portfolio.
              </h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-xl">
                Tell us what you own and what you want handled. We’ll respond with a clear onboarding plan and fee guidance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref("Hi Sorana team — I’d like a consultation about property management.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={site.portal.signUp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border/60 text-foreground font-semibold py-3 px-6 rounded-full text-sm inline-flex items-center gap-2 hover:bg-muted/60 transition"
                >
                  Get Started
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06} y={18}>
              <div className="glass-panel rounded-3xl p-6 border border-white/60">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Quick Contacts</p>
                <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="hover:text-primary transition-colors break-all"
                      >
                        {site.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      {site.contact.phones.map((p) => (
                        <a key={p} href={`tel:${p}`} className="block hover:text-primary transition-colors">
                          {p.replace("+254", "+254 ").replace(/(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3")}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Office</p>
                      <p>{site.contact.address}</p>
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
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10">
            <Reveal>
              <div className="surface-card rounded-3xl p-7 md:p-9">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-3xl p-7 md:p-9 border border-white/60">
                <h3 className="text-xl font-semibold">Visit or locate us</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Prefer to talk in person? We’re based in {site.contact.address}. Call ahead to schedule a consult.
                </p>
                <div className="mt-6 overflow-hidden rounded-3xl border border-border/60 bg-white">
                  <iframe
                    title="Sorana Property Managers map"
                    src="https://www.google.com/maps?q=Kerugoya%2C%20Kenya&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[360px] w-full"
                  />
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "One business day response time",
                    "Clear onboarding timeline",
                    "Transparent fee guidance",
                    "Dedicated account manager",
                  ].map((item) => (
                    <div key={item} className="surface-card rounded-2xl p-4 text-sm text-muted-foreground">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}


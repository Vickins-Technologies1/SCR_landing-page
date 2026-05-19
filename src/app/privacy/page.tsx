import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: `Privacy Policy | ${site.shortName}`,
  description: "Privacy Policy describing how Sorana Property Managers Limited collects, uses, and shares information.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Privacy Policy | ${site.shortName}`,
    description: "Privacy Policy describing how Sorana Property Managers Limited collects, uses, and shares information.",
    url: `${site.url}/privacy`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow">Legal</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">Privacy Policy</h1>
            <p className="mt-4 text-sm text-muted-foreground">Effective date: May 19, 2026</p>
          </Reveal>

          <Reveal className="mt-10 surface-card rounded-3xl p-7" delay={0.06}>
            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <p>
                This Privacy Policy explains how Sorana Property Managers Limited (&quot;Sorana&quot;, &quot;we&quot;,
                &quot;us&quot;) collects, uses, and shares information when you use our website, owner portal, marketplace,
                and the Sorana Owner Android app (together, the &quot;Services&quot;).
              </p>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">1. Information we collect</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold text-foreground">Contact details:</span> such as your name, email, phone
                    number, and messages you send us.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Account and portfolio data:</span> information needed
                    to operate owner reporting and property management workflows (for example, property identifiers and
                    service preferences).
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Usage data:</span> basic information about how you use
                    the Services (such as pages viewed, app events, and approximate device details).
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">2. How we use information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide, maintain, and improve the Services.</li>
                  <li>Respond to inquiries and support requests.</li>
                  <li>Send operational messages (for example, onboarding, updates, and service notices).</li>
                  <li>Protect the Services, prevent fraud, and maintain security.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">3. How we share information</h2>
                <p>We may share information in limited circumstances, such as:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold text-foreground">Service providers</span> who help us run the Services
                    (for example, hosting, analytics, communications), under confidentiality obligations.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Legal and safety</span> when required by law or to
                    protect rights, safety, and property.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Business transfers</span> if we’re involved in a merger,
                    acquisition, or asset sale.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">4. Cookies and similar technologies</h2>
                <p>
                  We may use cookies or similar technologies to keep you signed in, remember preferences, and understand
                  usage patterns. You can control cookies through your browser settings.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">5. Data retention</h2>
                <p>
                  We retain information for as long as needed to provide the Services and for legitimate business purposes
                  (such as recordkeeping, dispute resolution, and security), unless a longer period is required by law.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">6. Security</h2>
                <p>
                  We use reasonable safeguards designed to protect information. No method of transmission or storage is
                  completely secure, so we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">7. Your choices</h2>
                <p>
                  You can contact us to request access, updates, or deletion of certain information, subject to legal and
                  contractual requirements. For support, visit the{" "}
                  <Link href="/contact-us" className="text-primary font-semibold hover:underline">
                    Contact page
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">8. Changes to this Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. The updated version will be posted here with a new
                  effective date.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">9. Contact</h2>
                <p>
                  Questions about privacy? Email{" "}
                  <a href={`mailto:${site.contact.email}`} className="text-primary font-semibold hover:underline">
                    {site.contact.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}


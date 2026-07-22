import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: `Terms of Service | ${site.shortName}`,
  description: "Terms of Service for Sorana Property Managers Limited website, platform, marketplace, and mobile app.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Terms of Service | ${site.shortName}`,
    description: "Terms of Service for Sorana Property Managers Limited website, platform, marketplace, and mobile app.",
    url: `${site.url}/terms`,
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">Terms of Service</h1>
            <p className="mt-4 text-sm text-muted-foreground">Effective date: July 22, 2026</p>
          </Reveal>

          <Reveal className="mt-10 surface-card rounded-3xl p-7" delay={0.06}>
            <div className="space-y-6 text-sm md:text-base text-muted-foreground">
              <p>
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Sorana Property Managers
                Limited website, platform, marketplace, and related services, including the mobile app (together, the
                &quot;Services&quot;). By accessing or using the Services, you agree to these Terms.
              </p>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">1. Who we are</h2>
                <p>
                  Sorana Property Managers Limited (&quot;Sorana&quot;, &quot;we&quot;, &quot;us&quot;) provides property
                  management services and related digital tools. Contact details are listed in the{" "}
                  <Link href="/contact-us" className="text-primary font-semibold hover:underline">
                    Contact page
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">2. Eligibility and accounts</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You must be at least 18 years old to use the Services.</li>
                  <li>
                    If you create an account, you are responsible for maintaining the confidentiality of your login
                    credentials and for all activity under your account.
                  </li>
                  <li>You agree to provide accurate information and keep it up to date.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">3. Use of the Services</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use the Services for unlawful, fraudulent, or harmful purposes.</li>
                  <li>Interfere with or disrupt the Services, servers, or networks.</li>
                  <li>Attempt to access accounts, data, or systems without authorization.</li>
                  <li>Reverse engineer, copy, or resell the Services except as permitted by law.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">4. Fees and engagements</h2>
                <p>
                  Property management engagements, pricing, and service scope may be governed by separate agreements
                  (including onboarding documents) between you and Sorana. If a conflict exists, the separate agreement
                  will control for that engagement.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">5. Third-party services</h2>
                <p>
                  The Services may link to third-party sites or services (for example, social media or payment providers).
                  We do not control and are not responsible for third-party content, policies, or practices.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">6. Intellectual property</h2>
                <p>
                  The Services (including text, design, logos, and software) are owned by Sorana or its licensors and are
                  protected by applicable intellectual property laws. You may not use our branding without prior written
                  permission.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">7. Disclaimers</h2>
                <p>
                  The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we aim for
                  accurate and timely information, we do not warrant that the Services will be uninterrupted, error-free,
                  or that any content is complete or current.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">8. Limitation of liability</h2>
                <p>
                  To the maximum extent permitted by law, Sorana will not be liable for indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits, revenue, data, or goodwill arising from your
                  use of the Services.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">9. Termination</h2>
                <p>
                  We may suspend or terminate access to the Services if we reasonably believe you have violated these
                  Terms or if required to comply with law. You may stop using the Services at any time.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">10. Changes to these Terms</h2>
                <p>
                  We may update these Terms from time to time. The updated Terms will be posted on this page with a new
                  effective date. Continued use of the Services after changes take effect means you accept the updated
                  Terms.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg md:text-xl font-semibold text-foreground">11. Contact</h2>
                <p>
                  Questions about these Terms? Contact us at{" "}
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

import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";
import { GooglePlayIcon } from "@/components/site/GooglePlayIcon";

export const metadata: Metadata = {
  title: `Download App | ${site.shortName}`,
  description: "Download the Sorana app for property management updates, reporting, and portfolio visibility.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Download App | ${site.shortName}`,
    description: "Download the Sorana app for property management updates, reporting, and portfolio visibility.",
    url: `${site.url}/download-app`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

const playStoreUrl =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "https://play.google.com/store/apps/details?id=com.soranapropertymanagers.app";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <Reveal>
              <p className="eyebrow">Download</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">Get the Sorana Android app</h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-2xl">
                Download the Sorana app directly from Google Play for a smoother install, automatic updates, and mobile
                access to your property dashboard.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
                >
                  <GooglePlayIcon className="h-4 w-4 shrink-0" />
                  Get it on Google Play
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted/60 transition"
                  >
                  Need help installing?
                </Link>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                By downloading, you agree to our{" "}
                <Link href="/terms" className="text-primary font-semibold hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary font-semibold hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="mt-8 surface-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why Google Play</p>
                <div className="mt-4 grid gap-4">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Install safely from Google Play with built-in app verification.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Updates arrive automatically, so you always have the latest version.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-3xl p-7 border border-white/60">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">How to get started</p>

                <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      Tap <strong className="text-foreground">Get it on Google Play</strong> to open the store listing.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>Tap <strong className="text-foreground">Install</strong> or <strong className="text-foreground">Update</strong> in Google Play.</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>Open the app and sign in to manage properties, tenants, or Airbnb bookings.</span>
                  </li>
                </ol>

                <div className="mt-8 rounded-2xl border border-border/60 bg-muted/40 p-5">
                  <p className="text-sm font-semibold text-foreground">Updates</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    New releases appear in Google Play automatically, so you always stay on the latest version.
                  </p>
                </div>

                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary-hover px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <GooglePlayIcon className="h-4 w-4 shrink-0" />
                  Open Google Play
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}


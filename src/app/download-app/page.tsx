import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: `Download App | ${site.shortName}`,
  description: "Get the Sorana Owner app from Google Play for updates, reporting, and portfolio visibility.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Download App | ${site.shortName}`,
    description: "Get the Sorana Owner app from Google Play for updates, reporting, and portfolio visibility.",
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">Get the Android app</h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-2xl">
                Download the Sorana Owner app directly from Google Play for a smoother install and automatic updates.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
                >
                  <GooglePlayMark />
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
                    <span>Open the app and sign in to continue managing your property.</span>
                  </li>
                </ol>

                <div className="mt-8 rounded-2xl border border-border/60 bg-muted/40 p-5">
                  <p className="text-sm font-semibold text-foreground">Updates</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    New releases will appear in Google Play automatically, so you do not need to reinstall the app from
                    a file.
                  </p>
                </div>

                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary hover:bg-primary-hover px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  <GooglePlayMark />
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

function GooglePlayMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 2.5v19l10.7-9.5L3 2.5Z" fill="#34A853" />
      <path d="M13.7 12 3 21.5l8.8-8.8L13.7 12Z" fill="#4285F4" />
      <path d="M13.7 12 11.8 10.1 3 2.5 13.7 12Z" fill="#FBBC04" />
      <path d="M13.7 12 11.8 13.9 3 21.5 13.7 12Z" fill="#EA4335" />
      <path d="M13.7 12 16.8 8.9 20.8 6.7c.8-.4 1.7.4 1.3 1.2l-2.8 4.2-3.5 0Z" fill="#A142F4" />
      <path d="M13.7 12h3.5l2.8 4.2c.4.8-.5 1.6-1.3 1.2l-4-2.2-3-3.2Z" fill="#00ACC1" />
      <path d="M13.7 12 16.8 15.1l-3.1 3.2L13.7 12Z" fill="#FABC04" />
    </svg>
  );
}

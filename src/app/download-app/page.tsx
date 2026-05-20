import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Download, ShieldAlert } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: `Download App | ${site.shortName}`,
  description: "Download the Sorana Owner app (Android APK) for updates, reporting, and portfolio visibility.",
  metadataBase: new URL(site.url),
  openGraph: {
    title: `Download App | ${site.shortName}`,
    description: "Download the Sorana Owner app (Android APK) for updates, reporting, and portfolio visibility.",
    url: `${site.url}/download-app`,
    siteName: site.shortName,
    locale: "en_KE",
    type: "website",
  },
};

const apkUrl = process.env.NEXT_PUBLIC_ANDROID_APK_URL ?? `${site.url}/downloads/SORANA_V1.0.1.apk`;
const apkVersion = process.env.NEXT_PUBLIC_ANDROID_APK_VERSION ?? "1.0.1";
const apkSha256 =
  process.env.NEXT_PUBLIC_ANDROID_APK_SHA256 ??
  "DC5C8D36B7DDD254A55BA55E6142BE16BA71DBFE2ED56336B08E053634EAEABB";

const availableApks = [
  {
    version: "1.0.1",
    href: "/downloads/SORANA_V1.0.1.apk",
    sha256: "DC5C8D36B7DDD254A55BA55E6142BE16BA71DBFE2ED56336B08E053634EAEABB",
    label: "Latest",
  },
  {
    version: "1.0.0",
    href: "/downloads/SORANA_V1.0.0.apk",
    sha256: "DF59F86E1A57B2A972CF264B490B64AAFF55DC62CE0A3221A4EDD28A71891343",
    label: "Previous",
  },
] as const;

export default function Page() {
  const resolvedApkUrl = new URL(apkUrl, site.url);
  const siteOrigin = new URL(site.url).origin;
  const isSameOriginApk = resolvedApkUrl.origin === siteOrigin;

  // Only cache-bust same-origin, non-signed URLs (avoid breaking signed URLs that rely on query params).
  if (apkVersion && isSameOriginApk && !apkUrl.includes("?")) {
    resolvedApkUrl.searchParams.set("v", apkVersion);
  }

  const downloadHref = isSameOriginApk ? `${resolvedApkUrl.pathname}${resolvedApkUrl.search}` : resolvedApkUrl.toString();
  const downloadName = apkVersion ? `sorana-owner-v${apkVersion}.apk` : "sorana-owner.apk";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <Reveal>
              <p className="eyebrow">Download</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-4">Get the Android app</h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-2xl">
                Download the latest Android APK and install it on your phone. This is the fastest way to access owner
                updates before the Play Store release.
              </p>

              {apkVersion ? (
                <p className="mt-4 text-xs md:text-sm text-muted-foreground">
                  Current version: <span className="font-semibold text-foreground">v{apkVersion}</span>
                </p>
              ) : null}

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={downloadHref}
                  download={downloadName}
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 px-6 rounded-full text-sm"
                >
                  <Download className="h-4 w-4" />
                  Download APK
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
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Security check (optional)</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  If you want to verify the file after download, compare this SHA256 hash:
                </p>
                <p className="mt-3 font-mono text-xs sm:text-sm break-all text-foreground">{apkSha256}</p>
              </div>

              <div className="mt-6 surface-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Available versions</p>
                <ul className="mt-4 space-y-4">
                  {availableApks.map((apk) => (
                    <li key={apk.href} className="rounded-2xl border border-border/60 bg-muted/30 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            v{apk.version}{" "}
                            <span className="ml-2 rounded-full border border-border bg-background px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                              {apk.label}
                            </span>
                          </p>
                          <p className="mt-2 font-mono text-[11px] sm:text-xs break-all text-muted-foreground">
                            SHA256: {apk.sha256}
                          </p>
                        </div>
                        <a
                          href={apk.href}
                          download
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover px-5 py-2.5 text-xs font-semibold text-primary-foreground"
                        >
                          <Download className="h-4 w-4" />
                          Download
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass-panel rounded-3xl p-7 border border-white/60">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">How to install</p>

                <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      Tap <strong className="text-foreground">Download APK</strong>, then open the file from your
                      Downloads.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldAlert className="mt-0.5 h-5 w-5 text-primary" />
                    <span>
                      If Android blocks it, allow installs from your browser:{" "}
                      <strong className="text-foreground">Settings → Install unknown apps</strong>.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span>Confirm the prompts and finish installation.</span>
                  </li>
                </ol>

                <div className="mt-8 rounded-2xl border border-border/60 bg-muted/40 p-5">
                  <p className="text-sm font-semibold text-foreground">Updates</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    When a new version is released, download the latest APK again from this page and install it. Android
                    will update the app if it’s signed with the same key.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import Link from "next/link";
import { CheckCircle2, Download, ShieldAlert } from "lucide-react";

const apkUrl =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ?? "https://soranapropertymanagers.com/downloads/sorana.apk";

const apkSha256 =
  process.env.NEXT_PUBLIC_ANDROID_APK_SHA256 ??
  "4BB0DCAC2320747B46D480A75532E7BB094888418E3318CD313A52B5FA07B661";

export default function DownloadAppPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="pt-28 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div data-reveal="left">
              <p className="eyebrow">Download</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-4">Get the Android app</h1>
              <p className="mt-5 text-sm md:text-base text-muted-foreground max-w-2xl">
                Download the latest Android APK and install it on your phone. This is the fastest way to get the app
                before it’s available on the Play Store.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={apkUrl}
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

              <div className="mt-8 surface-card rounded-3xl p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Security check (optional)</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  If you want to verify the file after download, compare this SHA256 hash:
                </p>
                <p className="mt-3 font-mono text-xs sm:text-sm break-all text-foreground">{apkSha256}</p>
              </div>
            </div>

            <div data-reveal="right" className="glass-panel rounded-3xl p-7 border border-white/60">
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
                    <strong className="text-foreground">Settings → Install unknown apps → Chrome</strong> (or your
                    browser) → Allow.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span>
                    Confirm the prompts and finish installation. You may see a Play Protect warning; that’s normal for
                    sideloading.
                  </span>
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
          </div>
        </div>
      </section>
    </main>
  );
}


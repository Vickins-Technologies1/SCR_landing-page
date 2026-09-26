"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const playStoreUrl =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ??
  "https://play.google.com/store/apps/details?id=com.soranapropertymanagers.app";
const dismissedStorageKey = "sorana-app-download-dismissed";

export function AppDownloadPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(dismissedStorageKey) === "true") return;
    } catch {
      // The prompt can still be used when storage is unavailable.
    }

    const timer = window.setTimeout(() => setIsVisible(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    setIsVisible(false);
    try {
      window.sessionStorage.setItem(dismissedStorageKey, "true");
    } catch {
      // Dismissal still applies for the current render when storage is unavailable.
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Sorana mobile app"
          className="fixed inset-x-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-40 sm:inset-x-auto sm:bottom-24 sm:right-6 sm:w-[22rem]"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14, scale: prefersReducedMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 8, scale: prefersReducedMotion ? 1 : 0.98 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="surface-card relative flex items-center gap-3 rounded-[1.35rem] p-3.5 pr-12">
            <Image
              src="/icon.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-[0.9rem] object-cover shadow-soft"
            />

            <div className="min-w-0 flex-1">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Sorana app</p>
              <p className="mt-1 text-sm font-semibold text-foreground">Manage property on the go.</p>
              <a
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get the Sorana app on Google Play"
                className="mt-2 inline-flex min-h-9 items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <GooglePlayMark />
                Get it on Google Play
              </a>
            </div>

            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss app download prompt"
              className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

function GooglePlayMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
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

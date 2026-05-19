"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Building2,
  Compass,
  Info,
  Mail,
  Wallet,
  Download,
  LogIn,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: "/about", label: "About", icon: Info },
    {
      href: "https://app.soranapropertymanagers.com/market-place",
      label: "Market Place",
      icon: Building2,
      external: true,
    },
    { href: "/how-it-works", label: "How It Works", icon: Compass },
    { href: "/pricing", label: "Pricing", icon: Wallet },
    { href: "/download-app", label: "Download App", icon: Download },
    { href: "/contact-us", label: "Contact", icon: Mail },
  ];

  const actions = [
    {
      href: "https://app.soranapropertymanagers.com/",
      label: "Sign In",
      icon: LogIn,
      external: true,
      variant: "ghost",
    },
    {
      href: "https://app.soranapropertymanagers.com/sign-up",
      label: "Sign Up",
      icon: UserPlus,
      external: true,
      variant: "primary",
    },
  ];

  const handleExternalClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
    closeMobileMenu();
  };

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between rounded-full border border-border/60 bg-background/80 backdrop-blur-xl shadow-[0_20px_50px_-35px_rgba(30,58,138,0.6)] px-4 py-2">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Sorana"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sorana</p>
                <p className="text-sm font-semibold text-foreground">Property Managers</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1 rounded-full bg-muted/60 px-2 py-2">
              {navLinks.map(({ href, label, external }) =>
                external ? (
                  <button
                    key={label}
                    onClick={() => handleExternalClick(href)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition hover:text-foreground"
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground transition hover:text-foreground"
                  >
                    {label}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {actions.map(({ href, label, external, variant, icon: Icon }) =>
                external ? (
                  <button
                    key={label}
                    onClick={() => handleExternalClick(href)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                      variant === "primary"
                        ? "bg-primary text-primary-foreground shadow-[0_16px_30px_-18px_rgba(66,199,117,0.6)] hover:bg-primary-hover"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                      variant === "primary"
                        ? "bg-primary text-primary-foreground shadow-[0_16px_30px_-18px_rgba(66,199,117,0.6)] hover:bg-primary-hover"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </Link>
                )
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-full bg-muted/60 hover:bg-muted transition"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/35 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 w-80 bg-background/95 backdrop-blur-xl shadow-[0_25px_70px_-40px_rgba(30,58,138,0.65)] border-r border-border z-50 lg:hidden rounded-r-3xl transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-8 h-full">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sorana"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                priority
              />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sorana</p>
                <p className="text-sm font-semibold">Property Managers</p>
              </div>
            </Link>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-muted transition"
              aria-label="Close menu"
            >
              <X size={22} className="text-foreground" />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            {navLinks.map(({ href, label, icon: Icon, external }) =>
              external ? (
                <button
                  key={label}
                  onClick={() => handleExternalClick(href)}
                  className="w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide text-foreground hover:bg-muted/70 transition"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </span>
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide text-foreground hover:bg-muted/70 transition"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </span>
                  {label}
                </Link>
              )
            )}
          </nav>

          <div className="space-y-3">
            {actions.map(({ href, label, icon: Icon, external, variant }) =>
              external ? (
                <button
                  key={label}
                  onClick={() => handleExternalClick(href)}
                  className={`w-full flex items-center justify-between rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition ${
                    variant === "primary"
                      ? "bg-primary text-primary-foreground shadow-[0_14px_30px_-18px_rgba(66,199,117,0.6)]"
                      : "border border-border text-foreground"
                  }`}
                >
                  <span>{label}</span>
                  <Icon size={18} />
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`w-full flex items-center justify-between rounded-2xl px-5 py-3 text-sm font-semibold tracking-wide transition ${
                    variant === "primary"
                      ? "bg-primary text-primary-foreground shadow-[0_14px_30px_-18px_rgba(66,199,117,0.6)]"
                      : "border border-border text-foreground"
                  }`}
                >
                  <span>{label}</span>
                  <Icon size={18} />
                </Link>
              )
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

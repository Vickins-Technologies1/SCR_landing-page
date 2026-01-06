"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Info,
  Building2,
  Compass,
  Wallet,
  LogIn,
  UserPlus,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = savedTheme === "dark";

    setIsDarkMode(prefersDark);

    if (prefersDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newDark = !prev;
      if (newDark) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      }
      return newDark;
    });
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Links configuration
  const navLinks = [
    { href: "/about", label: "About Us", icon: Info },
    {
      href: "https://app.smartchoicerentalmanagement.com/property-listings",
      label: "Properties",
      icon: Building2,
      external: true,
    },
    { href: "/how-it-works", label: "How It Works", icon: Compass },
    { href: "/pricing", label: "Pricing", icon: Wallet },
    {
      href: "https://app.smartchoicerentalmanagement.com/",
      label: "Sign In",
      icon: LogIn,
      external: true,
    },
    {
      href: "https://app.smartchoicerentalmanagement.com/sign-up",
      label: "Sign Up",
      icon: UserPlus,
      highlight: true,
      external: true,
    },
    { href: "/contact-us", label: "Contact Us", icon: Mail },
  ];

  const handleExternalClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
    closeMobileMenu();
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-background/90 backdrop-blur-md shadow-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Smart Choice Rental Management Logo"
              width={80}
              height={70}
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ href, label, icon: Icon, external, highlight }) =>
              external ? (
                <button
                  key={label}
                  onClick={() => handleExternalClick(href)}
                  className={`flex items-center space-x-2 text-foreground font-medium transition-all duration-300 hover:text-primary hover:translate-y-[-2px] ${
                    highlight
                      ? "bg-primary text-primary-foreground px-5 py-2 rounded-full shadow-md hover:bg-primary/90"
                      : ""
                  }`}
                >
                  <Icon size={20} className={highlight ? "text-primary-foreground" : "text-primary"} />
                  <span>{label}</span>
                </button>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className={`flex items-center space-x-2 text-foreground font-medium transition-all duration-300 hover:text-primary hover:translate-y-[-2px] ${
                    highlight
                      ? "bg-primary text-primary-foreground px-5 py-2 rounded-full shadow-md hover:bg-primary/90"
                      : ""
                  }`}
                >
                  <Icon size={20} className={highlight ? "text-primary-foreground" : "text-primary"} />
                  <span>{label}</span>
                </Link>
              )
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="ml-8 p-3 rounded-full bg-muted transition-all duration-300 hover:bg-muted-hover hover:scale-110"
            >
              {isDarkMode ? (
                <Sun size={22} className="text-yellow-500" />
              ) : (
                <Moon size={22} className="text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition"
            aria-label="Open menu"
          >
            <Menu size={28} strokeWidth={2.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <>
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
        )}

        <aside
          className={`fixed inset-y-0 left-0 w-72 bg-background/95 backdrop-blur-xl shadow-2xl border-r border-border z-50 lg:hidden rounded-r-2xl
            transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
        >
          <div className="flex flex-col p-7 space-y-8 h-full">
            {/* Header */}
            <div className="flex justify-between items-center">
              <Link href="/" onClick={closeMobileMenu}>
                <Image
                  src="/logo.png"
                  alt="Smart Choice Rental Management Logo"
                  width={120}
                  height={60}
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>

              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-muted transition"
                aria-label="Close menu"
              >
                <X size={24} className="text-foreground" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2 flex-1">
              {navLinks.map(({ href, label, icon: Icon, external, highlight }) =>
                external ? (
                  <button
                    key={label}
                    onClick={() => handleExternalClick(href)}
                    className={`w-full flex items-center space-x-3 text-[1.1rem] font-medium py-3 px-4 rounded-xl transition-all group ${
                      highlight
                        ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                        : "hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <Icon size={22} className={highlight ? "text-primary-foreground" : "text-primary group-hover:scale-110"} />
                    <span>{label}</span>
                  </button>
                ) : (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMobileMenu}
                    className={`w-full flex items-center space-x-3 text-[1.1rem] font-medium py-3 px-4 rounded-xl transition-all group ${
                      highlight
                        ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                        : "hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <Icon size={22} className={highlight ? "text-primary-foreground" : "text-primary group-hover:scale-110"} />
                    <span>{label}</span>
                  </Link>
                )
              )}
            </nav>

            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-between w-full py-4 px-4 rounded-xl bg-muted border border-border hover:bg-muted-hover transition-all shadow-sm"
            >
              {isDarkMode ? (
                <Sun size={22} className="text-yellow-500" />
              ) : (
                <Moon size={22} className="text-foreground" />
              )}
              <span className="font-medium text-foreground">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </button>
          </div>
        </aside>
      </>
    </>
  );
}

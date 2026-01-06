"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total duration: ~2.4 seconds of animation before fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        background: "#000000",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out 0.3s",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* Animated Background Glow Layers */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "0.8s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "1.6s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12">
        {/* Logo Container with Elegant Scale + Fade In */}
        <div
          className="opacity-0 translate-y-8"
          style={{
            animation: "revealUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.3s",
          }}
        >
          <div className="p-8 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src="/logo.png"
              alt="Smart Choice Rental Management"
              width={140}
              height={140}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Brand Name with Letter-by-Letter Reveal */}
        <div
          className="text-center opacity-0"
          style={{
            animation: "revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.8s",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
            <span className="inline-block overflow-hidden">
              <span
                className="inline-block text-white/90 translate-y-full"
                style={{
                  animation: "slideUpLetters 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  animationDelay: "1.2s",
                }}
              >
                Smart
              </span>
            </span>{" "}
            <span className="inline-block overflow-hidden">
              <span
                className="inline-block bg-gradient-to-r from-cyan-300 via-cyan-100 to-white bg-clip-text text-transparent translate-y-full"
                style={{
                  animation: "slideUpLetters 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  animationDelay: "1.5s",
                }}
              >
                Choice
              </span>
            </span>
          </h1>

          <p
            className="mt-4 text-lg md:text-xl text-white/60 font-medium tracking-wide opacity-0"
            style={{
              animation: "fadeIn 1.2s ease-out forwards",
              animationDelay: "2.1s",
            }}
          >
            Rental Management Excellence
          </p>
        </div>

        {/* Minimal Progress Bar */}
        <div
          className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden opacity-0"
          style={{
            animation: "fadeIn 0.8s ease-out forwards",
            animationDelay: "1s",
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-full"
            style={{
              width: "100%",
              animation: "progressFill 2.4s ease-out forwards",
            }}
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes revealUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpLetters {
          to {
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        @keyframes progressFill {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
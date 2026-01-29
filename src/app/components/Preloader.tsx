"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide after ~2.6 seconds of animation
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s ease-out 0.4s",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* Subtle Background Glow (Premium Soft Light) */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl animate-soft-glow"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-soft-glow"
          style={{ animationDelay: "0.8s" }}
        />
      </div>

      {/* Main Content - Clean & Elegant */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-10">
        {/* Logo with Smooth Fade + Slight Scale In */}
        <div
          className="opacity-0 scale-90"
          style={{
            animation: "revealScale 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.4s",
          }}
        >
          <div className="p-6 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-100">
            <Image
              src="/logo.png"
              alt="Smart Choice Rental Management"
              width={350}
              height={150}
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        </div>

        {/* Brand Name - Sophisticated Letter Reveal */}
        <div
          className="text-center opacity-0"
          style={{
            animation: "revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "0.9s",
          }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="inline-block overflow-hidden align-bottom">
              <span
                className="inline-block text-gray-800 translate-y-full"
                style={{
                  animation: "slideUpLetters 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  animationDelay: "1.3s",
                }}
              >
                Sorana Property
              </span> 
            </span>{" "}
            <span className="inline-block overflow-hidden align-bottom">
              <span
                className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent translate-y-full"
                style={{
                  animation: "slideUpLetters 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
                  animationDelay: "1.6s",
                }}
              >
                Managers
              </span>
            </span>
          </h1>

          <p
            className="mt-5 text-lg md:text-xl text-gray-500 font-medium tracking-wide opacity-0"
            style={{
              animation: "fadeIn 1.4s ease-out forwards",
              animationDelay: "2.2s",
            }}
          >
            Property Management Excellence
          </p>
        </div>

        {/* Sleek Minimal Progress Indicator */}
        <div
          className="w-64 h-1 bg-gray-200/60 rounded-full overflow-hidden opacity-0"
          style={{
            animation: "fadeIn 0.8s ease-out forwards",
            animationDelay: "1.1s",
          }}
        >
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full origin-left"
            style={{
              transform: "scaleX(0)",
              animation: "progressFill 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              animationDelay: "1.1s",
            }}
          />
        </div>
      </div>

      {/* Custom Premium Animations */}
      <style jsx>{`
        @keyframes revealScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

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

        @keyframes soft-glow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes progressFill {
          to {
            transform: scaleX(1);
          }
        }

        .animate-soft-glow {
          animation: soft-glow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
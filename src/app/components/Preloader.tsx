"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.9s ease-out 0.3s",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="back-glow back-glow-one" />
        <div className="back-glow back-glow-two" />
        <div className="noise" />
      </div>

      <div className="relative z-10 w-[90%] max-w-xl">
        <div className="stage">
          <div className="sheen" />
          <div className="stack stack-one" />
          <div className="stack stack-two" />
          <div className="stack stack-three" />

          <div className="content">
            <div className="logo-wrap">
              <Image
                src="/logo.png"
                alt="Sorana Property Managers"
                width={150}
                height={150}
                className="h-20 w-20 object-contain"
                priority
              />
            </div>

            <div className="text-block">
              <p className="eyebrow">Sorana Property Managers</p>
              <h1 className="title">Premium Property Management</h1>
              <p className="subtitle">Caring for your property, protecting your investment.</p>
            </div>

            <div className="signal">
              <span className="signal-dot" />
              <span className="signal-dot" />
              <span className="signal-dot" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .back-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          opacity: 0.55;
          animation: float 10s ease-in-out infinite;
        }

        .back-glow-one {
          width: 520px;
          height: 520px;
          background: rgba(66, 199, 117, 0.2);
          top: -180px;
          left: -120px;
        }

        .back-glow-two {
          width: 600px;
          height: 600px;
          background: rgba(30, 58, 138, 0.16);
          bottom: -220px;
          right: -160px;
          animation-delay: 1.5s;
        }

        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
        }

        .stage {
          position: relative;
          overflow: hidden;
          border-radius: 36px;
          background: linear-gradient(140deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.75));
          border: 1px solid rgba(30, 58, 138, 0.12);
          box-shadow: 0 40px 100px -70px rgba(30, 58, 138, 0.6);
          padding: 48px 40px;
        }

        .sheen {
          position: absolute;
          inset: -120% 0 auto -30%;
          height: 240%;
          width: 60%;
          background: linear-gradient(120deg, transparent 20%, rgba(255, 255, 255, 0.6), transparent 80%);
          transform: translateX(-120%);
          animation: sheen 3.2s ease-in-out infinite;
        }

        .stack {
          position: absolute;
          left: 12%;
          right: 12%;
          height: 86px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(30, 58, 138, 0.08);
          backdrop-filter: blur(14px);
          animation: stackMove 4s ease-in-out infinite;
        }

        .stack-one {
          top: 10%;
          animation-delay: 0s;
        }

        .stack-two {
          top: 24%;
          animation-delay: 0.6s;
        }

        .stack-three {
          top: 38%;
          animation-delay: 1.2s;
        }

        .content {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 18px;
          text-align: center;
        }

        .logo-wrap {
          margin: 0 auto;
          height: 96px;
          width: 96px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 26px 70px -55px rgba(30, 58, 138, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: breathe 3s ease-in-out infinite;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 0.35em;
          font-size: 0.65rem;
          color: rgba(30, 58, 138, 0.55);
        }

        .title {
          font-size: 1.6rem;
          font-weight: 600;
          color: #1E3A8A;
          margin-top: 8px;
        }

        .subtitle {
          font-size: 0.95rem;
          color: rgba(30, 58, 138, 0.6);
        }

        .signal {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .signal-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(30, 58, 138, 0.2);
          animation: pulse 1.6s ease-in-out infinite;
        }

        .signal-dot:nth-child(2) {
          animation-delay: 0.2s;
          background: rgba(66, 199, 117, 0.5);
        }

        .signal-dot:nth-child(3) {
          animation-delay: 0.4s;
          background: rgba(30, 58, 138, 0.5);
        }

        @keyframes sheen {
          0% {
            transform: translateX(-140%);
          }
          55% {
            transform: translateX(140%);
          }
          100% {
            transform: translateX(140%);
          }
        }

        @keyframes stackMove {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.85;
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-6px);
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(18px);
          }
        }

        @media (max-width: 640px) {
          .stage {
            padding: 36px 24px;
          }
          .title {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;

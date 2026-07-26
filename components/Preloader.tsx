"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [shrinking, setShrinking] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Stage 1: Shrink & fly logo to header top-left (at 1.2s)
    const timer1 = setTimeout(() => {
      setShrinking(true);
    }, 1200);

    // Stage 2: Fade out background overlay (at 1.8s)
    const timer2 = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // Stage 3: Unmount preloader (at 2.4s)
    const timer3 = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Overlay */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-500 ${
          shrinking ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Animated Logo Container that flies to Header position */}
      <div
        className={`fixed z-50 transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          shrinking
            ? "top-4 left-4 sm:left-6 lg:left-8 translate-x-0 translate-y-0 scale-100 origin-top-left"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 origin-center"
        }`}
      >
        <Image
          src="/images/site/gover-logo.svg"
          alt="Gover Garden Centre"
          width={320}
          height={157}
          priority
          className={`object-contain transition-all duration-1000 ${
            shrinking ? "h-16 sm:h-20 w-auto" : "h-28 sm:h-36 w-auto"
          }`}
        />
      </div>

      {/* Center Spinner & Text (Fades out when logo flies) */}
      <div
        className={`absolute top-[65%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-center transition-opacity duration-300 ${
          shrinking ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-1 w-48 overflow-hidden rounded-full bg-emerald-100">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[#006837] animate-[shimmer_1.5s_infinite]" />
        </div>

        <p className="mt-4 text-xs font-bold tracking-[0.3em] uppercase text-[#006837] animate-pulse">
          Loading Green Paradise...
        </p>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}

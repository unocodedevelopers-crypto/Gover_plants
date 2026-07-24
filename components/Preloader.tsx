"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 1.5s
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1400);

    // Completely unmount preloader after 2.0s
    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 1900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#006837] transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center p-6 text-center">
        {/* Animated Gover Logo with gentle pulse & float */}
        <div className="animate-pulse">
          <Image
            src="/images/site/gover-logo.svg"
            alt="Gover Garden Centre"
            width={360}
            height={175}
            className="h-24 w-auto sm:h-32 object-contain filter drop-shadow-lg"
            priority
          />
        </div>

        {/* Elegant Spinner / Shimmer Bar */}
        <div className="mt-8 relative h-1 w-48 overflow-hidden rounded-full bg-emerald-900/50">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-white animate-[shimmer_1.5s_infinite]" />
        </div>

        <p className="mt-4 text-xs font-semibold tracking-[0.3em] uppercase text-emerald-100/80 animate-pulse">
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

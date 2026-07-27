"use client";
import React from "react";
import Link from "next/link";

export default function HeroCarousel() {
  const slide = {
    video: "/videos/banner.mp4",
    tagline: "",
    title1: "Nature In",
    title2: "Beautiful Motion",
    desc: "Experience the serenity and breathtaking beauty of our lush botanical gardens in stunning high definition."
  };

  return (
    <section className="relative flex min-h-[60vh] py-20 items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src={slide.video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#98c156] opacity-0 animate-fade-in-up">
          {slide.tagline}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-tight flex flex-wrap justify-center gap-x-3 sm:gap-x-0">
          <div>
            {slide.title1.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 50 + 100}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="w-full hidden sm:block"></div>
          <div>
            {slide.title2.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + slide.title1.length) * 50 + 100}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/90 opacity-0 animate-fade-in-up delay-200">
          {slide.desc}
        </p>
        <div className="mt-10 opacity-0 animate-fade-in-up delay-300">
          <Link
            href="/collections/all"
            className="inline-block rounded bg-[#98c156] px-10 py-4 text-sm font-bold tracking-wider text-white transition hover:bg-[#85ab48]"
          >
            SHOPPING NOW
          </Link>
        </div>
      </div>
    </section>
  );
}

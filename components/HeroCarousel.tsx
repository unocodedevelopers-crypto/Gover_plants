"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/images/products/plants_bg.jpg",
    tagline: "#The Stone Series",
    title1: "Bonsai Tree",
    title2: "Nice Collections",
    desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    image: "/images/products/hero-bg-2.jpg",
    tagline: "#Fresh Arrivals",
    title1: "Indoor Plants",
    title2: "For Your Home",
    desc: "Bring life to your living space with our beautifully curated selection of low-maintenance indoor plants."
  },
  {
    image: "/images/products/hero-bg-3.jpg",
    tagline: "#Exotic Collection",
    title1: "Rare Purple",
    title2: "Foliage Plants",
    desc: "Discover our unique collection of vibrant purple plants to add an exotic touch of color to your home or garden."
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative flex min-h-[60vh] py-20 items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Images with Crossfade */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Content - Remounts on slide change to trigger animations */}
      <div
        key={current}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
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

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-8 rounded-full transition-all ${
              index === current ? "bg-[#98c156]" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

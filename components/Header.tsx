"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/collections/all" },
  { label: "Best Sellers", href: "/collections/best-seller" },
  { label: "Featured", href: "/collections/featured" },
  { label: "Top Rated", href: "/collections/top-rated" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/site/logo.png"
            alt="Vesoz"
            width={130}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-neutral-700 transition hover:text-neutral-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:border-neutral-900"
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.836l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.847-4.734 2.157-7.253a1.125 1.125 0 00-1.12-1.247H5.106M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Cart
            {totalCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                {totalCount}
              </span>
            )}
          </button>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-neutral-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded px-2 py-2 text-sm font-medium uppercase tracking-wide text-neutral-700 hover:bg-neutral-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

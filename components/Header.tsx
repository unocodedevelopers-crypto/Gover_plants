"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
import { products, Product } from "@/lib/data";

const navLinks = [
  { label: "Plants", href: "/collections/plants" },
  { label: "Pots", href: "/collections/pots" },
  { label: "Soils", href: "/collections/soils" },
  { label: "Gardening Decor", href: "/collections/gardening-decor" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);

  // Search states
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const { totalCount, openCart } = useCart();
  const { openWishlist, totalCount: wishlistCount } = useWishlist();

  useEffect(() => {
    // Reveal header logo after preloader flight completes (at 2.2s)
    const timer = setTimeout(() => {
      setPreloaderActive(false);
    }, 2200);

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add shadow/border style if scrolled down past 20px
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide header on scroll down (if scrolled > 100px), show header on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle live search input filtering
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredProducts([]);
      return;
    }
    const q = searchQuery.toLowerCase().trim();
    const matches = products.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.handle.toLowerCase().includes(q) ||
        p.collections.some((c) => c.toLowerCase().includes(q))
    );
    setFilteredProducts(matches.slice(0, 5));
  }, [searchQuery]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus input when search box expands
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "border-neutral-200 bg-white/95 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/site/gover-logo.svg"
            alt="Gover Garden Centre"
            width={320}
            height={157}
            className={`h-16 w-auto sm:h-20 object-contain transition-opacity duration-300 ${
              preloaderActive ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
        </Link>

        {/* Navigation Links */}
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

        {/* Actions Section: Search + Wishlist + Cart */}
        <div className="flex items-center gap-4">
          {/* Interactive Search Box */}
          <div ref={searchContainerRef} className="relative">
            {searchOpen ? (
              <div className="flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-3 py-1.5 shadow-inner transition-all duration-300 w-48 sm:w-64">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-neutral-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search plants, pots..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-neutral-400 hover:text-neutral-600 text-xs p-1"
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
                <button
                  onClick={() => setSearchOpen(false)}
                  className="text-neutral-400 hover:text-neutral-700 text-xs ml-1"
                  aria-label="Close search box"
                >
                  Close
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-600 transition hover:border-emerald-600 hover:bg-white hover:text-neutral-900"
                aria-label="Open search box"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-neutral-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <span className="hidden sm:inline">Search...</span>
              </button>
            )}

            {/* Live Search Results Dropdown */}
            {searchOpen && searchQuery.trim() !== "" && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-xl border border-neutral-200 bg-white p-3 shadow-xl z-50 animate-fade-in-up">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 px-1">
                  Product Results ({filteredProducts.length})
                </div>
                {filteredProducts.length > 0 ? (
                  <div className="divide-y divide-neutral-100">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.handle}
                        href={`/products/${product.handle}`}
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center gap-3 py-2 px-1 transition hover:bg-neutral-50 rounded-lg"
                      >
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="truncate text-xs font-medium text-neutral-900">
                            {product.title}
                          </p>
                          <p className="text-xs font-semibold text-[#006837]">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href={`/collections/all`}
                      onClick={() => setSearchOpen(false)}
                      className="block pt-2 text-center text-xs font-semibold text-[#006837] hover:underline"
                    >
                      View all products →
                    </Link>
                  </div>
                ) : (
                  <div className="py-4 text-center text-xs text-neutral-500">
                    No products matching &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={openWishlist}
            className="flex items-center gap-2 text-neutral-800 transition hover:text-black"
            aria-label="Open wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            {wishlistCount > 0 && (
              <span className="text-lg font-semibold">{wishlistCount}</span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={openCart}
            className="flex items-center gap-2 text-neutral-800 transition hover:text-black"
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            <span className="text-lg font-semibold">{totalCount}</span>
          </button>

          {/* Mobile Menu Toggle Button */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
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

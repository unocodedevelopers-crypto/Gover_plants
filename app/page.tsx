import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  getProductsByCollection,
} from "@/lib/data";
import Features from "@/components/Features";
import CountdownTimer from "@/components/CountdownTimer";

import HeroCarousel from "@/components/HeroCarousel";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";

export default function Home() {
  const bestSellers = getProductsByCollection("best-seller");
  const featured = getProductsByCollection("featured").slice(0, 4);
  const topRated = getProductsByCollection("top-rated").slice(0, 4);

  // Use products further down the catalog for "Today's Deals" so they don't duplicate other sections
  const dealsProducts = getProductsByCollection("all").slice(12, 24);

  return (
    <div>
      <HeroCarousel />

      {/* Featured Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Featured Categories
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-12 rounded-full bg-emerald-500" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Plants",
              count: 14,
              handle: "plants",
              bg: "bg-[#d8f8e8]", // light mint blue/green
              image: "/images/products/1-new-and-sale-badge-product.png",
            },
            {
              title: "Pots",
              count: 10,
              handle: "pots",
              bg: "bg-[#e2f9d7]", // soft pastel green
              image: "/images/categories/pots.png",
            },
            {
              title: "Soils",
              count: 8,
              handle: "soils",
              bg: "bg-[#d9f5fc]", // soft cyan/sky blue
              image: "/images/categories/soils.png",
            },
            {
              title: "Gardening Decor",
              count: 9,
              handle: "gardening-decor",
              bg: "bg-[#faead6]", // soft warm peach/beige
              image: "/images/categories/decor.png",
            },
          ].map((cat, idx) => (
            <Link
              key={idx}
              href={`/collections/${cat.handle}`}
              className={`group relative flex h-[320px] flex-col items-center justify-end overflow-hidden rounded-2xl ${cat.bg} p-4 transition-transform duration-300 hover:-translate-y-1`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
              <div className="relative z-10 w-[90%] rounded-full bg-white/95 py-2.5 text-center shadow-md backdrop-blur-sm transition-all group-hover:bg-white group-hover:shadow-lg">
                <h3 className="text-sm font-bold text-neutral-800">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-neutral-500">{cat.count} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Today's Deals (Replaces New Products) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-neutral-800">
              Today&apos;s Deals
            </h2>
            <div className="mt-4 h-1 w-16 bg-[#8dc63f]"></div>
          </div>

          <div className="mb-10 flex items-center justify-between bg-[#8dc63f] px-4 py-4 text-white sm:px-8">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 transition hover:bg-white hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <div className="text-lg font-bold tracking-widest sm:text-2xl">
              ENDS IN: <CountdownTimer />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 transition hover:bg-white hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>

          <AutoScrollCarousel>
            {dealsProducts.map((p) => (
              <div key={p.handle} className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start">
                <ProductCard product={p} />
              </div>
            ))}
          </AutoScrollCarousel>
        </div>
      </section>

      {/* Bestseller Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Bestseller Products
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-12 rounded-full bg-emerald-500" />
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Banner */}
          <div className="lg:w-2/5 xl:w-1/3 relative overflow-hidden rounded-xl p-8 flex flex-col justify-end min-h-[350px] group shadow-sm">
            {/* Background Video */}
            <video 
              src="/videos/sidebanner.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-extrabold mb-3 leading-tight text-white drop-shadow-md">
                Buy a great<br />Coconut
              </h3>
              <p className="text-white/90 mb-6 font-medium">Top selling picks for your space</p>
              <Link href="/collections/best-seller" className="inline-block bg-white text-[#006837] px-6 py-3 font-bold hover:bg-neutral-50 transition-colors shadow-lg">
                Shop Now
              </Link>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="lg:w-3/5 xl:w-2/3">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 h-full">
              {bestSellers.slice(0, 6).map((p) => (
                <ProductCard key={p.handle} product={p} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/collections/best-seller"
            className="inline-block text-sm font-semibold text-[#006837] hover:underline"
          >
            View all Bestsellers →
          </Link>
        </div>
      </section>

      {/* Top Rated */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
              Top Rated
            </h2>
            <div className="mx-auto mt-2 h-[3px] w-12 rounded-full bg-emerald-500" />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {topRated.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/collections/top-rated"
              className="inline-block text-sm font-semibold text-[#006837] hover:underline"
            >
              View all Top Rated →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-3xl">
            Featured
          </h2>
          <div className="mx-auto mt-2 h-[3px] w-12 rounded-full bg-emerald-500" />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/collections/featured"
            className="inline-block text-sm font-semibold text-[#006837] hover:underline"
          >
            View all Featured →
          </Link>
        </div>
      </section>
    </div>
  );
}

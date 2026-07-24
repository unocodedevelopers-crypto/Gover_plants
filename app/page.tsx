import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  getProductsByCollection,
  collectionsList,
} from "@/lib/data";
import Features from "@/components/Features";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const bestSellers = getProductsByCollection("best-seller").slice(0, 4);
  const featured = getProductsByCollection("featured").slice(0, 4);
  const topRated = getProductsByCollection("top-rated").slice(0, 4);
  const newProducts = getProductsByCollection("all").slice(0, 8);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
              New Season Arrivals
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Timeless pieces, <br /> made for everyday.
            </h1>
            <p className="mt-6 max-w-md text-neutral-300">
              Discover our latest collection of thoughtfully designed
              essentials, crafted for comfort and built to last.
            </p>
            <Link
              href="/collections/all"
              className="mt-8 inline-block rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Shop Now
            </Link>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-800 lg:aspect-[4/3]">
            <Image
              src={newProducts[0]?.image ?? "/images/site/logo.png"}
              alt="Featured hero product"
              fill
              className="object-cover opacity-90"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Featured Categories
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {collectionsList.slice(1).map((c) => {
            const sample = getProductsByCollection(c.handle)[0];
            return (
              <Link
                key={c.handle}
                href={`/collections/${c.handle}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100"
              >
                {sample && (
                  <Image
                    src={sample.image}
                    alt={c.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-5">
                  <span className="text-lg font-semibold text-white">
                    {c.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Today's Deals (Replaces New Products) */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-neutral-800">
              Today's Deals
            </h2>
            <div className="mt-4 h-1 w-16 bg-[#8dc63f]"></div>
          </div>
          
          <div className="mb-10 flex items-center justify-between bg-[#8dc63f] px-4 py-4 text-white sm:px-8">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 transition hover:bg-white hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="text-lg font-bold tracking-widest sm:text-2xl">
              ENDS IN: <CountdownTimer />
            </div>
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 transition hover:bg-white hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {newProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Bestseller Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Bestseller Products
          </h2>
          <Link
            href="/collections/best-seller"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>

      {/* Top Rated */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Top Rated
            </h2>
            <Link
              href="/collections/top-rated"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {topRated.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            Featured
          </h2>
          <Link
            href="/collections/featured"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

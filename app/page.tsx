import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import {
  getProductsByCollection,
  collectionsList,
} from "@/lib/data";

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
              count: 18,
              handle: "top-rated",
              bg: "bg-[#d8f8e8]", // light mint blue/green
              image: "/images/products/1-new-and-sale-badge-product.png",
            },
            {
              title: "Pots",
              count: 14,
              handle: "featured",
              bg: "bg-[#e2f9d7]", // soft pastel green
              image: "/images/categories/pots.png",
            },
            {
              title: "Soils",
              count: 12,
              handle: "best-seller",
              bg: "bg-[#d9f5fc]", // soft cyan/sky blue
              image: "/images/categories/soils.png",
            },
            {
              title: "Gardening Decor",
              count: 18,
              handle: "top-rated",
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

      {/* New Products */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              New Products
            </h2>
            <Link
              href="/collections/all"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {newProducts.map((p) => (
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

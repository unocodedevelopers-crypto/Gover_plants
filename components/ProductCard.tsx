"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { toggleItem, hasItem } = useWishlist();

  // Get a unique secondary image for hover state
  const currentIndex = products.findIndex((p) => p.handle === product.handle);
  const hoverImage =
    currentIndex !== -1
      ? products[(currentIndex * 11 + 13) % products.length].image
      : "/images/products/demo-product-title-1.png";

  const isInWishlist = hasItem(product.handle);

  return (
    <div className="group relative flex flex-col border border-neutral-100 bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative block aspect-[4/5] w-full overflow-hidden bg-[#f4f4f4]">
        <Link href={`/products/${product.handle}`}>
          {/* Primary Image */}
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
          {/* Secondary Hover Image */}
          <Image
            src={hoverImage}
            alt={product.title + " hover"}
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          />
        </Link>

        {/* Clean Hover Floating Toolbar with Wishlist & Quick Cart */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 rounded-full bg-white/90 p-1.5 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <button
            onClick={() => toggleItem(product)}
            className={`flex p-2 rounded-full transition hover:bg-neutral-100 ${
              isInWishlist ? "text-red-500" : "text-neutral-700"
            }`}
            title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={isInWishlist ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Details & Simple Bottom Add to Cart */}
      <div className="flex flex-1 flex-col p-4 bg-white border-t border-neutral-100 justify-between">
        <div>
          <Link
            href={`/products/${product.handle}`}
            className="text-[15px] font-medium text-neutral-800 transition hover:text-[#006837]"
          >
            {product.title}
          </Link>
        </div>

        <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-base font-bold text-[#006837]">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product, 1)}
            className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-[#006837] px-3.5 py-2 sm:py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-800 shadow-sm"
            title="Add to Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

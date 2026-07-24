"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  
  // Get a unique secondary image for the hover state
  const currentIndex = products.findIndex(p => p.handle === product.handle);
  const hoverImage = currentIndex !== -1 
    ? products[(currentIndex + 1) % products.length].image
    : "/images/products/demo-product-title-1.png";

  return (
    <div className="group relative flex flex-col border border-neutral-100 bg-white">
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

        {/* Hover Toolbar */}
        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 translate-x-4 flex-col gap-2 rounded bg-white py-3 opacity-0 shadow-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button className="flex p-2 text-neutral-600 transition hover:text-black" title="Quick View">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button className="flex p-2 text-neutral-600 transition hover:text-black" title="Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
          <button className="flex p-2 text-neutral-600 transition hover:text-black" title="Compare">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="21" y2="21"/><line x1="4" x2="20" y1="14" y2="14"/><line x1="4" x2="20" y1="7" y2="7"/><line x1="9" x2="9" y1="21" y2="18"/><line x1="9" x2="9" y1="10" y2="7"/><line x1="15" x2="15" y1="21" y2="18"/><line x1="15" x2="15" y1="10" y2="7"/></svg>
          </button>
          <button onClick={() => addItem(product, 1)} className="flex p-2 text-neutral-600 transition hover:text-black" title="Add to Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 bg-white border-t border-neutral-100">
        <Link
          href={`/products/${product.handle}`}
          className="text-[15px] text-neutral-700 hover:text-black"
        >
          {product.title}
        </Link>
        <span className="mt-2 text-lg font-bold text-[#8dc63f]">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/products/${product.handle}`}
        className="relative block aspect-square w-full overflow-hidden rounded-lg bg-neutral-100"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        />
      </Link>
      <div className="mt-3 flex flex-1 flex-col">
        <Link
          href={`/products/${product.handle}`}
          className="text-sm font-medium text-neutral-900 hover:underline"
        >
          {product.title}
        </Link>
        <span className="mt-1 text-sm text-neutral-500">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={() => addItem(product, 1)}
          className="mt-3 rounded-md border border-neutral-900 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

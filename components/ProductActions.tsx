"use client";

import { useState } from "react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="h-10 w-10 rounded-md border border-neutral-300 text-lg hover:bg-neutral-100"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center text-base">{quantity}</span>
        <button
          onClick={() => setQuantity((q) => q + 1)}
          className="h-10 w-10 rounded-md border border-neutral-300 text-lg hover:bg-neutral-100"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        onClick={() => addItem(product, quantity)}
        className="mt-4 w-full rounded-md bg-neutral-900 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-neutral-800 sm:w-auto sm:px-10"
      >
        Add to Cart
      </button>
    </div>
  );
}

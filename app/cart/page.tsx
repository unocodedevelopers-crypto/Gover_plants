"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { lines, updateQuantity, removeItem, subtotal } = useCart();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-neutral-900">Your cart is empty</h1>
        <p className="mt-3 text-neutral-600">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/collections/all"
          className="mt-6 inline-block rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-neutral-900">Your Cart</h1>

      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {lines.map((line) => (
          <div key={line.product.handle} className="flex gap-4 py-6">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100">
              <Image
                src={line.product.image}
                alt={line.product.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-start justify-between">
                <Link
                  href={`/products/${line.product.handle}`}
                  className="font-medium text-neutral-900 hover:underline"
                >
                  {line.product.title}
                </Link>
                <button
                  onClick={() => removeItem(line.product.handle)}
                  className="text-sm text-neutral-400 hover:text-neutral-700"
                >
                  Remove
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(line.product.handle, line.quantity - 1)
                    }
                    className="h-8 w-8 rounded border border-neutral-300 hover:bg-neutral-100"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{line.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(line.product.handle, line.quantity + 1)
                    }
                    className="h-8 w-8 rounded border border-neutral-300 hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>
                <span className="font-medium text-neutral-900">
                  ${(line.product.price * line.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-end gap-4">
        <div className="flex w-full max-w-xs justify-between text-lg font-semibold text-neutral-900">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="w-full max-w-xs rounded-md bg-[#006837] py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-800 shadow-sm"
        >
          Checkout
        </Link>
        <Link
          href="/collections/all"
          className="text-sm text-neutral-600 hover:text-neutral-900"
        >
          ← Continue shopping
        </Link>
      </div>
    </div>
  );
}

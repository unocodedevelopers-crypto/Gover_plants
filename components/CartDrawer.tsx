"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeItem, subtotal } =
    useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-neutral-500 hover:text-neutral-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <p className="mt-10 text-center text-sm text-neutral-500">
              Your cart is empty.
            </p>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => (
                <li key={line.product.handle} className="flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100">
                    <Image
                      src={line.product.image}
                      alt={line.product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium text-neutral-900">
                        {line.product.title}
                      </p>
                      <button
                        onClick={() => removeItem(line.product.handle)}
                        className="ml-2 text-xs text-neutral-400 hover:text-neutral-700"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-neutral-500">
                      ${line.product.price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(line.product.handle, line.quantity - 1)
                        }
                        className="h-7 w-7 rounded border border-neutral-300 text-sm hover:bg-neutral-100"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-sm">
                        {line.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(line.product.handle, line.quantity + 1)
                        }
                        className="h-7 w-7 rounded border border-neutral-300 text-sm hover:bg-neutral-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-neutral-200 px-6 py-5">
          <div className="mb-4 flex items-center justify-between text-sm font-medium">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link
            href="/cart"
            onClick={closeCart}
            className="block w-full rounded-md bg-neutral-900 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800"
          >
            View Cart
          </Link>
        </div>
      </aside>
    </>
  );
}

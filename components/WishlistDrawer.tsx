"use client";

import Image from "next/image";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/data";

export default function WishlistDrawer() {
  const { items, isOpen, closeWishlist, removeItem } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem(product, 1);
    removeItem(product.handle);
    closeWishlist();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeWishlist}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
          <h2 className="text-lg font-semibold">Your Wishlist</h2>
          <button
            onClick={closeWishlist}
            aria-label="Close wishlist"
            className="text-neutral-500 hover:text-neutral-900"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-neutral-500">
              Your wishlist is empty.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map((product) => (
                <li key={product.handle} className="flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium text-neutral-900">
                        {product.title}
                      </p>
                      <button
                        onClick={() => removeItem(product.handle)}
                        className="ml-2 text-xs text-neutral-400 hover:text-neutral-700"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-1 text-sm text-neutral-500">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="rounded bg-black px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
}

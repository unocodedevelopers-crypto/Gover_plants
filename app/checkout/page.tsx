"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { lines, subtotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const shippingFee = subtotal > 75 || lines.length === 0 ? 0 : 9.99;
  const total = subtotal + shippingFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-[#006837]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="mt-6 text-3xl font-bold text-neutral-900">
          Order Placed Successfully!
        </h1>
        <p className="mt-3 text-neutral-600">
          Thank you for shopping with Gover Garden Centre. We&apos;ve sent your order confirmation email.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/collections/all"
            className="rounded-lg bg-[#006837] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-neutral-900">Your checkout is empty</h1>
        <p className="mt-2 text-neutral-600">
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link
          href="/collections/all"
          className="mt-6 inline-block rounded-lg bg-[#006837] px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-neutral-500">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <Link href="/cart" className="hover:text-neutral-900">
            Cart
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#006837] font-semibold">Checkout</span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Form Area */}
          <div className="lg:col-span-7 space-y-8">
            <form onSubmit={handleSubmitOrder} className="space-y-8">
              {/* Contact Information */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
                <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                  1. Contact Information
                </h2>
                <div className="mt-4">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-neutral-300 p-3 text-sm focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
                <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                  2. Shipping Address
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      className="w-full rounded-lg border border-neutral-300 p-3 text-sm focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      className="w-full rounded-lg border border-neutral-300 p-3 text-sm focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="House No., Street Name, Area"
                      className="w-full rounded-lg border border-neutral-300 p-3 text-sm focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="City"
                      className="w-full rounded-lg border border-neutral-300 p-3 text-sm focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="PIN / ZIP Code"
                      className="w-full rounded-lg border border-neutral-300 p-3 text-sm focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-neutral-300 p-3 text-sm focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
                <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide">
                  3. Payment Method
                </h2>
                <div className="mt-4 space-y-3">
                  <label
                    onClick={() => setPaymentMethod("card")}
                    className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition ${
                      paymentMethod === "card"
                        ? "border-[#006837] bg-emerald-50/50"
                        : "border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-[#006837]"
                    />
                    <span className="text-sm font-semibold text-neutral-900">
                      Credit / Debit Card
                    </span>
                  </label>

                  <label
                    onClick={() => setPaymentMethod("cod")}
                    className={`flex items-center gap-3 rounded-xl border p-4 cursor-pointer transition ${
                      paymentMethod === "cod"
                        ? "border-[#006837] bg-emerald-50/50"
                        : "border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-[#006837]"
                    />
                    <span className="text-sm font-semibold text-neutral-900">
                      Cash on Delivery (COD)
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-xl bg-[#006837] py-4 text-base font-bold text-white uppercase tracking-wider transition hover:bg-emerald-800 shadow-md active:scale-98"
                >
                  Complete Order (${total.toFixed(2)})
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
              <h2 className="text-lg font-bold text-neutral-900 uppercase tracking-wide border-b border-neutral-200 pb-4">
                Order Summary ({lines.length} items)
              </h2>

              <div className="mt-4 max-h-80 overflow-y-auto divide-y divide-neutral-100 pr-1">
                {lines.map((line) => (
                  <div
                    key={line.product.handle}
                    className="flex items-center gap-4 py-3"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                      <Image
                        src={line.product.image}
                        alt={line.product.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-800 text-[10px] font-bold text-white">
                        {line.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate text-xs font-semibold text-neutral-900">
                        {line.product.title}
                      </p>
                      <p className="text-xs text-neutral-500">
                        ${line.product.price.toFixed(2)} x {line.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-neutral-900">
                      ${(line.product.price * line.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-neutral-200 pt-4 space-y-2 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-[#006837] font-semibold">FREE</span>
                    ) : (
                      `$${shippingFee.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between border-t border-neutral-200 pt-3 text-lg font-bold text-neutral-900">
                  <span>Total</span>
                  <span className="text-[#006837]">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

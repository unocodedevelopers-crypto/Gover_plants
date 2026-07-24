import React from "react";

export default function Features() {
  return (
    <section className="border-t border-b border-neutral-100 bg-white py-12 my-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-14 px-4 sm:flex-row sm:px-6 lg:px-8">
        {/* Feature 1 */}
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="M10 17h4V5H2v12h3" />
            <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h2" />
            <circle cx="7.5" cy="17.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
          </svg>
          <div>
            <h4 className="text-xl font-semibold text-[#8dc63f]">On Time Delivery</h4>
            <p className="text-base text-neutral-500">On time delivery on order</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            <path d="M19 21v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1" />
          </svg>
          <div>
            <h4 className="text-xl font-semibold text-[#8dc63f]">Support 24/7</h4>
            <p className="text-base text-neutral-500">Contact us 24 hrs a day</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-black"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <div>
            <h4 className="text-xl font-semibold text-[#8dc63f]">Payment Secure</h4>
            <p className="text-base text-neutral-500">100% secure payment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

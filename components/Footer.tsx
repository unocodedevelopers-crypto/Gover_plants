import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold tracking-wide">VESOZ</h3>
          <p className="mt-3 text-sm text-neutral-600">
            123 Main Street, Anytown, CA 12345 – USA
          </p>
          <p className="mt-1 text-sm text-neutral-600">
            Mobile: (08) 123 456 789
          </p>
          <p className="mt-1 text-sm text-neutral-600">
            yourmail@domain.com
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Shop
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li><Link href="/collections/all" className="hover:text-neutral-950">All Products</Link></li>
            <li><Link href="/collections/best-seller" className="hover:text-neutral-950">Best Sellers</Link></li>
            <li><Link href="/collections/featured" className="hover:text-neutral-950">Featured</Link></li>
            <li><Link href="/collections/top-rated" className="hover:text-neutral-950">Top Rated</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li><Link href="/about-us" className="hover:text-neutral-950">About Us</Link></li>
            <li><Link href="/contact-us" className="hover:text-neutral-950">Contact Us</Link></li>
            <li><Link href="/faq" className="hover:text-neutral-950">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Newsletter
          </h4>
          <p className="mt-4 text-sm text-neutral-600">
            Subscribe for updates on new arrivals and offers.
          </p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Vesoz. All rights reserved.
      </div>
    </footer>
  );
}

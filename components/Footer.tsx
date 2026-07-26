import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-[#f2f8f2]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/mascot.svg"
              alt="Gover Garden Centre Mascot"
              width={48}
              height={62}
              unoptimized
              className="h-12 w-auto object-contain shrink-0"
            />
            <h3 className="text-lg font-bold tracking-wide text-[#006837]">
              GOVER GARDEN CENTRE
            </h3>
          </div>
          <p className="mt-3 text-sm text-neutral-600">
            5/(1), Near Sithik Nagar,
            <br />
            Vadakku Thottappaguthi, Idikarai,
            <br />
            Coimbatore - 641 022, Tamil Nadu, India.
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Phone : 0422 2441494
            <br />
            Fax : 0422 2441494
            <br />
            Mobile : +91 97917 68498
          </p>
          <p className="mt-2 text-sm text-neutral-600">
            Email :{" "}
            <a
              href="mailto:goverindia@gmail.com"
              className="text-[#006837] underline transition hover:text-emerald-800"
            >
              goverindia@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Products
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li><Link href="/collections/plants" className="hover:text-neutral-950">Plants</Link></li>
            <li><Link href="/collections/pots" className="hover:text-neutral-950">Pots &amp; Planters</Link></li>
            <li><Link href="/collections/soils" className="hover:text-neutral-950">Soils &amp; Fertilizers</Link></li>
            <li><Link href="/collections/gardening-decor" className="hover:text-neutral-950">Gardening Decor</Link></li>
          </ul>
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
      </div>

      <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Gover Garden Centre. All rights reserved.
      </div>
    </footer>
  );
}

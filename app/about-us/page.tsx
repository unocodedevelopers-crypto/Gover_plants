import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg sm:h-80 lg:h-full lg:min-h-[400px]">
          <Image
            src="/images/products/plants_bg.jpg"
            alt="Gardening and beautiful plants"
            fill
            className="absolute inset-0 object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Welcome to Gover Organics
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Gover India is a decade experienced firm innovated by entrepreneurs who are experts in the field of horticulture. Being the producer and brand owner of gover brand of planters, Gover India specializes in producing and distributing a wide range of quality bound planters and others horticulture accessories.

We are one of the outstanding manufacturers of flower pots & plant container. We serve as one of the best one stop shop for all such assorted products that are carted with a trusted promise of endurance and supremacy. All these products are extensively urged in the universal market sector due to their remarkable quality and efficiency. We are having enough frameworks in generating the flower pots & plant container with historical manner. We are having a sophisticated team for shipping these easily breakable products safely to our beloved buyers across worldwide.

          </p>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-900">
            Our Vision
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            To build a brand people trust — one where thoughtful design meets
            everyday practicality.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-900">
            Our Mission
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Creating high-quality, accessible products without compromising
            on craftsmanship or sustainability.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-900">
            Our Goal
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            To become a name synonymous with reliability, style, and honest
            value for our customers.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-24 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl text-center">
          Why Choose Us?
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-semibold text-neutral-900">
              Expertise in Horticulture
            </h3>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              With a decade of experience, our team consists of experts who deeply understand plants and what it takes for them to thrive. We bring you products crafted with pure knowledge and passion.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-semibold text-neutral-900">
              Premium Quality
            </h3>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              Our flower pots and plant containers are manufactured with a trusted promise of endurance. We never compromise on craftsmanship, ensuring you get the best accessories for your garden.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
            <h3 className="text-lg font-semibold text-neutral-900">
              Safe Global Shipping
            </h3>
            <p className="mt-4 text-sm text-neutral-600 leading-relaxed">
              We have a sophisticated team dedicated to safely shipping our carefully crafted planters to buyers worldwide, ensuring they arrive in perfect condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

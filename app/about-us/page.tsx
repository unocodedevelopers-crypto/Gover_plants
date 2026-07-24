export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Welcome to Vesoz
      </h1>
      <p className="mt-6 text-neutral-600">
        We believe great style shouldn&apos;t come at the cost of quality or
        comfort. Since day one, our mission has been to design pieces that
        feel as good as they look — made to be worn every day, for years to
        come.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
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
    </div>
  );
}

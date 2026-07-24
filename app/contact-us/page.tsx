export default function ContactUsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Have a question about an order, a product, or anything else?
        We&apos;d love to hear from you.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
            Tell us your project
          </h2>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-neutral-700">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-neutral-900 focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6 text-sm text-neutral-600">
          <div>
            <h3 className="font-semibold text-neutral-900">Address</h3>
            <p className="mt-1">123 Main Street, Anytown, CA 12345 – USA</p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">Phone</h3>
            <p className="mt-1">Mobile: (08) 123 456 789</p>
            <p>Hotline: 1009 678 456</p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900">Email</h3>
            <p className="mt-1">yourmail@domain.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumbs matching user reference screenshot */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900 transition">
          Home
        </Link>
        <span className="mx-2 text-neutral-400">&gt;</span>
        <span className="text-[#006837] font-semibold">Contact Us</span>
      </div>

      {/* Map Section */}
      <div className="w-full border-t border-neutral-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.51341065182!2d76.88483244837853!3d11.013968600128795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716353903123!5m2!1sen!2sin"
          width="100%"
          height="380"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Gover Garden Centre Store Location Map"
        ></iframe>
      </div>

      {/* Contact Form and Details */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Form */}
          <div className="bg-white">
            <h2 className="text-2xl font-bold tracking-wide uppercase text-neutral-900 sm:text-3xl">
              Tell Us Your Project
            </h2>
            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full border border-neutral-200 p-3 text-sm focus:border-[#006837] focus:outline-none"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Your Email *
                </label>
                <input
                  type="email"
                  className="w-full border border-neutral-200 p-3 text-sm focus:border-[#006837] focus:outline-none"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full border border-neutral-200 p-3 text-sm focus:border-[#006837] focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Your Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full border border-neutral-200 p-3 text-sm focus:border-[#006837] focus:outline-none"
                  placeholder="Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded bg-[#006837] px-8 py-3 text-sm font-bold text-white transition hover:bg-emerald-800"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details & Animated Mascot */}
          <div className="bg-[#f8f8f8] p-8 sm:p-12 relative flex flex-col justify-between rounded-lg">
            <div>
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-neutral-900">
                  Contact Us
                </h2>
                {/* Unmodified Mascot image with floating animation */}
                <div className="w-16 h-20 relative animate-bounce">
                  <Image
                    src="/mascot.svg"
                    alt="Gover Mascot"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Welcome to Gover Garden Centre! We offer a wide selection of healthy plants, decorative pots, fertilizers, soils, and expert gardening support.
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center space-x-3 text-lg font-medium text-neutral-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <h3>Address</h3>
                  </div>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    5/(1), Near Sithik Nagar,
                    <br />
                    Vadakku Thottappaguthi, Idikarai,
                    <br />
                    Coimbatore - 641 022, Tamil Nadu, India.
                  </p>
                </div>

                {/* Phone */}
                <div className="border-b border-neutral-200 pb-6">
                  <div className="flex items-center space-x-3 text-lg font-medium text-neutral-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <h3>Phone</h3>
                  </div>
                  <div className="mt-3 space-y-1 text-sm text-neutral-600">
                    <p>Phone : 0422 2441494</p>
                    <p>Fax : 0422 2441494</p>
                    <p>Mobile : +91 97917 68498</p>
                  </div>
                </div>

                {/* Email */}
                <div className="pb-2">
                  <div className="flex items-center space-x-3 text-lg font-medium text-neutral-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <h3>Email</h3>
                  </div>
                  <div className="mt-3 space-y-1 text-sm text-neutral-600">
                    <a href="mailto:goverindia@gmail.com" className="text-[#006837] hover:underline">
                      goverindia@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

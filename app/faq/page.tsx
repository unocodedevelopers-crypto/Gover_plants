const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders are typically processed within 1-2 business days and arrive within 5-7 business days depending on your location.",
  },
  {
    q: "What is your return policy?",
    a: "We offer 30-day easy returns on unworn, unwashed items with original tags attached.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes — we ship to most countries. Shipping costs and delivery times vary by destination.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order ships, you'll receive a confirmation email with a tracking link.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Orders can be modified or cancelled within 1 hour of placing them. Contact us right away if you need to make a change.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Frequently Asked Questions
      </h1>

      <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
        {faqs.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-neutral-900">
              {item.q}
              <span className="ml-4 text-neutral-400 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-neutral-600">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

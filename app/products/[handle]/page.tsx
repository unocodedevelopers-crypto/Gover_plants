import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductByHandle, getProductsByCollection } from "@/lib/data";
import ProductActions from "@/components/ProductActions";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) notFound();

  const related = getProductsByCollection(product.collections[1] ?? "all")
    .filter((p) => p.handle !== product.handle)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="mb-8 text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections/all" className="hover:text-neutral-900">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-neutral-900">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
            {product.title}
          </h1>
          <p className="mt-3 text-xl font-medium text-neutral-900">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-6 max-w-md text-neutral-600">
            A thoughtfully crafted piece from our collection — made with
            quality materials and built for everyday comfort.
          </p>

          <ProductActions product={product} />

          <div className="mt-10 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
            <p>Free shipping on orders over $75.</p>
            <p className="mt-2">30-day easy returns.</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold text-neutral-900">
            You may also like
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

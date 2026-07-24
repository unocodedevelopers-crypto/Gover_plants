import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  collectionsList,
  getCollectionByHandle,
  getProductsByCollection,
} from "@/lib/data";

export function generateStaticParams() {
  return collectionsList.map((c) => ({ handle: c.handle }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = getCollectionByHandle(handle);
  if (!collection) notFound();

  const products = getProductsByCollection(handle);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
          {collection.title}
        </h1>
        <p className="mt-3 text-neutral-600">{collection.description}</p>
      </div>

      <div className="mb-6 flex items-center justify-between text-sm text-neutral-500">
        <span>{products.length} products</span>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </div>
    </div>
  );
}

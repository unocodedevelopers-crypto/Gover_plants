import Image from "next/image";
import Link from "next/link";
import { collectionsList, getProductsByCollection } from "@/lib/data";

export default function CollectionsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-10 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Collections
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {collectionsList.map((c) => {
          const sample = getProductsByCollection(c.handle)[0];
          return (
            <Link
              key={c.handle}
              href={`/collections/${c.handle}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100"
            >
              {sample && (
                <Image
                  src={sample.image}
                  alt={c.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-5">
                <span className="text-lg font-semibold text-white">
                  {c.title}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

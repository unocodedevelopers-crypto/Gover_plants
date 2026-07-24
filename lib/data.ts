export type Product = {
  handle: string;
  title: string;
  price: number;
  image: string;
  collections: string[];
};

export const products: Product[] = [
  { handle: "1-new-and-sale-badge-product", title: "1. New and sale badge product", price: 110.0, image: "/images/products/1-new-and-sale-badge-product.png", collections: ["all", "best-seller", "featured", "plants"] },
  { handle: "10-this-is-the-large-title-for-testing-large-title-and-there-is-an-image-for-testing", title: "10. This is the large title", price: 19.0, image: "/images/products/10-this-is-the-large-title-for-testing-large-title-and-there-is-an-image-for-testing.png", collections: ["all", "featured", "plants", "soils"] },
  { handle: "11-product-with-video", title: "11. Product with video", price: 39.0, image: "/images/products/11-product-with-video.png", collections: ["all", "top-rated", "plants"] },
  { handle: "12-unique-content-for-each-product-on-the-product-tab", title: "12. Unique content for each", price: 99.0, image: "/images/products/12-unique-content-for-each-product-on-the-product-tab.png", collections: ["all", "best-seller", "gardening-decor"] },
  { handle: "2-new-badge-product", title: "2. New badge product", price: 80.0, image: "/images/products/2-new-badge-product.png", collections: ["all", "featured", "pots"] },
  { handle: "3-variable-product", title: "3. Variable product", price: 40.0, image: "/images/products/3-variable-product.png", collections: ["all", "top-rated", "best-seller", "plants"] },
  { handle: "4-soldout-product", title: "4. Soldout product", price: 19.0, image: "/images/products/4-soldout-product.png", collections: ["all", "best-seller", "pots"] },
  { handle: "5-simple-product", title: "5. Simple product", price: 50.0, image: "/images/products/5-simple-product.png", collections: ["all", "featured", "plants"] },
  { handle: "6-variable-with-soldout-product", title: "6. Variable with soldout", price: 55.0, image: "/images/products/6-variable-with-soldout-product.png", collections: ["all", "top-rated", "soils"] },
  { handle: "7-sample-affiliate-product", title: "7. Sample affiliate product", price: 29.0, image: "/images/products/7-sample-affiliate-product.png", collections: ["all", "best-seller", "gardening-decor"] },
  { handle: "8-countdown-product", title: "8. Countdown product", price: 39.0, image: "/images/products/8-countdown-product.png", collections: ["all", "featured", "top-rated", "plants"] },
  { handle: "9-without-shortcode-product", title: "9. Without shortcode", price: 79.0, image: "/images/products/9-without-shortcode-product.png", collections: ["all", "top-rated", "pots"] },
  { handle: "demo-product-title-1", title: "Demo product title", price: 80.0, image: "/images/products/demo-product-title-1.png", collections: ["all", "best-seller", "plants"] },
  { handle: "demo-product-title-2", title: "Demo product title", price: 50.0, image: "/images/products/demo-product-title-2.png", collections: ["all", "featured", "pots"] },
  { handle: "demo-product-title-3", title: "Demo product title", price: 29.0, image: "/images/products/demo-product-title-3.png", collections: ["all", "top-rated", "soils"] },
  { handle: "demo-product-title", title: "Demo product title", price: 19.0, image: "/images/products/demo-product-title.png", collections: ["all", "best-seller", "featured", "gardening-decor"] },
  { handle: "dummy-product-name-1", title: "Dummy product name", price: 80.0, image: "/images/products/dummy-product-name-1.png", collections: ["all", "featured", "plants"] },
  { handle: "dummy-product-name-2", title: "Dummy product name", price: 19.0, image: "/images/products/dummy-product-name-2.png", collections: ["all", "top-rated", "pots"] },
  { handle: "dummy-product-name-3", title: "Dummy product name", price: 29.0, image: "/images/products/dummy-product-name-3.png", collections: ["all", "best-seller", "soils"] },
  { handle: "dummy-product-name-4", title: "Dummy product name", price: 79.0, image: "/images/products/dummy-product-name-4.png", collections: ["all", "featured", "gardening-decor"] },
  { handle: "dummy-product-name", title: "Dummy product name", price: 110.0, image: "/images/products/dummy-product-name.png", collections: ["all", "top-rated", "best-seller", "plants"] },
  { handle: "dummy-text-for-title-1", title: "Dummy text for title", price: 40.0, image: "/images/products/dummy-text-for-title-1.png", collections: ["all", "best-seller", "pots"] },
  { handle: "dummy-text-for-title-2", title: "Dummy text for title", price: 55.0, image: "/images/products/dummy-text-for-title-2.png", collections: ["all", "featured", "soils"] },
  { handle: "dummy-text-for-title-3", title: "Dummy text for title", price: 39.0, image: "/images/products/dummy-text-for-title-3.png", collections: ["all", "top-rated", "gardening-decor"] },
  { handle: "dummy-text-for-title", title: "Dummy text for title", price: 39.0, image: "/images/products/dummy-text-for-title.png", collections: ["all", "best-seller", "plants"] },
  { handle: "preorder-product", title: "Preorder Product", price: 19.0, image: "/images/products/preorder-product.png", collections: ["all", "featured", "top-rated", "pots"] },
  { handle: "product-dummy-title-1", title: "Product dummy title", price: 39.0, image: "/images/products/product-dummy-title-1.png", collections: ["all", "top-rated", "soils"] },
  { handle: "product-dummy-title-2", title: "Product dummy title", price: 19.0, image: "/images/products/product-dummy-title-2.png", collections: ["all", "best-seller", "gardening-decor"] },
  { handle: "product-dummy-title-3", title: "Product dummy title", price: 55.0, image: "/images/products/product-dummy-title-3.png", collections: ["all", "featured", "plants"] },
  { handle: "product-dummy-title-4", title: "Product dummy title", price: 79.0, image: "/images/products/product-dummy-title-4.png", collections: ["all", "top-rated", "pots"] },
  { handle: "product-dummy-title", title: "Product dummy title", price: 110.0, image: "/images/products/product-dummy-title.png", collections: ["all", "best-seller", "featured", "soils"] },
  { handle: "product-title-here-1", title: "Product title here", price: 40.0, image: "/images/products/product-title-here-1.png", collections: ["all", "featured", "gardening-decor"] },
  { handle: "product-title-here-2", title: "Product title here", price: 50.0, image: "/images/products/product-title-here-2.png", collections: ["all", "top-rated", "plants"] },
  { handle: "product-title-here-3", title: "Product title here", price: 39.0, image: "/images/products/product-title-here-3.png", collections: ["all", "best-seller", "pots"] },
  { handle: "product-title-here", title: "Product title here", price: 19.0, image: "/images/products/product-title-here.png", collections: ["all", "featured", "soils"] },
];

export const collectionsList = [
  { handle: "all", title: "All Products", description: "Browse our entire catalog." },
  { handle: "plants", title: "Plants", description: "Fresh, healthy indoor & outdoor plants." },
  { handle: "pots", title: "Pots & Planters", description: "Modern ceramic & terracotta pots." },
  { handle: "soils", title: "Soils & Fertilizers", description: "Organic potting mix and plant food." },
  { handle: "gardening-decor", title: "Gardening Decor", description: "Aesthetic garden tools and outdoor decor." },
  { handle: "best-seller", title: "Best Sellers", description: "Our most popular picks." },
  { handle: "featured", title: "Featured", description: "Hand-picked items we love." },
  { handle: "top-rated", title: "Top Rated", description: "Loved by our customers." },
];

export function getProductByHandle(handle: string) {
  return products.find((p) => p.handle === handle);
}

export function getProductsByCollection(handle: string) {
  if (handle === "all") return products;
  return products.filter((p) => p.collections.includes(handle));
}

export function getCollectionByHandle(handle: string) {
  return collectionsList.find((c) => c.handle === handle);
}
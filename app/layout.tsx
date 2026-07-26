import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import WishlistDrawer from "@/components/WishlistDrawer";

import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Gover Garden Centre",
  description: "Gover Garden Centre online store",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans" suppressHydrationWarning>
        <Preloader />
        <WishlistProvider>
          <CartProvider>
            <Header />
            <CartDrawer />
            <WishlistDrawer />
            <main className="flex-1 pt-24 sm:pt-28">{children}</main>
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}

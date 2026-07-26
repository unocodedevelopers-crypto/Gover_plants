"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "./data";

type WishlistContextType = {
  items: Product[];
  toggleItem: (product: Product) => void;
  removeItem: (handle: string) => void;
  clearWishlist: () => void;
  isOpen: boolean;
  openWishlist: () => void;
  closeWishlist: () => void;
  totalCount: number;
  hasItem: (handle: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.handle === product.handle);
      if (existing) {
        return prev.filter((p) => p.handle !== product.handle);
      }
      setIsOpen(true);
      return [...prev, product];
    });
  };

  const removeItem = (handle: string) => {
    setItems((prev) => prev.filter((p) => p.handle !== handle));
  };

  const clearWishlist = () => setItems([]);
  const openWishlist = () => setIsOpen(true);
  const closeWishlist = () => setIsOpen(false);

  const totalCount = items.length;
  
  const hasItem = (handle: string) => {
    return items.some((p) => p.handle === handle);
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        toggleItem,
        removeItem,
        clearWishlist,
        isOpen,
        openWishlist,
        closeWishlist,
        totalCount,
        hasItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}

"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { Product } from "./data";

export type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  lines: CartLine[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (handle: string) => void;
  updateQuantity: (handle: string, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  subtotal: number;
  totalCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product, quantity: number = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.handle === product.handle);
      if (existing) {
        return prev.map((l) =>
          l.product.handle === product.handle
            ? { ...l, quantity: l.quantity + quantity }
            : l
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeItem = (handle: string) => {
    setLines((prev) => prev.filter((l) => l.product.handle !== handle));
  };

  const updateQuantity = (handle: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(handle);
      return;
    }
    setLines((prev) =>
      prev.map((l) => (l.product.handle === handle ? { ...l, quantity } : l))
    );
  };

  const clearCart = () => setLines([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0),
    [lines]
  );
  const totalCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  return (
    <CartContext.Provider
      value={{
        lines,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart,
        closeCart,
        subtotal,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

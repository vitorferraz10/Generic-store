"use client";

import { useProduct } from "@/hooks/useProducts";
import { ShelfProducts } from "./components/Shelf";
import { Toaster } from "./components/ui/toaster";

export default function Home() {
  const { products } = useProduct();

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <ShelfProducts listProduct={products || []} />
      <Toaster />
    </div>
  );
}

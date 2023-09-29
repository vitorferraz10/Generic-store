"use client";

import { useProduct } from "@/hooks/useProducts";
import { ShelfProducts } from "./components/Shelf";

export default function Home() {
  const { products } = useProduct();

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <ShelfProducts listProduct={products || []} />
    </div>
  );
}

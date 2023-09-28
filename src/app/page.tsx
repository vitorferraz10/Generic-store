"use client";

import { useProduct } from "@/hooks/useProducts";
import { ShelfProducts } from "./components/Shelf";

export default function Home() {
  const { products } = useProduct();

  return (
    <div>
      <ShelfProducts listProduct={products || []} />
    </div>
  );
}

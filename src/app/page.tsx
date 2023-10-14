"use client";

import { useProduct } from "@/hooks/useProducts";
import { ShelfProducts } from "@/components/Shelf";
import { Toaster } from "@/components/ui/toaster";
import BannerMain from "@/components/Banner";

export default function Home() {
  const { products } = useProduct();

  return (
    <div className="h-full w-full">
     <BannerMain />
     <ShelfProducts listProduct={products!}/>
      <Toaster />
    </div>
  );
}

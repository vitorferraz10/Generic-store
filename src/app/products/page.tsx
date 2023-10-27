"use client";
import { CardProducts } from "@/components/CardProducts";
import { useProduct } from "@/hooks/useProducts";
import Link from "next/link";

export default function Products() {
  const { products } = useProduct();
  return (
    <div className="h-screen flex justify-center flex-wrap w-full p-4 gap-4">
      {products?.map((item) => (
        <Link href={`/details/${item.id}`}>
          <CardProducts {...item} size="default" />
        </Link>
      ))}
    </div>
  );
}

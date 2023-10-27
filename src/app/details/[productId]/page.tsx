"use client";
import { CardProducts } from "@/components/CardProducts";
import { useDetails } from "@/hooks/useDetails";
import { Skeleton } from "@/components/ui/skeleton";

export default function Details({ params }: { params: { productId: string } }) {
  const { productFiltered } = useDetails(params.productId);

  return (
    <div className="h-screen flex justify-center items-center w-full">
      <CardProducts
        key={Math.random()}
        images={productFiltered?.images!}
        name={productFiltered?.name!}
        description={productFiltered?.description}
        price={productFiltered?.price!}
        id={productFiltered?.id!}
        currency={productFiltered?.currency}
        size="default"
      />
    </div>
  );
}

import { useMemo } from "react";
import { useProduct } from "../useProducts";

export function useDetails(idProduct: string) {
  const { products } = useProduct();


  const productFiltered = useMemo(
    () => products?.find((res) => res.id === idProduct),
    [idProduct, products]
  );

  return { productFiltered };
}

import { ProductCartType } from "@/types/products";
import { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";



export function useCart() {
  const [productCart, setProductCart] = useState<ProductCartType[]>([]);
  const { cartDetails } = useShoppingCart();

  useEffect(() => {
    let entries: ProductCartType[] = [];

    if (cartDetails) {
      Object.keys(cartDetails!).map((key) => {
        const entry = cartDetails[key];
        if (entry) {
          entries.push(entry as unknown as ProductCartType);
        }
      });
    }

    setProductCart(entries);
  }, [cartDetails]);

  return { productCart };
}

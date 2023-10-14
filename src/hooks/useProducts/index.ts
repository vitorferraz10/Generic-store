
import stripe from "@/services/stripe";
import { ProductsType } from "@/types/products";
import { useEffect, useState } from "react";
import Stripe from "stripe";

export function useProduct() {
  const [products, setProducts] = useState<ProductsType[]>();
  useEffect(() => {
    async function getProducts() {
      const dataProducts = await stripe.products.list({
        limit: 9,
        expand: ["data.default_price"],
      });

      const formaterProducts = dataProducts.data.map(
        (p: Stripe.Product): ProductsType => {
          return {
            active: p.active,
            created: p.created,
            price: (p.default_price as Stripe.Price)?.unit_amount || 0,
            images: p.images,
            name: p.name,
            description: p.description,
            id: p.id,
            object: p.object,
          };
        }
      );

      setProducts(formaterProducts);
    }

    getProducts();
  }, []);

  return { products };
}

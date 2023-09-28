"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { ProductsType } from "@/types/products";
import { CardProducts } from "../CardProducts";

export function ShelfProducts({
  listProduct,
}: {
  listProduct: ProductsType[];
}) {
  return (
    <ul>
      <CardProducts />
      {listProduct.map(({ images, name }) => (
        <>
          <li>
            <img src={images[0]} />
          </li>
          <li>{name}</li>
        </>
      ))}
    </ul>
  );
}

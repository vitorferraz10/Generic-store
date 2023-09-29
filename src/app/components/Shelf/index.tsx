"use client";

import { ProductsType } from "@/types/products";
import { CardProducts } from "../CardProducts";

export function ShelfProducts({
  listProduct,
}: {
  listProduct: ProductsType[];
}) {
  return (
    <ul className="flex gap-5 flex-col md:flex-row">
      {listProduct.map(({ images, name, description, price, id }) => (
        <>
          <CardProducts
            key={Math.random()}
            images={images}
            name={name}
            description={description}
            price={price}
            id={id}
          />
        </>
      ))}
    </ul>
  );
}

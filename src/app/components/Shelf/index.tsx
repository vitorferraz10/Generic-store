"use client";

import { ProductsType } from "@/types/products";
import { CardProducts } from "../CardProducts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "./type";
export function ShelfProducts({
  listProduct,
}: {
  listProduct: ProductsType[];
}) {

  return (
    <div className="max-w-[1280px] mx-auto my-10 px-3 md:px-0">
      <h2 className="uppercase text-2xl mb-3">Mais <span className="uppercase font-bold text-2xl">vendidos</span></h2>
      <Slider {...settings}>
        {listProduct?.map(
          ({ images, name, description, price, id, currency }) => (
            <>
              <CardProducts
                key={Math.random()}
                images={images}
                name={name}
                description={description}
                price={price}
                id={id}
                currency={currency}
                size="small"
              />
            </>
          )
        )}
      </Slider>
    </div>
  );
}

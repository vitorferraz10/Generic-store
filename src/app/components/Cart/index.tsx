"use client";
import React from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { GiShoppingCart } from "react-icons/gi";
import { DebugCart, useShoppingCart } from "use-shopping-cart";
import { useCart } from "@/hooks/useCart";
import ProductCart from "./ProductsCard";

const Cart = () => {
  const { productCart } = useCart();

  console.log(productCart);
  return (
    <Sheet>
      <SheetTrigger>
        <GiShoppingCart className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Items no carrinho:</SheetTitle>
        </SheetHeader>
        <div className="flex gap-2 flex-col">
          {productCart.map((p) => (
            <ProductCart dataProductCard={p} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

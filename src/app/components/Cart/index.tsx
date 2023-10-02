"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "@/hooks/useCart";
import ProductCart from "./ProductsCard";
import { useShoppingCart } from "use-shopping-cart";

const Cart = () => {
  const { productCart } = useCart();
  const { cartCount, totalPrice } = useShoppingCart();

  return (
    <Sheet>
      <SheetTrigger>
        <GiShoppingCart className="w-10 h-10" />
      </SheetTrigger>
      {
        <SheetContent className="overflow-y-auto">
          {cartCount && cartCount > 0 ? (
            <>
              <SheetHeader>
                <SheetTitle>Items no carrinho:</SheetTitle>
              </SheetHeader>
              <div className="flex gap-2 flex-col mb-8">
                {productCart.map((p) => (
                  <ProductCart dataProductCard={p} />
                ))}
              </div>
              <hr />
              <SheetFooter className="w-full flex justify-between mt-6">
                <span>Total: </span>
                <span className="font-bold">R$ {totalPrice}</span>
              </SheetFooter>
            </>
          ) : (
            <div className="font-bold">
              <span>Você não possui itens no carrinho</span>
            </div>
          )}
        </SheetContent>
      }
    </Sheet>
  );
};

export default Cart;

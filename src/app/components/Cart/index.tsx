"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { BsFillCartFill } from "react-icons/bs";
import { useCart } from "@/hooks/useCart";
import ProductCart from "./ProductsCard";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "../ui/button";
import { useCheckout } from "@/hooks/useCheckout";

const Cart = () => {
  const { productCart } = useCart();
  const { cartCount, formattedTotalPrice, handleCloseCart } = useShoppingCart();
  const { redirectCheckout } = useCheckout();

  function handleCloseCartCustom(e: { preventDefault: () => void }) {
    e.preventDefault();
    handleCloseCart();
  }

  console.log("productCart", productCart);

  return (
    <Sheet>
      <SheetTrigger className="relative top-2 hover:brightness-50">
        <BsFillCartFill className="w-10 h-11 fill-white" />
        <span className="relative bottom-9 left-[2px] text-xs">
          {cartCount}
        </span>
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
                  <ProductCart dataProductCard={p} key={Math.random()} />
                ))}
              </div>
              <SheetFooter className="w-full flex flex-col justify-between mt-6">
                <span className="w-full text-left text-[#1D1D1B] mb-5 flex font-bold">
                  Total:{" "}
                  <span className="w-full font-bold text-right">
                    {formattedTotalPrice}
                  </span>
                </span>
                <hr className="mb-6" />
                <Button
                  className="bg-white border-[1px] border-black uppercase text-[#1D1D1B] mb-2 font-normal hover:bg-white hover:brightness-95"
                  onClick={(e) => handleCloseCartCustom(e)}
                >
                  Continuar comprando
                </Button>
                <Button
                  className="bg-[#575756] uppercase"
                  onClick={redirectCheckout}
                >
                  Concluir compra
                </Button>
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

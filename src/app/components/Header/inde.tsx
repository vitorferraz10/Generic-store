'use client'
import React from "react";
import Cart from "../Cart";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const {cartCount} = useShoppingCart()
  return (
    <div className="w-full bg-blue-500 fixed top-0 px-5">
      <div className="flex items-center justify-between p-5">
        <div className="text-black text-lg">Logo</div>
        <div className="flex justify-center items-center">
        <Cart />
        <span>({cartCount})</span>
        </div>   
      </div>
    </div>
  );
};

export default Header;

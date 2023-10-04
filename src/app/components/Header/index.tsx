"use client";
import Cart from "../Cart";
import { Input } from "./Input";

const Header = () => {
  return (
    <div className="w-full bg-[#1D1D1B] fixed top-0 md:px-5 flex flex-col z-10">
      <div className="flex items-center justify-around  md:p-5 max-w-7xl mx-auto w-full">
        <div className="text-white text-sm md:text-4xl uppercase font-bold ">
          Logo{" "}
          <span className="text-[10px] md:text-xs relative right-1 font-normal">
            Exemplo
          </span>
        </div>

        <Input.InputHeaderDesktop />

        <nav className="flex gap-3">
          <span className="text-white font-bold hover:cursor-pointer hover:brightness-50 text-sm md:text-base">
            Produtos
          </span>
          <span className="text-white font-bold hover:cursor-pointer hover:brightness-50 text-sm md:text-base">
            Ajuda
          </span>
        </nav>
        <div className="flex justify-center items-center">
          <Cart />
        </div>
      </div>
      <Input.InputHeaderMobile />
    </div>
  );
};

export default Header;

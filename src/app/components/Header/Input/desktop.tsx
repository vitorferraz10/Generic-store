import React from "react";

import { Input } from "../../ui/input";
import { AiOutlineSearch } from "react-icons/ai";

const InputHeaderDesktop = () => {
  return (
    <div className="flex justify-center items-center max-[768px]:hidden">
      <Input
        placeholder="O que procura hoje?"
        className="max-w-[503px] w-full md:min-w-[503px] bg-transparent text-gray-50 "
      />
      <AiOutlineSearch className="w-5 h-5 relative fill-white right-8" />
    </div>
  );
};

export default InputHeaderDesktop;

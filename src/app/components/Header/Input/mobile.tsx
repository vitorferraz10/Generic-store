
import { AiOutlineSearch } from "react-icons/ai";

const InputHeaderMobile = () => {
  return (
    <div className="flex justify-center items-center w-screen h-10">
      <input
        placeholder="O que procura hoje?"
        className="w-screen min-w-full bg-transparent text-gray-50 border-0 border-t rounded-none focus-visible:border-0 h-full p-3"
      />
      <AiOutlineSearch className="w-5 h-5 absolute fill-white right-8" />
    </div>
  );
};

export default InputHeaderMobile;

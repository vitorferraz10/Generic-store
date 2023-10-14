import { ProductCartType } from "@/types/products";
import { useShoppingCart } from "use-shopping-cart";
import { BiNoEntry } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import Image from "next/image";

const ProductCart = ({
  dataProductCard,
}: {
  dataProductCard: ProductCartType;
}) => {
  const { decrementItem, incrementItem, handleCloseCart } = useShoppingCart();
  const { images, name, formattedPrice, quantity, id } = dataProductCard;

  console.log(dataProductCard.name);

  return (
    <div className="w-full h-28">
      <div className="flex gap-4 items-center justify-between h-full">
        <Image
          src={images[0]}
          width={64}
          height={64}
          alt={`Imagem do produto ${name}`}
        />
        <div className="flex flex-col">
          <span className="font-normal text-[#1D1D1B] text-sm truncate w-[146px]">
            {name}
          </span>
          <span className="font-bold text-base text-[#1D1D1B]">
            {formattedPrice}
          </span>
        </div>
        <span className="flex gap-2 justify-center content-center">
          <BiNoEntry
            className="w-5 h-5 cursor-pointer"
            onClick={() => decrementItem(id)}
          />
          <span>{quantity}</span>
          <GrAddCircle
            className="w-5 h-5 cursor-pointer"
            onClick={() => incrementItem(id)}
          />
        </span>
      </div>
      <hr />
    </div>
  );
};

export default ProductCart;

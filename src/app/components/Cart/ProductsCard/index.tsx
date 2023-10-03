import { Card, CardContent, CardHeader } from "../../ui/card";
import { Button } from "../../ui/button";
import { ProductCartType } from "@/types/products";
import { useShoppingCart } from "use-shopping-cart";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";

const ProductCart = ({
  dataProductCard,
}: {
  dataProductCard: ProductCartType;
}) => {
  const { removeItem } = useShoppingCart();

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <Image src={dataProductCard.images[0]} className="h-36 w-36" alt={`Imagem do produto ${dataProductCard.name}`}/>
   
         <RiDeleteBin5Line className="w-7 h-7 hover" onClick={() => removeItem(dataProductCard.id)}/>
     
      </CardHeader>
      <CardContent className="mb-2">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <span>Nome: {dataProductCard.name}</span>
            <p>Descrição: {dataProductCard.description}</p>
            <h4 className="font-bold">{dataProductCard.formattedPrice}</h4>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCart;

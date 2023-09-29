
import { Button } from "../ui/button"
import {
  Card,
  CardContent, CardFooter,
  CardHeader
} from "../ui/card"
import { ProductShowInfoType } from "@/types/products"

export function CardProducts({name, price, images, description }: ProductShowInfoType) {
  return (
    <Card className="w-[350px] relative">
      <CardHeader className="h-80 flex justify-center">
        <img src={images[0]} />
      </CardHeader>
      <CardContent className="mb-2">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <span>{name}</span>
              <p>{description}</p>
              <h4>R$ {price.toLocaleString('pt-br')}</h4>
            </div>
          </div>
      </CardContent>
      <CardFooter className="w-full flex justify-center px-2 pr-2 mb-2">
        <Button className="w-[90%] absolute bottom-0 pr-2 mb-2">Adicionar ao carrinho</Button>
      </CardFooter>
    </Card>
  )
}

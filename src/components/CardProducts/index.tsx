"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { CardProductsTypes } from "@/types/products";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { useToast } from "../ui/use-toast";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export function CardProducts({
  size = "default",
  name,
  price,
  images,
  description,
  id,
  currency = "",
}: CardProductsTypes) {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

  const formattedPrice = formatCurrencyString({
    value: Number(price),
    currency: "BRL",
    language: "pt-BR",
  });

  function handleAddItem(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    addItem({ name, description, id, price: Number(price), currency, images });
    toast({
      title: `O item ${name} foi adicionado ao carrinho`,
      description: "Item adicionado",
    });
  }

  return (
    <Card
      className={`${
        size === "small" ? "w-64" : "w-[350px]"
      } h-96 relative rounded-2xl mb-3`}
    >
      <CardHeader className="flex h-[250px] justify-center mb-2">
        {!images ? (
          <Skeleton className="w-[250px] h-[250] rounded-full bg-slate-500" />
        ) : (
          <Image
            src={String(images[0])}
            alt={`Imagem do produto ${name}`}
            width={250}
            height={250}
            loading="lazy"
          />
        )}
      </CardHeader>
      <CardContent className="mb-2">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <span>{name ?? <Skeleton />}</span>
            <h4 className="font-bold">
              {formattedPrice ?? <Skeleton className="w-[50px] rounded-full" />}
            </h4>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-center px-2 pr-2 mb-2">
        <Button
          className="w-[90%] absolute bottom-0 pr-2 mb-2"
          onClick={(e) => handleAddItem(e)}
        >
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
}

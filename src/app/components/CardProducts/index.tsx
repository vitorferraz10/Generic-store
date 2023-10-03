"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import {  CardProductsTypes } from "@/types/products";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import { useToast } from "../ui/use-toast";
import Image from "next/image";

export function CardProducts({
  size = 'default',
  name,
  price,
  images,
  description,
  id,
  currency = '',
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
    <Card className={`${size === 'small' ? 'w-8/12' : 'w-[350px]' } relative rounded-2xl`}>
      <CardHeader className="h-80 flex justify-center">
        <img src={images[0]} alt={`Imagem do produto ${name}`}/>
      </CardHeader>
      <CardContent className="mb-2">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <span>Nome: {name}</span>
            <p>Descrição: {description}</p>
            <h4 className="font-bold">{formattedPrice}</h4>
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

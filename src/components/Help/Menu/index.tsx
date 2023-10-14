import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Separator } from "../../ui/separator";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineBarcode,
} from "react-icons/ai";
import { FaCcVisa, FaPix, FaXTwitter } from "react-icons/fa6";

const MenuHelp = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Atendimento</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4">
            <Link href="#">
              <li className="text-[#575756] font-normal text-sm">
                Fale conosco
              </li>
            </Link>
            <Link href="#">
              <li className="text-[#575756] font-normal text-sm">
                Duvidas Frequentes
              </li>
            </Link>
            <Link href="#">
              <li className="text-[#575756] font-normal text-sm">
                Televendas: (11) 9 9999 9999
              </li>
            </Link>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <Separator />
      <AccordionItem value="item-2">
        <AccordionTrigger>Institucional</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4">
            <Link href="#">
              <li className="text-[#575756] font-normal text-sm">
                Sobre a loja
              </li>
            </Link>
            <Link href="#">
              <li className="text-[#575756] font-normal text-sm">Dicas</li>
            </Link>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <Separator />

      <div className="my-6">
        <span className="py-4 font-medium">Formas de pagamento</span>
        <ul className="flex flex-wrap mt-4 gap-5">
          <FaCcVisa className="w-9 h-9 " />
          <FaPix className="w-9 h-9 " />
          <AiOutlineBarcode className="w-9 h-9 " />
        </ul>
      </div>
      <Separator />

      <div className="my-6">
        <span className="py-4 font-medium">Redes Sociais</span>
        <ul className="flex flex-wrap mt-4 gap-5">
          <Link href="#">
            <BsFacebook className="w-9 h-9 " />
          </Link>
          <Link href="#">
            <AiFillInstagram className="w-9 h-9 " />
          </Link>
          <Link href="#">
            <FaXTwitter className="w-9 h-9 " />
          </Link>
          <Link href="#">
            <AiFillYoutube className="w-9 h-9 " />
          </Link>
        </ul>
      </div>
    </Accordion>
  );
};

export default MenuHelp;

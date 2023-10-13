import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineBarcode,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaCcVisa, FaPix, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#1D1D1B] text-white text-center p-11 flex flex-col items-center justify-center gap-8 md:gap-28 md:h-[291px] md:flex-row">
        <div className="flex flex-col items-center h-full">
          <span className="font-bold text-base">Institucional</span>
          <ul className="flex flex-col gap-3 mt-4 w-full">
            <li className="font-normal text-white text-sm">
              <a href="/home" className="hover:underline">
                Sobre a loja
              </a>
            </li>
            <li className="font-normal text-white text-sm">
              <a href="/about" className="hover:underline">
                Politica de troca
              </a>
            </li>
            <li className="font-normal text-white text-sm">
              <a href="/contact" className="hover:underline">
                Politica de preço
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center h-full">
          <span className="font-bold text-base">Atendimento</span>
          <ul className="flex flex-col gap-3 mt-4 w-full">
            <li className="font-normal text-white text-sm">
              <a href="/home" className="hover:underline">
                Fale Conosco
              </a>
            </li>
            <li className="font-normal text-white text-sm">
              <a href="/about" className="hover:underline">
                Dúvidas Frequente
              </a>
            </li>
            <li className="font-normal text-white text-sm">
              <a href="/contact" className="hover:underline">
                Televendas (11) 99999 9999
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center h-full">
          <span className="font-bold text-base">Formas de pagamento</span>
          <ul className="flex flex-wrap mt-4 gap-6 max-w-[171px] w-full">
            <FaCcVisa className="w-9 h-9 " />
            <FaPix className="w-9 h-9 " />
            <AiOutlineBarcode className="w-9 h-9 " />
            <FaCcVisa className="w-9 h-9 " />
            <FaPix className="w-9 h-9 " />
            <AiOutlineBarcode className="w-9 h-9 " />
          </ul>
        </div>

        <div className="flex flex-col items-center h-full">
          <span className="font-bold text-base">Redes Sociais</span>
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
        <div></div>
      </footer>
      <div className="w-full bg-[#EAE9E6] h-8 flex items-center justify-center">
        <span className="font-normal w-full text-sm text-[#575756] flex justify-center text-center">
          Endereço da loja ou qualquer outra informação, 1234 - CEP:
          012345678945 • São Paulo / SP • Brasil
        </span>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Separator } from "../../../components/ui/separator"

const MenuHelp = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Atendimento</AccordionTrigger>
        <AccordionContent>
          Atendimento
        </AccordionContent>      
      </AccordionItem>
      <Separator />
      <AccordionItem value="item-2">
      <AccordionTrigger>Institucional</AccordionTrigger>
      <AccordionContent>
          Institucional
        </AccordionContent>   
        </AccordionItem>   
    </Accordion>
  );
};

export default MenuHelp;

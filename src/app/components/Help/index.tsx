import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

import MenuHelp from "./Menu";

const HelpSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="hover:brightness-50">Ajuda</SheetTrigger>

      {
        <SheetContent className="overflow-y-auto" side="left">
          <SheetHeader>
            <span className=" relative uppercase font-bold bottom-3">Meu carrinho</span>
          </SheetHeader>
         <MenuHelp />
        </SheetContent>
      }
    </Sheet>
  );
};

export default HelpSheet;

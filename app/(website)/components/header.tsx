"use client";

import Image from "next/image";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useHeaderStore } from "@/app/stores/store";
import { ProductDropdownMenu } from "./header/header-nav/product-dropdown-menu";

export const Header = () => {
  const { isOpen, handleOpen } = useHeaderStore();

  return (
    <header className="w-full sticky px-4 py-3.5 bg-transparent flex items-center justify-between gap-4">
      <Image src="/header/notion-logo.svg" alt="Notion Logo" width={33} height={34} />

      <div className="hidden xl:flex w-fit items-center justify-center gap-4">
        <ProductDropdownMenu />

        <Button variant="ghost" className="font-semibold rounded-sm">
          IA
          <ChevronDownIcon />
        </Button>

        <Button variant="ghost" className="font-semibold rounded-sm">
          Soluções
          <ChevronDownIcon />
        </Button>

        <Button variant="ghost" className="font-semibold rounded-sm">
          Recursos
          <ChevronDownIcon />
        </Button>

        <Button variant="ghost" className="font-semibold rounded-sm">
          Enterprise
        </Button>

        <Button variant="ghost" className="font-semibold rounded-sm">
          Preços
        </Button>

        <Button variant="ghost" className="font-semibold rounded-sm">
          Solicite uma demonstração
        </Button>
      </div>

      <div className="w-fit flex items-center gap-2">
        <Button>Use o Notion de graça</Button>

        {/* TODO: trocar texto para branco depois */}
        <Button variant="ghost" className="text-black hidden lg:block">
          Fazer login
        </Button>

        <Button size="icon" variant="ghost" className="size-11 xl:hidden" onClick={handleOpen}>
          {isOpen ? <XIcon className="w-6! h-auto! flex" /> : <MenuIcon className="w-6! h-auto! flex" />}
        </Button>
      </div>
    </header>
  );
};

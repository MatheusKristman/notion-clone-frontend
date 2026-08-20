"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";

import { useHeaderStore } from "@/app/stores/store";

import { Button } from "@/components/ui/button";
import { AIDropdownMenu } from "./header/header-nav/ai-dropdown-menu";
import { ProductDropdownMenu } from "./header/header-nav/product-dropdown-menu";
import { AnimatePresence } from "motion/react";
import { SolutionsDropdownMenu } from "./header/header-nav/solutions-dropdown-menu";

export const Header = () => {
  const { isOpen, handleOpen } = useHeaderStore();
  const [menuOpen, setMenuOpen] = useState<string>("");
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (menu: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMenuOpen(menu);
  };

  const closeMenu = () => {
    closeTimeoutRef.current = setTimeout(() => setMenuOpen(""), 200);
  };

  return (
    <header className="w-full sticky px-4 py-3.5 bg-transparent flex items-center justify-between gap-4">
      <Image src="/header/notion-logo.svg" alt="Notion Logo" width={33} height={34} />

      <div className="hidden xl:flex w-fit items-center justify-center gap-4">
        <Button
          onMouseEnter={() => openMenu("product")}
          onMouseLeave={closeMenu}
          variant="ghost"
          className="font-semibold rounded-sm"
        >
          Produto
          <ChevronDownIcon />
        </Button>

        <Button
          onMouseEnter={() => openMenu("ai")}
          onMouseLeave={closeMenu}
          variant="ghost"
          className="font-semibold rounded-sm"
        >
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

      <AnimatePresence>
        <>
          {menuOpen == "product" && <ProductDropdownMenu key="product-dropdown-menu" />}
          {menuOpen == "ai" && <AIDropdownMenu key="ai-dropdown-menu" />}
          {true && <SolutionsDropdownMenu />}
        </>
      </AnimatePresence>
    </header>
  );
};

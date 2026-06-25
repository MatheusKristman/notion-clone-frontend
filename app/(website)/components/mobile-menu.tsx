"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavMenuWithIcon } from "./header/mobile-menu/nav-menu-with-icon";
import { NavMenuWithoutIcon } from "./header/mobile-menu/nav-menu-without-icon";

import { cn } from "@/lib/utils";
import { useHeaderStore } from "@/app/stores/store";
import { aiMenuItems } from "@/app/constants/ai-menu-items";
import { projectsMenuItems } from "@/app/constants/projects-menu-items";
import { solutionsMenuItems } from "@/app/constants/solutions-menu-items";
import { resourcesMenuItems } from "@/app/constants/resources-menu-items";

export const MobileMenu = () => {
  const [showItems, setShowItems] = useState<string>("");

  const { isOpen } = useHeaderStore();

  const handleShowItems = (item: string) => {
    if (showItems == item) {
      setShowItems("");
      return;
    }

    setShowItems(item);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute w-full h-[calc(100vh-72px)] z-50 bg-white"
        >
          <nav className="w-full h-[calc(100vh-72px-121px)] overflow-y-auto flex flex-col justify-between gap-2 px-6 pb-4">
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => handleShowItems("product")}
                  variant="nav-button"
                  size="nav-button"
                  className={cn(showItems && showItems !== "product" && "opacity-40")}
                >
                  Produto
                  {showItems === "product" ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>

                <AnimatePresence>
                  {showItems === "product" && <NavMenuWithIcon items={projectsMenuItems} />}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => handleShowItems("ai")}
                  variant="nav-button"
                  size="nav-button"
                  className={cn(showItems && showItems !== "ai" && "opacity-40")}
                >
                  IA
                  {showItems === "ai" ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>

                <AnimatePresence>{showItems === "ai" && <NavMenuWithIcon items={aiMenuItems} />}</AnimatePresence>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => handleShowItems("solutions")}
                  variant="nav-button"
                  size="nav-button"
                  className={cn(showItems && showItems !== "solutions" && "opacity-40")}
                >
                  Soluções
                  {showItems === "solutions" ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>

                <AnimatePresence>
                  {showItems === "solutions" && <NavMenuWithoutIcon items={solutionsMenuItems} />}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => handleShowItems("resources")}
                  variant="nav-button"
                  size="nav-button"
                  className={cn(showItems && showItems !== "resources" && "opacity-40")}
                >
                  Recursos
                  {showItems === "resources" ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>

                <AnimatePresence>
                  {showItems === "resources" && <NavMenuWithoutIcon items={resourcesMenuItems} />}
                </AnimatePresence>
              </div>

              <Button variant="nav-button" size="nav-button" className={cn(showItems && "opacity-40")}>
                Enterprises
              </Button>

              <Button variant="nav-button" size="nav-button" className={cn(showItems && "opacity-40")}>
                Preços
              </Button>
            </div>

            <div className="w-full bg-muted rounded-sm p-2 flex flex-col gap-1">
              <div className="w-full flex items-center gap-2">
                <div className="size-8 bg-white rounded-sm flex items-center justify-center">
                  <Image src="/header/notion-logo.svg" alt="Notion Logo" width={20} height={20} />
                </div>

                <span className="text-sm text-foreground font-medium">Notion</span>
              </div>

              <div className="w-full flex items-center gap-2">
                <div className="size-8 bg-white rounded-sm flex items-center justify-center">
                  <Image src="/header/notion-calendar.svg" alt="Notion Calendar" width={20} height={20} />
                </div>

                <span className="text-sm text-foreground font-medium">Notion Calendar</span>
              </div>

              <div className="w-full flex items-center gap-2">
                <div className="size-8 bg-white rounded-sm flex items-center justify-center">
                  <Image src="/header/notion-mail.svg" alt="Notion Mail" width={20} height={20} />
                </div>

                <span className="text-sm text-foreground font-medium">Notion Mail</span>
              </div>
            </div>
          </nav>

          <div className="w-full border-t px-5 py-4 flex flex-col gap-4 z-50">
            <Button className="text-base font-medium">Baixar aplicativo</Button>

            <Button variant="secondary" className="text-base font-medium">
              Fazer login
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

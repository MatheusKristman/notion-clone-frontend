"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { aiMenuItems } from "@/app/constants/ai-menu-items";
import { AINavItem } from "./ai-dropdown-menu/ai-nav-item";
import { AnimatePresence, motion } from "motion/react";

export const AIDropdownMenu = () => {
  const [show, setShow] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShow(true);
  };

  const closeMenu = () => {
    closeTimeoutRef.current = setTimeout(() => setShow(false), 200);
  };

  return (
    <motion.div
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -25, opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="max-w-200 w-full absolute top-[64px] left-1/2 -translate-x-1/2 pt-4"
    >
      <div className="w-full bg-white rounded-2xl p-4 shadow-md grid grid-cols-3 gap-6">
        <div className="size-60 flex items-center justify-center h-full">
          <Image src="/nav-menu/ai_group.png" alt="AI" width={192} height={161} />
        </div>

        <div className="w-full flex flex-col gap-3">
          <span className="text-muted-foreground text-xs font-medium">Recursos de IA</span>

          <div className="w-full flex flex-col">
            {aiMenuItems.map((item) => (
              <AINavItem key={item.title} color={item.color} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <span className="text-muted-foreground text-xs font-medium">Explore os casos de uso</span>

          <div className="w-full flex flex-col gap-2">
            <a className="text-sm font-medium" href="#">
              Para o trabalho
            </a>
            <a className="text-sm font-medium" href="#">
              Para a vida pessoal
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

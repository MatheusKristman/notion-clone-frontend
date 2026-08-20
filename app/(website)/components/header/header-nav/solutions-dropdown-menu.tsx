import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import Link from "next/link";

export const SolutionsDropdownMenu = () => {
  const [show, setShow] = useState(true);
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
      className="max-w-200 w-full absolute top-16 left-1/2 -translate-x-1/2 pt-4"
    >
      <div className="w-full bg-white rounded-2xl p-4 shadow-md grid grid-cols-3 gap-6">
        <div className="w-full flex flex-col gap-2">
          <h4 className="text-muted-foreground text-xs font-medium">Equipes</h4>

          <div className="w-full flex flex-col text-2xl font-bold *:hover:bg-muted *:rounded-md *:py-0.5 *:px-2">
            <Link href="#">Engenharia e Produto</Link>
            <Link href="#">Design</Link>
            <Link href="#">Marketing TI</Link>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3">
          <span className="text-muted-foreground text-xs font-medium">Recursos de IA</span>

          <div className="w-full flex flex-col">
            {/* {aiMenuItems.map((item) => (
              <AINavItem key={item.title} color={item.color} icon={item.icon} title={item.title} desc={item.desc} />
            ))} */}
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

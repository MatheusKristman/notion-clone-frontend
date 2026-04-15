"use client";

import { motion } from "motion/react";

import { NavWithoutIconItem } from "./nav-without-icon-item";
import { navMenuWithoutIconType } from "@/app/types/nav-menu-without-icon-types";

interface INavMenuWithoutIcon {
    items: navMenuWithoutIconType;
}

export const NavMenuWithoutIcon = ({ items }: INavMenuWithoutIcon) => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full flex flex-col gap-4"
        >
            {items.map((i, index) => (
                <NavWithoutIconItem key={`items-${index}`} {...i} />
            ))}
        </motion.div>
    );
};

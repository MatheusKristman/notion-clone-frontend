"use client";

import { motion } from "motion/react";

import { NavWithIconItem } from "./nav-with-icon-item";
import { navMenuWithIconType } from "@/app/types/nav-menu-with-icon-types";

interface INavMenu {
    items: navMenuWithIconType;
}

export const NavMenuWithIcon = ({ items }: INavMenu) => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full flex flex-col gap-4"
        >
            {items.map((i, index) => (
                <NavWithIconItem key={`item-${index + 1}`} {...i} />
            ))}
        </motion.div>
    );
};

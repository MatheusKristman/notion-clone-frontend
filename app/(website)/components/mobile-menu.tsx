"use client";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { NavMenu } from "./header/mobile-menu/nav-menu";
import { navMenuItems } from "@/app/constants/nav-menu-items";

export const MobileMenu = () => {
    return (
        <div className="absolute w-full h-[calc(100vh-72px)] z-50 bg-white p-4">
            <nav className="w-full flex flex-col gap-4 px-2">
                <Button variant="nav-button" size="nav-button" content="">
                    Produto
                    <ChevronDownIcon />
                </Button>

                <NavMenu items={navMenuItems} />
            </nav>
        </div>
    );
};

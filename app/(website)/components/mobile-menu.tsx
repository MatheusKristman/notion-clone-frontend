"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NavMenuWithIcon } from "./header/mobile-menu/nav-menu-with-icon";
import { NavMenuWithoutIcon } from "./header/mobile-menu/nav-menu-without-icon";

import { aiMenuItems } from "@/app/constants/ai-menu-items";
import { projectsMenuItems } from "@/app/constants/projects-menu-items";
import { solutionsMenuItems } from "@/app/constants/solutions-menu-items";
import { resourcesMenuItems } from "@/app/constants/resources-menu-items";

export const MobileMenu = () => {
    return (
        <div className="absolute w-full h-[calc(100vh-72px)] z-50 bg-white p-4">
            <nav className="w-full flex flex-col gap-2 px-2">
                <div className="flex flex-col gap-4">
                    <Button variant="nav-button" size="nav-button">
                        Produto
                        <ChevronDownIcon />
                    </Button>

                    <NavMenuWithIcon items={projectsMenuItems} />
                </div>

                <div className="flex flex-col gap-4">
                    <Button variant="nav-button" size="nav-button">
                        IA
                        <ChevronDownIcon />
                    </Button>

                    <NavMenuWithIcon items={aiMenuItems} />
                </div>

                <div className="flex flex-col gap-4">
                    <Button variant="nav-button" size="nav-button">
                        Soluções
                        <ChevronDownIcon />
                    </Button>

                    <NavMenuWithoutIcon items={solutionsMenuItems} />
                </div>

                <div className="flex flex-col gap-4">
                    <Button variant="nav-button" size="nav-button">
                        Recursos
                        <ChevronDownIcon />
                    </Button>

                    <NavMenuWithoutIcon items={resourcesMenuItems} />
                </div>

                <Button variant="nav-button" size="nav-button">
                    Enterprises
                </Button>

                <Button variant="nav-button" size="nav-button">
                    Preços
                </Button>
            </nav>
        </div>
    );
};

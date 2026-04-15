"use client";

import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useHeaderStore } from "@/app/stores/store";

export const Header = () => {
    const { isOpen, handleOpen } = useHeaderStore();

    return (
        <header className="w-full sticky px-4 py-3.5 bg-transparent flex items-center justify-between gap-4">
            <Image src="/header/notion-logo.svg" alt="Notion Logo" width={33} height={34} />

            <div className="w-fit flex items-center gap-2">
                <Button>Use o Notion de graça</Button>

                <Button size="icon" variant="ghost" className="size-11" onClick={handleOpen}>
                    {isOpen ? <XIcon className="w-6! h-auto! flex" /> : <MenuIcon className="w-6! h-auto! flex" />}
                </Button>
            </div>
        </header>
    );
};

import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="w-full sticky px-4 py-3.5 bg-transparent flex items-center justify-between gap-4">
            <Image src="/header/Notion-logo.svg" alt="Notion Logo" width={33} height={34} />

            <div className="w-fit flex items-center gap-2">
                <Button>Use o Notion de graça</Button>

                <Button size="icon" variant="ghost" className="size-11">
                    <MenuIcon className="w-6! h-auto! flex" />
                </Button>
            </div>
        </header>
    );
};

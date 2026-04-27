"use client";

import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { projectsMenuItems } from "@/app/constants/projects-menu-items";
import { ProductNavItem } from "./product-dropdown-menu/product-nav-item";
import Link from "next/link";

export const ProductDropdownMenu = () => {
    return (
        <>
            <Button variant="ghost" className="font-semibold rounded-sm">
                Produto
                <ChevronDownIcon />
            </Button>

            <div className="max-w-200 w-full bg-white absolute top-20 left-1/2 -translate-x-1/2 rounded-2xl p-4 shadow-md">
                <div className="rounded-xl bg-muted p-4 flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="size-20 rounded-lg bg-white flex items-center justify-center">
                            <Image src="/header/notion-logo.svg" alt="Notion Logo" width={40} height={40} />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xl font-bold">Notion</span>

                            <span className="text-xs text-muted-foreground">O seu espaço de trabalho com IA</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div className="size-8 bg-white rounded-sm flex items-center justify-center">
                                <Image src="/header/notion-calendar.svg" alt="Notion Calendar" width={22} height={22} />
                            </div>

                            <span className="text-sm font-medium">Notion Calendar</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="size-8 bg-white rounded-sm flex items-center justify-center">
                                <Image src="/header/notion-mail.svg" alt="Notion Mail" width={22} height={22} />
                            </div>

                            <span className="text-sm font-medium">Notion Mail</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 mb-4">
                    {projectsMenuItems.map((item) => (
                        <ProductNavItem
                            key={item.title}
                            color={item.color}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>

                <div className="w-full h-px bg-muted mb-4" />

                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image src="/nav-menu/magic-box.svg" alt="Novidades" width={20} height={20} />

                        <span className="text-xs flex items-center gap-1">
                            Find pages faster from the breadcrumb.{" "}
                            <Link href="/" className=" w-fit flex items-center gap-1 text-primary">
                                Veja as novidades <ArrowRightIcon size={14} />
                            </Link>
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Image src="/nav-menu/download-app.svg" alt="Baixe" width={20} height={20} />

                        <span className="text-xs flex items-center gap-1">
                            Baixe o{" "}
                            <Link href="/" className=" w-fit flex items-center gap-1 text-primary">
                                aplicativo do Notion <ArrowRightIcon size={14} />
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

import React from "react";

interface INavItem {
    color: string;
    icon: React.ComponentType<{ color: string }>;
    title: string;
    desc: string;
    isNew: boolean;
}

export const NavItem = ({ color, desc, icon, isNew, title }: INavItem) => {
    return (
        <div className="w-full flex items-center gap-2">
            <div
                className="size-8 rounded-sm flex items-center justify-center"
                style={{
                    backgroundColor: `rgba(${color}, 0.05)`,
                }}
            >
                {React.createElement(icon, { color })}
            </div>

            <div className="flex flex-col">
                <div className="flex items-end gap-1">
                    <span className="text-sm font-medium">{title}</span>
                    {isNew && <span className="bg-blue-200 text-blue-600 rounded-full px-1 py-0.5">Novo</span>}
                </div>
                <span className="text-xs text-muted-foreground font-medium">{desc}</span>
            </div>
        </div>
    );
};

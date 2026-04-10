import { items } from "@/app/types/nav-menu-types";
import { NavItem } from "./nav-item";

interface INavMenu {
    items: items;
}

export const NavMenu = ({ items }: INavMenu) => {
    return (
        <div className="w-full flex flex-col gap-4">
            {items.map((i, index) => (
                <NavItem key={`item-${index + 1}`} {...i} />
            ))}
        </div>
    );
};

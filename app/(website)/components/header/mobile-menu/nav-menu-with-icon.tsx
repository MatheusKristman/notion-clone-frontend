import { navMenuWithIconType } from "@/app/types/nav-menu-with-icon-types";
import { NavWithIconItem } from "./nav-with-icon-item";

interface INavMenu {
    items: navMenuWithIconType;
}

export const NavMenuWithIcon = ({ items }: INavMenu) => {
    return (
        <div className="w-full flex flex-col gap-4">
            {items.map((i, index) => (
                <NavWithIconItem key={`item-${index + 1}`} {...i} />
            ))}
        </div>
    );
};

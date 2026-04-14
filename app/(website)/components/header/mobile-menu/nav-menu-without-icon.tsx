import { navMenuWithoutIconType } from "@/app/types/nav-menu-without-icon-types";
import { NavWithoutIconItem } from "./nav-without-icon-item";

interface INavMenuWithoutIcon {
    items: navMenuWithoutIconType;
}

export const NavMenuWithoutIcon = ({ items }: INavMenuWithoutIcon) => {
    return (
        <div className="w-full flex flex-col gap-4">
            {items.map((i, index) => (
                <NavWithoutIconItem key={`items-${index}`} {...i} />
            ))}
        </div>
    );
};

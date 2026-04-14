interface INavWithoutIconItem {
    title: string;
    items: {
        title: string;
        link: string;
    }[];
}

export const NavWithoutIconItem = ({ title, items }: INavWithoutIconItem) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <span className="text-muted-foreground text-xs font-medium">{title}</span>

            <div className="w-full flex flex-col gap-2">
                {items.map((i) => (
                    <a className="text-sm font-medium" key={i.title} href={i.link}>
                        {i.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

import { Header } from "./components/header";
import { MobileMenu } from "./components/mobile-menu";

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full">
            <Header />
            <MobileMenu />
            {children}
        </div>
    );
}

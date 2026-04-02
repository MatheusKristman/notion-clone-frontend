import { Header } from "./components/header";

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full">
            <Header />
            {children}
        </div>
    );
}

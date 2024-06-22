import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Page } from "@/modules/PageTemplates";
import { twJoin } from "tailwind-merge";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Визуализатор денег",
    description: "Введите сумму денег и узнайте, как она будет выглядеть в наличных деньгах.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body className={twJoin(
            inter.className,
            'bg-app text-app-dark text-2xl'
        )}>
            <Page>
                <main>
                    {children}
                </main>
            </Page>
        </body>
        </html>
    );
}

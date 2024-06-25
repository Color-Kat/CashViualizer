import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Page } from "@/modules/PageTemplates";
import { twJoin } from "tailwind-merge";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Визуализатор налички | Cash Visualizer",
    description: "Визуализатор налички позволяет вам ввести сумму денег, выбрать валюту и узнать, как будет выглядеть такая стопка наличных, сколько в ней купюр, сколько она весит, какого она размера и т.д.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <head>
            <script>window.yaContextCb=window.yaContextCb||[]</script>
            <script src="https://yandex.ru/ads/system/context.js" async></script>
        </head>
        <body className={twJoin(
            inter.className,
            'bg-app text-app-dark md:text-2xl text-lg'
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

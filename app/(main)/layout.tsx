import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Page } from "@/modules/PageTemplates";

const inter = Inter({ subsets: ["latin"] });

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
        <body className={inter.className}>
            <Page>
                <main>
                    {children}
                </main>
            </Page>
        </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Page } from "@/modules/PageTemplates";
import { twJoin } from "tailwind-merge";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Визуализатор налички | Аффирмации на богатство | Cash Visualizer",
    description: "Визуализатор налички позволяет вам ввести сумму денег, выбрать валюту и узнать, как будет выглядеть такая стопка наличных, сколько в ней купюр, сколько она весит, какого она размера и т.д. Аффирмации на успех и богатство - зарядись денежной энергией!",
    keywords: "Сколько это в наличке?, Как выглядит миллион, визуализатор налички, аффирмации, аффирмация, аффирмации на богатство и успех, Cash Visualizer, наличные деньги, вес денег, размер стопки денег, зарядка денежной энергией, калькулятор налички, калькулятор банкнот, калькулятор денег, калькулятор наличности",
    authors: [{ name: 'Рогов Владислав (@ColorKat)', url: 'https://github.com/Color-Kat' }],
    openGraph: {
        title: 'Визуализатор налички - Узнайте, как выглядит ваша сумма в наличных',
        description: 'Визуализатор налички позволяет вам ввести сумму денег, выбрать валюту и узнать, как будет выглядеть такая стопка наличных, сколько в ней купюр, сколько она весит, какого размера и другие параметры.',
        images: [
            {
                url: 'https://colorbit.ru/shared/CashVisualizerPreview.png',
                width: 800,
                height: 600,
                alt: 'Аффирмации - зарядка денежной энергией',
            },
        ],
        type: 'website',
        locale: 'ru_RU',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Визуализатор налички - Узнайте, как выглядит ваша сумма в наличных',
        description: 'Визуализатор налички позволяет вам ввести сумму денег, выбрать валюту и узнать, как будет выглядеть такая стопка наличных, сколько в ней купюр, сколько она весит, какого она размера и другие параметры.',
        images: [
            {
                url: 'https://colorbit.ru/shared/CashVisualizerPreview.png',
                alt: 'Аффирмации - зарядка денежной энергией',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <head>
            {/* Yandex.RTB */}
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

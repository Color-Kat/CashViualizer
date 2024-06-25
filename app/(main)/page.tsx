import { HeroSection } from "@/app/(main)/modules/HeroSection";
import { Visualizer } from "@/modules/Viualizer/Visualizer";
import { Section } from "@/UI/Section/Section";
import { Metadata } from "next";
import useYaRTB from "@/hooks/useYaRTB";
import AdBanner from "@/components/Page/AdBanner";

export const metadata: Metadata = {
    title: "Визуализатор налички - Узнайте, как выглядит ваша сумма в наличных",
    description: "Визуализатор налички позволяет вам ввести сумму денег, выбрать валюту и узнать, как будет выглядеть такая стопка наличных, сколько в ней купюр, сколько она весит, какого она размера и т.д. Зарядись денежной энергией!",
    keywords: "Сколько это в наличке?, Как выглядит миллион, визуализатор налички, Cash Visualizer, наличные деньги, вес денег, размер стопки денег, зарядка денежной энергией",
    authors: [{ name: 'Рогов Владислав (@ColorKat)', url: 'https://github.com/Color-Kat' }],
    openGraph: {
        title: 'Визуализатор налички - Узнайте, как выглядит ваша сумма в наличных',
        description: 'Визуализатор налички позволяет вам ввести сумму денег, выбрать валюту и узнать, как будет выглядеть такая стопка наличных, сколько в ней купюр, сколько она весит, какого размера и другие параметры.',
        images: [
            {
                url: 'https://colorbit.ru/shared/CashVisualizerPreview.png',
                width: 800,
                height: 600,
                alt: 'Зарядка денежной энергией',
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
                alt: 'Зарядка денежной энергией',
            },
        ],
    },
};

export default function Home() {
    return (
        <>
            <HeroSection />

            <Visualizer />

            <Section className="text-lg text-app-accent">
                С любовью by <a
                href="https://t.me/ColorKat"
                className="underline"
            >@ColorKat.</a>
            </Section>

            <AdBanner yandexRTBId={1} />
        </>

    );
}

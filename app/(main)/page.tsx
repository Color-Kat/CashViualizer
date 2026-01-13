import { HeroSection } from "@/app/(main)/modules/HeroSection";
import { Visualizer } from "@/modules/Viualizer/Visualizer";
import { Section } from "@/UI/Section/Section";
import { Metadata } from "next";
import AdBanner from "@/components/Page/AdBanner";

export const metadata: Metadata = {
    title: "Визуализатор налички - Узнайте, как выглядит ваша сумма в наличных | Аффирмации на успех и богатство",
    description: "Визуализатор налички позволяет вам ввести сумму денег, выбрать валюту и узнать, как будет выглядеть такая стопка наличных, сколько в ней купюр, сколько она весит, какого она размера и т.д. Аффирмации на успех и богатство - зарядись денежной энергией!",
};

export default function Home() {
    return (
        <>
            <HeroSection />

            <Visualizer />

            <Section className="text-lg text-app-accent my-8">
                С любовью by <a
                href="https://t.me/ColorKat"
                className="underline"
            >@ColorKat.</a>
            </Section>

            <AdBanner yandexRTBId={1} />
        </>

    );
}

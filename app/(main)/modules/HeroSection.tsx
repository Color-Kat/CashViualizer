import { H2 } from "@/UI/Typography/H2";
import React, { memo } from "react";

import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FilledArrowLink } from "@/UI/Links";

import millionIllustration from "@/public/million.png";
import { H1 } from "@/UI/Typography";

import { Roboto } from 'next/font/google'
import { Section } from "@/UI/Section/Section";

const roboto = Roboto({
    weight: ['400', '500', '700', '900'],
    subsets: ['cyrillic'],
})

export const HeroSection: React.FC = memo(({}) => {
    return (
        <Section className="md:my-8 sm:my-10 mt-8 mb-8 flex">
            <div className="max-w-xl my-auto">
                <a
                    href="https://pomelo.colorbit.ru?utm_source=cash_visualizer"
                    target="_blank"
                    className="mb-4 inline-flex gap-x-2 sm:gap-x-3 items-center rounded-full p-1 pr-6 border border-app-dark/30 text-xs sm:text-sm font-medium duration-150 hover:bg-green-700/10"
                >
                    <span className="inline-block rounded-full px-3 py-1 bg-app-accent text-white">
                        Спонсор
                    </span>
                    <p className="flex items-center gap-1">
                        Pomelo - Анализ состава продуктов
                        <FaAngleRight className="xs:block hidden" />
                    </p>
                </a>

                <H2 className={roboto.className}>
                    Визуализатор налички
                </H2>

                <p className="w-full text-base/[1.3] mt-2">
                    Введите сумму и узнайте, как она выглядит в наличке. Зарядитесь денежной энергией!
                </p>

                <div className="flex items-center gap-x-3 sm:text-sm first-letter:capitalize mt-6 text-base">
                    <FilledArrowLink to="/#visualize">
                        Прикоснуться к богатству
                    </FilledArrowLink>
                </div>
            </div>

            <div className="flex-1 hidden lg:flex items-center -my-8">
                <Image
                    src={millionIllustration}
                    className="w-full mx-auto md:w-10/12 lg:w-full"
                    alt="Как выглядит 500к?"
                />
            </div>
        </Section>
    );
});
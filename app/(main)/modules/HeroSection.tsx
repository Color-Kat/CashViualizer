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
        <Section className="md:mt-16 md:mb-10 sm:my-20 mt-8 mb-16 ">
            <div className="flex-none space-y-7 max-w-xl">
                <a
                    href="https://colorbit.ru"
                    target="_blank"
                    className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border border-app-dark/30 text-sm font-medium duration-150 hover:bg-green-700/10"
                >
                        <span className="inline-block rounded-full px-3 py-1 bg-app-accent text-white">
                            Спонсор
                        </span>
                    <p className="flex items-center gap-1">
                        Colorbit.ru - симулятор майнинга
                        <FaAngleRight />
                    </p>
                </a>

                <H1 className={roboto.className}>
                    Визуализатор налички
                </H1>

                <p>
                    Введите сумму и узнайте, как она выглядит в наличке. Зарядитесь денежной энергией!
                </p>

                <div className="flex items-center gap-x-3 sm:text-sm first-letter:capitalize">
                    <FilledArrowLink to="/#viualize">
                        Прикоснуться к богатству
                    </FilledArrowLink>
                </div>
            </div>

            <div className="flex-1 hidden lg:flex items-center">
                <Image
                    src={millionIllustration}
                    width="452"
                    height="256"
                    className="w-full mx-auto md:w-10/12 lg:w-full"
                    alt="Как выглядит миллион?"
                />
            </div>
        </Section>
    );
});
"use client";

import React, { memo, useEffect, useState } from "react";
import { Section } from "@/UI/Section/Section";
import { Input, Select } from "@/components/Inputs";
import { AbstractMonetarySystem } from "@/modules/Viualizer/Money/AbstractMonetarySystem";
import { RUBMonetarySystem } from "@/modules/Viualizer/Money/RUBMonetarySystem";
import { CurrenciesEnum } from "@/modules/Viualizer/types";
import Image from "next/image";
import { BanknoteStack } from "@/modules/Viualizer/BanknotesStack";

const currencies: CurrenciesEnum[] = [
    CurrenciesEnum.RUB,
    CurrenciesEnum.USD,
    CurrenciesEnum.EUR,
    CurrenciesEnum.CNY
];

export const Visualizer: React.FC = memo(({}) => {
    const [data, setData] = useState<{
        amount: number,
        currency: CurrenciesEnum
    }>({
        amount: 500000,
        currency: CurrenciesEnum.RUB,
    });

    const [monetarySystem, setMonetarySystem] = useState<AbstractMonetarySystem>(
        new RUBMonetarySystem()
    );

    // Change money
    useEffect(() => {
        if (data.currency === 'RUB') setMonetarySystem(new RUBMonetarySystem());
        else if (data.currency === 'USD') setMonetarySystem(new RUBMonetarySystem());
        else if (data.currency === 'EUR') setMonetarySystem(new RUBMonetarySystem());
        else if (data.currency === 'CNY') setMonetarySystem(new RUBMonetarySystem());
        else setMonetarySystem(new RUBMonetarySystem());
    }, [data.currency]);

    console.log(monetarySystem.banknotes)

    // https://www.banki.ru/news/lenta/?id=9753981

    return (
        <Section className="md:mt-16 md:mb-10 sm:my-20 mt-8 mb-16">
            <div className="settings flex lg:gap-12 gap-6">
                <div className="flex gap-x-5 gap-y-2 items-stretch">
                    <Input
                        data={data}
                        setData={setData}
                        name="amount"
                        label="Сумма"
                        type="number"
                        max="100000000000000"
                        min="100"
                        step="100"
                    />

                    <Select
                        data={data}
                        setData={setData}
                        name="currency"
                        label="Валюта"
                        options={currencies}
                    />
                </div>

                <div>
                    <label
                        className="block text-lg font-medium text-gray-600"
                    >
                        Предпочитаемая купюра
                    </label>

                    <div className="flex flex-wrap gap-x-2 gap-y-2 items-stretch justify-stretch mt-1.5">
                        {Object.values(monetarySystem.banknotes).map((banknote) => (
                            <Image
                                src={banknote.image}
                                alt={`Купюра ${banknote.denomination} ${banknote.currency}`}
                                width={110}
                                height={100}
                                className="w-40 object-contain cursor-pointer hover:scale-105 transition"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2
                    className="text-2xl font-bold text-gray-700"
                >
                    Вот такая куча
                </h2>

                <div className="relative min-h-96">
                    <BanknoteStack
                        banknote={monetarySystem.banknotes[5000]}
                        count={Math.ceil(data.amount / 5000)}
                    />

                    {Array.from({ length: 100 }, () => monetarySystem.banknotes[5000]).map((banknote, i) => {
                        const randomRotation = Math.random() * 4 - 2; // Случайное вращение от -2 до 2 градусов
                        const randomX = Math.random() * 10 - 5; // Случайное смещение по X от -5 до 5 пикселей
                        const randomY = Math.random() * 10 - 5; // Случайное смещение по Y от -5 до 5 пикселей

                        return (
                            <Image
                                src={banknote.image}
                                width={500}
                                height={500}
                                alt="5000 рублей"
                                key={i}
                                style={{
                                    position: 'absolute',
                                    top: `${i * 0.5}px`,
                                    transform: `rotateX(300deg) rotateZ(30deg) rotateY(${randomRotation}deg) translateX(${randomX}px) translateY(${randomY}px)`,
                                    zIndex: 100 - i,
                                    // filter: `brightness(${(50 - i) / 100 + 0.5})`,
                                    boxShadow: `0 6px 8px rgba(0, 0, 0, 0.07)`
                                }}
                                className="absolute right-4"
                            />
                        );
                    })}
                </div>

            </div>

        </Section>
    )
        ;
});
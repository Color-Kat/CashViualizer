"use client";

import { PomeloAd } from "@/modules/Viualizer/PomeloAd";
import React, { memo, useEffect, useState } from "react";
import { Section } from "@/UI/Section/Section";
import { Input, Select } from "@/components/Inputs";
import { AbstractMonetarySystem } from "@/modules/Viualizer/Money/AbstractMonetarySystem";
import { RUBMonetarySystem } from "@/modules/Viualizer/Money/RUBMonetarySystem";
import { CurrenciesEnum } from "@/modules/Viualizer/types";
import Image from "next/image";
import { PurpleButton, WhiteButton } from "@/UI/Buttons";
import { twJoin } from "tailwind-merge";
import { Information } from "@/modules/Viualizer/components/Information";
import { BanknoteWad, ViewModeEnum } from "@/modules/Viualizer/components/BanknoteWad";
import { USDMonetarySystem } from "./Money/USDMonetarySystem";
import { EURMonetarySystem } from "./Money/EURMonetarySystem";
import { CNYMonetarySystem } from "@/modules/Viualizer/Money/CNYMonetarySystem";

const currencies: CurrenciesEnum[] = [
    CurrenciesEnum.RUB,
    CurrenciesEnum.USD,
    CurrenciesEnum.EUR,
    CurrenciesEnum.CNY
];

export const Visualizer: React.FC = memo(({}) => {
    const [monetarySystem, setMonetarySystem] = useState<AbstractMonetarySystem>(
        new RUBMonetarySystem()
    );

    const [data, setData] = useState<{
        amount: number,
        currency: CurrenciesEnum,
    }>({
        amount: 500000,
        currency: CurrenciesEnum.RUB,
    });

    const [preferredBanknote, setPreferredBanknote] = useState<number>(Object.values(monetarySystem.banknotes).reverse()[0].denomination);
    const [scale, setScale] = useState<number>(1);
    const [background, setBackground] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<ViewModeEnum>(ViewModeEnum.OneWad);
    const [blockSize, setBlockSize] = useState<{ cols: number, rows: number }>({ cols: 2, rows: 2 });

    const wadsOfMoney = monetarySystem.splitMoneyIntoWads(
        data.amount,
        preferredBanknote
    );

    // Change a monetary system
    useEffect(() => {
        if (data.currency === 'RUB') setMonetarySystem(new RUBMonetarySystem());
        else if (data.currency === 'USD') setMonetarySystem(new USDMonetarySystem());
        else if (data.currency === 'EUR') setMonetarySystem(new EURMonetarySystem());
        else if (data.currency === 'CNY') setMonetarySystem(new CNYMonetarySystem());
        else setMonetarySystem(new RUBMonetarySystem());
    }, [data.currency]);

    // https://www.banki.ru/news/lenta/?id=9753981

    return (
        <Section className="md:mt-8 sm:mt-10 mt-8">
            <div className="settings flex lg:gap-12 gap-6 md:flex-nowrap flex-wrap">
                <div className="flex flex-col gap-4">
                    <div
                        className="flex gap-x-5 gap-y-2 items-stretch"
                        id="visualize"
                    >
                        <Input
                            data={data}
                            setData={setData}
                            name="amount"
                            label="Сумма"
                            type="number"
                            max={1000000000000}
                            min={0}
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

                    <div className="">
                        <PurpleButton
                            className="w-full"
                            onClick={() => setViewMode(viewMode == ViewModeEnum.OneWad ? ViewModeEnum.Block : ViewModeEnum.OneWad)}
                        >
                            {viewMode == ViewModeEnum.OneWad
                                ? <div className="leading-3">
                                    Раскрыть пачки <br />
                                    <span className="text-[10px] text-gray-200">(Может сказаться на производительности)</span>
                                </div>
                                : <div>Собрать в пачки</div>
                            }
                        </PurpleButton>
                    </div>

                    <div className="flex items-center text-base">
                        <div className="whitespace-nowrap pr-3 flex-1 text-base">Размер Блока:</div>

                        <div className="flex items-center gap-1">
                            <Input
                                data={blockSize}
                                setData={setBlockSize}
                                name="cols"
                                type="number"
                                max={100}
                                min={0}
                                className="w-16 p-1 text-right rounded-xl text-base appearance-none"
                            />

                            <div className="font-bold text-xl">
                                X
                            </div>

                            <Input
                                data={blockSize}
                                setData={setBlockSize}
                                name="rows"
                                type="number"
                                max={100}
                                min={0}
                                className="w-16 p-0.5 text-right rounded-xl text-base appearance-none"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 justify-between">
                        {[0.5, 1, 1.5, 2, 3, 4].map(scaleCoef => (
                            <WhiteButton
                                key={scaleCoef}
                                onClick={() => setScale(scaleCoef)}
                                className={twJoin(
                                    "p-1 w-max",
                                    scaleCoef == scale && "bg-app-accent hover:bg-app-accent text-white transition"
                                )}
                            >
                                {scaleCoef * 100}%
                            </WhiteButton>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <Input
                            data={{}}
                            setData={() => {
                            }}
                            onChange={(e: any) => setBackground(e.target.value)}
                            name="background"
                            placeholder="Ссылка на фон"
                            className="text-sm py-1"
                        />
                    </div>
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
                                key={banknote.denomination}
                                src={banknote.image}
                                alt={`Купюра ${banknote.denomination} ${banknote.currency}`}
                                width={300}
                                height={300}
                                className={twJoin(
                                    "w-40 object-contain cursor-pointer hover:scale-105 transition",
                                    preferredBanknote === banknote.denomination && "border-4 border-green-700/50 rounded-md"
                                )}
                                onClick={() => setPreferredBanknote(banknote.denomination)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h2
                    className="text-2xl font-bold text-gray-700"
                >
                    Вот такая #котлета
                </h2>

                <div className="overflow-x-auto w-full">
                    <div className="relative min-h-6 columns-2 w-max">

                        {Object.values(wadsOfMoney).map(wad => {
                            return (
                                <BanknoteWad
                                    key={wad.banknote.denomination}
                                    wad={wad}
                                    blockSize={blockSize}
                                    viewMode={viewMode}
                                    scale={scale}
                                    background={background}
                                />
                            );
                        })}

                        {/* Using CSS */}
                        {/*{Array.from({ length: Math.min(Math.ceil(data.amount / 5000), 100) }, () => monetarySystem.banknotes[50]).map((banknote, i) => {*/}
                        {/*    const randomRotation = Math.random() * 4 - 2; // Случайное вращение от -2 до 2 градусов*/}
                        {/*    const randomX = Math.random() * 10 - 5; // Случайное смещение по X от -5 до 5 пикселей*/}
                        {/*    const randomY = Math.random() * 10 - 5; // Случайное смещение по Y от -5 до 5 пикселей*/}

                        {/*    return (*/}
                        {/*        <Image*/}
                        {/*            src={banknote.image}*/}
                        {/*            width={500}*/}
                        {/*            height={500}*/}
                        {/*            alt="5000 рублей"*/}
                        {/*            key={i}*/}
                        {/*            style={{*/}
                        {/*                position: 'absolute',*/}
                        {/*                top: `${i * 0.5}px`,*/}
                        {/*                transform: `rotateX(300deg) rotateZ(30deg) rotateY(${randomRotation}deg) translateX(${randomX}px) translateY(${randomY}px)`,*/}
                        {/*                zIndex: 100 - i,*/}
                        {/*                // filter: `brightness(${(50 - i) / 100 + 0.5})`,*/}
                        {/*                boxShadow: `0 6px 8px rgba(0, 0, 0, 0.07)`*/}
                        {/*            }}*/}
                        {/*            className="absolute right-4"*/}
                        {/*        />*/}
                        {/*    );*/}
                        {/*})}*/}
                    </div>
                </div>
            </div>

            <Information wads={wadsOfMoney} />

            <PomeloAd/>
        </Section>
    );
});
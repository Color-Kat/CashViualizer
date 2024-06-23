"use client";

import React, { memo, useEffect, useState } from "react";
import { Section } from "@/UI/Section/Section";
import { Input, Select } from "@/components/Inputs";
import { AbstractMonetarySystem } from "@/modules/Viualizer/Money/AbstractMonetarySystem";
import { RUBMonetarySystem } from "@/modules/Viualizer/Money/RUBMonetarySystem";

const currencies: CurrencyType[] = ['RUB', 'USD', 'EUR', 'CNY'];

export const Visualizer: React.FC = memo(({}) => {
    const [data, setData] = useState<{
        amount: number,
        currency: CurrencyType
    }>({
        amount: 1000000,
        currency: "RUB",
    });

    const [monetarySystem, setMonetarySystem] = useState<AbstractMonetarySystem>(
        new RUBMonetarySystem()
    );

    // Change money
    useEffect(() => {
        if(data.currency === 'RUB') setMonetarySystem(new RUBMonetarySystem());
        else if(data.currency === 'USD') setMonetarySystem(new RUBMonetarySystem());
        else if(data.currency === 'EUR') setMonetarySystem(new RUBMonetarySystem());
        else if(data.currency === 'CNY') setMonetarySystem(new RUBMonetarySystem());
        else setMonetarySystem(new RUBMonetarySystem());
    }, [data.currency]);

    return (
        <Section className="md:mt-16 md:mb-10 sm:my-20 mt-8 mb-16">
            <div className="flex gap-x-5 gap-y-2 items-stretch">
                <Input
                    data={data}
                    setData={setData}
                    name="amount"
                    type="number"
                    max="100000000000000"
                    min="100"
                    step="100"
                />

                <Select
                    data={data}
                    setData={setData}
                    name="currency"
                    options={currencies}
                />
            </div>
        </Section>
    );
});
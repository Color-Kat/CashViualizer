import React, { memo, FC, useEffect, useState } from 'react';
import { WadOfMoney } from "@/modules/Viualizer/Money/WadOfMoney";

interface InformationProps {
    wads: Record<number, WadOfMoney>
}

const initialData = {
    wadsCount: 0,
    banknotesCount: 0,
    totalWeight: 0,
    totalHeight: 0,
    totalVolume: 0,
    totalSquare: 0,
    totalLength: 0
}

const formatNumber = (number: number, digitals = 5) => Math.round(number * 10 ** digitals) / 10 ** digitals;

export const Information: FC<InformationProps> = memo(({ wads }) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        setData(prev => {
            const newData = { ...initialData };

            Object.values(wads).forEach((wad) => {
                newData.wadsCount += wad.wadsCount;
                newData.banknotesCount += wad.count;
                newData.totalWeight += wad.banknote.weight * wad.count;
                newData.totalHeight += wad.banknote.realThickness * wad.count;
                newData.totalSquare += wad.banknote.realWidth / 1000 * wad.banknote.realHeight / 1000 * wad.count; //m2
                newData.totalVolume += wad.banknote.realWidth / 1000 * wad.banknote.realHeight / 1000 * wad.banknote.realThickness / 100 * wad.count; //m3
                newData.totalLength += wad.banknote.realWidth * wad.count;
            });

            return newData;
        })
    }, [wads]);

    return (
        <div className="mt-8 ax-w-[350px] w-full text-lg md:text-2xl">
            <h2
                className="text-2xl font-bold text-gray-700 mb-2"
            >
                Информация
            </h2>

            <SpecLine
                title="Кол-во пачек"
                value={data.wadsCount + ' шт'}
            />
            <SpecLine
                title="Всего купюр"
                value={data.banknotesCount + ' шт'}
            />
            <SpecLine
                title="Общий вес"
                value={formatNumber(data.totalWeight, 2) + ' г'}
            />
            <SpecLine
                title="Общая высота башни"
                value={formatNumber(data.totalHeight / 10) + ' см'}
            />
            <SpecLine
                title="Объём всех пачек"
                value={formatNumber(data.totalVolume) + ' м3'}
            />
            <SpecLine
                title="Суммарная площадь купюр"
                value={formatNumber(data.totalSquare) + ' м2'}
            />
            <SpecLine
                title="Длинна линии из купюр"
                value={formatNumber(data.totalLength / 1000) + ' м'}
            />
        </div>
    );
});

const SpecLine = ({ title, value }: { title: string, value: string | number }) => (
    <div className="flex">
        <div className="flex items-end grow border-b border-gray-600 border-dotted pb-1">
            <span>{title}</span>
        </div>
        <div className="specs__value md:w-1/2 whitespace-nowrap pl-4 text-left">{value}</div>
    </div>
);
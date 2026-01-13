import Image from "next/image";
import React, { FC } from 'react';
import pomeloScreenshot1 from '../../assets/pomelo-screenshots/1.png';
import pomeloScreenshot2 from '../../assets/pomelo-screenshots/2.png';
import pomeloScreenshot3 from '../../assets/pomelo-screenshots/3.png';
import pomeloScreenshot4 from '../../assets/pomelo-screenshots/4.png';
import pomeloScreenshot5 from '../../assets/pomelo-screenshots/5.png';

export const PomeloAd: FC = () => {
    return (
        <a
            href="https://pomelo.colorbit.ru?utm_source=cash_visualizer"
            target="_blank"
        >
            <div
                className="mt-8 rounded-2xl p-5 shadow-2xl bg-[#69a93f] text-white max-w-max w-full flex flex-col gap-2">
                <div>
                    <h2 className="text-3xl font-bold">
                        Инвестируйте в своё здоровье
                    </h2>
                    <h3 className="text-lg font-medium mt-0.5">
                        выбирайте качественные продукты с Pomelo!
                    </h3>
                </div>

                <div className="  bg-white p-2 rounded-xl mt-4">
                    <div className="w-full overflow-x-auto flex gap-2 rounded-lg">
                        {[
                            pomeloScreenshot1,
                            pomeloScreenshot2,
                            pomeloScreenshot3,
                            pomeloScreenshot4,
                            pomeloScreenshot5,
                        ].map(screenshot => (
                            <Image
                                src={screenshot}
                                alt="Pomelo - приложение для анализа состава продуктов по фото. Не экономьте на здоровье - выбирайте качественные продукты с Pomelo!"
                                className="md:w-64 w-48 rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                </div>

                <div
                    className="md:max-w-64 w-full ml-auto mt-4 bg-white rounded-xl px-5 py-3 text-sm font-medium text-zinc-900 flex items-center justify-center shadow-lg hover:bg-gray-200 duration-150 cursor-pointer">
                    Сканировать
                </div>
            </div>
        </a>
    );
}
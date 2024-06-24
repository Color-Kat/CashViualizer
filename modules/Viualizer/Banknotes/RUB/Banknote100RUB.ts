import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/100RUB.jpg';

export class Banknote100RUB extends AbstractBanknote {

    public denomination = 100;
    public currency = CurrenciesEnum.RUB;
    public image = banknoteImage;

    public realWidth = 150;
    public realHeight = 60;
    public realThickness = 0.125;
    public weight = 1.02;

}
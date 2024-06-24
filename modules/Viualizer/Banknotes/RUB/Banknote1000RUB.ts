import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/1000RUB.jpg';

export class Banknote1000RUB extends AbstractBanknote {

    public denomination = 1000;
    public currency = CurrenciesEnum.RUB;
    public image = banknoteImage;

    public realWidth = 157;
    public realHeight = 69;
    public realThickness = 0.125;
    public weight = 1.02;

}
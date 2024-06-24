import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/500RUB.jpg';

export class Banknote500RUB extends AbstractBanknote {

    public denomination = 500;
    public currency = CurrenciesEnum.RUB;
    public image = banknoteImage;

    public realWidth = 15.7;
    public realHeight = 6.9;
    public realThickness = 0.0125;
    public weight = 1;

}
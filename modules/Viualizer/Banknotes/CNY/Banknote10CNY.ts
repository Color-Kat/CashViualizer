import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/10CNY.jpg';

export class Banknote10CNY
    extends AbstractBanknote {

    public denomination = 10;
    public currency = CurrenciesEnum.CNY;
    public image = banknoteImage;

    public realWidth = 140;
    public realHeight = 70;
    public realThickness = 0.1;
    public weight = 1;
}
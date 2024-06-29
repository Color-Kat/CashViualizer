import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/100CNY.jpg';

export class Banknote100CNY
    extends AbstractBanknote {

    public denomination = 100;
    public currency = CurrenciesEnum.CNY;
    public image = banknoteImage;

    public realWidth = 155;
    public realHeight = 77;
    public realThickness = 0.1;
    public weight = 1;
}
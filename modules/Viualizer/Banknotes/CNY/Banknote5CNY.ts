import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/5CNY.jpg';

export class Banknote5CNY
    extends AbstractBanknote {

    public denomination = 5;
    public currency = CurrenciesEnum.CNY;
    public image = banknoteImage;

    public realWidth = 135;
    public realHeight = 63;
    public realThickness = 0.1;
    public weight = 1;
}
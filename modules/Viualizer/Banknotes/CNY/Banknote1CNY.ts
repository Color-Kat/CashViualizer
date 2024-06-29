import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/1CNY.jpg';

export class Banknote1CNY
    extends AbstractBanknote {

    public denomination = 1;
    public currency = CurrenciesEnum.CNY;
    public image = banknoteImage;

    public realWidth = 130;
    public realHeight = 63;
    public realThickness = 0.1;
    public weight = 1;
}
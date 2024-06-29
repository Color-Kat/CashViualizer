import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/50CNY.jpg';

export class Banknote50CNY
    extends AbstractBanknote {

    public denomination = 50;
    public currency = CurrenciesEnum.CNY;
    public image = banknoteImage;

    public realWidth = 150;
    public realHeight = 70;
    public realThickness = 0.1;
    public weight = 1;
}
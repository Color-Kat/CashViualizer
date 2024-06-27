import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/100EURO.jpg';

export class Banknote100EUR extends AbstractBanknote {

    public denomination = 100;
    public currency = CurrenciesEnum.EUR;
    public image = banknoteImage;

    public realWidth = 147;
    public realHeight = 82;
    public realThickness = 0.12;
    public weight = 1.02;

}
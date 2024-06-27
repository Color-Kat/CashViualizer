import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/10EURO.jpg';

export class Banknote10EUR extends AbstractBanknote {

    public denomination = 10;
    public currency = CurrenciesEnum.EUR;
    public image = banknoteImage;

    public realWidth = 127
    public realHeight = 67;
    public realThickness = 0.12;
    public weight = 0.72;

}
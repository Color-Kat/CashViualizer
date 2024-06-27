import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/5EURO.jpg';

export class Banknote5EUR extends AbstractBanknote {

    public denomination = 5;
    public currency = CurrenciesEnum.EUR;
    public image = banknoteImage;

    public realWidth = 120;
    public realHeight = 62;
    public realThickness = 0.12;
    public weight = 0.63;

}
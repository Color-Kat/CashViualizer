import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/50EURO.jpg';

export class Banknote50EUR extends AbstractBanknote {

    public denomination = 50;
    public currency = CurrenciesEnum.EUR;
    public image = banknoteImage;

    public realWidth = 140;
    public realHeight = 77;
    public realThickness = 0.12;
    public weight = 0.92;

}
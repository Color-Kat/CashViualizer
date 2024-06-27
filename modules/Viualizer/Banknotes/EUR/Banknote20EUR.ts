import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/20EURO.jpg';

export class Banknote20EUR extends AbstractBanknote {

    public denomination = 20;
    public currency = CurrenciesEnum.EUR;
    public image = banknoteImage;

    public realWidth = 133;
    public realHeight = 72;
    public realThickness = 0.12;
    public weight = 0.81;

}
import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/10USD.jpg';

export class Banknote10USD
    extends AbstractBanknote {

    public denomination = 10;
    public currency = CurrenciesEnum.USD;
    public image = banknoteImage;

    public realWidth = 155.956;
    public realHeight = 66.294;
    public realThickness = 0.1075;
    public weight = 1;
}
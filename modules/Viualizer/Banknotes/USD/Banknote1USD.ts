import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/1USD.jpg';

export class Banknote1USD
    extends AbstractBanknote {

    public denomination = 1;
    public currency = CurrenciesEnum.USD;
    public image = banknoteImage;

    public realWidth = 155.956;
    public realHeight = 66.294;
    public realThickness = 0.1075;
    public weight = 1;
}
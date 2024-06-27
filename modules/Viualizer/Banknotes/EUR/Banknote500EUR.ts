import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/500EURO.jpg';

export class Banknote500EUR extends AbstractBanknote {

    public denomination = 500;
    public currency = CurrenciesEnum.EUR;
    public image = banknoteImage;

    public realWidth = 160;
    public realHeight = 82;
    public realThickness = 0.12;
    public weight = 1.12;

}
import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { CurrenciesEnum } from "@/modules/Viualizer/types";

import banknoteImage from '@/assets/banknotes/200EURO.jpg';

export class Banknote200EUR extends AbstractBanknote {

    public denomination = 200;
    public currency = CurrenciesEnum.EUR;
    public image = banknoteImage;

    public realWidth = 153;
    public realHeight = 82;
    public realThickness = 0.12;
    public weight = 1.07;

}
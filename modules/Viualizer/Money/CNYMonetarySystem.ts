import { AbstractMonetarySystem } from "@/modules/Viualizer/Money/AbstractMonetarySystem";
import { Banknote5000RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote5000RUB";
import { Banknote1000RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote1000RUB";
import { Banknote500RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote500RUB";
import { Banknote100RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote100RUB";
import { Banknote50RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote50RUB";
import { Banknote100USD } from "@/modules/Viualizer/Banknotes/USD/Banknote100USD";
import { Banknote50USD } from "@/modules/Viualizer/Banknotes/USD/Banknote50USD";
import { Banknote20USD } from "@/modules/Viualizer/Banknotes/USD/Banknote20USD";
import { Banknote10USD } from "@/modules/Viualizer/Banknotes/USD/Banknote10USD";
import { Banknote5USD } from "@/modules/Viualizer/Banknotes/USD/Banknote5USD";
import { Banknote2USD } from "@/modules/Viualizer/Banknotes/USD/Banknote2USD";
import { Banknote1USD } from "@/modules/Viualizer/Banknotes/USD/Banknote1USD";
import { Banknote1CNY } from "@/modules/Viualizer/Banknotes/CNY/Banknote1CNY";
import { Banknote5CNY } from "@/modules/Viualizer/Banknotes/CNY/Banknote5CNY";
import { Banknote10CNY } from "@/modules/Viualizer/Banknotes/CNY/Banknote10CNY";
import { Banknote50CNY } from "@/modules/Viualizer/Banknotes/CNY/Banknote50CNY";
import { Banknote100CNY } from "@/modules/Viualizer/Banknotes/CNY/Banknote100CNY";

export class CNYMonetarySystem extends AbstractMonetarySystem {
    public banknotes = {
        100: new Banknote100CNY(),
        50: new Banknote50CNY(),
        10: new Banknote10CNY(),
        5: new Banknote5CNY(),
        1: new Banknote1CNY(),
    }
}
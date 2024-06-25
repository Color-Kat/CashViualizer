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

export class USDMonetarySystem extends AbstractMonetarySystem {
    public banknotes = {
        100: new Banknote100USD(),
        50: new Banknote50USD(),
        20: new Banknote20USD(),
        10: new Banknote10USD(),
        5: new Banknote5USD(),
        2: new Banknote2USD(),
        1: new Banknote1USD(),
    }
}
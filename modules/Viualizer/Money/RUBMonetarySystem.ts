import { AbstractMonetarySystem } from "@/modules/Viualizer/Money/AbstractMonetarySystem";
import { Banknote5000RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote5000RUB";
import { Banknote1000RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote1000RUB";
import { Banknote500RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote500RUB";
import { Banknote100RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote100RUB";
import { Banknote50RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote50RUB";

export class RUBMonetarySystem extends AbstractMonetarySystem {
    public banknotes = {
        5000: new Banknote5000RUB(),
        1000: new Banknote1000RUB(),
        500: new Banknote500RUB(),
        100: new Banknote100RUB(),
        50: new Banknote50RUB(),
        // 10: new Banknote5000RUB()
    }
}
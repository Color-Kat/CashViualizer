import { AbstractMonetarySystem } from "@/modules/Viualizer/Money/AbstractMonetarySystem";
import { Banknote5000RUB } from "@/modules/Viualizer/Banknotes/RUB/Banknote5000RUB";

export class RUBMonetarySystem extends AbstractMonetarySystem {
    public banknotes = {
        5000: new Banknote5000RUB(),
        1000: new Banknote5000RUB(),
        500: new Banknote5000RUB(),
        100: new Banknote5000RUB(),
        50: new Banknote5000RUB(),
        10: new Banknote5000RUB()
    }
}
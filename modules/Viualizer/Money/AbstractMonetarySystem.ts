import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";
import { WadOfMoney } from "@/modules/Viualizer/Money/WadOfMoney";

export abstract class AbstractMonetarySystem {
    abstract banknotes: {[key: number]: AbstractBanknote};

    public getBanknotesDenominations(): number[] {
        return Object.keys(this.banknotes).map((key) => Number(key)).sort((a, b) => b - a);
    }

    public splitMoneyIntoWads(
        amount: number,
        preferredBanknote: number
    ) {
        const denominations = this.getBanknotesDenominations();
        const result: {[key: number]: WadOfMoney} = {};

        denominations.forEach((denomination, i) => {
            // Skip banknotes that are bigger than the preferred one
            if(denomination > preferredBanknote && i < denominations.length - 1) return;

            const count = Math.floor(amount / denomination);
            if(count) {
                amount -= denomination * count;
                result[denomination] = new WadOfMoney({
                    banknote: this.banknotes[denomination],
                    count: count,
                    amount: denomination * count,
                    wadsCount: Math.max(Math.ceil(count/100 * 10) / 10, 1)
                });
            }
        });

        return result;
    }
}
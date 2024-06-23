import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";

export abstract class AbstractMonetarySystem {
    abstract banknotes: {[key: number]: AbstractBanknote};

    public getBanknotesDenominations(): number[] {
        return Object.keys(this.banknotes).map((key) => Number(key)).sort();
    }

    public splitMoneyIntoBundles(
        amount: number,
        preferredBanknote: keyof typeof this['banknotes']
    ): AbstractBanknote[] {
        return false as any;
    }
}
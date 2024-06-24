import { AbstractBanknote } from "@/modules/Viualizer/Banknotes/AbstractBanknote";

export class WadOfMoney {
    public banknote: AbstractBanknote;
    public count: number;
    public amount: number;
    public wadsCount: number;

    constructor(wad: WadOfMoney) {
        this.banknote = wad.banknote;
        this.count = wad.count;
        this.amount = wad.amount;
        this.wadsCount = wad.wadsCount;
    }
}
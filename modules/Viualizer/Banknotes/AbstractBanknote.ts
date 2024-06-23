export abstract class AbstractBanknote {
    abstract currency: CurrencyType;
    abstract denomination : number;

    abstract image : string;

    // Сentimeters
    abstract realWidth: number;
    abstract realHeight: number;
    abstract realThickness: number;

    abstract weight: number; // Grams
}
import { CurrenciesEnum } from "@/modules/Viualizer/types";
import { StaticImageData } from "next/image";

export abstract class AbstractBanknote {
    abstract currency: CurrenciesEnum;
    abstract denomination : number;

    abstract image : string | StaticImageData;

    // Centimeters
    abstract realWidth: number;
    abstract realHeight: number;
    abstract realThickness: number;

    abstract weight: number; // Grams
}
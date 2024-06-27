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
import { Banknote500EUR } from "@/modules/Viualizer/Banknotes/EUR/Banknote500EUR";
import { Banknote200EUR } from "@/modules/Viualizer/Banknotes/EUR/Banknote200EUR";
import { Banknote100EUR } from "@/modules/Viualizer/Banknotes/EUR/Banknote100EUR";
import { Banknote50EUR } from "@/modules/Viualizer/Banknotes/EUR/Banknote50EUR";
import { Banknote20EUR } from "@/modules/Viualizer/Banknotes/EUR/Banknote20EUR";
import { Banknote10EUR } from "@/modules/Viualizer/Banknotes/EUR/Banknote10EUR";
import { Banknote5EUR } from "@/modules/Viualizer/Banknotes/EUR/Banknote5EUR";

export class EURMonetarySystem extends AbstractMonetarySystem {
    public banknotes = {
        500: new Banknote500EUR(),
        200: new Banknote200EUR(),
        100: new Banknote100EUR(),
        50: new Banknote50EUR(),
        20: new Banknote20EUR(),
        10: new Banknote10EUR(),
        5: new Banknote5EUR(),
    }
}
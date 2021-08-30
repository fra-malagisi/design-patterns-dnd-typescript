import { Weapon } from "./interfaces/Weapon";

export class Axe implements Weapon {

    name = 'Axe';

    attack(): number {
        return 6;
    }
}
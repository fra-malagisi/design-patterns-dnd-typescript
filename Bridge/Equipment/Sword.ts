import { Weapon } from "./interfaces/Weapon";

export class Sword implements Weapon {

    name = 'Sword';

    attack(): number {
        return 5;
    }
}
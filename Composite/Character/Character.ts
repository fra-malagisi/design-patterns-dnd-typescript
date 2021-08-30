import { ClassFactory } from "../Class/ClassFactory";
import { ClassEnum } from "../Class/constants/ClassEnum";
import { Class } from "../Class/interfaces/Class";
import { Item } from "../Equipment/interfaces/Item";
import { Weapon } from "../Equipment/interfaces/Weapon";

export abstract class Character {

    private name: string;
    private weapon: Weapon;
    private item: Item;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setWeapon(newWeapon: Weapon): void {
        this.weapon = newWeapon;
    }

    setItem(newItem: Item): void {
        this.item = newItem;
    }

    attack(): void {
        console.log(`${this.name} attack with ${this.weapon.name} and inflicts ${this.weapon.attack()}`);
    }

    useItem(): void {
        console.log(`${this.name} ${this.item.use()}`);
    }
}
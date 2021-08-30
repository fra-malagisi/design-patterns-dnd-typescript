import { Item } from "./interfaces/Item";
import { Weapon } from "./interfaces/Weapon";

export class WeaponsAdapter implements Weapon {

    name: string;

    private item: Item;
    
    constructor(item: Item) {
        this.item = item;
        this.name = this.item.name;
    }

    attack(): number {
        return this.item.name.length;
    }
}
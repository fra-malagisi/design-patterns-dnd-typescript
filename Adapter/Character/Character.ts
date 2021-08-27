import { Item } from "../Equipment/interfaces/Item";
import { Weapon } from "../Equipment/interfaces/Weapon";
import { Shovel } from "../Equipment/Shovel";
import { Sword } from "../Equipment/Sword";
import { RaceEnum } from "../Race/constants/Races.enum";
import { Race } from "../Race/interfaces/Race";
import { RaceFactory } from "../Race/RaceFactory";
import { IAbilityBonus } from "../Race/services/RaceService";

export class Character {

    private name: string;
    private race: Race;
    private weapon: Weapon;
    private item: Item;

    constructor(name: string, race: RaceEnum) {
        this.name = name;
        this.race = new RaceFactory().getRace(race);
        this.setWeapon(new Sword());
        this.setItem(new Shovel());
    }

    getRace(): Race {
        return this.race;
    }

    getRaceDescription(): string {
        return this.race.getDescription();
    }

    getName(): string {
        return this.name;
    }

    getAbilityBouses(): IAbilityBonus[] {
        return this.getRace().getAbilityBonuses();
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
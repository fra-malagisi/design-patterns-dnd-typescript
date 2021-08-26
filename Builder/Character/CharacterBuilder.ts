import { ClassEnum } from "../Class/constants/ClassEnum";
import { RaceEnum } from "../Race/constants/Races.enum";
import { Character } from "./Character";

export abstract class CharacterBuilder {

    protected character: Character;

    getCharacter(): Character {
        return this.character;
    };

    createNewCharacter(name: string): void {
        this.character = new Character(name);
    }

    abstract setHitDie(): void;
    abstract setClassName(): void;
    abstract setRaceAbilityBonuses(): void;
    abstract setRaceName(): void;
}
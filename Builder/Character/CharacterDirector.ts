import { Character } from "./Character";
import { CharacterBuilder } from "./CharacterBuilder";

export class CharacterDirector {
    private characteBuilder: CharacterBuilder;

    setCharacterBuilder(characterBuilder: CharacterBuilder) {
        this.characteBuilder = characterBuilder;
    }

    getCharacter(): Character {
        return this.characteBuilder.getCharacter();
    }

    constructCharacter(name: string): void {
        this.characteBuilder.createNewCharacter(name);
        this.characteBuilder.setClassName();
        this.characteBuilder.setHitDie();
        this.characteBuilder.setRaceName();
        this.characteBuilder.setRaceAbilityBonuses();
    }
}
import { RaceEnum } from "./Race/constants/Races.enum";
import { Character } from "./Character"
import { ClassEnum } from "./Class/constants/ClassEnum";

class HumanBarbarian extends Character {

    constructor(characterName: string) {
        super(characterName, RaceEnum.HUMAN, ClassEnum.BARBARIAN);
    }
}

class HumanBard extends Character {

    constructor(characterName: string) {
        super(characterName, RaceEnum.HUMAN, ClassEnum.BARBARIAN);
    }
}

export interface CharacterFactory {
    createBarbarian(characterName: string): Character;
    createBard(characterName: string): Character;
    /* createCleric(characterName: string): Character;
    createDruid(characterName: string): Character;
    createFighter(characterName: string): Character;
    createMonk(characterName: string): Character;
    createPaladin(characterName: string): Character;
    createRanger(characterName: string): Character;
    createRogue(characterName: string): Character;
    createSorcerer(characterName: string): Character;
    createWarlock(characterName: string): Character;
    createWizard(characterName: string): Character;*/
}


export class HumanCharacterFactory  implements CharacterFactory{

    createBarbarian(characterName: string): Character {
        return new HumanBarbarian(characterName);
    }

    createBard(characterName: string): Character {
        return new HumanBard(characterName);
    }

}
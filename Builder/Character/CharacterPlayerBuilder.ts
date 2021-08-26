import { ClassEnum } from "../Class/constants/ClassEnum";
import { HitDieMap } from "../Class/constants/HitDieMap";
import { RaceEnum } from "../Race/constants/Races.enum";
import { Character } from "./Character";
import { CharacterBuilder } from "./CharacterBuilder";

export class CharacterHumanBarbarianBuilder extends CharacterBuilder {
    
    setHitDie(): void {
        this.character.setHitDie(HitDieMap[ClassEnum.BARBARIAN]);
    };

    setClassName(): void {
        this.character.setClassName(ClassEnum.BARBARIAN);
    };

    setRaceName(): void {
        this.character.setRaceName(RaceEnum.HUMAN);
    }

    setRaceAbilityBonuses(): void {
        this.character.setRaceAbilityBonuses();
    };
}
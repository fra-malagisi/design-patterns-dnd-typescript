import { Barbarian } from "./classes/Barbarian";
import { Bard } from "./classes/Bard";
import { Cleric } from "./classes/Cleric";
import { Druid } from "./classes/Druid";
import { Fighter } from "./classes/Fighter";
import { Monk } from "./classes/Monk";
import { Paladin } from "./classes/Paladin";
import { Ranger } from "./classes/Ranger";
import { Rogue } from "./classes/Rogue";
import { Sorcerer } from "./classes/Sorcerer";
import { Warlock } from "./classes/Warlock";
import { Wizard } from "./classes/Wizard";
import { ClassEnum } from "./constants/ClassEnum";

export class ClassFactory {

    getClass(classType: ClassEnum) {
        switch(classType) {
            case ClassEnum.BARBARIAN:
                return new Barbarian();
            case ClassEnum.BARD:
                return new Bard();
            case ClassEnum.CLERIC:
                return new Cleric();
            case ClassEnum.DRUID:
                return new Druid();
            case ClassEnum.FIGHTER:
                return new Fighter();
            case ClassEnum.MONK:
                return new Monk();
            case ClassEnum.PALADIN:
                return new Paladin();
            case ClassEnum.RANGER:
                return new Ranger();
            case ClassEnum.ROGUE:
                return new Rogue();
            case ClassEnum.SORCERER:
                return new Sorcerer();
            case ClassEnum.WARLOCK:
                return new Warlock();
            case ClassEnum.WIZARD:
                return new Wizard();
            default:
                throw new Error("This class does not exists");
        }
    }
}
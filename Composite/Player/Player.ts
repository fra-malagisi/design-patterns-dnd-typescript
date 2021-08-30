import { Character } from "../Character/Character";
import { Moveable } from "../Character/Moveable";
import { ClassFactory } from "../Class/ClassFactory";
import { ClassEnum } from "../Class/constants/ClassEnum";
import { Class } from "../Class/interfaces/Class";
import { RaceEnum } from "../Race/constants/Races.enum";
import { Race } from "../Race/interfaces/Race";
import { RaceFactory } from "../Race/RaceFactory";
import { IAbilityBonus } from "../Race/services/RaceService";

export class Player extends Character implements Moveable {

    private race: Race;
    private class: Class;

    constructor(name: string, race: RaceEnum, classType: ClassEnum) {
        super(name);
        this.race = new RaceFactory().getRace(race);
        this.class = new ClassFactory().getClass(classType);
    }

    getRace(): Race {
        return this.race;
    }

    getClass(): Class {
        return this.class;
    }

    getRaceDescription(): string {
        return this.race.getDescription();
    }

    getAbilityBouses(): IAbilityBonus[] {
        return this.getRace().getAbilityBonuses();
    }

    move(): void {
        console.log(`${this.getName()} moved by ${Math.floor(Math.random() * 20)} positions`);
    }
}
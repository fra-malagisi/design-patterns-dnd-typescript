import { RaceEnum } from "./Race/constants/Races.enum";
import { Race } from "./Race/interfaces/Race";
import { RaceFactory } from "./Race/RaceFactory";
import { IAbilityBonus } from "./Race/services/RaceService";


export class Character {

    private name: string;
    private race: Race;

    constructor(name: string, race: RaceEnum) {
        this.name = name;
        this.race = new RaceFactory().getRace(race);
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

}
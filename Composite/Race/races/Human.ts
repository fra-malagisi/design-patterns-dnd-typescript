import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";


export class Human extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Humans reach adulthood in their late teens and live less than a century.`);
    }
}
import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";


export class Halfling extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.`);
    }
}
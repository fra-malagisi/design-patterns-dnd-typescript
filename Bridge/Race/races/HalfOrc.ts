import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";

export class HalfOrc extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.`);
    }
}
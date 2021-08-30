import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";

export class HalfElf extends Race {


    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.`);
    }
}
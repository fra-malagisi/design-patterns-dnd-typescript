import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";

export class Elf extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical 
            growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.`);
    }
}
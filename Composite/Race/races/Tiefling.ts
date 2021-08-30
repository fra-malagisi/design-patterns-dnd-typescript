import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";


export class Tiefling extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Tieflings mature at the same rate as humans but live a few years longer.`);
    }
}
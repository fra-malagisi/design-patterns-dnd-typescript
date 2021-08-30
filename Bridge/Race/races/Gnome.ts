import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";


export class Gnome extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.`);
    }
}
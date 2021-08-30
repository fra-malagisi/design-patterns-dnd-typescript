import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";

export class Dragonborn extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human 
                                    child by the age of 3, and reach adulthood by 15. They live to be around 80.`)
    }
}


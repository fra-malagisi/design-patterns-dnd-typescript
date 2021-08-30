import { RaceEnum } from "../constants/Races.enum";
import { Race } from "../interfaces/Race";


export class Dwarf extends Race {

    constructor(race: RaceEnum) {
        super(race);
        this.setAgeDescription(`Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, 
                                    with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.`);
    }
}


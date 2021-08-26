import { enviroment } from "../../environment";
import { RaceEnum } from "../constants/Races.enum";

const fetch = require("node-fetch");

export interface IAbilityBonusesResponse {
    "ability_score": {index: string},
    bonus: number;
}

export interface IAbilityBonus {
    ability: string,
    bonus: number
}

export class RaceService {

    private dndRaceApi = `${enviroment.dndApi}api/races/`;
    
    async getBonusRace(race: RaceEnum): Promise<IAbilityBonus[]> {
        try {
            const response = await fetch(`${this.dndRaceApi}${race}`);
            const { ability_bonuses } = await response.json();
            return ability_bonuses.map((abilityBonus: IAbilityBonusesResponse) => ({
                ability: abilityBonus.ability_score.index,
                bonus: abilityBonus.bonus
            }));
        }
        catch (error) {
            if (error) {
                return error.message;
            }
        }
    }
}
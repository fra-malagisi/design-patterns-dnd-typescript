import { RaceEnum } from "../constants/Races.enum";
import { IAbilityBonus, RaceService } from "../services/RaceService";

export interface Race {

    getRaceName(): string;
    getAbilityBonuses(): IAbilityBonus[];
}
import { RaceEnum } from "../constants/Races.enum";
import { IAbilityBonus, RaceService } from "../services/RaceService";

export abstract class Race {

    private name: RaceEnum;
    private abilityBonuses: IAbilityBonus[];
    raceService: RaceService;
    ageDescription: string;

    constructor(race: RaceEnum) {
        this.name = race;
        this.raceService = new RaceService();
        this.getBonus();
    }

    getName(): string {
        return this.name;
    }

    protected setName(newName: RaceEnum): void {
        this.name = newName;
    }

    getAbilityBonuses(): IAbilityBonus[] {
        return this.abilityBonuses;
    }

    protected setAbilityBonuses(newAbilityBonuses: IAbilityBonus[]): void {
        this.abilityBonuses = [...newAbilityBonuses];
    }

    getAgeDescription(): string {
        return this.ageDescription;
    }

    protected setAgeDescription(newAgeDescription: string): void {
        this.ageDescription = newAgeDescription;
    }

    getDescription(): string {
        return `Im a ${this.getName()} and my bonuses are ${this.abilityBonuses.reduce((acc, curr) => acc + `${acc ? ', ' : acc} ${curr.ability.toUpperCase()} + ${curr.bonus}`, '')}`
    }

    protected async getBonus() {
        this.setAbilityBonuses(await this.raceService.getBonusRace(this.name));
    }
}
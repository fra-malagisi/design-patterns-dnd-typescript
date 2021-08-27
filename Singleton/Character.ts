import { ClassEnum } from "./Class/constants/ClassEnum";
import { HitDieMap } from "./Class/constants/HitDieMap";
import { Class } from "./Class/interfaces/Class";
import { RaceEnum } from "./Race/constants/Races.enum";
import { Race } from "./Race/interfaces/Race";
import { IAbilityBonus, RaceService } from "./Race/services/RaceService";

export abstract class Character implements Race, Class {

    private name: string;
    private raceName: RaceEnum;
    private className: ClassEnum;
    public raceService: RaceService;
    private abilityBonuses: IAbilityBonus[];
    private hitDie: number;

    constructor(characterName: string, race: RaceEnum, classType: ClassEnum) {
        this.raceName = race;
        this.raceService = RaceService.getInstance();
        this.setHitDie(HitDieMap[classType]);
        this.setName(characterName);
        this.setClassName(classType);
        this.setRaceAbilityBonuses();
    }

    getName(): string{
        return this.name;
    };

    protected setName(newName: string): void{
        this.name = newName;
    };

    getRaceName(): RaceEnum {
        return this.raceName;
    }

    protected setRaceName(newRaceName: RaceEnum): void {
        this.raceName = newRaceName;
    }

    getClassName(): ClassEnum {
        return this.className;
    }

    protected setClassName(newClassName: ClassEnum): void {
        this.className = newClassName;
    }

    protected async setRaceAbilityBonuses() {
        this.abilityBonuses = await this.raceService.getBonusRace(this.raceName);
    }

    getAbilityBonuses(): IAbilityBonus[] {
        return this.abilityBonuses;
    }

    getHitDie(): number {
        return this.hitDie;
    }

    protected setHitDie(newHitDie): void {
        this.hitDie = newHitDie;
    }

    getDescription(): string {
        return `Hi my name is ${this.name}, Im a ${this.getRaceName()} and a ${this.getClassName()}. My bonuses are ${this.abilityBonuses.reduce((acc, curr) => acc + `${acc ? ', ' : acc} ${curr.ability.toUpperCase()} + ${curr.bonus}`, '')}`
    }
}
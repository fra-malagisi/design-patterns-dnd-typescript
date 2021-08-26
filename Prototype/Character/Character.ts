import { ClassEnum } from "../Class/constants/ClassEnum";
import { HitDieMap } from "../Class/constants/HitDieMap";
import { Class } from "../Class/interfaces/Class";
import { Cloneable } from "../Cloneable";
import { RaceEnum } from "../Race/constants/Races.enum";
import { Race } from "../Race/interfaces/Race";
import { RaceService, IAbilityBonus } from "../Race/services/RaceService";

export class Character implements Race, Class, Cloneable<Character> {

    private name: string;
    private raceName: RaceEnum;
    private className: ClassEnum;
    private abilityBonuses: IAbilityBonus[];
    private hitDie: number;
    private raceService: RaceService;


    constructor(name: string, race: RaceEnum, classType: ClassEnum) {
        this.raceService = new RaceService();
        this.setName(name);
        this.setRaceName(race);
        this.setClassName(classType);
        this.setHitDie(HitDieMap[this.className]);
        this.setRaceAbilityBonuses();
    }

    clone(): Character {
        const clone = {...this};
        clone.abilityBonuses = [...clone.abilityBonuses.map(abilityBonus => ({...abilityBonus}))]
        return clone;
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

    setRaceName(newRaceName: RaceEnum): void {
        this.raceName = newRaceName;
    }

    getClassName(): ClassEnum {
        return this.className;
    }

    setClassName(newClassName: ClassEnum): void {
        this.className = newClassName;
    }

    async setRaceAbilityBonuses() {
        this.abilityBonuses = await this.raceService.getBonusRace(this.raceName);
    }

    getAbilityBonuses(): IAbilityBonus[] {
        return this.abilityBonuses;
    }

    getHitDie(): number {
        return this.hitDie;
    }

    setHitDie(newHitDie): void {
        this.hitDie = newHitDie;
    }

    getDescription(): string {
        return `Hi my name is ${this.name}, Im a ${this.getRaceName()} and a ${this.getClassName()}. My bonuses are ${this.abilityBonuses.reduce((acc, curr) => acc + `${acc ? ', ' : acc} ${curr.ability.toUpperCase()} + ${curr.bonus}`, '')}`
    }
}
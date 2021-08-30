import { ClassEnum } from "../constants/ClassEnum";
import { HitDieMap } from "../constants/HitDieMap";
import { Class } from "../interfaces/Class";

export class Monk implements Class {

    private hitDie: number;
    private className: ClassEnum;

    constructor() {
        this.hitDie = HitDieMap[ClassEnum.MONK];
        this.className = ClassEnum.MONK;
    }

    getHitDie(): number {
        return this.hitDie;
    }

    setHitDie(newHitDie: number): void {
        this.hitDie = newHitDie;
    }

    getClassName(): ClassEnum {
        return this.className;
    }
}
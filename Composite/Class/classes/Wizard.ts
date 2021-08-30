import { ClassEnum } from "../constants/ClassEnum";
import { HitDieMap } from "../constants/HitDieMap";
import { Class } from "../interfaces/Class";

export class Wizard implements Class {

    private hitDie: number;
    private className: ClassEnum;

    constructor() {
        this.hitDie = HitDieMap[ClassEnum.WIZARD];
        this.className = ClassEnum.WIZARD;
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
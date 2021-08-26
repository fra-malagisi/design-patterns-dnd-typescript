import { ClassEnum } from "./ClassEnum";


export const HitDieMap: Record<string, number> = {
    [ClassEnum.BARBARIAN]: 12,
    [ClassEnum.BARD]: 8,
    [ClassEnum.CLERIC]: 8,
    [ClassEnum.DRUID]: 8,
    [ClassEnum.FIGHTER]: 10,
    [ClassEnum.MONK]: 8,
    [ClassEnum.PALADIN]: 10,
    [ClassEnum.RANGER]: 10,
    [ClassEnum.ROGUE]: 8,
    [ClassEnum.SORCERER]: 6,
    [ClassEnum.WARLOCK]: 8,
    [ClassEnum.WIZARD]: 6
}
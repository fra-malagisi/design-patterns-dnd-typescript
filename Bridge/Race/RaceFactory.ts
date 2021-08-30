import { RaceEnum } from "./constants/Races.enum";
import { Dragonborn } from "./races/Dragonborn";
import { Dwarf } from "./races/Dwarf";
import { Elf } from "./races/Elf";
import { Gnome } from "./races/Gnome";
import { HalfElf } from "./races/HalfElf";
import { Halfling } from "./races/Halfling";
import { HalfOrc } from "./races/HalfOrc";
import { Human } from "./races/Human";
import { Tiefling } from "./races/Tiefling";

export class RaceFactory {

    getRace(race: RaceEnum) {
        switch(race) {
            case RaceEnum.DRAGONBORN:
                return new Dragonborn(race);
            case RaceEnum.DWARF:
                return new Dwarf(race);
            case RaceEnum.ELF:
                return new Elf(race);
            case RaceEnum.GNOME:
                return new Gnome(race);
            case RaceEnum.HALFORC:
                return new HalfOrc(race);
            case RaceEnum.HALFLING:
                return new Halfling(race);
            case RaceEnum.HALFELF:
                return new HalfElf(race);
            case RaceEnum.HUMAN:
                return new Human(race);
            case RaceEnum.TIEFLING:
                return new Tiefling(race);
            default:
                throw new Error("This Race does not exists");
        }
    }
}
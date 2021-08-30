import { ClassEnum } from "./Class/constants/ClassEnum";
import { Axe } from "./Equipment/Axe";
import { Sword } from "./Equipment/Sword";
import { Map } from "./Map";
import { Party } from "./Party";
import { Player } from "./Player/Player";
import { RaceEnum } from "./Race/constants/Races.enum";

const map = new Map();
const party = new Party();

const sbrazus = new Player('Sbrazus', RaceEnum.DRAGONBORN, ClassEnum.BARBARIAN);
const Roland = new Player('Roland', RaceEnum.HALFLING, ClassEnum.ROGUE);
const Aragorn = new Player('Aragorn', RaceEnum.HUMAN, ClassEnum.PALADIN);

map.addMoveable(sbrazus);
party.addMoveable(Roland);
party.addMoveable(Aragorn);
map.addMoveable(party);

map.move();
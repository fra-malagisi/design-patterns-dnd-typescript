import { Character } from "./Character/Character";
import { Axe } from "./Equipment/Axe";
import { Sword } from "./Equipment/Sword";
import { RaceEnum } from "./Race/constants/Races.enum";

const sbrazus = new Character('Sbrazus', RaceEnum.DRAGONBORN);
sbrazus.setWeapon(new Sword());
sbrazus.attack();
sbrazus.setWeapon(new Axe());
sbrazus.attack();

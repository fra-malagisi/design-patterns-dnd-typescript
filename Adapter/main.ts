import { Character } from "./Character/Character";
import { Shovel } from "./Equipment/Shovel";
import { WeaponsAdapter } from "./Equipment/WeaponsAdapter";
import { RaceEnum } from "./Race/constants/Races.enum";

const sbrazus = new Character('Sbrazus', RaceEnum.DRAGONBORN);
const roland = new Character('Roland', RaceEnum.DWARF);

roland.setWeapon(new WeaponsAdapter(new Shovel()));

sbrazus.attack();
roland.attack();

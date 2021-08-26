import { Character } from "./Character";
import { RaceEnum } from "./Race/constants/Races.enum";

const sbrazus = new Character('Sbrazus', RaceEnum.DRAGONBORN);

setTimeout(() => console.log(`Hi Im ${sbrazus.getName()}, ${sbrazus.getRaceDescription()}`), 1000);
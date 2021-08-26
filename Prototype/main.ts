import { Character } from "./Character/Character";
import { ClassEnum } from "./Class/constants/ClassEnum";
import { RaceEnum } from "./Race/constants/Races.enum";

const sbrazus = new Character('Sbrazus', RaceEnum.DRAGONBORN, ClassEnum.BARBARIAN);

setTimeout(() => {
    const sbrazusClone = sbrazus.clone();
    console.log(sbrazus === sbrazusClone);
}, 1000);

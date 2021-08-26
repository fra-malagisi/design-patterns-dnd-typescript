import { RaceEnum } from "./Race/constants/Races.enum";
import { getCharacterFactory } from "./utils/getCharacterFactory";

const factory = getCharacterFactory(RaceEnum.HUMAN);

const sbrazus = factory.createBarbarian('Sbrazus');

setTimeout(() => console.log(console.log(sbrazus.getDescription())), 1000);
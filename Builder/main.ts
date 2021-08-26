import { CharacterDirector } from "./Character/CharacterDirector";
import { CharacterHumanBarbarianBuilder } from "./Character/CharacterPlayerBuilder";
import { RaceEnum } from "./Race/constants/Races.enum";

const characterDirector = new CharacterDirector();
const humanBarbarianCharacterBuilder = new CharacterHumanBarbarianBuilder();

characterDirector.setCharacterBuilder(humanBarbarianCharacterBuilder);
characterDirector.constructCharacter('Sbrazus');
const sbrazus = characterDirector.getCharacter();

setTimeout(() => console.log(console.log(sbrazus.getDescription())), 1000);
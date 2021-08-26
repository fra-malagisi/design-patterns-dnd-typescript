import { CharacterFactory, HumanCharacterFactory } from "../CharacterFactory";
import { RaceEnum } from "../Race/constants/Races.enum";

export const getCharacterFactory = (race: RaceEnum): CharacterFactory => {
    switch(race) {
        case RaceEnum.HUMAN:
            return new HumanCharacterFactory();
    }
}
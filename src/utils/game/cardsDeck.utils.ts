import { CARDS_12, CARDS_18, CARDS_24 } from "../../constants/game/cardsDeck.constants";
import { CASES } from "../../constants/game/gameDifficultyLevel.constants";
import { ICardsDeck } from "../../types/game/cardsDeck.types";

export const getCardsDeck = (gameDifficultyLevel: string): ICardsDeck[] => {
	switch (gameDifficultyLevel) {
		case CASES.HARD:
			return CARDS_24;
		case CASES.MEDIUM:
			return CARDS_18;
		default:
			return CARDS_12;
	}
};

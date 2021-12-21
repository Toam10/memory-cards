import React from "react";
import { useLocation } from "react-router-dom";
import { CARDS_12, CARDS_18, CARDS_24 } from "../../../constants/game/cardsDeck.constants";
import { CASES } from "../../../constants/game/gameDifficultyLevel.constants";
import { CardsDeckContext } from "../../../contexts/game/cardsDeck.context";
import CardsList from "../cardsList";

const CardsDeck = () => {
	const location = useLocation();
	const gameDifficultyLevel = location.pathname.split("/").pop() || "";
	console.log(gameDifficultyLevel);
	const getCardsDeck = (gameDifficultyLevel: string) => {
		switch (gameDifficultyLevel) {
			case CASES.HARD:
				return CARDS_24;
			case CASES.MEDIUM:
				return CARDS_18;
			default:
				return CARDS_12;
		}
	};
	const cardsDeck = getCardsDeck(gameDifficultyLevel);
	console.log(cardsDeck);
	return (
		<CardsDeckContext.Provider value={cardsDeck}>
			<CardsList />
		</CardsDeckContext.Provider>
	);
};

export default CardsDeck;

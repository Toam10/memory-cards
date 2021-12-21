import { useContext } from "react";
import { CardsDeckContext } from "../../../contexts/game/cardsDeck.context";
import { shuffleCardsDeck } from "../../../utils/game/cardsList.utils";
import Board from "../board";

const LoadingCards = () => {
	const cardsDeck = shuffleCardsDeck(useContext(CardsDeckContext));
	return <Board cardsDeck={cardsDeck} />;
};

export default LoadingCards;

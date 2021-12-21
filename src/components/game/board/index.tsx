import React, { useState } from "react";
import { IBoardProps } from "../../../types/game/board.types";
import { ICardsDeck } from "../../../types/game/cardsDeck.types";

const Board = ({ cardsDeck }: IBoardProps) => {
	const [cards, setCards] = useState(cardsDeck);
	const displaysTheCardsOnTheBoard = (card: ICardsDeck) => <div>{card.cardContent}</div>;

	return <>{cards.map(displaysTheCardsOnTheBoard)}</>;
};

export default Board;

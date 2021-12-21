import { useEffect, useState } from "react";
import { IBoardProps } from "../../../types/game/board.types";
import { ICardsDeck } from "../../../types/game/cardsDeck.types";
import FlipedCard from "../flipedCard";
import * as Style from "./board.styles";

const Board = ({ cardsDeck }: IBoardProps) => {
	const [cardsToCompare, setCardsToCompare] = useState<ICardsDeck[]>([]);

	useEffect(() => {
		if (cardsToCompare.length === 2) resetCardsToCompate();
	}, [cardsToCompare]);

	const resetCardsToCompate = (): void => {
		setTimeout(() => {
			setCardsToCompare([]);
		}, 1200);
	};

	const addCardToCompare = (card: ICardsDeck): void => {
		const newCardsToCompare = [...cardsToCompare];
		newCardsToCompare.push(card);
		setCardsToCompare(newCardsToCompare);
	};

	const displaysTheCardsOnTheBoard = (card: ICardsDeck) => {
		return (
			<FlipedCard
				key={card.id}
				card={card}
				addCardToCompare={() => addCardToCompare(card)}
				cardsToCompare={cardsToCompare}
			/>
		);
	};
	return (
		<Style.Container>
			<Style.Template>{cardsDeck.map(displaysTheCardsOnTheBoard)}</Style.Template>
		</Style.Container>
	);
};

export default Board;

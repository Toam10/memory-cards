import { useEffect, useState } from "react";
import { IBoardProps } from "../../../types/game/board.types";
import { ICardsDeck } from "../../../types/game/cardsDeck.types";
import Timer from "../../timer";
import FlipedCard from "../flipedCard";
import Guesses from "../gusses";
import * as Style from "./board.styles";

const Board = ({ cardsDeck }: IBoardProps) => {
	const [cardsToCompare, setCardsToCompare] = useState<ICardsDeck[]>([]);
	const [worngGuesses, setWorngGuesses] = useState(0);
	const [rightGuesses, setRightGuesses] = useState(0);
	const [openCards, setOpenCards] = useState(0);
	const [isNeedToUpdateRecord, setIsNeedToUpdateRecord] = useState(false);
	useEffect(() => {
		if (cardsToCompare.length === 2) resetCardsToCompare();
		if (openCards * 2 === cardsDeck.length) {
			alert("YOU ARE THE WINNER");
			setIsNeedToUpdateRecord(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cardsDeck.length, cardsToCompare]);

	const resetCardsToCompare = (): void => {
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
				handleGuesses={handleGuesses}
				setOpenCards={setOpenCards}
				openCards={openCards}
			/>
		);
	};

	const handleGuesses = (isRightGuess: boolean): void => {
		if (isRightGuess) return setRightGuesses(rightGuesses + 1);
		if (!isRightGuess) return setWorngGuesses(worngGuesses + 1);
	};
	return (
		<Style.Container>
			<Timer isNeedToUpdateRecord={isNeedToUpdateRecord} setIsNeedToUpdateRecord={setIsNeedToUpdateRecord} />
			<Guesses worngGuesses={worngGuesses} rightGuesses={rightGuesses} />
			<Style.Template>{cardsDeck.map(displaysTheCardsOnTheBoard)}</Style.Template>
		</Style.Container>
	);
};

export default Board;

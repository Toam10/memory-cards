import { ICardsDeck } from "./game/cardsDeck.types";

export interface IFlippedCardProps {
	card: ICardsDeck;
	addCardToCompare(): void;
	cardsToCompare: ICardsDeck[];
	handleGuesses(rightGuesses: boolean): void;
	setOpenCards(number: number): void;
	openCards: number;
}

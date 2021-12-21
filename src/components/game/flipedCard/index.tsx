import { memo, useEffect, useState } from "react";
import { ICardsDeck } from "../../../types/game/cardsDeck.types";
import * as Style from "./flippedCard.styles";
const FlipedCard = ({ card, addCardToCompare, cardsToCompare }: any) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [theSameCardIsFound, setTheSameCardIsFound] = useState(false);
	console.log("renderer");
	const toogleCard = () => setIsFlipped(!isFlipped);

	const handleFlipInnerCard = () => {
		if (cardsToCompare.length === 2) return;
		if (!isFlipped) addCardToCompare();
		toogleCard();
	};

	useEffect((): void => {
		setTimeout((): void => {
			if (cardsToCompare.length === 2) {
				const [cardVal1, cardVal2] = cardsToCompare;
				if (
					cardVal1.cardContent !== cardVal2.cardContent &&
					(card.id === cardVal1.id || card.id === cardVal2.id) &&
					cardVal1.id !== cardVal2.id
				)
					setIsFlipped(false);
				if (
					cardVal1.cardContent === cardVal2.cardContent &&
					(card.id === cardVal1.id || card.id === cardVal2.id) &&
					cardVal1.id !== cardVal2.id
				)
					setTheSameCardIsFound(true);
			}
		}, 1000);
	}, [card.id, cardsToCompare, cardsToCompare.length]);

	return (
		<Style.FlipedCard>
			<Style.FlipCardInner isFlipped={isFlipped} onClick={theSameCardIsFound ? (): void => {} : handleFlipInnerCard}>
				<Style.FlipCardFront>Front Card</Style.FlipCardFront>
				<Style.FlipCardBack>Back Card</Style.FlipCardBack>
			</Style.FlipCardInner>
		</Style.FlipedCard>
	);
};

export default memo(FlipedCard);

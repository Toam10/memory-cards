import { memo, useEffect, useState } from "react";
import { IFlippedCardProps } from "../../../types/flippedCard.types";

import * as Style from "./flippedCard.styles";
const FlipedCard = ({
	card,
	addCardToCompare,
	cardsToCompare,
	handleGuesses,
	setOpenCards,
	openCards,
}: IFlippedCardProps) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [theSameCardIsFound, setTheSameCardIsFound] = useState(false);

	const openCard = () => setIsFlipped(true);

	const handleFlipInnerCard = () => {
		if (cardsToCompare.length === 2) return;
		if (!isFlipped) addCardToCompare();
		openCard();
	};

	useEffect((): void => {
		setTimeout(() => {
			if (cardsToCompare.length === 2) {
				const [cardVal1, cardVal2] = cardsToCompare;
				if (
					cardVal1.cardContent !== cardVal2.cardContent &&
					(card.id === cardVal1.id || card.id === cardVal2.id) &&
					cardVal1.id !== cardVal2.id
				) {
					setIsFlipped(false);
					return handleGuesses(false);
				}
				if (
					cardVal1.cardContent === cardVal2.cardContent &&
					cardVal1.id !== cardVal2.id &&
					(card.id === cardVal1.id || card.id === cardVal2.id)
				) {
					setTheSameCardIsFound(true);
					setOpenCards(openCards + 1);
					return handleGuesses(true);
				}
			}
		}, 1000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [card.id, cardsToCompare, cardsToCompare.length]);

	return (
		<Style.FlipedCard>
			<Style.FlipCardInner isFlipped={isFlipped} onClick={theSameCardIsFound ? (): void => {} : handleFlipInnerCard}>
				<Style.FlipCardFront>
					<Style.FlipCardInnerFront></Style.FlipCardInnerFront>
				</Style.FlipCardFront>
				<Style.FlipCardBack
					style={{
						backgroundImage: `url(${card.cardContent})`,
					}}
				></Style.FlipCardBack>
			</Style.FlipCardInner>
		</Style.FlipedCard>
	);
};

export default memo(FlipedCard);

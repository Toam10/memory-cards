import { ICardsDeck } from "../../types/game/cardsDeck.types";

export const shuffleCardsDeck = (cardsDeck: ICardsDeck[]) => {
	let currentIndex = cardsDeck.length;
	let remixing = 3;
	while (currentIndex !== 0 && remixing > 0) {
		const randomIndex = Math.floor(Math.random() * cardsDeck.length);
		if (currentIndex === randomIndex) continue;
		currentIndex--;
		[cardsDeck[currentIndex], cardsDeck[randomIndex]] = [cardsDeck[randomIndex], cardsDeck[currentIndex]];
		if (currentIndex === 0) remixing--;
	}

	return cardsDeck;
};

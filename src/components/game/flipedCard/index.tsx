import { useState } from "react";
import * as Style from "./flippedCard.styles";
const FlipedCard = ({ card }: any) => {
	const [isFlipped, setIsFlipped] = useState(false);
	return (
		<Style.FlipedCard>
			<Style.FlipCardInner isFlipped={isFlipped} onClick={() => setIsFlipped(!isFlipped)}>
				<Style.FlipCardFront>Front Card</Style.FlipCardFront>
				<Style.FlipCardBack>Back Card</Style.FlipCardBack>
			</Style.FlipCardInner>
		</Style.FlipedCard>
	);
};

export default FlipedCard;

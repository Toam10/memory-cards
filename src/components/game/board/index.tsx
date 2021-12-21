import { IBoardProps } from "../../../types/game/board.types";
import { ICardsDeck } from "../../../types/game/cardsDeck.types";
import FlipedCard from "../flipedCard";
import * as Style from "./board.styles";

const Board = ({ cardsDeck }: IBoardProps) => {
	const displaysTheCardsOnTheBoard = (card: ICardsDeck) => <FlipedCard card={card} />;

	return (
		<Style.Container>
			<Style.Template>{cardsDeck.map(displaysTheCardsOnTheBoard)}</Style.Template>
		</Style.Container>
	);
};

export default Board;

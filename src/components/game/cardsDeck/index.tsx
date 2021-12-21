import { useLocation } from "react-router-dom";
import { CardsDeckContext } from "../../../contexts/game/cardsDeck.context";
import { getCardsDeck } from "../../../utils/game/cardsDeck.utils";
import LoadingCards from "../loadingCards";

const CardsDeck = () => {
	const location = useLocation();
	const gameDifficultyLevel = location.pathname.split("/").pop() || "";
	const cardsDeck = getCardsDeck(gameDifficultyLevel);

	return (
		<CardsDeckContext.Provider value={cardsDeck}>
			<LoadingCards />
		</CardsDeckContext.Provider>
	);
};

export default CardsDeck;

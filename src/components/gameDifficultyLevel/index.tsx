import React from "react";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants/game/gameDifficultyLevel.constants";
import { ROUTES } from "../../constants/routes/routes.constants";
import { ILinks } from "../../types/game/gameDifficultyLevel.types";
import * as Style from "./gameDifficultyLevel.styles";
const GameDifficultyLevel = () => {
	const navigate = useNavigate();

	const mapLinks = ({ linkPath, linkContent }: ILinks) => {
		return (
			<Style.DifficultyLevelButton key={linkPath} onClick={() => navigate(ROUTES.GAME + linkPath, { replace: true })}>
				{linkContent}
			</Style.DifficultyLevelButton>
		);
	};

	return <Style.Container>{LINKS.map(mapLinks)}</Style.Container>;
};

export default GameDifficultyLevel;

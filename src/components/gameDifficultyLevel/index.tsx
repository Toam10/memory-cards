import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LINKS } from "../../constants/game/gameDifficultyLevel.constants";
import { ROUTES } from "../../constants/routes/routes.constants";
import { ThemeContext } from "../../contexts/theme/theme.context";
import { ILinks } from "../../types/game/gameDifficultyLevel.types";
import * as Style from "./gameDifficultyLevel.styles";
const GameDifficultyLevel = () => {
	const theme = useContext(ThemeContext);
	const navigate = useNavigate();

	const mapLinks = ({ linkPath, linkContent }: ILinks) => {
		return (
			<Style.DifficultyLevelButton
				style={theme}
				key={linkPath}
				onClick={() => navigate(ROUTES.GAME + linkPath, { replace: true })}
			>
				{linkContent}
			</Style.DifficultyLevelButton>
		);
	};

	return <Style.Container>{LINKS.map(mapLinks)}</Style.Container>;
};

export default GameDifficultyLevel;

import React from "react";
import * as Style from "./openingScreen.styles";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes/routes.constants";

const OpeningScreen = () => {
	return (
		<Style.Container>
			<Style.ChangeThemeButton>Change Theme</Style.ChangeThemeButton>
			<Link to={ROUTES.DIFFICULTY_LEVEL}>
				<Style.StartGameButton>Start Game</Style.StartGameButton>
			</Link>
		</Style.Container>
	);
};

export default OpeningScreen;

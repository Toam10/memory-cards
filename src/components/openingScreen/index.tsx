import React from "react";
import * as Style from "./openingScreen.styles";
import { Link } from "react-router-dom";

const OpeningScreen = () => {
	return (
		<Style.Container>
			<Style.ChangeThemeButton>Change Theme</Style.ChangeThemeButton>
			<Link to="/Game">
				<Style.StartGameButton>Start Game</Style.StartGameButton>
			</Link>
		</Style.Container>
	);
};

export default OpeningScreen;

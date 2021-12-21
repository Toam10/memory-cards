import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/routes/routes.constants";
import GameDifficultyLevel from "../gameDifficultyLevel";
import OpeningScreen from "../openingScreen";
import * as Style from "./app.styles";
function App() {
	return (
		<Style.AppContainer>
			<Routes>
				<Route path={ROUTES.BACK_SLASH} element={<OpeningScreen />} />
				<Route path={ROUTES.DIFFICULTY_LEVEL} element={<GameDifficultyLevel />} />
			</Routes>
		</Style.AppContainer>
	);
}

export default App;

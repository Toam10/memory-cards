import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/routes/routes.constants";
import { auth } from "../../firebase/firebase.utils";
import Game from "../game";
import GameDifficultyLevel from "../gameDifficultyLevel";
import SignIn from "../signIn";
import OpeningScreen from "../openingScreen";
import * as Style from "./app.styles";
function App() {
	const [currentUser, setCurrentUser] = useState<any>(null);
	useEffect(() => {
		let unsubscribeFromAuth: any = null;
		function authStateChange() {
			unsubscribeFromAuth = auth.onAuthStateChanged((user: any): void => {
				setCurrentUser(user);
			});
		}
		authStateChange();
		return () => unsubscribeFromAuth();
	}, []);

	console.log(currentUser);

	return (
		<Style.AppContainer>
			<Routes>
				<Route path={ROUTES.BACK_SLASH} element={currentUser ? <OpeningScreen /> : <SignIn />} />
				<Route path={ROUTES.DIFFICULTY_LEVEL} element={<GameDifficultyLevel />} />
				<Route path={`${ROUTES.GAME}${ROUTES.BACK_SLASH}${ROUTES.TRAILING_STAR}`} element={<Game />} />
			</Routes>
		</Style.AppContainer>
	);
}

export default App;

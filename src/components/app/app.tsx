import { UserContext } from "../../contexts/auth/user.context";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/routes/routes.constants";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import firebase from "../../firebase/firebase.utils";
import Game from "../game";
import GameDifficultyLevel from "../gameDifficultyLevel";
import SignIn from "../signIn";
import OpeningScreen from "../openingScreen";
import * as Style from "./app.styles";
function App() {
	const [currentUser, setCurrentUser] = useState<null | firebase.User>(null);

	useEffect(() => {
		let unsubscribeFromAuth: null | any = null;
		function authStateChange() {
			unsubscribeFromAuth = auth.onAuthStateChanged((user: firebase.User | null) => {
				setCurrentUser(user);
				createUserProfileDocument(user);
			});
		}
		authStateChange();
		return () => unsubscribeFromAuth();
	}, []);

	console.log(currentUser);

	return (
		<Style.AppContainer>
			<UserContext.Provider value={currentUser}>
				<Routes>
					<Route path={ROUTES.BACK_SLASH} element={currentUser ? <OpeningScreen /> : <SignIn />} />
					<Route path={ROUTES.DIFFICULTY_LEVEL} element={<GameDifficultyLevel />} />
					<Route path={`${ROUTES.GAME}${ROUTES.BACK_SLASH}${ROUTES.TRAILING_STAR}`} element={<Game />} />
				</Routes>
			</UserContext.Provider>
		</Style.AppContainer>
	);
}

export default App;

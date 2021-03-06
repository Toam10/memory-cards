import { UserContext } from "../../contexts/auth/user.context";
import { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../constants/routes/routes.constants";
import { auth, createUserProfileDocument, getAllUsersDocuments } from "../../firebase/firebase.utils";
import firebase from "../../firebase/firebase.utils";
import Game from "../game";
import GameDifficultyLevel from "../gameDifficultyLevel";
import SignIn from "../signIn";
import OpeningScreen from "../openingScreen";
import { theme, ThemeContext } from "../../contexts/theme/theme.context";
import backgroundImage from "../../assets/openingScreen/background-dark.jpg";
import backgroundImageLighter from "../../assets/openingScreen/background-light.jpg";
import Records from "../records";
import * as Style from "./app.styles";
function App() {
	const themes = {
		dark: {
			color: "white",
			boxShadow: "0px 0px 20px 4px white",
		},
		light: {
			color: "black",
			boxShadow: "0px 0px 20px 4px black",
		},
	};
	const [currentUser, setCurrentUser] = useState<null | firebase.User>(null);
	const [themeState, setThemeState] = useState(themes.dark);

	const toggleTheme = () => (themeState.color === "black" ? setThemeState(themes.dark) : setThemeState(themes.light));

	useEffect(() => {
		let unsubscribeFromAuth: null | any = null;
		function authStateChange() {
			unsubscribeFromAuth = auth.onAuthStateChanged((user: firebase.User | null) => {
				setCurrentUser(user);
				createUserProfileDocument(user);
			});
		}

		authStateChange();
		getAllUsersDocuments();
		return () => unsubscribeFromAuth();
	}, []);

	return (
		<Style.AppContainer
			style={{
				backgroundImage: themeState.color === "white" ? `url(${backgroundImage})` : `url(${backgroundImageLighter})`,
			}}
		>
			<ThemeContext.Provider value={{ ...themeState, toggleTheme: () => toggleTheme() }}>
				<UserContext.Provider value={currentUser}>
					<Routes>
						<Route path={ROUTES.BACK_SLASH} element={currentUser ? <OpeningScreen /> : <SignIn />} />
						<Route path={ROUTES.RECORDS} element={<Records />} />
						<Route path={ROUTES.DIFFICULTY_LEVEL} element={<GameDifficultyLevel />} />
						<Route path={`${ROUTES.GAME}${ROUTES.BACK_SLASH}${ROUTES.TRAILING_STAR}`} element={<Game />} />
					</Routes>
				</UserContext.Provider>
			</ThemeContext.Provider>
		</Style.AppContainer>
	);
}

export default App;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes/routes.constants";
import { ThemeContext } from "../../contexts/theme/theme.context";
import { auth } from "../../firebase/firebase.utils";
import * as Style from "./openingScreen.styles";

const OpeningScreen = () => {
	const theme = useContext(ThemeContext);
	return (
		<Style.Container>
			<Style.ButtonsWrapper>
				<Style.ChangeThemeButton onClick={() => theme} style={theme}>
					Change Theme
				</Style.ChangeThemeButton>
				<Link to={ROUTES.RECORDS}>
					<Style.GoToRecords onClick={() => theme} style={theme}>
						Records
					</Style.GoToRecords>
				</Link>
			</Style.ButtonsWrapper>
			<Style.SignOut style={theme} onClick={() => auth.signOut()}>
				Sign Out
			</Style.SignOut>
			<Link to={ROUTES.DIFFICULTY_LEVEL}>
				<Style.StartGameButton style={theme}>Start Game</Style.StartGameButton>
			</Link>
		</Style.Container>
	);
};

export default OpeningScreen;

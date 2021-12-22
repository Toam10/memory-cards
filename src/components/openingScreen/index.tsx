import { useContext } from "react";
import { Link } from "react-router-dom";
import { BUTTONS_CONTENT } from "../../constants/openingScreen/openingScreen.constants";
import { ROUTES } from "../../constants/routes/routes.constants";
import { ThemeContext } from "../../contexts/theme/theme.context";
import { auth } from "../../firebase/firebase.utils";
import * as Style from "./openingScreen.styles";

const OpeningScreen = () => {
	const theme = useContext(ThemeContext);
	const { CHANGE_THEME, RECORDS, SIGNOUT, START_GAME } = BUTTONS_CONTENT;
	return (
		<Style.Container>
			<Style.ButtonsWrapper>
				<Style.ChangeThemeButton onClick={() => theme.toggleTheme()} style={theme}>
					{CHANGE_THEME}
				</Style.ChangeThemeButton>
				<Link to={ROUTES.RECORDS}>
					<Style.GoToRecords onClick={() => theme} style={theme}>
						{RECORDS}
					</Style.GoToRecords>
				</Link>
			</Style.ButtonsWrapper>
			<Style.SignOut style={theme} onClick={() => auth.signOut()}>
				{SIGNOUT}
			</Style.SignOut>
			<Link to={ROUTES.DIFFICULTY_LEVEL}>
				<Style.StartGameButton style={theme}>{START_GAME}</Style.StartGameButton>
			</Link>
		</Style.Container>
	);
};

export default OpeningScreen;

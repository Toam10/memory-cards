import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes/routes.constants";
import { auth } from "../../firebase/firebase.utils";
import * as Style from "./openingScreen.styles";

const OpeningScreen = () => {
	return (
		<Style.Container>
			<Style.ChangeThemeButton>Change Theme</Style.ChangeThemeButton>
			<Style.SignOut onClick={() => auth.signOut()}>Sign Out</Style.SignOut>
			<Link to={ROUTES.DIFFICULTY_LEVEL}>
				<Style.StartGameButton>Start Game</Style.StartGameButton>
			</Link>
		</Style.Container>
	);
};

export default OpeningScreen;

import React from "react";
import { signInWithGoole } from "../../firebase/firebase.utils";
import * as Style from "./signIn.styles";

const SignIn = () => {
	return (
		<Style.Container>
			<Style.Login onClick={signInWithGoole}>Login With Google</Style.Login>
		</Style.Container>
	);
};

export default SignIn;

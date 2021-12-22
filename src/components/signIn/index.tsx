import React from "react";
import { signInWithGoole } from "../../firebase/firebase.utils";
import * as Style from "./signIn.styles";

const SignIn = () => {
	return (
		<Style.Container>
			<Style.SignIn onClick={signInWithGoole}>Sign In With Google</Style.SignIn>
		</Style.Container>
	);
};

export default SignIn;

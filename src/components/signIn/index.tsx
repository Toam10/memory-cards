import React from "react";
import { SignInWithGoogle } from "../../constants/signIn/signIn.constants";
import { signInWithGoole } from "../../firebase/firebase.utils";
import * as Style from "./signIn.styles";

const SignIn = () => {
	return (
		<Style.Container>
			<Style.SignIn onClick={signInWithGoole}>{SignInWithGoogle}</Style.SignIn>
		</Style.Container>
	);
};

export default SignIn;

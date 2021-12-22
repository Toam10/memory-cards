import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { firebaseConfig } from "../constants/firebase/firebase.constants";
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoole = async () => await auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth: firebase.User | null) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`/users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);
	if (snapShot.exists) return;

	const { displayName, email } = userAuth;
	const createdAt = new Date();
	await userRef.set({ displayName, email, createdAt, record: "newUser" });
};

export const getAllUsersDocuments = async () => {
	const usersRef = firestore.collection("users");
	const snapShot = await usersRef.get();
	return snapShot.docs;
};

export default firebase;

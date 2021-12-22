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
	const record: number | string = "newUser";
	await userRef.set({ displayName, email, createdAt, record });
};

export const getAllUsersDocuments = async () => {
	const usersRef = firestore.collection("users");
	const snapShot = await usersRef.get();
	return snapShot.docs;
};

export const updateUserRecord = async (userAuth: firebase.User | null, record: number) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`/users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) return;
	const user = snapShot.data();
	if (user?.record === "newUser") return;
	if (user?.record !== "newUser" && user?.record > record) {
		await firestore.collection("users").doc(`${userAuth.uid}`).update({ record });
	}
};

export default firebase;

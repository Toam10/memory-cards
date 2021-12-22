import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDf9UxDEZaVtU8qC_Kq_48fyhBHBGHgUqM",
	authDomain: "memory-cards-game-f2f80.firebaseapp.com",
	projectId: "memory-cards-game-f2f80",
	storageBucket: "memory-cards-game-f2f80.appspot.com",
	messagingSenderId: "882654587801",
	appId: "1:882654587801:web:f32fa55235cffe1284c108",
	measurementId: "G-4W5KL25VJS",
};

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
	await userRef.set({ displayName, email, createdAt });
};

export default firebase;

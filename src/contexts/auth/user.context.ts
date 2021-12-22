import React from "react";
import firebase from "../../firebase/firebase.utils";
export const UserContext = React.createContext<null | firebase.User>(null);

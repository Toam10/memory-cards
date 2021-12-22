import React from "react";

export const theme = {
	drak: {
		backgroundImage: "",
		color: "white",
		boxShow: "0px 0px 20px 4px white;",
	},
	light: {
		backgroundImage: "",
		color: "black",
		boxShow: "0px 0px 20px 4px black;",
	},
};

export const ThemeContext = React.createContext(theme.drak);

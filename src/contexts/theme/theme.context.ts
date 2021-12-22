import React from "react";

export const theme = {
	drak: {
		color: "white",
		boxShadow: "0px 0px 20px 4px white",
	},
	light: {
		color: "black",
		boxShadow: "0px 0px 20px 4px black",
	},
};

export const ThemeContext = React.createContext({ ...theme.drak, toggleTheme: () => {} });

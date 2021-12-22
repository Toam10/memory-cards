import React, { useState } from "react";
import { IGuessesProps } from "../../../types/game/guesses.types";

const Guesses = ({ rightGuesses, worngGuesses }: IGuessesProps) => {
	return <h1>{worngGuesses !== 0 && `Mistakes-${worngGuesses}`}</h1>;
};

export default Guesses;

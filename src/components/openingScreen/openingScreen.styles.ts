import styled from "styled-components";
import backgroundImage from "../../assets/openingScreen/background.jpg";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${backgroundImage});
	background-position: center center;
	background-size: 100% 100%;
`;

export const StartGameButton = styled.button`
	padding: 5vh 10vw;
	font-size: 25px;
	font-weight: lighter;
	cursor: pointer;
	border-radius: 2px;
	border: 1px solid black;
`;

export const ChangeThemeButton = styled.button`
	position: absolute;
	top: 10px;
	left: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: medium;
	font-weight: lighter;
	font-size: 15px;
	border-radius: 2px;
	border: 1px solid black;
	cursor: pointer;
`;

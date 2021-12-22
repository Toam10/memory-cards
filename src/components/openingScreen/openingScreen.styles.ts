import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StartGameButton = styled.button`
	padding: 5vh 10vw;
	font-weight: lighter;
	cursor: pointer;
	border-radius: 2px;
	background: inherit;
	color: white;
	font-size: 10vw;
	font-weight: lighter;
	box-shadow: 0px 0px 10px 2px white;
`;

export const ChangeThemeButton = styled.button`
	position: absolute;
	top: 30px;
	left: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: lighter;
	font-size: small;
	border-radius: 50%;
	background-color: inherit;
	color: white;
	padding: 2vw 2vw;
	cursor: pointer;
	box-shadow: 0px 0px 10px 2px gray;
	width: 100px;
	height: 100px;
	@media (max-width: 600px) {
		width: 80px;
		height: 80px;
	}
	@media (max-width: 300px) {
		width: 60px;
		height: 60px;
	}
`;
export const SignOut = styled.button`
	position: absolute;
	top: 50px;
	right: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: medium;
	font-weight: lighter;
	font-size: 15px;
	border-radius: 2px;
	border: 1px solid black;
	cursor: pointer;
	box-shadow: 0px 0px 10px 2px gray;
	padding: 2vh 5vw;
	background-color: inherit;
	color: white;
	@media (max-width: 600px) {
		top: 30px;
		width: 80px;
		height: 80px;
	}
	@media (max-width: 300px) {
		top: 30px;
		width: 60px;
		height: 60px;
	}
`;

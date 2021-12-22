import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	gap: 20px;
`;

export const DifficultyLevelButton = styled.button`
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
	min-width: 35%;
	min-height: 10%;
	cursor: pointer;
	box-shadow: 0px 0px 20px 4px gray;
	background-color: inherit;
	color: white;
	font-size: 8vw;
`;

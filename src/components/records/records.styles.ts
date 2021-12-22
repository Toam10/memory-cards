import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	padding-top: 30px;
`;

export const Box = styled.div`
	width: 60vw;
	height: 10vh;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	min-height: 10%;
	border-radius: 5px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 100%;
	font-size: 25px;
	@media (max-width: 800px) {
		font-size: 15px;
	}
	@media (max-width: 300px) {
		font-size: 10px;
	}
`;

export const Title = styled.h1`
	color: white;
	font-size: 5vw;
	margin: 0px;
	text-decoration: underline;
`;

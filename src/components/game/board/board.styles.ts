import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Template = styled.div`
	display: grid;
	grid-template-areas: "a a a a";
	gap: 10px;
	@media (max-width: 1044px) {
		transition: 1s;
		grid-template-areas: "a a a ";
	}

	@media (max-width: 300px) {
		transition: 1s;
		grid-template-areas: "a a";
	}
`;

import styled from "styled-components";

interface IFlipInnerCard {
	isFlipped: boolean;
}

export const FlipedCard = styled.div`
	background-color: transparent;
	transition: 1s;
	width: 200px;
	height: 300px;
	border: 1px solid #f1f1f1;
	perspective: 1000px;
	@media (max-width: 1044px) {
		transition: 1s;
		width: 150px;
		height: 250px;
	}
	@media (max-width: 800px) {
		transition: 1s;
		width: 20vw;
		height: 200px;
	}
	@media (max-width: 300px) {
		transition: 1s;
		width: 45vw;
		height: 100px;
		font-size: small;
	}
	@media (max-width: 689px) and (max-height: 595px) {
		transition: 1s;
		width: 25vw;
		height: 25vw;
		font-size: small;
	}
`;

export const FlipCardInner = styled.div<IFlipInnerCard>`
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
	${({ isFlipped }) => (isFlipped ? `transform: rotateY(180deg)` : ``)}
`;

export const FlipCardFront = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden; /* Safari */
	backface-visibility: hidden;
	background-color: #bbb;
	color: black;
`;
export const FlipCardBack = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden; /* Safari */
	backface-visibility: hidden;
	background-color: dodgerblue;
	color: white;
	transform: rotateY(180deg);
`;

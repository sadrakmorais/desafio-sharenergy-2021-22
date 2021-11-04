import styled from 'styled-components';

export const ContainerInput = styled.ul`
	display: flex;
	max-width: 100%;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	& > h1 {
		font-size: 2em;
		color: rgba(30, 20, 20);
	}
	& > ul {
		display: flex;
		gap: 25px;
	}

	& > ul > li {
		display: flex;
		align-items: center;
		gap: 5px;
		color: rgba(20, 20, 20);
	}

	& > ul > li > label {
		font-size: 1.3em;
	}

	@media (max-width: 800px) {
		max-width: 100px;
		& > ul {
			gap: 10px;
			flex-direction: column;
		}
		& > ul > li > label {
			font-size: 0.9em;
		}
	}
`;
export const ContainerGraph = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 600px;
	@media (max-width: 800px) {
		height: 400px;
	}
`;

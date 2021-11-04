import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	flex-direction: column;
`;

export const ContainerReceita = styled.div`
	display: flex;
	width: 100%;
	background: linear-gradient(329.54deg, #00c7d1 0%, #00d2a2 100%);
	justify-content: center;
	padding: 30px 100px;
	border-radius: 20px;
	& > h1 {
		color: #fff;
	}
	@media (max-width: 800px) {
		border-radius: 20px;
		padding: 20px 40px;
		& > h1 {
			font-size: 1.2em;
		}
	}
`;

export const ContainerCard = styled.div`
	display: flex;
	gap: 20px;
	flex-wrap: wrap;
	justify-content: center;
`;

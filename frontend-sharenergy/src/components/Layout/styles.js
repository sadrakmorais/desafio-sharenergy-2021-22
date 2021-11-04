import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	width: 100%;
	height: 100%;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const Workspace = styled.div`
	flex: 0.8;
	background: #f1f1f1;
	height: 100%;
	overflow-y: auto;
	padding: 80px;
	display: flex;
	gap: 100px;
	flex-direction: column;
	@media (max-width: 800px) {
		gap: 50px;
		padding: 20px;
	}
`;

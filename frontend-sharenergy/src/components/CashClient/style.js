import styled from 'styled-components';

export const ContainerCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border: 2px solid #1ba2a1;
	border-radius: 20px;
	padding: 25px;
	text-align: center;
	width: 100%;
	max-width: 280px;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

	& > span {
		color: #034d4c;
		font-weight: bold;
	}
`;

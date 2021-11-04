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
`;
export const ContainerEdit = styled.button`
	cursor: pointer;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	color: rgb(60, 60, 60);
	background: rgba(150, 150, 150, 0.4);
	padding: 3px;
	border-radius: 5px;
`;
export const ContainerDelete = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 3px;
	border-radius: 5px;
	background: #00bfa5;
`;
export const FormContainer = styled.div`
	border-radius: 4px;
	border: 2px solid #1ba2a1;

	box-shadow: 0px 2px 3px 1px rgba(100, 100, 100, 0.3);
	width: 100%;
	padding: 24px;
	align-items: center;
	background: #ffffff;

	& > h1 {
		font-size: 28px;
		color: rgba(20, 20, 20, 0.8);
		margin-bottom: 12px;
		justify-content: center;
	}

	& form {
		width: 100%;
	}
`;

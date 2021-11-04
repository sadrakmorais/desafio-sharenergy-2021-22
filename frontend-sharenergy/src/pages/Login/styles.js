import styled from 'styled-components';

import img from '../../assets/BG.jpg';

export const BackgroundI = styled.div`
	position: fixed;
	min-width: 100%;
	min-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-image: url('${img}');
	background-size: cover;
	background-position: center;
`;

export const ContainerLogo = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	& > img {
		max-width: 300px;
	}
	@media (max-width: 800px) {
		& > img {
			max-width: 200px;
		}
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	box-shadow: 0px 2px 3px 1px rgba(100, 100, 100, 0.3);
	width: 100%;
	max-width: 500px;
	padding: 24px;
	gap: 10px;
	background: #ffffff;

	& > h1 {
		font-size: 28px;
		color: rgba(20, 20, 20, 0.8);
		margin-bottom: 12px;
	}

	& form {
		width: 100%;
	}
`;

export const RememberMe = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 8px 0;

	& > label {
		font-size: 15px;
		color: rgba(20, 20, 20, 0.8);
		font-weight: 500;
		margin-left: 8px;
	}

	& > input {
		cursor: pointer;
	}
`;

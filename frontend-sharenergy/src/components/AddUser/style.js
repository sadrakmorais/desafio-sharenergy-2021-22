import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f1f1f1;
`;
export const FormContainer = styled.div`
	border-radius: 4px;
	box-shadow: 0px 2px 3px 1px rgba(100, 100, 100, 0.3);
	border: 2px solid #1ba2a1;

	width: 100%;
	max-width: 600px;
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

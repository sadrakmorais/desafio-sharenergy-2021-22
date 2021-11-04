import styled, { css } from 'styled-components';

export const Container = styled.aside`
	flex: 0.2;
	background: linear-gradient(329.54deg, #00c7d1 0%, #00d2a2 100%);
	height: 100%;
	display: flex;
	text-align: center;
	flex-direction: column;
	padding: 30px;
	align-items: center;
	justify-content: flex-start;
	@media (max-width: 800px) {
		padding: 10px;
		justify-content: center;
		align-items: flex-start;
	}
`;

export const MenuUl = styled.nav`
	width: 100%;
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	@media (max-width: 800px) {
		margin-top: 0;
		flex-direction: row;
		max-height: 200px;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
`;

export const MenuLink = styled.li`
	border-radius: 4px;
	margin: 4px 0;
	transition: 0.2s all ease;
	display: flex;
	align-items: center;
	padding: 5px;
	& > a {
		padding: 5px 12px;
		cursor: pointer;
		font-size: 20px;
		color: rgba(20, 20, 20);
		flex: 1;
		border-radius: 4px;
	}
	@media (max-width: 800px) {
		padding: 0;
		margin: 0;
		& > a {
			padding: 5px 6px;
			font-size: 0.7em;
			border-radius: 2px;
		}
		&:hover {
			background: transparent;
		}
		${({ active }) =>
			active &&
			css`
				 {
					background: transparent;
					color: #ffffff;
				}
				& > a {
					color: #ffffff;
				}
			`}
	}

	&:hover {
		background: #13afa4;
	}

	${({ active }) =>
		active &&
		css`
			 {
				background: #506353;
				color: #ffffff;
			}
			& > a {
				color: #ffffff;
			}
		`}
`;

export const ContainerLogo = styled.div`
	width: 100%;
	& > img {
		max-width: 300px;
	}
	@media (max-width: 800px) {
		width: 40px;
		& > img {
			max-width: 200px;
		}
	}
`;

export const ContainerIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 800px) {
		width: 20px;
	}
`;

export const ContainerLogOut = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	& > button {
		border-radius: 4px;
		width: 100%;
		padding: 10px;
		cursor: pointer;
		border: 3px solid #fff;
		background: transparent;
		color: #fff;
		font-weight: bold;
		font-size: 1.1em;
		letter-spacing: 3px;
		transition: 0.2s all ease;
	}
	& > button:hover {
		background-color: #fff;
		color: #13afa4;
		border-color: #13afa4;
	}
	@media (max-width: 800px) {
		width: 80px;
		padding: 5px;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;

		& > button {
			padding: 0;
			border: 2px solid #fff;
			font-size: 0.7em;
			letter-spacing: 2px;
			transition: 0.2s all ease;
		}
	}
`;

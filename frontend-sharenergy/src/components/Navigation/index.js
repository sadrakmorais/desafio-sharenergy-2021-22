import React from 'react';

import Menu from './Menu';

import { Container, ContainerLogo } from './styles';

const Navigation = () => {
	return (
		<Container>
			<ContainerLogo>
				<img
					src='https://sharenergy.com.br/wp-content/uploads/2018/08/logo-Sharenergy-01.png'
					alt='Sharenergy'
				/>
			</ContainerLogo>

			<Menu />
		</Container>
	);
};

export default Navigation;

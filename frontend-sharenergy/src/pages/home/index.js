import React from 'react';
import BarChart from '../../components/BarChart';
import { Container, AlertContainer, ContainerGraph } from './style';

const Home = () => {
	return (
		<Container>
			<AlertContainer>
				<h1>Selecione uma variável:</h1>
			</AlertContainer>
			<ContainerGraph>
				<BarChart />
			</ContainerGraph>
		</Container>
	);
};

export default Home;

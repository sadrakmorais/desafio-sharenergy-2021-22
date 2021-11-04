import React, { useState, useEffect } from 'react';
import ClientCard from '../../components/ClientCard';
import { Container, AlertContainer, ContainerCard } from './style';
import { GET } from '../../services/api';

const Clientes = () => {
	const [clients, setClients] = useState([]);

	useEffect(() => {
		const fetchClients = async () => {
			try {
				const { data } = await GET('/users');
				setClients(data);
			} catch (erro) {
				console.log(erro);
			}
		};
		fetchClients();
	}, []);

	const totalParticipations = clients.map((e) => e.participation);

	const isValidTotal = totalParticipations.reduce((acc, att) => {
		return acc + att;
	}, 0);

	const maxParticiparion = (total) => {
		return 100 - total;
	};

	return (
		<Container>
			<AlertContainer>
				<h1>{maxParticiparion(isValidTotal)}% de participação disponível!</h1>
			</AlertContainer>

			<ContainerCard>
				{clients.map((event) => {
					return <ClientCard event={event} key={event._id} />;
				})}
			</ContainerCard>
		</Container>
	);
};

export default Clientes;

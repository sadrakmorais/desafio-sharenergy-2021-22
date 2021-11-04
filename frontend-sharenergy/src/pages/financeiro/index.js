import React, { useState, useEffect } from 'react';
import dadosUsina from '../../json/dadosUsina';
import CashClientCard from '../../components/CashClient';
import { Container, ContainerReceita, ContainerCard } from './style';
import { GET } from '../../services/api';

const Financeiro = () => {
	const temposUsina = dadosUsina.map((i) => i.tempo_h);
	const potUsina = dadosUsina.map((i) => i.potencia_kW);
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

	const valorKWH = 0.95;

	const receitaPotencia = () => {
		let totalInterval = 0;

		for (let i = 0; i < temposUsina.length - 1; i++) {
			totalInterval += temposUsina[i] - temposUsina[i + 1];
		}

		return (
			potUsina.reduce((acc, tot) => {
				return acc + tot;
			}, 0) *
			((Number(totalInterval) * 60) / 100 / (temposUsina.length - 1)) *
			-1
		);
	};

	return (
		<Container>
			<ContainerReceita>
				<h1> Receita total do dia : {(receitaPotencia() * valorKWH).toFixed(2)} R$</h1>
			</ContainerReceita>
			<ContainerCard>
				{clients.map((event) => {
					return <CashClientCard event={event} key={event._id} />;
				})}
			</ContainerCard>
		</Container>
	);
};

export default Financeiro;

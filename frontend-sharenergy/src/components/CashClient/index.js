import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';
import dadosUsina from '../../json/dadosUsina';
import { ContainerCard } from './style';
import { GET } from '../../services/api';

const getLetters = (name) => {
	let letters = '';
	const [firstName, lastName] = name.split(' ');

	firstName && (letters = `${firstName[0]}`);
	lastName && (letters = `${letters}${lastName[0]}`);

	return letters.toUpperCase();
};

const CashClientCard = ({ event }) => {
	const [clients, setClients] = useState([]);
	const temposUsina = dadosUsina.map((i) => i.tempo_h);
	const potUsina = dadosUsina.map((i) => i.potencia_kW);

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

	function stringAvatar(name) {
		return {
			sx: {
				bgcolor: teal['A700'],
			},
			children: getLetters(name),
		};
	}

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
		<>
			<ContainerCard>
				<Avatar {...stringAvatar(event.name)} />
				<h1>{event.name}</h1>
				<p>Participação : {event.participation}%</p>
				<span>
					Recebe :{' '}
					{(
						((receitaPotencia() * valorKWH).toFixed(2) / 100) *
						event.participation
					).toFixed(2)}{' '}
					R$
				</span>
			</ContainerCard>
		</>
	);
};

export default CashClientCard;

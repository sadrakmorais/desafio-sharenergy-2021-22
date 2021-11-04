import React, { useState, useEffect } from 'react';
import AddUser from '../../components/AddUser';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Container, AlertContainer } from './style';
import { useHistory } from 'react-router-dom';

import { GET } from '../../services/api';

const AddCliente = () => {
	const [clients, setClients] = useState([]);
	const history = useHistory();

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
	const handleLinkEdition = () => {
		history.push('/clientes');
	};
	if (maxParticiparion(isValidTotal) === 0) {
		return (
			<Container>
				<AlertContainer>
					<h1>Adicione um novo cliente</h1>
				</AlertContainer>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: '20px',
					}}>
					<Alert severity='error'>
						Participação total atribuida! Por favor, ajuste a participação de algum
						cliente já existente.
					</Alert>
					<Button onClick={handleLinkEdition} type='submit' variant='contained'>
						Editar Clientes
					</Button>
				</div>
				<AddUser />
			</Container>
		);
	}

	return (
		<Container>
			<AlertContainer>
				<h1>Adicione um novo cliente</h1>
			</AlertContainer>
			<AddUser />
		</Container>
	);
};

export default AddCliente;

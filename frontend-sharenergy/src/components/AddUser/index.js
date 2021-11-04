import React, { useState, useEffect } from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '@mui/material/Button';
import { Container, FormContainer } from './style';
import Snackbar from '@mui/material/Snackbar';

import * as Yup from 'yup';

import { POST, GET } from '../../services/api';

const AddClient = () => {
	const [name, setName] = useState('');
	const [participation, setParticipation] = useState('');
	const [open, setOpen] = useState(false);
	const [clients, setClients] = useState([]);
	const totalParticipations = clients.map((e) => e.participation);

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

	const isValidTotal = totalParticipations.reduce((acc, att) => {
		return acc + att;
	}, 0);

	const maxParticiparion = (total) => {
		return 100 - total;
	};

	const HandleAddClient = async ({ event }) => {
		try {
			const payload = {
				name,
				participation,
			};
			const validationSchema = Yup.object().shape({
				name: Yup.string().required(),
				participation: Yup.number().required(),
			});
			await validationSchema.validate(payload);

			await POST('/users', payload);
		} catch (error) {
			console.log(error);

			if (error instanceof Yup.ValidationError) {
				return alert('Preencha todos os campos corretamente');
			}
		}
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<Container>
			<FormContainer>
				<Form onSubmit={HandleAddClient}>
					<Input
						label='Nome do Cliente'
						value={name}
						onChange={(event) => setName(event.target.value)}></Input>
					<Input
						type='number'
						min='1'
						max={maxParticiparion(isValidTotal)}
						label='Participação nos lucros (%)'
						value={participation}
						onChange={(event) => setParticipation(event.target.value)}></Input>
					<Button type='submit' variant='contained'>
						Adicionar Cliente
					</Button>
				</Form>
			</FormContainer>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message='Usuário Adicionado'
			/>
		</Container>
	);
};
export default AddClient;

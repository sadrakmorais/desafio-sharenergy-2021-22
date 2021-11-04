import React, { useState } from 'react';
import Form from '../Form';
import Input from '../Input';
import Button from '@mui/material/Button';
import { Container, FormContainer } from './style';
import Snackbar from '@mui/material/Snackbar';

import * as Yup from 'yup';

import { POST } from '../../services/api';

const AddAdmin = () => {
	const [cpf, setCpf] = useState('');
	const [password, setPassword] = useState('');
	const [open, setOpen] = useState(false);

	const HandleAddAdmin = async ({ event }) => {
		try {
			const payload = {
				cpf,
				password,
			};
			const validationSchema = Yup.object().shape({
				cpf: Yup.string().required(),
				password: Yup.string().required(),
			});
			await validationSchema.validate(payload);

			await POST('/admins', payload);
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
				<Form onSubmit={HandleAddAdmin}>
					<Input
						label='CPF'
						value={cpf}
						onChange={(event) => setCpf(event.target.value)}></Input>
					<Input
						type='password'
						label='Senha'
						value={password}
						onChange={(event) => setPassword(event.target.value)}></Input>
					<Button type='submit' variant='contained'>
						Adicionar Administrador
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

export default AddAdmin;

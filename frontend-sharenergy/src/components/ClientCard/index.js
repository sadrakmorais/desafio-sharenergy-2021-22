import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Edit from '@material-ui/icons/Edit';
import Snackbar from '@mui/material/Snackbar';
import Delete from '@material-ui/icons/Delete';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
import * as Yup from 'yup';

import { ContainerCard, ContainerEdit, ContainerDelete, FormContainer } from './style';
import { PUT, DELETE, GET } from '../../services/api';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const getLetters = (name) => {
	let letters = '';
	const [firstName, lastName] = name.split(' ');

	firstName && (letters = `${firstName[0]}`);
	lastName && (letters = `${letters}${lastName[0]}`);

	return letters.toUpperCase();
};

const ClientCard = ({ event }) => {
	const [open, setOpen] = useState(false);
	const [openM, setOpenM] = useState(false);
	const [name, setName] = useState('');
	const [participation, setParticipation] = useState('');
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

	function stringAvatar(name) {
		return {
			sx: {
				bgcolor: teal['A700'],
			},
			children: getLetters(name),
		};
	}

	const handleModalClient = async () => {
		setOpenM(true);
		setName(event.name);
		console.log(event.participation + maxParticiparion(isValidTotal));
	};

	const handleEditionClient = async () => {
		try {
			const payload = { name, participation };
			const validationSchema = Yup.object().shape({
				name: Yup.string().required(),
				participation: Yup.number().required(),
			});
			await validationSchema.validate(payload);
			await PUT(`/users/${event._id}`, payload);
		} catch (error) {
			console.log(error);
			if (error instanceof Yup.ValidationError) {
				return alert('Preencha todos os campos corretamente');
			}
		}
		window.location.reload();
	};
	const handleDelete = async () => {
		try {
			const {
				data: { event: newEvent },
			} = await DELETE(`/users/${event._id}`);
			setOpen(true);
		} catch (error) {
			console.log(error);
		}
		setTimeout(() => {
			window.location.reload();
		}, 1500);
	};

	const handleCloseModal = () => setOpenM(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<>
			<ContainerCard>
				<Avatar {...stringAvatar(event.name)} />
				<h1>{event.name}</h1>
				<p>Participação nos lucros: {event.participation}%</p>
				<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
					<ContainerEdit onClick={handleModalClient}>
						Clique para editar
						<Edit />
					</ContainerEdit>
					<ContainerDelete onClick={handleDelete}>
						<Delete />
					</ContainerDelete>
				</div>
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={handleClose}
					message='Usuário Deletado'
				/>
			</ContainerCard>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={openM}
				onClose={handleCloseModal}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={openM}>
					<Box sx={style}>
						<FormContainer>
							<h1>Alteração de Dados</h1>
							<Form onSubmit={handleEditionClient}>
								<Input
									label='Novo nome'
									value={name}
									onChange={(event) => setName(event.target.value)}></Input>
								<Input
									type='number'
									min='0'
									max={event.participation + maxParticiparion(isValidTotal)}
									label='Participação nos lucros (%)'
									value={participation}
									onChange={(event) =>
										setParticipation(event.target.value)
									}></Input>
								<Button type='submit' variant='contained'>
									Alterar
								</Button>
							</Form>
						</FormContainer>
					</Box>
				</Fade>
			</Modal>
		</>
	);
};

export default ClientCard;

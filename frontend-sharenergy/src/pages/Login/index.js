import React, { useEffect, useState, useContext } from 'react';
import * as Yup from 'yup';
import { GET, POST } from '../../services/api';

import Button from '@mui/material/Button';

import Form from '../../components/Form';
import Input from '../../components/Input';
import { BackgroundI, ContainerLogo, FormContainer, RememberMe } from './styles';

import { AuthContext } from '../../store/Auth';

const Login = () => {
	const { signIn } = useContext(AuthContext);

	const [cpf, setCPF] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);

	useEffect(() => {
		const isUserAuthenticated = async () => {
			try {
				const authToken = localStorage.getItem('@AUTH');

				if (authToken) {
					const headers = { authorization: `Bearer ${authToken}` };
					const response = await GET('/auth', {
						headers,
					});

					const isAuthenticated = response.status === 200 ? true : false;

					if (isAuthenticated) {
						return (window.location = '/');
					}
				}
			} catch (error) {
				console.error(error);
			}
		};

		isUserAuthenticated();
	}, []);

	const handleLogin = async (e) => {
		try {
			e.preventDefault();

			const payload = { cpf, password };
			const { data } = await POST('/auth', payload);

			const validationSchema = Yup.object().shape({
				cpf: Yup.string().required(),
				password: Yup.string().required(),
			});

			await validationSchema.validate(payload);

			signIn(data.admin, data.auth, remember);
		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				return alert('Preencha todos os campos corretamente');
			}

			const { status } = error.response;

			switch (status) {
				case 404:
					return alert('Usuário nao encontrado');
				case 401:
					return alert('Senha incorreta');
				default:
					return alert('API quebrou');
			}
		}
	};

	return (
		<BackgroundI>
			<FormContainer>
				<ContainerLogo>
					<img
						src='https://sharenergy.com.br/wp-content/uploads/2018/08/logo-Sharenergy-01.png'
						alt='Sharenergy'
					/>
				</ContainerLogo>
				<h1>Entrar</h1>
				<Form onSubmit={handleLogin}>
					<Input label='CPF' value={cpf} onChange={(e) => setCPF(e.target.value)} />
					<Input
						label='SENHA'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<RememberMe>
						<input
							type='checkbox'
							checked={remember}
							onChange={() => setRemember(!remember)}
						/>
						<label>Lembrar-me</label>
					</RememberMe>

					<Button variant='contained' type='submit'>
						Entrar
					</Button>
				</Form>
			</FormContainer>
		</BackgroundI>
	);
};

export default Login;

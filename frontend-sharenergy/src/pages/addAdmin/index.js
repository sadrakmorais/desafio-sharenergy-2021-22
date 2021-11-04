import React from 'react';
import AddAdmin from '../../components/AddAdmin';
import { Container, AlertContainer } from './style';

const AddAdmins = () => {
	return (
		<Container>
			<AlertContainer>
				<h1>Adicione um novo Administrador</h1>
			</AlertContainer>
			<AddAdmin />
		</Container>
	);
};

export default AddAdmins;

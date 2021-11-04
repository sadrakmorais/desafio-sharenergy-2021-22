import React from 'react';

import { Container } from './styles';

const Input = ({ label, ...rest }) => {
	return (
		<Container>
			<label>{label}</label>
			<input {...rest} />

		</Container>
	);
};

export default Input;

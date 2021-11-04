import React from 'react';

import { Container } from './styles';

const Form = ({ children, ...rest }) => {
	return <Container {...rest}>{children}</Container>;
};

export default Form;
